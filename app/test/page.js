'use client';

export default function AIGovernanceReport() {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '11pt',
      color: '#101828',
      background: '#f8fafc',
      margin: 0,
      lineHeight: 1.4,
    },
    page: {
      width: '1100px',
      margin: '40px auto',
      background: '#ffffff',
      padding: '60px 70px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    },
    h1: {
      fontSize: '48pt',
      color: '#101828',
      margin: '0 0 20px',
      lineHeight: 1,
      fontWeight: 300,
      letterSpacing: '-0.02em',
    },
    subtitle: {
      fontSize: '16pt',
      color: '#475467',
      margin: '0 0 40px',
      fontWeight: 400,
    },
    h2: {
      fontSize: '18pt',
      color: '#101828',
      margin: '40px 0 20px',
      fontWeight: 500,
      letterSpacing: '0.01em',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '30px 0',
      fontSize: '11pt',
    },
    th: {
      background: '#f8fafc',
      color: '#344054',
      padding: '16px 18px',
      textAlign: 'left',
      fontWeight: 500,
      borderBottom: '2px solid #e4e7ec',
      letterSpacing: '0.01em',
    },
    td: {
      padding: '16px 18px',
      borderBottom: '1px solid #f1f5f9',
    },
    highlight: {
      color: '#b91c1c',
      fontWeight: 600,
    },
    roi: {
      color: '#059669',
      fontWeight: 600,
    },
    callout: {
      background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
      border: '1px solid #34d399',
      borderRadius: '12px',
      padding: '40px',
      textAlign: 'center',
      margin: '60px 0',
      fontSize: '18pt',
      color: '#047857',
    },
    calloutStrong: {
      color: '#065f46',
      fontSize: '24pt',
      fontWeight: 'bold',
      display: 'block',
      marginBottom: '10px',
    },
    caps: {
      fontSize: '10pt',
      fontWeight: 500,
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginBottom: '8px',
    },
    footer: {
      marginTop: '100px',
      fontSize: '10pt',
      color: '#6b7280',
      textAlign: 'center',
      borderTop: '1px solid #e5e7eb',
      paddingTop: '20px',
      letterSpacing: '0.025em',
    },
    highRisk: {
      backgroundColor: '#fee2e2',
    },
    mediumRisk: {
      backgroundColor: '#fef9c3',
    },
    lowRisk: {
      backgroundColor: '#d1fae5',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.page}>
        
        <h1 style={styles.h1}>€4.7M<br />Total AI Exposure</h1>
        <p style={styles.subtitle}>CISO pulse survey · 200 employees · 50% response rate</p>

        <h2 style={styles.h2}>Training Impact</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Total Exposure</th>
              <th style={styles.th}>Mitigated by Training</th>
              <th style={styles.th}>Residual Exposure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{...styles.td, ...styles.highlight}}>€4.7M</td>
              <td style={{...styles.td, ...styles.roi}}>€1.96M</td>
              <td style={{...styles.td, ...styles.highlight}}>€2.74M</td>
            </tr>
          </tbody>
        </table>

        <div style={styles.caps}>Survey Findings</div>
        <h2 style={styles.h2}>Critical Governance Gaps</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Question</th>
              <th style={styles.th}>Result</th>
              <th style={styles.th}>Risk</th>
              <th style={styles.th}>Legislation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Who is responsible for AI?</td>
              <td style={{...styles.td, ...styles.highlight, fontSize: '11pt'}}>71% don't know</td>
              <td style={{...styles.td, ...styles.highRisk}}>No owner → slow decisions</td>
              <td style={styles.td}>EU AI Act Art. 10</td>
            </tr>
            <tr>
              <td style={styles.td}>Do you understand Responsible AI?</td>
              <td style={{...styles.td, ...styles.highlight, fontSize: '11pt'}}>68% score &lt;40%</td>
              <td style={{...styles.td, ...styles.highRisk}}>Non-compliant use possible</td>
              <td style={styles.td}>EU AI Act Art. 9</td>
            </tr>
            <tr>
              <td style={styles.td}>Would you take AI training voluntarily?</td>
              <td style={{...styles.td, ...styles.highlight, fontSize: '11pt'}}>61% YES</td>
              <td style={{...styles.td, ...styles.mediumRisk}}>Strong mitigation opportunity</td>
              <td style={styles.td}>EU AI Act Art. 4</td>
            </tr>
            <tr>
              <td style={styles.td}>Who do you contact on AI incident?</td>
              <td style={{...styles.td, ...styles.highlight, fontSize: '11pt'}}>74% no path</td>
              <td style={{...styles.td, ...styles.highRisk}}>Delayed reporting → amplified impact</td>
              <td style={styles.td}>NIS2 Art. 21</td>
            </tr>
          </tbody>
        </table>

        <div style={styles.caps}>Economic Case</div>
        <h2 style={styles.h2}>Training ROI Analysis</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Action</th>
              <th style={styles.th}>Assumption / Score</th>
              <th style={styles.th}>Cost of Inaction</th>
              <th style={styles.th}>Mitigated by Training</th>
              <th style={styles.th}>Adjusted ROI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Quantify risk</td>
              <td style={styles.td}>AI incident (~€800k) → 50% avoidable</td>
              <td style={{...styles.td, ...styles.highlight}}>€800k</td>
              <td style={{...styles.td, ...styles.highlight}}>€400k</td>
              <td style={{...styles.td, ...styles.roi}}>296%</td>
            </tr>
            <tr>
              <td style={styles.td}>Voluntary demand</td>
              <td style={styles.td}>61% want training → 80% completion</td>
              <td style={{...styles.td, ...styles.highlight}}>€1.2M</td>
              <td style={{...styles.td, ...styles.highlight}}>€600k</td>
              <td style={{...styles.td, ...styles.roi}}>444%</td>
            </tr>
            <tr>
              <td style={styles.td}>Governance gaps</td>
              <td style={styles.td}>74% no escalation path → 60% improvement</td>
              <td style={{...styles.td, ...styles.highlight}}>€300k</td>
              <td style={{...styles.td, ...styles.highlight}}>€180k</td>
              <td style={{...styles.td, ...styles.roi}}>133%</td>
            </tr>
            <tr>
              <td style={styles.td}>Productivity gains</td>
              <td style={styles.td}>Avg. 20% lift</td>
              <td style={{...styles.td, ...styles.highlight}}>€400k</td>
              <td style={{...styles.td, ...styles.highlight}}>€80k</td>
              <td style={{...styles.td, ...styles.roi}}>59%</td>
            </tr>
            <tr>
              <td style={styles.td}>Compliance shield</td>
              <td style={styles.td}>Fines up to €1.5M → 50% mitigable</td>
              <td style={{...styles.td, ...styles.highlight}}>€1.5M</td>
              <td style={{...styles.td, ...styles.highlight}}>€750k</td>
              <td style={{...styles.td, ...styles.roi}}>556%</td>
            </tr>
            <tr>
              <td style={styles.td}>Competitive risk</td>
              <td style={styles.td}>Peers invest €1,200/emp → 70% catch-up</td>
              <td style={{...styles.td, ...styles.highlight}}>€500k</td>
              <td style={{...styles.td, ...styles.highlight}}>€350k</td>
              <td style={{...styles.td, ...styles.roi}}>259%</td>
            </tr>
            <tr style={{fontWeight: 'bold'}}>
              <td style={styles.td}>Total</td>
              <td style={styles.td}>Adjusted</td>
              <td style={{...styles.td, ...styles.highlight}}>€4.7M</td>
              <td style={{...styles.td, ...styles.highlight}}>€1.96M</td>
              <td style={{...styles.td, ...styles.roi}}>1,450%</td>
            </tr>
          </tbody>
        </table>

        <div style={styles.callout}>
          <span style={styles.calloutStrong}>€135k training investment</span>
          <div>Mitigates €1.96M of preventable AI exposure (~42%)<br />ROI ~1,450%</div>
        </div>

        <div style={styles.caps}>Insights for Training</div>
        <h2 style={styles.h2}>Top Voice/Text Insights</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Question</th>
              <th style={styles.th}>Top Insight</th>
              <th style={styles.th}>%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Responsible AI understanding</td>
              <td style={{...styles.td, ...styles.highRisk}}>Confusion about AI bias, GDPR, and compliance</td>
              <td style={styles.td}>65%</td>
            </tr>
            <tr>
              <td style={styles.td}>Training willingness</td>
              <td style={{...styles.td, ...styles.lowRisk}}>Prefer short, role-aligned modules</td>
              <td style={styles.td}>61%</td>
            </tr>
            <tr>
              <td style={styles.td}>AI escalation path</td>
              <td style={{...styles.td, ...styles.highRisk}}>Most unsure who to ask; default to peers</td>
              <td style={styles.td}>74%</td>
            </tr>
            <tr>
              <td style={styles.td}>Incident reporting</td>
              <td style={{...styles.td, ...styles.mediumRisk}}>Fear of blame → prefer anonymous routes</td>
              <td style={styles.td}>42%</td>
            </tr>
          </tbody>
        </table>

        <div style={styles.caps}>Internal Improvements / Organizational Changes</div>
        <h2 style={styles.h2}>Patterns Identified</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Area</th>
              <th style={styles.th}>Theme</th>
              <th style={styles.th}>%</th>
              <th style={styles.th}>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Responsible AI</td>
              <td style={{...styles.td, ...styles.highRisk}}>Inconsistent knowledge across teams</td>
              <td style={styles.td}>68%</td>
              <td style={styles.td}>Training</td>
            </tr>
            <tr>
              <td style={styles.td}>Training access</td>
              <td style={{...styles.td, ...styles.mediumRisk}}>Some teams lack portal access</td>
              <td style={styles.td}>25%</td>
              <td style={styles.td}>Tools</td>
            </tr>
            <tr>
              <td style={styles.td}>Escalation path</td>
              <td style={{...styles.td, ...styles.highRisk}}>No formal contact or owner</td>
              <td style={styles.td}>71%</td>
              <td style={styles.td}>Governance</td>
            </tr>
            <tr>
              <td style={styles.td}>Comms</td>
              <td style={{...styles.td, ...styles.mediumRisk}}>Process unclear → inconsistent adoption</td>
              <td style={styles.td}>60%</td>
              <td style={styles.td}>Communication</td>
            </tr>
            <tr>
              <td style={styles.td}>Shadow AI</td>
              <td style={{...styles.td, ...styles.highRisk}}>Unreported experiments detected</td>
              <td style={styles.td}>38%</td>
              <td style={styles.td}>Governance</td>
            </tr>
          </tbody>
        </table>

        <div style={styles.footer}>Quickchat.space – Conversations @ scale</div>
      </div>
    </div>
  );
}