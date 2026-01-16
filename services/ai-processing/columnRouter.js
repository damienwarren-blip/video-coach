// services/ai-processing/columnRouter.js

import { analyzeColumnType } from './columnAnalyzer.js'
import { computeNumericStats, computeCategoricalStats, buildDatetimeHistogram } from './statsHelper.js'
import { runClusteringJob } from './clusteringClient.js'
import fs from 'fs'
import { parse } from 'csv-parse/sync'

export async function routeClusteringStrategy({
  filePath,
  doClustering,
  doGptSummary,
  columnConfig,
  authToken,
}) {
  const rawCsv = fs.readFileSync(filePath)
  const rows = parse(rawCsv, {
    columns: true,
    skip_empty_lines: true,
  })

  const { respondent_id, question_columns } = columnConfig
  const result = {}

  for (const column of question_columns) {
    const values = rows.map(row => row[column]).filter(Boolean)
    const columnType = analyzeColumnType(values)

    // Route by type
    if (columnType === 'numeric') {
      result[column] = {
        type: 'numeric_summary',
        ...computeNumericStats(values),
      }
    } else if (columnType === 'boolean' || columnType === 'categorical') {
      result[column] = {
        type: 'categorical',
        ...computeCategoricalStats(values),
      }
    } else if (columnType === 'datetime') {
      result[column] = {
        type: 'datetime',
        distribution: buildDatetimeHistogram(values),
        samples: values.slice(0, 10),
      }
    } else if (columnType === 'short_words') {
      const unique = [...new Set(values.map(v => v.trim().toLowerCase()))]
      if (unique.length <= 5) {
        result[column] = {
          type: 'categorical',
          ...computeCategoricalStats(values),
        }
      } else {
        result[column] = await runClusteringJob({
          filePath,
          doGptSummary,
          doClustering,
          columnConfig: {
            respondent_id,
            question_columns: [column],
          },
          authToken,
        })
      }
    } else {
      // Fallback to full clustering for text
      result[column] = await runClusteringJob({
        filePath,
        doGptSummary,
        doClustering,
        columnConfig: {
          respondent_id,
          question_columns: [column],
        },
        authToken,
      })
    }
  }
  return result
}
