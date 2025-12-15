// /app/debug/clustering/[id]/page.js

import db from '@/lib/db'

export default async function ClusteringDebugPage({ params }) {
  const { id } = params

  const result = await db.query(
    `SELECT * FROM clustering_jobs WHERE id = $1`,
    [id]
  )

  if (result.rows.length === 0) {
    return <div className="p-10 text-red-600 font-bold">Job not found</div>
  }

  const job = result.rows[0]

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Clustering Job Debug</h1>

      <div className="text-sm text-gray-600">
        <strong>Job ID:</strong> {job.job_id}<br />
        <strong>Status:</strong> {job.status}<br />
        <strong>Original Filename:</strong> {job.original_filename}<br />
        <strong>Uploaded At:</strong> {new Date(job.uploaded_at).toLocaleString()}<br />
        <strong>Completed At:</strong> {job.completed_at ? new Date(job.completed_at).toLocaleString() : '—'}<br />
        <strong>Error Message:</strong> {job.error_message || '—'}<br />
        <strong>do_gpt_summary:</strong> {String(job.do_gpt_summary)}<br />
        <strong>do_clustering:</strong> {String(job.do_clustering)}<br />
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Response JSON</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-xs text-gray-800">
          {JSON.stringify(job.response_json, null, 2)}
        </pre>
      </div>
    </div>
  )
}
