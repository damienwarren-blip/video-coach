// services/ai-processing/statsHelper.js

export function computeNumericStats(values) {
  const nums = values.map(Number).filter(n => !isNaN(n))
  if (nums.length === 0) return {
    type: 'numeric_summary',
    count: 0,
    mean: null,
    median: null,
    min: null,
    max: null,
    distribution: {}
  }

  const sum = nums.reduce((a, b) => a + b, 0)
  const mean = sum / nums.length

  const sorted = [...nums].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  const median = sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid]

  const distribution = {}
  for (const n of nums) {
    const key = n.toFixed(1) // 1 decimal for grouping
    distribution[key] = (distribution[key] || 0) + 1
  }

  return {
    type: 'numeric_summary',
    count: nums.length,
    mean,
    median,
    min: Math.min(...nums),
    max: Math.max(...nums),
    distribution,
  }
}


export function computeCategoricalStats(values) {
  const counts = {}
  for (const v of values.map(v => v.trim().toLowerCase())) {
    counts[v] = (counts[v] || 0) + 1
  }
  return {
    type: 'categorical_summary',
    count: values.length,
    values: counts,
  }
}

export function buildDatetimeHistogram(values = []) {
  const parsed = values.map(v => new Date(v)).filter(d => !isNaN(d))
  if (parsed.length === 0) return {}

  const hours = parsed.map(d => d.getHours())
  const hourBuckets = {}

  for (const hour of hours) {
    const label = `${hour.toString().padStart(2, '0')}:00`
    hourBuckets[label] = (hourBuckets[label] || 0) + 1
  }

  const sorted = parsed.sort((a, b) => a - b)
  return {
    byHour: hourBuckets,
    oldest: sorted[0].toISOString(),
    newest: sorted[sorted.length - 1].toISOString(),
    count: parsed.length,
  }
}
