import db from '@/lib/db'

export async function GET(req, { params }) {
  const { id } = params

  try {
    const jobRes = await db.query(
      `SELECT * FROM clustering_jobs WHERE id = $1`,
      [id]
    )

    if (jobRes.rows.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Job not found' }),
        { status: 404 }
      )
    }

    return new Response(
      JSON.stringify(jobRes.rows[0], null, 2),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (err) {
    console.error('[DEBUG FETCH ERROR]', err)
    return new Response(
      JSON.stringify({ error: 'Failed to fetch job data' }),
      { status: 500 }
    )
  }
}
