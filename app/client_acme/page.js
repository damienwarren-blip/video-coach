"use client";

import React from "react";
import { UsersIcon, ChartBarIcon, LightBulbIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

export default function ClientACME() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <header className="bg-white rounded-xl shadow p-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">ACME Performance Report</h1>
          <p className="text-gray-600">
            Executive summary highlighting the “why,” averages where applicable, and next steps for management.
          </p>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <UsersIcon className="h-6 w-6 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900">Engagement Snapshot</h3>
            </div>
            <p className="text-gray-700">
              Participation and qualitative sentiment overview across key teams.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <ChartBarIcon className="h-6 w-6 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-900">Averages</h3>
            </div>
            <p className="text-gray-700">
              Ratings consolidated (e.g., workload, clarity, communication). Add your figures here.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <LightBulbIcon className="h-6 w-6 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-900">Top Insights</h3>
            </div>
            <p className="text-gray-700">
              Root causes and recurring themes behind the scores—your “why.”
            </p>
          </div>
        </section>

        {/* Insights */}
        <section className="bg-white rounded-xl shadow p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Why (Summary)</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Clarity gaps on project scope are driving missed deadlines.</li>
            <li>Workload imbalance causing burnout risk in 2 teams.</li>
            <li>Cross-functional communication slowing decision cycles.</li>
          </ul>
        </section>

        {/* Next Steps */}
        <section className="bg-white rounded-xl shadow p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Next Steps for Management</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Standardize kickoff briefs and weekly alignment for critical projects.</li>
            <li>Rebalance workload and define capacity guardrails per team.</li>
            <li>Introduce cross-team standups and a shared decisions log.</li>
          </ol>
        </section>

        {/* Refresh / Actions */}
        <section className="flex items-center justify-end">
          <button className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
            <ArrowPathIcon className="h-5 w-5" />
            Refresh Data
          </button>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-6">
          © {new Date().getFullYear()} ACME. Internal use only.
        </footer>
      </div>
    </main>
  );
}





