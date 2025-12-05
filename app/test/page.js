import React from 'react';

// Main App Component using Tailwind CSS for responsiveness and modern styling
export default function App() {
  // Utility function for table cells that need background colors
  const RiskCell = ({ children, level, className = '' }) => {
    let bgColor = 'bg-white';
    // Map Critical/High to 'high', Medium to 'medium' for color coding
    if (level === 'high' || level === 'critical') bgColor = 'bg-red-100/70';
    else if (level === 'medium') bgColor = 'bg-yellow-100/70';
    else if (level === 'low') bgColor = 'bg-green-100/70';

    return (
      // Reduced padding from px-4 py-4 to px-3 py-3
      <td className={`px-3 py-3 text-sm border-b border-gray-100 ${bgColor} ${className}`}>
        {children}
      </td>
    );
  };

  // UPDATED: Added 'wrap' prop. When true, 'whitespace-nowrap' is replaced with 'whitespace-normal'
  const DataCell = ({ children, isHighlight = false, isROI = false, wrap = false, className = '' }) => {
    let textColor = 'text-gray-900';
    if (isHighlight) textColor = 'text-red-700 font-bold';
    else if (isROI) textColor = 'text-green-600 font-bold';

    // Use whitespace-normal to force text wrapping, or whitespace-nowrap for fixed content (like numbers/ratings)
    const whitespaceClass = wrap ? 'whitespace-normal' : 'whitespace-nowrap';

    return (
      // Reduced padding from px-4 py-4 to px-3 py-3
      <td className={`px-3 py-3 text-sm border-b border-gray-100 ${whitespaceClass} ${textColor} ${className}`}>
        {children}
      </td>
    );
  };

  const Caption = ({ children }) => (
    <div className="text-xs font-medium text-gray-500 uppercase tracking-widest mt-12 mb-2">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen flex justify-center bg-gray-50 text-gray-900 font-inter">
      <div className="w-full max-w-7xl mx-4 my-8 md:mx-10 md:my-10 bg-white p-6 md:p-12 shadow-2xl rounded-2xl">
        {/* Header Section */}
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4 leading-tight">
          €4.7M<br />Total AI Exposure
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          CISO pulse survey · 200 employees · 50% response rate
        </p>

        {/* Training Impact Summary */}
        <h2 className="text-2xl font-semibold mt-10 mb-5 text-gray-900">Training Impact Summary</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse my-6 text-sm">
            <thead>
              <tr className='h-16'>
                {/* Reduced padding */}
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 rounded-tl-lg">Total Exposure</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Preventable Exposure</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 rounded-tr-lg">Residual Exposure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <DataCell isHighlight={true}>€4.7M</DataCell>
                <DataCell isROI={true}>€1.96M</DataCell>
                <DataCell isHighlight={true}>€2.74M</DataCell>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Critical Governance Gaps */}
        <Caption>Survey Findings</Caption>
        <h2 className="text-2xl font-semibold mt-5 mb-5 text-gray-900">Critical Governance Gaps</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse my-6 text-sm">
            <thead>
              <tr className='h-16'>
                {/* Reduced padding */}
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 rounded-tl-lg">Question</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Result</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Risk</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 rounded-tr-lg">Legislation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <DataCell>Who is responsible for AI?</DataCell>
                <DataCell isHighlight={true}>71% don't know</DataCell>
                <RiskCell level="high">No owner &rarr; slow decisions</RiskCell>
                <DataCell>EU AI Act Art. 10</DataCell>
              </tr>
              <tr>
                <DataCell>Do you understand Responsible AI?</DataCell>
                <DataCell isHighlight={true}>68% score &lt;40%</DataCell>
                <RiskCell level="high">Non-compliant use possible</RiskCell>
                <DataCell>EU AI Act Art. 9</DataCell>
              </tr>
              <tr>
                <DataCell>Would you take AI training voluntarily?</DataCell>
                <DataCell isHighlight={true}>61% YES</DataCell>
                <RiskCell level="medium">Strong mitigation opportunity</RiskCell>
                <DataCell>EU AI Act Art. 4</DataCell>
              </tr>
              <tr>
                <DataCell>Who do you contact on AI incident?</DataCell>
                <DataCell isHighlight={true}>74% no path</DataCell>
                <RiskCell level="high">Delayed reporting &rarr; amplified impact</RiskCell>
                <DataCell>NIS2 Art. 21</DataCell>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Training ROI */}
        <h2 className="text-2xl font-semibold mt-10 mb-5 text-gray-900">Training ROI</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse my-6 text-sm">
            <thead>
              <tr className='h-16'>
                {/* Reduced padding */}
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 rounded-tl-lg">Category</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Risk Area</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Area Pulse (from survey)</th>
                {/* Reduced width for Likelihood, Impact, and Rating cells */}
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 whitespace-nowrap w-14">Likelihood</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 whitespace-nowrap w-14">Impact</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 whitespace-nowrap w-14">Rating</th>
                {/* UPDATED: Reduced padding to px-2 for the Control header */}
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Control</th>
                {/* UPDATED: Shortened Header Text 1 (kept previous change) */}
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Training Addressable Exposure</th>
                {/* UPDATED: Shortened Header Text 2 (kept previous change) */}
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 rounded-tr-lg">Residual Exposure</th>
              </tr>
            </thead>
            <tbody>
              {/* Category Header Row 1: Data Risk */}
              <tr className="bg-gray-100/70 font-semibold border-b border-gray-200">
                <td colSpan="9" className="px-3 py-2 text-xs uppercase tracking-wider text-gray-700">Data Risk</td>
              </tr>
              {/* Data Risk Row 1 */}
              <tr>
                <DataCell className='text-gray-400'>-</DataCell>
                <DataCell wrap={true}>Unsafe prompts / data leakage</DataCell>
                <DataCell wrap={true}>68% unsure which data is safe</DataCell>
                {/* Reduced width for Likelihood, Impact, and Rating cells */}
                <DataCell className='w-14'>High</DataCell>
                <DataCell className='w-14'>High</DataCell>
                <RiskCell level="critical" className='w-14'>Critical</RiskCell>
                {/* UPDATED: Reduced padding to px-2 for this DataCell */}
                <DataCell wrap={true} className='px-2'>Awareness, Data Handling Playbooks</DataCell>
                <DataCell isROI={true}>€400k</DataCell>
                <DataCell isHighlight={true}>€400k</DataCell>
              </tr>
              {/* Data Risk Row 2 */}
              <tr>
                <DataCell className='text-gray-400'>-</DataCell>
                <DataCell wrap={true}>Data quality / incomplete inputs</DataCell>
                <DataCell wrap={true}>55% unsure about correct data usage</DataCell>
                {/* Reduced width for Likelihood, Impact, and Rating cells */}
                <DataCell className='w-14'>Medium</DataCell>
                <DataCell className='w-14'>High</DataCell>
                <RiskCell level="high" className='w-14'>High</RiskCell>
                {/* UPDATED: Reduced padding to px-2 for this DataCell */}
                <DataCell wrap={true} className='px-2'>Validation & Review</DataCell>
                <DataCell isROI={true}>€150k</DataCell>
                <DataCell isHighlight={true}>€100k</DataCell>
              </tr>
              
              {/* Category Header Row 2: Model Risk */}
              <tr className="bg-gray-100/70 font-semibold border-b border-gray-200">
                <td colSpan="9" className="px-3 py-2 text-xs uppercase tracking-wider text-gray-700">Model Risk</td>
              </tr>
              {/* Model Risk Row 1 */}
              <tr>
                <DataCell className='text-gray-400'>-</DataCell>
                <DataCell wrap={true}>Misuse of AI outputs / over-reliance</DataCell>
                <DataCell wrap={true}>62% overestimate AI accuracy; 48% unsure when to escalate</DataCell>
                {/* Reduced width for Likelihood, Impact, and Rating cells */}
                <DataCell className='w-14'>Medium</DataCell>
                <DataCell className='w-14'>High</DataCell>
                <RiskCell level="high" className='w-14'>High</RiskCell>
                {/* UPDATED: Reduced padding to px-2 for this DataCell */}
                <DataCell wrap={true} className='px-2'>Model Guidelines & Monitoring</DataCell>
                <DataCell isROI={true}>€300k</DataCell>
                <DataCell isHighlight={true}>€200k</DataCell>
              </tr>

              {/* Category Header Row 3: Compliance / Regulatory */}
              <tr className="bg-gray-100/70 font-semibold border-b border-gray-200">
                <td colSpan="9" className="px-3 py-2 text-xs uppercase tracking-wider text-gray-700">Compliance / Regulatory</td>
              </tr>
              {/* Compliance / Regulatory Row 1 */}
              <tr>
                <DataCell className='text-gray-400'>-</DataCell>
                <DataCell wrap={true}>Governance gaps / unclear ownership</DataCell>
                <DataCell wrap={true}>74% don’t know who to contact for AI incidents</DataCell>
                {/* Reduced width for Likelihood, Impact, and Rating cells */}
                <DataCell className='w-14'>High</DataCell>
                <DataCell className='w-14'>High</DataCell>
                <RiskCell level="high" className='w-14'>High</RiskCell>
                {/* UPDATED: Reduced padding to px-2 for this DataCell */}
                <DataCell wrap={true} className='px-2'>RACI & Escalation</DataCell>
                <DataCell isROI={true}>€180k</DataCell>
                <DataCell isHighlight={true}>€120k</DataCell>
              </tr>
              {/* Compliance / Regulatory Row 2 */}
              <tr>
                <DataCell className='text-gray-400'>-</DataCell>
                <DataCell wrap={true}>Regulatory non‑conformance / fines</DataCell>
                <DataCell wrap={true}>51% unaware of AI policy / rules → €1.5M potential fines, 50% mitigable</DataCell>
                {/* Reduced width for Likelihood, Impact, and Rating cells */}
                <DataCell className='w-14'>Medium</DataCell>
                <DataCell className='w-14'>High</DataCell>
                <RiskCell level="high" className='w-14'>High</RiskCell>
                {/* UPDATED: Reduced padding to px-2 for this DataCell */}
                <DataCell wrap={true} className='px-2'>Policies, Evidence & Reporting</DataCell>
                <DataCell isROI={true}>€750k</DataCell>
                <DataCell isHighlight={true}>€750k</DataCell>
              </tr>

              {/* Category Header Row 4: Operational / Process */}
              <tr className="bg-gray-100/70 font-semibold border-b border-gray-200">
                <td colSpan="9" className="px-3 py-2 text-xs uppercase tracking-wider text-gray-700">Operational / Process</td>
              </tr>
              {/* Operational / Process Row 1 */}
              <tr>
                <DataCell className='text-gray-400'>-</DataCell>
                <DataCell wrap={true}>Productivity / efficiency</DataCell>
                <DataCell wrap={true}>45% say AI tools could save 1–2 hrs/day</DataCell>
                {/* Reduced width for Likelihood, Impact, and Rating cells */}
                <DataCell className='w-14'>Medium</DataCell>
                <DataCell className='w-14'>Low</DataCell>
                <RiskCell level="medium" className='w-14'>Medium</RiskCell>
                {/* UPDATED: Reduced padding to px-2 for this DataCell */}
                <DataCell wrap={true} className='px-2'>Role-based Guardrails & Tool Guidance</DataCell>
                <DataCell isROI={true}>€80k</DataCell>
                <DataCell isHighlight={true}>€320k</DataCell>
              </tr>

              {/* Category Header Row 5: People / Behavioural */}
              <tr className="bg-gray-100/70 font-semibold border-b border-gray-200">
                <td colSpan="9" className="px-3 py-2 text-xs uppercase tracking-wider text-gray-700">People / Behavioural</td>
              </tr>
              {/* People / Behavioural Row 1 */}
              <tr>
                <DataCell className='text-gray-400'>-</DataCell>
                <DataCell wrap={true}>Voluntary training uptake</DataCell>
                <DataCell wrap={true}>61% willing to train if available → target 80% completion</DataCell>
                {/* Reduced width for Likelihood, Impact, and Rating cells */}
                <DataCell className='w-14'>Low</DataCell>
                <DataCell className='w-14'>Medium</DataCell>
                <RiskCell level="medium" className='w-14'>Medium</RiskCell>
                {/* UPDATED: Reduced padding to px-2 for this DataCell */}
                <DataCell wrap={true} className='px-2'>Curriculum & Modules</DataCell>
                <DataCell isROI={true}>€600k</DataCell>
                <DataCell isHighlight={true}>€600k</DataCell>
              </tr>
              {/* People / Behavioural Row 2 */}
              <tr>
                <DataCell className='text-gray-400'>-</DataCell>
                <DataCell wrap={true}>Competitive capability / skills gap</DataCell>
                <DataCell wrap={true}>70% feel peers are more skilled with AI</DataCell>
                {/* Reduced width for Likelihood, Impact, and Rating cells */}
                <DataCell className='w-14'>Medium</DataCell>
                <DataCell className='w-14'>Medium</DataCell>
                <RiskCell level="medium" className='w-14'>Medium</RiskCell>
                {/* UPDATED: Reduced padding to px-2 for this DataCell */}
                <DataCell wrap={true} className='px-2'>Skills Programmes</DataCell>
                <DataCell isROI={true}>€350k</DataCell>
                <DataCell isHighlight={true}>€150k</DataCell>
              </tr>
              
              {/* Total Row */}
              <tr className="font-bold bg-gray-50">
                <td colSpan="2" className="px-3 py-3 text-left text-base border-b border-gray-100">Total / Adjusted</td>
                <DataCell className="text-sm text-gray-400">-</DataCell>
                {/* Reduced width for Likelihood, Impact, and Rating cells */}
                <DataCell className="text-sm text-gray-400 w-14">-</DataCell>
                <DataCell className="text-sm text-gray-400 w-14">-</DataCell>
                <DataCell className="text-sm text-gray-400 w-14">-</DataCell>
                {/* UPDATED: Reduced padding to px-2 for this DataCell */}
                <DataCell className="text-sm px-2">Training + governance controls</DataCell>
                {/* UPDATED: Shortened content in the Total row */}
                <DataCell isROI={true} className="text-base">€1.96M (Training)</DataCell>
                <DataCell isHighlight={true} className="text-base">€2.74M (Residual)</DataCell>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Callout */}
        <div className="bg-green-50 border border-green-300 rounded-xl p-8 text-center my-12 text-green-700">
          <span className="text-3xl font-extrabold text-green-900 mb-2 block">
            €135k targeted training investment
          </span>
          <div className="text-xl">
            Addresses €1.96M of behavior-driven AI exposure and converts it from
            &ldquo;unmanaged&rdquo; to &ldquo;managed and evidenced&rdquo; risk, with documented coverage
            for CRO, CISO, and regulators.
          </div>
        </div>

        {/* Top Voice/Text Insights */}
        <Caption>Insights for Training</Caption>
        <h2 className="text-2xl font-semibold mt-5 mb-5 text-gray-900">Top Voice/Text Insights</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse my-6 text-sm">
            <thead>
              <tr className='h-16'>
                {/* Reduced padding */}
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 rounded-tl-lg">Question</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Top Insight</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 rounded-tr-lg">%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <DataCell>Responsible AI understanding</DataCell>
                <RiskCell level="high">Confusion about AI bias, GDPR, and compliance</RiskCell>
                <DataCell>65%</DataCell>
              </tr>
              <tr>
                <DataCell>Training willingness</DataCell>
                <RiskCell level="low">Prefer short, role-aligned modules</RiskCell>
                <DataCell>61%</DataCell>
              </tr>
              <tr>
                <DataCell>AI escalation path</DataCell>
                <RiskCell level="high">Most unsure who to ask; default to peers</RiskCell>
                <DataCell>74%</DataCell>
              </tr>
              <tr>
                <DataCell>Incident reporting</DataCell>
                <RiskCell level="medium">Fear of blame &rarr; prefer anonymous routes</RiskCell>
                <DataCell>42%</DataCell>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Patterns Identified */}
        <Caption>Internal Improvements / Organizational Changes</Caption>
        <h2 className="text-2xl font-semibold mt-5 mb-5 text-gray-900">Patterns Identified</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse my-6 text-sm">
            <thead>
              <tr className='h-16'>
                {/* Reduced padding */}
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 rounded-tl-lg">Area</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Theme</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">%</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 rounded-tr-lg">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <DataCell>Efficiency gains</DataCell>
                <RiskCell level="low">Automate compliance, fraud detection & manual reporting</RiskCell>
                <DataCell>55%</DataCell>
                <DataCell>Productivity</DataCell>
              </tr>
              <tr>
                <DataCell>Major concerns</DataCell>
                <RiskCell level="high">Data leakage, undefined ownership & regulatory fines</RiskCell>
                <DataCell>72%</DataCell>
                <DataCell>Governance</DataCell>
              </tr>
              <tr>
                <DataCell>Responsible AI understanding</DataCell>
                <RiskCell level="high">Inconsistent knowledge across teams</RiskCell>
                <DataCell>68%</DataCell>
                <DataCell>Training</DataCell>
              </tr>
              <tr>
                <DataCell>Training access</DataCell>
                <RiskCell level="medium">Some teams lack portal access</RiskCell>
                <DataCell>25%</DataCell>
                <DataCell>Tools</DataCell>
              </tr>
              <tr>
                <DataCell>Escalation path</DataCell>
                <RiskCell level="high">No formal contact or owner</RiskCell>
                <DataCell>71%</DataCell>
                <DataCell>Governance</DataCell>
              </tr>
              <tr>
                <DataCell>Comms</DataCell>
                <RiskCell level="medium">Process unclear &rarr; inconsistent adoption</RiskCell>
                <DataCell>60%</DataCell>
                <DataCell>Communication</DataCell>
              </tr>
              <tr>
                <DataCell>Shadow AI</DataCell>
                <RiskCell level="high">Unreported experiments detected</RiskCell>
                <DataCell>38%</DataCell>
                <DataCell>Governance</DataCell>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-20 text-xs text-gray-500 text-center border-t border-gray-200 pt-6 tracking-wider">
          Quickchat.space – Conversations @ scale
        </div>
      </div>
    </div>
  );
}