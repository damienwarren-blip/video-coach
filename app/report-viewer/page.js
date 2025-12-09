// app/report-viewer/page.js
import { getReportById } from '@/lib/db'

export const runtime = 'nodejs'

export default async function ReportViewerPage() {
  const reportId = '4d5873b5-48da-421f-a716-48eb627a24aa' // UUID from your SQL seed

  let data
  try {
    data = await getReportById(reportId)
  } catch (err) {
    console.error('DB error:', err)
    return <div className="p-4 text-red-600">Failed to load report: {err.message}</div>
  }

  if (!data?.report) {
    return <div className="p-4 text-red-600">No report found.</div>
  }

  const { report, sections } = data
  const insights = JSON.parse(report.key_insights || '[]')

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{report.campaign_name}</h1>
      <p className="text-sm text-gray-500 mb-6">📅 Quarter: {report.quarter}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700">NPS Score</h2>
          <p className="text-2xl text-green-600 font-bold">{report.nps_score}</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700">Detractor %</h2>
          <p className="text-2xl text-red-600 font-bold">{report.detractor_pct}%</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700">Detractor Count</h2>
          <p className="text-2xl font-bold">{report.detractor_count}</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700">Sample Size</h2>
          <p className="text-2xl font-bold">{report.sample_size}</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2 text-gray-700">Top Insights</h2>
      <ul className="list-disc list-inside mb-8">
        {insights.map((item, idx) => (
          <li key={idx}>{item.title} — {item.percent}%</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2 text-gray-700">Report Sections</h2>
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.order_position} className="p-4 border rounded shadow bg-gray-50">
            <h3 className="text-md font-semibold mb-1">{section.section_type}</h3>
            <p className="whitespace-pre-wrap text-sm text-gray-800">{section.section_content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
