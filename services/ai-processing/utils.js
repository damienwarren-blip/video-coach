// /services/ai-processing/utils.js

export function extractHostFromDatabaseUrl(databaseUrl) {
  try {
    const url = new URL(databaseUrl)
    return url.hostname
  } catch (e) {
    console.error('Invalid DATABASE_URL:', e)
    return null
  }
}
