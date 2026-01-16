// services/ai-processing/columnAnalyzer.js

export function analyzeColumnType(values = []) {
  if (values.length === 0) return 'unknown'

  const sampleValues = values.map(v => String(v).trim()).filter(Boolean)

  // -----------------------------
  // 1. BOOLEAN
  // -----------------------------
  const lower = sampleValues.map(v => v.toLowerCase())
  const booleanSet = new Set(lower)
  if (
    booleanSet.size <= 2 &&
    [...booleanSet].every(v => ['yes', 'no', 'true', 'false'].includes(v))
  ) {
    return 'boolean'
  }

  // -----------------------------
  // 2. NUMERIC (STRICT)
  // -----------------------------
  const allNumeric = sampleValues.every(v => /^-?\d+(\.\d+)?$/.test(v))
  if (allNumeric) return 'numeric'

  // -----------------------------
  // 3. DATETIME (STRICT)
  // -----------------------------
  // Accept formats like:
  // 2025-12-01 09:15
  // 2025-12-01
  // 2025/12/01 09:15
  const dateRegex = /^\d{4}[-/]\d{2}[-/]\d{2}(?:\s+\d{2}:\d{2}(?::\d{2})?)?$/

  const allDateLike = sampleValues.every(v => dateRegex.test(v) && !isNaN(Date.parse(v)))
  if (allDateLike) return 'datetime'

  // -----------------------------
  // 4. SINGLE WORD / CATEGORICAL
  // -----------------------------
  const wordCounts = sampleValues.map(v => v.split(/\s+/).length)
  const isSingleWord = wordCounts.every(n => n === 1)
  const unique = [...new Set(sampleValues.map(v => v.toLowerCase()))]

  if (isSingleWord && unique.length <= 10) return 'categorical'
  if (isSingleWord) return 'short_words'

  // -----------------------------
  // 5. FREE TEXT
  // -----------------------------
  return 'text'
}
