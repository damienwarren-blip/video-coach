import { getReportById } from '@/lib/db'

export const runtime = 'nodejs'

export default async function ChurnSamplePage() {
  const reportId = 1

  let data
  try {
    data = await getReportById(reportId)
  } catch (err) {
    console.error('DB error:', err)
    return <div className="p-6 text-red-600">❌ DB Error: {err.message}</div>
  }

  if (!data?.report) {
    return <div className="p-6 text-red-600">❌ Report not found.</div>
  }

  const { report, metrics, drivers, cities, actions, sections = [] } = data

  const getMetric = (key) =>
    metrics.find((m) => m.metric_key === key)?.metric_value ?? '—'

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 text-gray-900 font-inter p-4 md:p-8">
      <div className="w-full max-w-7xl bg-white p-8 md:p-14 shadow-2xl rounded-3xl border-t-8 border-red-600">
        {/* HEADER */}
        <div className="mb-8 pb-5 border-b border-gray-200">
          <h1 className="text-6xl md:text-7xl font-extrabold text-red-700 mb-2">
            {report.title}
          </h1>
          <h2 className="text-2xl font-light text-blue-900">
            {report.subtitle}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Focus on Detractor Conversion & Service Recovery · Sample Size: {report.sample_size} Valid Responses
          </p>
        </div>

        {/* EXECUTIVE SUMMARY */}
        <h2 className="text-3xl font-bold mb-7 text-gray-900">
          Executive Summary: The Critical NPS Gap
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <SummaryCard
            value={getMetric('current_nps')}
            title="Current NPS Score"
            border="red"
            text="Critical Alert: Severe product inconsistency and brand risk."
          />
          <SummaryCard
            value={getMetric('benchmark_nps')}
            title="Industry Benchmark Target"
            border="blue"
            text="The gap to close for sustainable, healthy growth."
          />
          <SummaryCard
            value={getMetric('active_detractors_pct') + '%'}
            title="Active Detractors"
            border="gray"
            text={`${getMetric('active_detractors_count')} users actively damaging brand and at risk of churn.`}
          />
        </div>

        {/* STRATEGIC PRIORITY BANNER */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-xl p-7 text-center my-10 text-white shadow-2xl">
          <span className="text-4xl font-black mb-3 block tracking-wide">
            {report.strategic_summary}
          </span>
          <div className="text-xl font-normal opacity-90">
            {report.strategic_subtext}
          </div>
        </div>

        {/* DRIVER CATEGORIES */}
        <h2 className="text-2xl font-bold mt-16 mb-4">CX Driver Mitigation Plan</h2>
        <table className="w-full text-sm mb-10">
          <thead>
            <tr className="text-left border-b border-gray-300">
              <th className="py-2">Churn Driver Category</th>
              <th>Complaint %</th>
              <th>Severity</th>
              <th>Impact Statement</th>
              <th>Target Reduction</th>
              <th>Strategic Action Link</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((d) => (
              <tr key={d.id} className="border-b border-gray-200">
                <td className="py-2 font-medium">{d.category_name}</td>
                <td>{d.complaint_percent ?? '—'}%</td>
                <td>{d.severity}</td>
                <td>{d.impact_statement}</td>
                <td>{d.target_reduction}{d.target_reduction_unit}</td>
                <td>{(d.strategic_action_links || []).join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* CRISIS CITIES */}
        <h2 className="text-2xl font-bold mt-16 mb-4">Crisis City Operations Alert</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {cities.map((city) => (
            <div key={city.city_name} className="p-4 bg-red-100 border-l-4 border-red-600 shadow rounded">
              <div className="text-xl font-bold text-red-700">{city.city_name}</div>
              <div className="text-lg text-gray-800">NPS: {city.nps_score}</div>
            </div>
          ))}
        </div>

        {/* STRATEGIC ACTIONS */}
        <h2 className="text-2xl font-bold mt-16 mb-4">The Five Strategic Actions</h2>
        <div className="space-y-6">
          {actions.map((action) => (
            <div key={action.id} className="p-5 border-l-4 border-blue-600 bg-blue-50 shadow rounded">
              <div className="text-lg font-bold text-blue-700">
                Action #{action.action_number}: {action.name}
              </div>
              <div className="text-sm text-gray-800 mt-1">{action.description}</div>
              <div className="text-xs text-blue-600 mt-1 italic">🎯 {action.target_metric}</div>
            </div>
          ))}
        </div>

        {/* OPTIONAL SECTIONS */}
        {sections.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mt-16 mb-4">Additional Report Sections</h2>
            {sections.map((section) => (
              <div key={section.order_position} className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 capitalize">
                  {section.section_type.replace(/_/g, ' ')}
                </h3>
                <div className="text-sm text-gray-700 whitespace-pre-wrap">
                  {section.section_content}
                </div>
              </div>
            ))}
          </>
        )}

        {/* FOOTER */}
        <div className="mt-16 text-xs text-gray-500 text-center border-t border-gray-200 pt-6 tracking-wider">
          {report.company_name} – Mobility @ Scale · Confidential Strategy Document
        </div>
      </div>
    </div>
  )
}

// Reusable summary card component
function SummaryCard({ value, title, border, text }) {
  const borderColor = {
    red: 'border-red-600 text-red-700',
    blue: 'border-blue-600 text-blue-700',
    gray: 'border-gray-500 text-gray-800',
  }

  return (
    <div className={`p-6 bg-white border-b-4 rounded-xl shadow-lg ${borderColor[border]}`}>
      <div className={`text-7xl font-extrabold leading-none ${borderColor[border]}`}>
        {value}
      </div>
      <div className="text-xl font-semibold mt-2 text-gray-800">{title}</div>
      <p className="text-sm mt-1 font-medium text-gray-500">{text}</p>
    </div>
  )
}
