"use client";

import React, { useState, useEffect } from "react";

export default function CustomerFeedbackLanding() {
  const [fadeIn, setFadeIn] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [consentInput, setConsentInput] = useState("");

  useEffect(() => setFadeIn(true), []);

  const handleConfirm = () => {
    if (consentInput.trim().toLowerCase() === "yes") {
      setConfirmed(true);
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 opacity-10"></div>
        <div className="absolute top-12 left-8 w-36 h-36 bg-violet-300/20 rounded-full filter blur-3xl animate-[bounce_8s_infinite_alternate]"></div>
        <div className="absolute bottom-12 right-8 w-48 h-48 bg-fuchsia-300/20 rounded-full filter blur-3xl animate-[bounce_10s_infinite_alternate]"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-300/20 rounded-full filter blur-2xl animate-[bounce_6s_infinite_alternate]"></div>
      </div>

      <div
        className={`relative z-10 max-w-2xl w-full transition-opacity duration-700 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Animated Play Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500 border-r-fuchsia-500 animate-spin"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 animate-pulse flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 animate-[ping_2s_infinite]"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-fuchsia-400 animate-[ping_3s_infinite]"></div>
          </div>
        </div>

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 text-center">
          We partnered with the latest capture tech.
        </h1>
        <p className="text-gray-100 text-sm sm:text-base mb-6 text-center">
          Quick, anonymous, and actioned.
        </p>

        {/* Video iframe */}
        <div className="relative w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden">
          <iframe
            src="https://www.videoask.com/fqqlzbxwp"
            allow="autoplay; encrypted-media"
            className={`w-full h-full border-0 transition-opacity duration-300 ${confirmed ? "opacity-100" : "opacity-90"}`}
            title="Feedback VideoAsk"
          />

          {/* Centered Consent Banner */}
          {!confirmed && (
            <div className="absolute inset-0 z-50 flex items-center justify-center">
              <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center gap-3 max-w-sm w-full shadow-xl ring-1 ring-white/30">
                <p className="text-white font-semibold text-center text-lg animate-pulse">
                  Type "yes" to consent and unlock the feedback
                </p>
                <input
                  value={consentInput}
                  onChange={(e) => setConsentInput(e.target.value)}
                  placeholder="yes"
                  className="px-3 py-2 border rounded-md border-gray-300 shadow-sm w-full text-center text-white bg-black/40 placeholder-white"
                />
                <button
                  onClick={handleConfirm}
                  className="px-6 py-2 bg-fuchsia-600 text-white rounded-lg font-semibold hover:bg-fuchsia-700 shadow-md"
                >
                  Confirm & Start
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-xs text-gray-300 mt-4 text-center">
          AI only groups themes and removes identifiers. Raw responses deleted in 90 days.
        </p>
      </div>

      <style jsx>{`
        @keyframes bounce {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-12px);
          }
        }
        .animate-[bounce_8s_infinite_alternate] {
          animation: bounce 8s infinite alternate;
        }
        .animate-[bounce_10s_infinite_alternate] {
          animation: bounce 10s infinite alternate;
        }
        .animate-[bounce_6s_infinite_alternate] {
          animation: bounce 6s infinite alternate;
        }
      `}</style>
    </main>
  );
}
