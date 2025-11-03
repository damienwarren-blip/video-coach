"use client";

import React, { useState, useEffect } from "react";

// CustomerFeedbackLanding
// - Tailwind-ready React component
// - Landing copy and consent flow for a VideoAsk "video-style" feedback interaction
// - Requires user confirmation (type "yes" or press Confirm) before opening VideoAsk iframe

export default function CustomerFeedbackLanding() {
  const [fadeIn, setFadeIn] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [consentInput, setConsentInput] = useState("");

  useEffect(() => setFadeIn(true), []);

  const handleOpen = () => setShowPrompt(true);

  const handleConfirm = () => {
    // simple confirmation: either typed "yes" (case-insensitive) or clicked confirm
    if (consentInput.trim().toLowerCase() === "yes" || confirmed) {
      setShowPrompt(false);
      setConfirmed(true);
    } else {
      // mark confirmed regardless if user clicks confirm button
      setConfirmed(true);
      setShowPrompt(false);
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      {/* Decorative background */}
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
            {/* Animated Logo */}
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500 border-r-fuchsia-500 animate-spin"></div>
                
                {/* Inner pulsing circle */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 animate-pulse flex items-center justify-center">
                  {/* Video play icon */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                
                {/* Floating particles */}
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 animate-[ping_2s_infinite]"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-fuchsia-400 animate-[ping_3s_infinite]"></div>
              </div>
            </div>

            {/* Header */}
            <header className="text-center mb-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">Your voice matters</h1>
              <p className="mt-2 text-sm sm:text-base text-gray-600">A more human way to give feedback — quick, anonymous, and action-focused.</p>
            </header>

            {/* Body sections with icons */}
            <section className="grid gap-4 sm:grid-cols-2 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100 transform transition hover:scale-105 sm:col-span-2">
                <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">We're listening</h3>
                <p className="text-sm text-gray-600 mt-1">This is a <strong>video-style</strong> question format — you can reply with <strong>text or video</strong> (your choice). Tell us what's working and what could be better. Your insights help shape what we build next.</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 transform transition hover:scale-105">
                <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">Safe & anonymous</h3>
                <p className="text-sm text-gray-600 mt-1">No sign-in, no names. Please avoid personal details — focus on your experience.</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-50 border border-fuchsia-100 transform transition hover:scale-105">
                <div className="w-10 h-10 rounded-full bg-fuchsia-500 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">We take action</h3>
                <p className="text-sm text-gray-600 mt-1">We review every response and turn anonymized themes into real improvements.</p>
              </div>
            </section>

            {/* Privacy & consent explanation - REMOVED, moved to prompt */}

            {/* CTA & small consent prompt */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleOpen}
                className="px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 transform hover:scale-105"
              >
                Start feedback
              </button>

              <button
                onClick={() => {
                  // small inline explanation modal replaced by prompt below
                  handleOpen();
                }}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
              >
                How it works
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">Takes under a minute — speak or type. By continuing you confirm you will not include personal data.</p>
          </div>
        ) : (
          // Show VideoAsk iframe once confirmed
          <div>
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">Hit play, speak your mind 🎤</h2>
              <p className="text-sm text-gray-600 mt-1">100% anonymous — just you and your thoughts. We're all ears.</p>
            </div>
            <div className="w-full h-[65vh]">
              <iframe
                src="https://www.videoask.com/fqqlzbxwp"
                allow="camera; microphone; autoplay; encrypted-media"
                className="w-full h-full border-0 rounded-2xl shadow-xl"
                title="Feedback VideoAsk"
              />
            </div>
          </div>
        )}
      </div>

      {/* Consent prompt modal / panel */}
      {showPrompt && !confirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div className="relative z-10 w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6">
            <h3 className="text-lg font-semibold">Quick confirmation</h3>
            <p className="text-sm text-gray-600 mt-2">
              This is a short <strong>video-style</strong> feedback prompt. You can answer by typing or recording a short video. Please don't include names or other personal details.
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
              <button
                onClick={() => setShowPrompt(false)}
                className="px-4 py-2 rounded-lg text-sm border border-gray-200 bg-white"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-6 py-2 rounded-lg text-sm font-semibold text-white bg-fuchsia-600 hover:bg-fuchsia-700"
              >
                Confirm & Start
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-3">We use AI only to remove potential identifiers and to group themes. Raw responses are deleted within 90 days.</p>
          </div>
        </div>
      )}

      {/* small styles for animation */}
      <style jsx>{`
        @keyframes bounce { from { transform: translateY(0); } to { transform: translateY(-12px); } }
        .animate-\[bounce_8s_infinite_alternate\] { animation: bounce 8s infinite alternate; }
        .animate-\[bounce_10s_infinite_alternate\] { animation: bounce 10s infinite alternate; }
        .animate-\[bounce_6s_infinite_alternate\] { animation: bounce 6s infinite alternate; }
      `}</style>
    </main>
  );
}
