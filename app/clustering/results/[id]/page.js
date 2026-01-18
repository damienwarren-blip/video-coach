// /app/clustering/results/[id]/page.js

import React from 'react'
import db from '@/lib/db'

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
        <p className="mt-2 font-semibold">Distribution:</p>
        <pre className="bg-white p-2 rounded text-sm overflow-auto">
          {JSON.stringify(value.distribution, null, 2)}
        </pre>
      </div>
    )
  }

  if (value.type === 'datetime') {
    return (
      <div key={key} className="border p-4 rounded bg-blue-50 mb-4">
        <h3 className="font-semibold">{key} (Date/Time)</h3>
        <p>Oldest: {value.distribution?.oldest}</p>
        <p>Newest: {value.distribution?.newest}</p>
        <p className="mt-2 font-semibold">By hour:</p>
        <pre className="bg-white p-2 rounded text-sm overflow-auto">
          {JSON.stringify(value.distribution?.byHour, null, 2)}
        </pre>
      </div>
    )
  }

  if (value.type === 'categorical' || value.type === 'categorical_summary') {
    return (
      <div key={key} className="border p-4 rounded bg-green-50 mb-4">
        <h3 className="font-semibold">{key} (Categorical)</h3>
        <p>Count: {value.count}</p>
        <p className="mt-2 font-semibold">Values:</p>
        <pre className="bg-white p-2 rounded text-sm overflow-auto">
          {JSON.stringify(value.values || value.distribution, null, 2)}
        </pre>
      </div>
    )
  }

  if (value.results && value.results[key]) {
    const analysis = value.results[key].analysis
    return (
      <div key={key} className="border p-4 rounded bg-purple-50 mb-4">
        <h3 className="font-semibold">{key} (Clustered Text)</h3>
        <p>Cluster Count: {analysis.clusters?.length}</p>
        <pre className="bg-white p-2 rounded text-sm overflow-auto">
          {JSON.stringify(analysis, null, 2)}
        </pre>
      </div>
    )
  }

  return (
    <div key={key} className="border p-4 rounded bg-gray-100 mb-4">
      <h3 className="font-semibold">{key}</h3>
      <pre className="bg-white p-2 rounded text-sm overflow-auto">
        {JSON.stringify(value, null, 2)}
      </pre>
    </div>
  )
}

export default async function ClusteringResultsPage({ params }) {
  const { id } = params

  try {
    const result = await db.query(
      `SELECT * FROM clustering_jobs WHERE id = $1`,
      [id]
    )

    if (result.rows.length === 0) {
      return (
        <div className="p-10 text-red-600 font-bold">
          Clustering job #{id} not found
        </div>
      )
    }

    const job = result.rows[0]
    const responseJson = job.response_json || {}

    return (
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Clustering Results — Job #{id}</h1>

        <div className="bg-white shadow p-4 rounded mb-6">
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Filename:</strong> {job.original_filename}</p>
          <p><strong>Uploaded At:</strong> {new Date(job.created_at).toLocaleString()}</p>
          <p><strong>Completed At:</strong> {job.completed_at ? new Date(job.completed_at).toLocaleString() : '—'}</p>
          <p><strong>do_gpt_summary:</strong> {String(job.do_gpt_summary)}</p>
          <p><strong>do_clustering:</strong> {String(job.do_clustering)}</p>
        </div>

        <div className="grid gap-6">
          {Object.entries(responseJson).map(([key, value]) =>
            renderSection(key, value)
          )}
        </div>
      </div>
    )
  } catch (err) {
    console.error('[CLUSTERING RESULTS PAGE ERROR]', err)

    return (
      <div className="p-8 text-red-600">
        <h1 className="text-2xl font-bold mb-4">Error loading clustering job</h1>
        <pre className="bg-red-100 p-4 rounded overflow-auto">
          {err.message}
        </pre>
      </div>
    )
  }
}
