  "use client";

  import React, { useState, useEffect } from "react";

  function PrivacyModal({ open, onClose }) {
    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Datenschutz & Nutzung</h2>

          <ul className="text-sm text-gray-700 space-y-1">
            <li>✅ Anonyme Text- und Bewertungsantworten</li>
            <li>✅ Keine Video- oder Audioaufnahmen gespeichert</li>
            <li>✅ Keine persönlichen Identifikatoren</li>
            <li>✅ KI gruppiert nur Themen</li>
            <li>
              ✅ Rohdaten werden innerhalb von <strong>90 Tagen</strong> gelöscht
            </li>
            <li>🚫 Keine Profilierung oder Verkauf von Daten</li>
          </ul>

          <p className="text-sm text-gray-700">
            <strong>Zweck:</strong> Verbesserung der Nutzererfahrung durch Verständnis von Themen — individuelle Nachverfolgung findet nicht statt. Teilnahme freiwillig.
          </p>

          <div className="flex justify-end pt-3">
            <button
              onClick={onClose}
              className="px-3 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300"
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default function CustomerFeedbackLandingDE() {
    const [fadeIn, setFadeIn] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    useEffect(() => setFadeIn(true), []);

    return (
      <main className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-white">
        {/* Hintergrundblobs - removed for white background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
        </div>

        <div
          className={`relative z-10 max-w-2xl w-full transition-opacity duration-700 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Logo Spinner */}
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

          {/* Header + Incentive Line */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
              Mach ZEUS Besser
            </h1>
            <p className="text-lg sm:text-xl mt-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-600">
              Anonym. Schnell. Gehört. + 2x kostenlos freischalten ✨
            </p>
          </div>

          {/* Video + Consent */}
          <div className="relative w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.videoask.com/fch6lstck"
              allow="autoplay; encrypted-media"
              className={`w-full h-full border-0 transition-opacity duration-300 ${
                confirmed ? "opacity-100" : "opacity-90"
              }`}
              title="Feedback VideoAsk DE"
            />

            {/* Consent overlay */}
            {!confirmed && (
              <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
                <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center gap-3 max-w-sm w-full shadow-xl ring-1 ring-white/30">
                  <button
                    onClick={() => setConfirmed(true)}
                    className="px-6 py-2 bg-fuchsia-600 text-white rounded-lg font-semibold hover:bg-fuchsia-700 shadow-md"
                  >
                    Ich bin dabei — Los geht's!
                  </button>

                  <button
                    onClick={() => setShowPrivacy(true)}
                    className="text-xs text-gray-200 underline hover:text-white mt-2"
                  >
                    Datenschutz & Nutzung
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes bounce {
            from { transform: translateY(0); }
            to { transform: translateY(-12px); }
          }
          .animate-[bounce_8s_infinite_alternate] { animation: bounce 8s infinite alternate; }
          .animate-[bounce_10s_infinite_alternate] { animation: bounce 10s infinite alternate; }
          .animate-[bounce_6s_infinite_alternate] { animation: bounce 6s infinite alternate; }
        `}</style>

        {/* Privacy modal */}
        <PrivacyModal open={showPrivacy} onClose={() => setShowPrivacy(false)} />
      </main>
    );
  }
