"use client";

import React, { useState, useEffect } from "react";

export default function CustomerFeedbackLanding() {
  const [fadeIn, setFadeIn] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [consentInput, setConsentInput] = useState("");

  useEffect(() => setFadeIn(true), []);

  const handleOpen = () => setShowPrompt(true);

  const handleConfirm = () => {
    if (consentInput.trim().toLowerCase() === "yes" || confirmed) {
      setShowPrompt(false);
      setConfirmed(true);
    } else {
      setConfirmed(true);
      setShowPrompt(false);
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 opacity-10"></div>
        <div className="absolute top-12 left-8 w-36 h-36 bg-violet-300/20 rounded-full filter blur-3xl animate-[bounce_8s_infinite_alternate]"></div>
        <div className="absolute bottom-12 right-8 w-48 h-48 bg-fuchsia-300/20 rounded-full filter blur-3xl animate-[bounce_10s_infinite_alternate]"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-300/20 rounded-full filter blur-2xl animate-[bounce_6s_infinite_alternate]"></div>
      </div>

      <div
        className={`relative z-10 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full text-left transition-opacity duration-700 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {!confirmed ? (
          <div>
            {/* Header */}
            <header className="text-center mb-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">We’re different. You matter.</h1>
              <p className="mt-2 text-sm sm:text-base text-gray-600">A new way to give feedback: a <strong>video-style prompt</strong>, but **text only**. Quick, anonymous, and impactful.</p>
            </header>

            {/* Body sections */}
            <section className="grid gap-4 sm:grid-cols-2 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100 transform transition hover:scale-105 sm:col-span-2">
                <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">Text-only, video-style</h3>
                <p className="text-sm text-gray-600 mt-1">Type your answers in a familiar video-style interface. **No voice. No sign-in. Just your thoughts.**</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 transform transition hover:scale-105">
                <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">Safe & anonymous</h3>
                <p className="text-sm text-gray-600 mt-1">No names, no accounts. Focus on what matters — your experience.</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-50 border border-fuchsia-100 transform transition hover:scale-105">
                <div className="w-10 h-10 rounded-full bg-fuchsia-500 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">We act fast</h3>
                <p className="text-sm text-gray-600 mt-1">Your text answers are reviewed and turned into real improvements — not ignored.</p>
              </div>
            </section>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleOpen}
                className="px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 transform hover:scale-105"
              >
                Start feedback
              </button>
              <button
                onClick={handleOpen}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
              >
                How it works
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">Under a minute. By continuing, you confirm no personal info is shared.</p>
          </div>
        ) : (
          <div>
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">Hit play & type your thoughts 🎤</h2>
              <p className="text-sm text-gray-600 mt-1">100% text, 100% anonymous — just you and your ideas.</p>
            </div>
            <div className="w-full h-[65vh]">
              <iframe
                src="https://www.videoask.com/fqqlzbxwp"
                allow="autoplay; encrypted-media"
                className="w-full h-full border-0 rounded-2xl shadow-xl"
                title="Feedback VideoAsk"
              />
            </div>
          </div>
        )}
      </div>

      {showPrompt && !confirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div className="relative z-10 w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6">
            <h3 className="text-lg font-semibold">Confirm to start</h3>
            <p className="text-sm text-gray-600 mt-2">
              This is a **video-style, text-only prompt**. Type your answers — no personal info.
            </p>

            <div className="mt-4">
              <label className="block text-xs font-medium text-gray-700">Type "yes" to confirm</label>
              <input
                value={consentInput}
                onChange={(e) => setConsentInput(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                placeholder="yes"
              />
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setShowPrompt(false)} className="px-4 py-2 rounded-lg text-sm border border-gray-200 bg-white">Cancel</button>
              <button onClick={handleConfirm} className="px-6 py-2 rounded-lg text-sm font-semibold text-white bg-fuchsia-600 hover:bg-fuchsia-700">Confirm & Start</button>
            </div>

            <p className="text-xs text-gray-500 mt-3">AI only removes identifiers and groups themes. Raw responses deleted in 90 days.</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bounce { from { transform: translateY(0); } to { transform: translateY(-12px); } }
        .animate-[bounce_8s_infinite_alternate] { animation: bounce 8s infinite alternate; }
        .animate-[bounce_10s_infinite_alternate] { animation: bounce 10s infinite alternate; }
        .animate-[bounce_6s_infinite_alternate] { animation: bounce 6s infinite alternate; }
      `}</style>
    </main>
  );
}
