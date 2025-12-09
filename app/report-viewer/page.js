// app/report-viewer/page.js
import { getReportById } from '@/lib/db'

export const runtime = 'nodejs'

export default async function ReportViewerPage() {
  const reportId = '4d5873b5-48da-421f-a716-48eb627a24aa'

  let data
  try {
    data = await getReportById(reportId)
  } catch (err) {
    console.error('DB error:', err)
    return (
      <div className="p-4 text-red-600">
        ❌ Failed to load report: {err.message}
      </div>
    )
  }

  if (!data?.report) {
    return (
      <div className="p-4 text-red-600">
        ❌ No report found for ID: {reportId}
      </div>
    )
  }

  const { report, sections } = data
  const insights = report.key_insights || []

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      {/* Header */}
      <h1 className="text-4xl font-bold text-red-800 mb-2">
        {report.campaign_name}
      </h1>
      <h2 className="text-lg text-blue-900 mb-2">
        Q{report.quarter} E-Bike Quality and Service Recovery
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Focus on Detractor Conversion & Service Recovery · Sample Size: {report.sample_size} Valid Responses
      </p>

      {/* Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-4 border rounded shadow bg-white">
          <h2 className="text-lg font-semibold text-gray-700">NPS Score</h2>
          <p className="text-3xl text-green-600 font-bold">{report.nps_score}</p>
        </div>
        <div className="p-4 border rounded shadow bg-white">
          <h2 className="text-lg font-semibold text-gray-700">Detractor %</h2>
          <p className="text-3xl text-red-600 font-bold">{report.detractor_pct}%</p>
        </div>
        <div className="p-4 border rounded shadow bg-white">
          <h2 className="text-lg font-semibold text-gray-700">Detractor Count</h2>
          <p className="text-3xl font-bold">{report.detractor_count}</p>
        </div>
        <div className="p-4 border rounded shadow bg-white">
          <h2 className="text-lg font-semibold text-gray-700">Sample Size</h2>
          <p className="text-3xl font-bold">{report.sample_size}</p>
        </div>
      </div>

      {/* Key Insights */}
      {insights.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Top Insights</h2>
          <ul className="space-y-2">
            {insights.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between p-3 border rounded shadow-sm bg-gray-50">
                <span className="font-medium text-gray-800">{item.title}</span>
                <span className="font-bold text-red-600">{item.percent}%</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Report Sections */}
      {sections.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Report Sections</h2>
          <ul className="space-y-4">
            {sections.map((section) => (
              <li
                key={section.order_position}
                className="p-4 border rounded shadow bg-gray-50"
              >
                <h3 className="text-md font-semibold mb-1 capitalize">
                  {section.section_type.replace(/_/g, ' ')}
                </h3>
                <p className="whitespace-pre-wrap text-sm text-gray-800">
                  {section.section_content}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
