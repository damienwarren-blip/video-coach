// /app/api/ai-response/route.js

import db from '@/lib/db'

export async function POST(req) {
  try {
    const body = await req.json()
    const {
      executiveSummary,
      drivers = [],
      actions = [],
      cities = [],
      strategicSummary,
      strategicSubtext,
    } = body

    // --------------------------------------------------
    // 1. CREATE REPORT
    // --------------------------------------------------
    const reportResult = await db.query(
      `
      INSERT INTO churn_reports (
        survey_id,
        title,
        period,
        sample_size,
        generated_at,
        subtitle,
        strategic_summary,
        strategic_subtext
      )
      VALUES ($1, $2, $3, $4, NOW(), $5, $6, $7)
      RETURNING id
      `,
      [
        null,
        'Churn Report',
        new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        executiveSummary.sampleSize,
        'Executive Summary',
        strategicSummary,
        strategicSubtext,
      ]

    )

    const report_id = reportResult.rows[0].id

    // --------------------------------------------------
    // 2. DRIVER CATEGORIES
    // --------------------------------------------------
    for (const driver of drivers) {
      // Extract % from coreIssue
      const percentMatch = driver.coreIssue?.match(/(\d+)%/)
      const complaintPercent = percentMatch ? Number(percentMatch[1]) : null

      // Extract action numbers (1, 4, 5…)
      const actionNumbers =
        driver.strategicActionRef
          ?.match(/Action\s+#\d+/g)
          ?.map((m) => Number(m.replace(/\D/g, ''))) ?? []

      // Store DISPLAY labels for UI
      const actionLabels =
        driver.strategicActionRef
          ?.split(',')
          ?.map((s) => s.trim()) ?? []

      await db.query(
        `
        INSERT INTO churn_driver_categories (
          report_id,
          category_name,
          complaint_percent,
          severity,
          impact_statement,
          target_reduction,
          target_reduction_unit,
          strategic_action_links
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
        `,
        [
          report_id,
          driver.category,
          complaintPercent,
          driver.severity,
          driver.impactStatement,
          driver.targetReduction,
          '%',               // ✅ FIX: unit
          actionLabels,      // ✅ FIX: readable links
        ]
      )
    }

    // --------------------------------------------------
    // 3. STRATEGIC ACTIONS
    // --------------------------------------------------
    for (const action of actions) {
      await db.query(
        `
        INSERT INTO strategic_actions (
          report_id,
          action_number,
          name,
          description,
          target_metric
        )
        VALUES ($1,$2,$3,$4,$5)
        `,
        [
          report_id,
          action.actionId,
          action.name,
          action.description,
          action.targetMetric,
        ]
      )
    }

    // --------------------------------------------------
    // 4. EXECUTIVE METRICS
    // --------------------------------------------------
    const {
      addressableRevenueProtectedEUR,
      totalRiskEUR
    } = body.financialMetrics || {}

    const detractorCount = Math.round(
      (executiveSummary.detractorShare / 100) * executiveSummary.sampleSize
    )

    await db.query(
      `
      INSERT INTO churn_report_metrics
        (report_id, metric_key, metric_value, description)
      VALUES
        ($1,'current_nps',$2,'Current NPS Score'),
        ($1,'benchmark_nps',$3,'Industry Benchmark'),
        ($1,'active_detractors_pct',$4,'Active detractors %'),
        ($1,'active_detractors_count',$5,'Active detractors count'),
        ($1,'addressable_revenue_protected_eur',$6,'Revenue Protected by Strategy'),
        ($1,'total_risk_eur',$7,'Total Revenue Risk')
      `,
      [
        report_id,
        executiveSummary.currentScore,
        executiveSummary.targetScore,
        executiveSummary.detractorShare,
        detractorCount,
        addressableRevenueProtectedEUR,
        totalRiskEUR
      ]
    )

    // --------------------------------------------------
    // 5. CRISIS CITIES
    // --------------------------------------------------
    for (const city of cities) {
      await db.query(
        `
        INSERT INTO crisis_city_scores
          (report_id, city_name, nps_score)
        VALUES ($1,$2,$3)
        `,
        [report_id, city.city, city.nps]
      )
    }

    return new Response(
      JSON.stringify({ success: true, report_id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (err) {
    console.error('[AI RESPONSE ERROR]', err)
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    )
  }
}
