import db from '@/lib/db'

export default async function DBTestPage() {
  if (!process.env.DATABASE_URL) {
    return (
      <div className="p-4 text-red-500">
        DATABASE_URL is not set. Please define it in your environment variables.
      </div>
    )
  }

  let clients = []

  try {
    const res = await db.query('SELECT * FROM clients LIMIT 10')
    clients = res.rows
  } catch (err) {
    console.error('DB error:', err)
    return (
      <div className="p-4 text-red-500">
        Failed to connect to DB: {err.message}
      </div>
    )
  }

  return (
    <div className="p-6 font-mono">
      <h1 className="text-2xl font-bold mb-4">📦 DB Test Page</h1>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
        {JSON.stringify(clients, null, 2)}
      </pre>
    </div>
  )
}
