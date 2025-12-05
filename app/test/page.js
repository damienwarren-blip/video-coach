'use client';

export default function AIGovernanceReport() {
  const styles = {
    container: { fontFamily: 'Arial, sans-serif', fontSize: '11pt', color: '#101828', background: '#f8fafc', margin: 0, lineHeight: 1.4 },
    page: { width: '1100px', margin: '40px auto', background: '#ffffff', padding: '60px 70px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
    h1: { fontSize: '48pt', color: '#101828', margin: '0 0 20px', lineHeight: 1, fontWeight: 300, letterSpacing: '-0.02em' },
    subtitle: { fontSize: '16pt', color: '#475467', margin: '0 0 40px', fontWeight: 400 },
    h2: { fontSize: '18pt', color: '#101828', margin: '40px 0 20px', fontWeight: 500 },
    table: { width: '100%', borderCollapse: 'collapse', margin: '30px 0', fontSize: '11pt' },
    th: { background: '#f8fafc', color: '#344054', padding: '16px 18px', textAlign: 'left', fontWeight: 500, borderBottom: '2px solid #e4e7ec' },
    td: { padding: '16px 18px', borderBottom: '1px solid #f1f5f9' },
    highlight: { color: '#b91c1c', fontWeight: 600 },
    roi: { color: '#059669', fontWeight: 600 },
    callout: { background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)', border: '1px solid #34d399', borderRadius: '12px', padding: '40px', textAlign: 'center', margin: '60px 0', fontSize: '18pt', color: '#047857' },
    calloutStrong: { color: '#065f46', fontSize: '24pt', fontWeight: 'bold', display: 'block', marginBottom: '10px' },
    caps: { fontSize: '10pt', fontWeight: 500, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' },
    footer: { marginTop: '100px', fontSize: '10pt', color: '#6b7280', textAlign: 'center', borderTop: '1px solid #e5e7eb', paddingTop: '20px' },
    highRisk: { backgroundColor: '#fee2e2' },
    mediumRisk: { backgroundColor: '#fef9c3' },
    lowRisk: { backgroundColor: '#d1fae5' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.page}>
        <h1 style={styles.h1}>€4.7M<br />Total AI Exposure</h1>
        <p style={styles.subtitle}>Responsible AI pulse · 200-employee Dublin fintech · 50% response rate</p>

        <h2 style={styles.h2}>The 6 Questions We Asked</h2>
        <ol style={{ paddingLeft: '20px', margin: '30px 0', fontSize: '13pt', lineHeight: '1.7' }}>
          <li>Do you know what Responsible AI means?</li>
          <li>Do you require additional training/upskilling on AI?<br />If it was available would you take it voluntarily?</li>
          <li>In your organization, who do you go to if you have a question about AI?</li>
          <li>If you think you’ve been involved in a cyber or privacy incident with AI, who do you go to?</li>
          <li>What’s the single biggest way the right AI tools could make your job easier or more effective?</li>
          <li>What’s your single biggest concern about AI in our organisation right now?</li>
        </ol>

        <h2 style={styles.h2}>Critical Governance Gaps (200 EE)</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Question</th>
              <th style={styles.th}>Result</th>
              <th style={styles.th}>Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={styles.td}>1. Know what Responsible AI means?</td><td style={{...styles.td, ...styles.highlight}}>69 % No / Kind of</td><td style={{...styles.td, ...styles.highRisk}}>Non-compliant use likely</td></tr>
            <tr><td style={styles.td}>2. Need / would take training?</td><td style={{...styles.td, ...styles.roi}}>64 % Yes / Definitely</td><td style={{...styles.td, ...styles.lowRisk}}>Strong demand → easy win</td></tr>
            <tr><td style={styles.td}>3. Who to ask about AI?</td><td style={{...styles.td, ...styles.highlight}}>72 % No clear person</td><td style={{...styles.td, ...styles.highRisk}}>Shadow AI risk</td></tr>
            <tr><td style={styles.td}>4. Who to report AI incident to?</td><td style={{...styles.td, ...styles.highlight}}>76 % No process</td><td style={{...styles.td, ...styles.highRisk}}>Delayed reporting → €1.5M+ fines</td></tr>
          </tbody>
        </table>

        <div style={styles.callout}>
          <span style={styles.calloutStrong}>€135k training investment</span>
          <div>Mitigates €1.96M of preventable AI exposure (42 %)<br />ROI 1,450 % – board-ready justification</div>
        </div>

        <h2 style={styles.h2}>Top Voice Insights (Questions 5 & 6)</h2>
        <table style={styles.table}>
          <tbody>
            <tr><td style={styles.td}>Biggest way AI tools could help</td><td style={styles.td}>“Automate compliance checks”, “Faster fraud detection”, “Cut manual reporting”</td></tr>
            <tr><td style={styles.td}>Biggest concern</td><td style={styles.td}>“Data leakage”, “No one knows who owns AI”, “Fines if we get it wrong”</td></tr>
          </tbody>
        </table>

        <div style={styles.footer}>QuickChat.space – Conversations @ scale</div>
      </div>
    </div>
  );
}