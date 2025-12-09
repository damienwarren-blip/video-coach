// app/env-check/page.js
export const runtime = 'edge' // optional: run at edge if you want

export default function EnvCheckPage() {
  const hasDbUrl = !!process.env.DATABASE_URL

  return (
    <div className="p-6 text-sm font-mono">
      <h1 className="text-xl font-bold mb-2">🔍 Environment Check</h1>
      <p>
        <strong>DATABASE_URL:</strong>{' '}
        {hasDbUrl ? (
          <span className="text-green-600">✅ Exists</span>
        ) : (
          <span className="text-red-600">❌ Not Set</span>
        )}
      </p>
    </div>
  )
}
