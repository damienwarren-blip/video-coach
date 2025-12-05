import React from "react";

export default function CISOTrainingView() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold">CISO / Training View</h2>
      <p className="text-gray-700 leading-relaxed">
        Insights derived from voice-based responses to the four core questions.
        These highlight specific training needs and internal improvements.
      </p>

      {/* Bain-Style 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1 – Insights for Training */}
        <div className="space-y-4 p-5 rounded-2xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">Insights for Training</h3>

          <div>
            <h4 className="font-semibold">1. Understanding of Responsible AI</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Majority associate it only with data privacy, ignoring governance/stewardship.</li>
              <li>Frequent confusion between Responsible AI vs. general AI compliance.</li>
              <li>Low confidence when asked to explain it in their own words.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">2. Appetite for More Training</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Strong willingness to attend short, role‑specific micro‑modules.</li>
              <li>Employees request scenario‑based examples relevant to fintech workflows.</li>
              <li>Younger staff show interest in certification‑type paths.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">3. Knowing Who to Ask About AI</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Most default to line managers who lack clarity themselves.</li>
              <li>Weak awareness of internal AI governance or central support channels.</li>
              <li>Repeated confusion whether DevOps or Security owns AI questions.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">4. Incident / Privacy Escalation</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Employees unsure whether AI misuse counts as a reportable incident.</li>
              <li>Long hesitation in responses indicates fear of blame culture.</li>
              <li>Shadow AI mentions arise mostly when discussing copy‑paste of customer data.</li>
            </ul>
          </div>
        </div>

        {/* Column 2 – Internal Improvements */}
        <div className="space-y-4 p-5 rounded-2xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">Internal Improvements</h3>

          <div>
            <h4 className="font-semibold">1. Escalation Path Clarity</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Create a single, simple flow for AI‑related queries and incidents.</li>
              <li>Current fragmentation between Security, Data, and Product causes uncertainty.</li>
              <li>Employees ask for one shared Slack/Teams channel for guidance.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">2. Communication Gaps</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Policy documents never read; people rely on colleagues instead.</li>
              <li>Teams unaware of existing AI guardrails introduced in 2024/2025.</li>
              <li>Managers request short explainers they can forward to teams.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">3. Shadow AI Usage Signs</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Employees mention using external chatbots to speed up customer emails.</li>
              <li>Some cite using personal devices for AI tasks when work tools block it.</li>
              <li>Strong desire for approved, easy-to-access AI options.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">4. Governance Quick Wins</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Publish a one‑page Responsible AI explainer aligned with fintech roles.</li>
              <li>Add simple mandatory AI onboarding to reduce variation in understanding.</li>
              <li>Introduce a monthly “AI clarity pulse” to track sentiment shifts.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
