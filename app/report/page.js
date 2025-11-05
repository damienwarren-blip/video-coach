'use client';

import { useState } from 'react';
import { ArrowPathIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function ReportPage() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyze = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // You can either manually trigger analysis with sample data
      // Or call your webhook endpoint if you have test data
      const response = await fetch('/api/Webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contact: {
            answers: [
              { input_text: "Test answer 1" },
              { input_text: "Test answer 2" }
            ]
          }
        })
      });

      const data = await response.json();
      if (data.success) {
        setReport(data);
      } else {
        setError(data.message || 'Analysis failed');
      }
    } catch (err) {
      setError('Failed to analyze');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatAnalysis = (text) => {
    if (!text) return '';
    return text.split('\n').map((line, idx) => (
      <p key={idx} className="mb-3 text-gray-700">{line}</p>
    ));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Survey Analysis Report</h1>
          
          {!report && !loading && (
            <div className="text-center py-12">
              <ChartBarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-6">
                Reports are generated automatically when VideoAsk forms are submitted.
              </p>
              <p className="text-sm text-gray-500">
                Check your VideoAsk webhook logs or submit a new form to see the analysis.
              </p>
            </div>
          )}

          {loading && (
            <div className="text-center py-12">
              <ArrowPathIcon className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Analyzing...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {report && (
            <>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Responses</h2>
                <div className="space-y-2">
                  {report.answers.map((ans, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded">
                      <span className="text-sm text-gray-500">Response {idx + 1}:</span>
                      <p className="text-gray-800">{ans}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <LightBulbIcon className="h-6 w-6 text-purple-500" />
                  Analysis
                </h2>
                <div className="prose max-w-none">
                  {formatAnalysis(report.analysis)}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}