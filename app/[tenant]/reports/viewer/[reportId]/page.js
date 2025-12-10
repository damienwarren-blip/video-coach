import { getReportById } from '@/lib/db'

export const runtime = 'nodejs'

export default async function ReportViewerPage(props) {
  const { reportId, tenant } = await props.params

  const numericReportId = parseInt(reportId)
  if (isNaN(numericReportId)) {
    return <div className="p-6 text-red-600">❌ Invalid report ID</div>
  }

  let data
  try {
    data = await getReportById(numericReportId)
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
          <h2 className="text-2xl font-light text-blue-900">{report.subtitle}</h2>
          <p className="text-sm text-gray-500 mt-2">
            Focus on Detractor Conversion & Service Recovery · Sample Size: {report.sample_size} Valid Responses
          </p>
        </div>

        {/* EXECUTIVE SUMMARY */}
        <h2 className="text-3xl font-bold mb-7 text-gray-900">Executive Summary: The Critical NPS Gap</h2>
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
          <span className="text-4xl font-black mb-3 block tracking-wide">{report.strategic_summary}</span>
          <div className="text-xl font-normal opacity-90">{report.strategic_subtext}</div>
        </div>

        {/* DRIVER TABLE */}
        <Caption>CX Driver Mitigation Plan</Caption>
        <h2 className="text-2xl font-semibold mt-5 mb-5 text-gray-900">Addressing Root Causes to Drive Detractor Conversion</h2>
        <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-50">
              <tr className="h-14">
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider rounded-tl-xl">Churn Driver Category</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Core Issue & Complaint Volume</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap w-24">Severity Rating</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Impact Statement (CX Pulse)</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap">Target Reduction</th>
                <th className="px-3 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider rounded-tr-xl whitespace-normal break-words max-w-xs">Strategic Action Link</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((d, idx) => {
  // Color class for the category name based on severity or position
  const colorMap = {
    critical: 'text-red-700',
    high: 'text-orange-700',
    medium: 'text-yellow-700',
    low: 'text-green-700',
  }
  const bgMap = {
    critical: 'hover:bg-red-50/50',
    high: 'hover:bg-orange-50/50',
    medium: 'hover:bg-yellow-50/50',
    low: 'hover:bg-green-50/50',
  }

  const textColor = colorMap[d.severity?.toLowerCase()] || 'text-gray-800'
  const bgClass = bgMap[d.severity?.toLowerCase()] || 'hover:bg-gray-50'

  const complaintText = d.complaint_percent
    ? `${d.complaint_percent}% of Detractors cite ${d.category_name.toLowerCase()}`
    : '—'

  const targetText = d.target_reduction_unit?.toLowerCase()?.includes('point')
    ? `${d.target_reduction} Pts NPS Lift`
    : `${d.target_reduction}${d.target_reduction_unit}`

  const actionsFormatted = (d.strategic_action_links || []).join(' / ')

  return (
    <tr key={d.id} className={bgClass}>
      <DataCell wrap={true} className={`font-extrabold ${textColor}`}>{d.category_name}</DataCell>
      <DataCell wrap={true} isHighlight={true}>{complaintText}</DataCell>
      <RiskCell level={d.severity} className="w-24">
        <RiskRatingBadge level={d.severity} />
      </RiskCell>
      <DataCell wrap={true}>{d.impact_statement}</DataCell>
      <DataCell isROI={true}>{targetText}</DataCell>
      <DataCell wrap={true} className="font-semibold text-blue-600">{actionsFormatted}</DataCell>
    </tr>
  )
})}

              <tr className="font-bold bg-gray-100/80 border-t-2 border-gray-400">
                <td colSpan="4" className="px-3 py-3 text-left text-base text-gray-700">
                  Total Addressable Churn Drivers
                </td>
                <DataCell isROI={true} className="text-base text-gray-500">
                  Estimated €{getMetric('addressable_revenue_protected_eur')} Revenue Protected
                </DataCell>
                <DataCell isHighlight={true} className="text-base text-gray-500">
                  Total Risk: €{getMetric('total_risk_eur')}
                </DataCell>
              </tr>
            </tbody>
          </table>
        </div>

       {/* Root Cause Analysis (NPS Distribution Style) */}
<Caption>CX Drivers and Root Cause</Caption>
<h2 className="text-2xl font-semibold mt-5 mb-5 text-gray-900">
  NPS Distribution and Detractor Complaint Drivers
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Top 3 Detractor Complaints */}
<div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-inner">
  <h3 className="text-xl font-bold mb-4 text-red-700 border-b pb-2">
    Top 3 Detractor Complaints (%)
  </h3>
  <ul className="list-none space-y-3">
    {drivers
      .sort((a, b) => b.complaint_percent - a.complaint_percent)
      .slice(0, 3)
      .map((d, idx) => {
        const colorMap = ['red', 'orange', 'yellow']
        const color = colorMap[idx] || 'gray'

        // Extract inner parentheses text from impact_statement (like "(flat tires, brake failures)")
        const match = d.impact_statement?.match(/\(([^)]+)\)/)
        const parenthetical = match ? ` (${match[1]})` : ''

        return (
          <li
            key={d.id}
            className="flex justify-between items-center text-lg border-b border-dashed pb-2"
          >
            <span className={`font-medium text-${color}-600`}>
              {idx + 1}. {d.category_name}
              {parenthetical}
            </span>
            <span className={`font-extrabold text-${color}-700 text-xl`}>
              {d.complaint_percent ?? '—'}%
            </span>
          </li>
        )
      })}
  </ul>
</div>


  {/* Crisis City Operations Alert */}
  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-inner">
    <h3 className="text-xl font-bold mb-4 text-blue-700 border-b pb-2">
      Crisis City Operations Alert
    </h3>
    <p className="text-gray-700 mb-4">
      Four cities—Kassel, Villingen, Fulda, and Sonthofen—have NPS scores
      ranging from <strong>-10 to -85</strong>, indicating systemic failure
      of E-Bike operations and policy adherence. These locations require
      immediate deployment of <strong>Action #5 (Crisis City Teams)</strong>.
    </p>
    <div className="flex flex-wrap gap-2 pt-2">
      {cities.map((city, index) => {
        // Choose shade based on NPS severity
        const severityClass =
          city.nps_score <= -70
            ? 'bg-red-500 text-white'
            : city.nps_score <= -50
            ? 'bg-red-400 text-red-800'
            : city.nps_score <= -30
            ? 'bg-red-300 text-red-800'
            : 'bg-red-200 text-red-800'
        return (
          <span
            key={city.city_name}
            className={`${severityClass} text-sm font-bold px-3 py-1 rounded-full shadow-sm`}
          >
            {city.city_name} ({city.nps_score})
          </span>
        )
      })}
    </div>
  </div>
</div>


        {/* STRATEGIC ACTIONS TABLE */}
        <Caption>The Five Strategic Actions</Caption>
        <h2 className="text-2xl font-semibold mt-5 mb-5 text-gray-900">Detailed Overview of Implementation Plan for Churn Reduction</h2>
        <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-blue-900 text-white">
              <tr className='h-14'>
                <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider rounded-tl-xl w-16">Action #</th>
                <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">Strategic Initiative</th>
                <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider">Description</th>
                <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-wider rounded-tr-xl">Target Metric</th>
              </tr>
            </thead>
            <tbody>
              {actions.map((action) => (
                <tr key={action.id} className="hover:bg-blue-50/50">
                  <DataCell className="font-bold text-xl text-blue-600 bg-white/50">{action.action_number}</DataCell>
                  <DataCell>{action.name}</DataCell>
                  <DataCell wrap={true}>{action.description}</DataCell>
                  <DataCell className="text-green-700 font-bold">{action.target_metric}</DataCell>
                </tr>
              ))}
            </tbody>
          </table>
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
                <div className="text-sm text-gray-700 whitespace-pre-wrap">{section.section_content}</div>
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

// 👇 Paste the helper components at the bottom of this file

function SummaryCard({ value, title, border, text }) {
  const borderColor = {
    red: 'border-red-600 text-red-700',
    blue: 'border-blue-600 text-blue-700',
    gray: 'border-gray-500 text-gray-800'
  }

  return (
    <div className={`p-6 bg-white border-b-4 rounded-xl shadow-lg ${borderColor[border]}`}>
      <div className={`text-7xl font-extrabold leading-none ${borderColor[border]}`}>{value}</div>
      <div className="text-xl font-semibold mt-2 text-gray-800">{title}</div>       
      <p className="text-sm mt-1 font-medium text-gray-500">{text}</p>
    </div>
  )
}

const RiskRatingBadge = ({ level }) => {
  let colorClass = 'bg-gray-400';
  let text = level;

  if (level === 'critical') {
      colorClass = 'bg-red-600';
      text = 'Critical';
  } else if (level === 'high') {
      colorClass = 'bg-orange-500';
      text = 'High';
  } else if (level === 'medium') {
      colorClass = 'bg-yellow-500';
      text = 'Medium';
  } else if (level === 'low') {
      colorClass = 'bg-green-600';
      text = 'Low';
  }

  return (
      <div className="flex items-center justify-start space-x-2 p-1 rounded-full bg-white/70 shadow-inner">
          <span className={`w-2.5 h-2.5 rounded-full ${colorClass} flex-shrink-0 shadow-lg`}></span>
          <span className="font-semibold text-xs tracking-widest uppercase text-gray-700">{text}</span>
      </div>
  );
};

const RiskCell = ({ children, level, className = '' }) => {
  let bgColor = 'bg-white';
  if (level === 'high' || level === 'critical') bgColor = 'bg-red-50';
  else if (level === 'medium') bgColor = 'bg-yellow-50';
  else if (level === 'low') bgColor = 'bg-green-50';

  return (
    <td className={`px-3 py-2.5 text-sm border-b border-gray-100 ${bgColor} ${className}`}>
      {children}
    </td>
  );
};

const DataCell = ({ children, isHighlight = false, isROI = false, wrap = false, className = '' }) => {
  let textColor = 'text-gray-900';
  if (isHighlight) textColor = 'text-red-700 font-bold';
  else if (isROI) textColor = 'text-blue-700 font-bold';

  const whitespaceClass = wrap ? 'whitespace-normal' : 'whitespace-nowrap';       

  return (
    <td className={`px-3 py-2.5 text-sm border-b border-gray-100 ${whitespaceClass} ${textColor} ${className}`}>
      {children}
    </td>
  );
};

const Caption = ({ children }) => (
  <div className="text-xs font-medium text-gray-500 uppercase tracking-widest mt-10 mb-3 border-b-2 border-orange-200 pb-1">
    {children}
  </div>
);
