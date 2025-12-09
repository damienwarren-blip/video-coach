// lib/db.js
import { Pool } from 'pg'

const globalForDb = globalThis

let db
if (!globalForDb.pgPool) {
  db = new Pool({ connectionString: process.env.DATABASE_URL })
  globalForDb.pgPool = db
} else {
  db = globalForDb.pgPool
}

export default db

// NEW FUNCTION
export async function getReportById(reportId) {
  const reportRes = await db.query(
    'SELECT * FROM reports WHERE report_id = $1',
    [reportId]
  )

  const sectionRes = await db.query(
    'SELECT * FROM report_sections WHERE report_id = $1 ORDER BY order_position',
    [reportId]
  )

  return {
    report: reportRes.rows[0],
    sections: sectionRes.rows,
  }
}
