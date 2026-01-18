// /app/clustering/results/[id]/page.js

import React from 'react'

async function fetchJobData(id) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

  try {
    const res = await fetch(`${baseUrl}/api/clustering/job/${id}`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`)
    }

    return await res.json()
  } catch (err) {
    console.error('[FetchJobData Error]', err)
    throw new Error(`Failed to load job ${id}: ${err.message}`)
  }
}

function renderSection(key, value) {
  if (!value) return null

  if (value.type === 'numeric_summary') {
    return (
      <div key={key} className="border p-4 rounded bg-gray-50 mb-4">
        <h3 className="font-semibold">{key}</h3>
        <p>Count: {value.count}</p>
        <p>Mean: {value.mean}</p>
        <p>Median: {value.median}</p>
        <p>Min: {value.min}</p>
        <p>Max: {value.max}</p>
        <pre className="bg-white p-2 rounded text-sm">{JSON.stringify(value.distribution, null, 2)}</pre>
      </div>
    )
  }

  if (value.type === 'datetime') {
    return (
      <div key={key} className="border p-4 rounded bg-blue-50 mb-4">
        <h3 className="font-semibold">{key} (Date/Time)</h3>
        <p>Oldest: {value.distribution?.oldest}</p>
        <p>Newest: {value.distribution?.newest}</p>
        <pre className="bg-white p-2 rounded text-sm">{JSON.stringify(value.distribution?.byHour, null, 2)}</pre>
      </div>
    )
  }

  if (value.type === 'categorical' || value.type === 'categorical_summary') {
    return (
      <div key={key} className="border p-4 rounded bg-green-50 mb-4">
        <h3 className="font-semibold">{key} (Categorical)</h3>
        <p>Count: {value.count}</p>
        <pre className="bg-white p-2 rounded text-sm">{JSON.stringify(value.values || value.distribution, null, 2)}</pre>
      </div>
    )
  }

  if (value.results && value.results[key]) {
    const analysis = value.results[key].analysis
    return (
      <div key={key} className="border p-4 rounded bg-purple-50 mb-4">
        <h3 className="font-semibold">{key} (Clustered Text)</h3>
        <p>Cluster Count: {analysis.clusters?.length}</p>
        <pre className="bg-white p-2 rounded text-sm">{JSON.stringify(analysis, null, 2)}</pre>
      </div>
    )
  }

  return (
    <div key={key} className="border p-4 rounded bg-gray-100 mb-4">
      <h3 className="font-semibold">{key}</h3>
      <pre className="bg-white p-2 rounded text-sm">{JSON.stringify(value, null, 2)}</pre>
    </div>
  )
}

export default async function ClusteringResultsPage({ params }) {
  const { id } = params

  try {
    const job = await fetchJobData(id)
    const responseJson = job.response_json || {}

    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Clustering Job #{id}</h1>

        <div className="bg-white shadow p-4 rounded mb-6">
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Filename:</strong> {job.original_filename}</p>
          <p><strong>Uploaded At:</strong> {new Date(job.created_at).toLocaleString()}</p>
          <p><strong>Completed At:</strong> {job.completed_at ? new Date(job.completed_at).toLocaleString() : '—'}</p>
          <p><strong>do_gpt_summary:</strong> {String(job.do_gpt_summary)}</p>
          <p><strong>do_clustering:</strong> {String(job.do_clustering)}</p>
        </div>

        <div className="grid gap-6">
          {Object.entries(responseJson).map(([key, value]) => renderSection(key, value))}
        </div>
      </div>
    )
  } catch (err) {
    return (
      <div className="p-8 text-red-600">
        <h1 className="text-2xl font-bold mb-4">Error loading clustering job</h1>
        <pre className="bg-red-100 p-4 rounded">{err.message}</pre>
      </div>
    )
  }
}
