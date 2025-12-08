'use client';

import { useState, useEffect } from 'react';
import { ArrowPathIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function ReportPage() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReport = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/Webhook');
      const data = await response.json();
      
      if (data.success) {
        setReport(data);
      } else {
        setError(data.message || 'No report available yet');
      }
    } catch (err) {
      setError('Failed to load report');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  const formatAnalysis = (text) => {
    if (!text) return '';
    return text.split('\n').map((line, idx) => (
      <p key={idx} className="mb-3 text-gray-700">{line}</p>
    ));
  };

  return (
    <main className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Survey Analysis Report</h1>
            <button
              onClick={fetchReport}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              <ArrowPathIcon className="h-5 w-5" />
              Refresh
            </button>
          </div>
          
          {loading && (
            <div className="text-center py-12">
              <ArrowPathIcon className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading report...</p>
            </div>
          )}

          {error && !loading && (
            <div className="text-center py-12">
              <ChartBarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">{error}</p>
              <p className="text-sm text-gray-500">
                Submit a VideoAsk form to generate a report.
              </p>
            </div>
          )}

          {report && !loading && (
            <>
              <div className="mb-6 text-sm text-gray-500">
                Generated: {new Date(report.timestamp).toLocaleString()}
              </div>

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