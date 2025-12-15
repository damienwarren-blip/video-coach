import FormData from 'form-data'
import fetch from 'node-fetch'
import fs from 'fs'
import { extractHostFromDatabaseUrl } from './utils'


// const CLUSTERING_API_URL = 'http://188.141.114.135:60123/run'
// const CLUSTERING_API_URL = `http://${EXTRACTED_IP}:60123/run`

export async function runClusteringJob({
  filePath,
  doGptSummary = true,
  doClustering = true,
  authToken,
}) {
  const dbUrl = process.env.DATABASE_URL
  const host = extractHostFromDatabaseUrl(dbUrl) || 'localhost'
  const CLUSTERING_API_URL = `http://${host}:60123/run`
  const form = new FormData()
  form.append('file', fs.createReadStream(filePath))
  form.append('do_gpt_summary', String(doGptSummary))
  form.append('do_clustering', String(doClustering))

  const response = await fetch(CLUSTERING_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      ...form.getHeaders(),
    },
    body: form,
  })

  const text = await response.text()

  if (!response.ok) {
    throw new Error(`Clustering API failed (${response.status}): ${text}`)
  }

  return JSON.parse(text)
}
