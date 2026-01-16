import db from '@/lib/db'
import { runClusteringJob } from '@/services/ai-processing/clusteringClient'
import { routeClusteringStrategy } from '@/services/ai-processing/columnRouter'
import { writeFile } from 'fs/promises'
import path from 'path'
import { nanoid } from 'nanoid'

export async function POST(req) {
  try {
    const formData = await req.formData()

    const file = formData.get('file')
    const doGptSummary = formData.get('do_gpt_summary') === 'true'
    const doClustering = formData.get('do_clustering') === 'true'

    if (!file) {
      return new Response('Missing file', { status: 400 })
    }

    // --------------------------------------------------
    // 1. STORE FILE TEMPORARILY
    // --------------------------------------------------
    const buffer = Buffer.from(await file.arrayBuffer())
    const jobId = nanoid()
    const filePath = path.join('/tmp', `${jobId}-${file.name}`)

    await writeFile(filePath, buffer)

    // --------------------------------------------------
    // 2. CREATE JOB RECORD
    // --------------------------------------------------
    const jobRes = await db.query(
      `
      INSERT INTO clustering_jobs (
        job_id,
        status,
        original_filename,
        do_gpt_summary,
        do_clustering,
        request_headers
      )
      VALUES ($1, 'running', $2, $3, $4, $5)
      RETURNING id
      `,
      [
        jobId,
        file.name,
        doGptSummary,
        doClustering,
        Object.fromEntries(req.headers),
      ]
    )

    const clusteringJobId = jobRes.rows[0].id

    // --------------------------------------------------
    // 3. PARSE COLUMN CONFIG (REQUIRED BY API)
    // --------------------------------------------------
    const columnConfigRaw = formData.get('column_config')
    let columnConfig
    try {
      columnConfig = JSON.parse(columnConfigRaw)
    } catch (err) {
      return new Response('Invalid or missing column_config JSON', { status: 400 })
    }

    // --------------------------------------------------
    // 4. ROUTE BASED ON COLUMN TYPES (Clustering or Stats)
    // --------------------------------------------------
    let apiResponse
    try {
      apiResponse = await routeClusteringStrategy({
        filePath,
        doGptSummary,
        doClustering,
        columnConfig,
        authToken: "uVdZ8HPvoXc77A26IzuNWFzIywkwaJj3GV-tsJ9LCttH-LZjsVoeGxG-Y7YZ3sJ5z17wJH98SSWs0_LQ6hXfusLl4yQntNIAKFa6KCYmQE4M2TRg0tyIf_VSuM8O3KtcEjJb7JZYUUmyefr8Gz8O7h9p6hdt7b5oJ66r-MYj3jo",
      })
    } catch (err) {
        // Update job status to 'failed'
      await db.query(
        `
        UPDATE clustering_jobs
        SET
          status = 'failed',
          error_message = $2,
          completed_at = NOW()
        WHERE id = $1
        `,
        [clusteringJobId, err.message]
      )

      throw err
    }

    // --------------------------------------------------
    // 4. STORE RESPONSE + MARK COMPLETED
    // --------------------------------------------------
    await db.query(
      `
      UPDATE clustering_jobs
      SET
        status = 'completed',
        response_json = $2,
        completed_at = NOW()
      WHERE id = $1
      `,
      [clusteringJobId, apiResponse]
    )

    return new Response(
      JSON.stringify({
        success: true,
        clustering_job_id: clusteringJobId,
        job_id: jobId,
      }),
      { status: 200 }
    )

  } catch (err) {
    console.error('[CLUSTERING RUN ERROR]', err)
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    )
  }
}
