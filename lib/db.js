// lib/db.js
import { Pool } from 'pg'

/**
 * Connection Pool (cached globally)
 */
const globalForDb = globalThis

let db
if (!globalForDb.pgPool) {
  db = new Pool({
    connectionString: process.env.DATABASE_URL,
  })
  globalForDb.pgPool = db
} else {
  db = globalForDb.pgPool
}

export default db

/**
 * Fetch a fully expanded CHURN REPORT with company info
 */
export async function getReportById(reportId) {
  // 1) Base Report + company_name via join
  const reportRes = await db.query(
    `
    SELECT cr.*, c.company_name
    FROM churn_reports cr
    LEFT JOIN surveys s ON cr.survey_id = s.id
    LEFT JOIN campaigns ca ON s.id = ca.id
    LEFT JOIN clients c ON ca.client_id = c.id
    WHERE cr.id = $1
    `,
    [reportId]
  )

  const report = reportRes.rows[0]
  if (!report) return null

  // 2) Metrics
  const metricsRes = await db.query(
    `
    SELECT metric_key, metric_value, description
    FROM churn_report_metrics
    WHERE report_id = $1
    ORDER BY metric_key
    `,
    [reportId]
  )

  // 3) Driver Categories
  const driversRes = await db.query(
    `
    SELECT id, category_name, complaint_percent,
           severity, impact_statement,
           target_reduction, target_reduction_unit,
           strategic_action_links
    FROM churn_driver_categories
    WHERE report_id = $1
    ORDER BY id
    `,
    [reportId]
  )

  // 4) Crisis Cities
  const citiesRes = await db.query(
    `
    SELECT city_name, nps_score
    FROM crisis_city_scores
    WHERE report_id = $1
    ORDER BY city_name
    `,
    [reportId]
  )

  // 5) Strategic Actions
  const actionsRes = await db.query(
    `
    SELECT id, action_number, name, description, target_metric
    FROM strategic_actions
    WHERE report_id = $1
    ORDER BY action_number
    `,
    [reportId]
  )

  // 6) Optional sections
  const sectionsRes = await db.query(
    `
    SELECT section_type, section_content, order_position
    FROM report_sections
    WHERE report_id = $1
    ORDER BY order_position
    `,
    [reportId]
  )

  return {
    report,
    metrics: metricsRes.rows,
    drivers: driversRes.rows,
    cities: citiesRes.rows,
    actions: actionsRes.rows,
    sections: sectionsRes.rows,
  }
}
