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
