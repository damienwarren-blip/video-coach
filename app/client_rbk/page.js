"use client";
import { useState } from "react";

export default function ClientRBK() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleStart = () => {
    if (consentGiven) {
      setShowVideo(true);
    } else {
      alert("Please tick the consent box before starting.");
    }
  };

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-gray-800 px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="backdrop-blur-md bg-white/85 rounded-3xl shadow-lg p-8 sm:p-10 max-w-2xl w-full text-center leading-relaxed">
        {!showVideo ? (
          <>
            <h1 className="text-3xl font-semibold mb-5 text-blue-700">
              Welcome to Video Coach
            </h1>

            <p className="text-gray-700 mb-8 text-lg">
              <strong className="text-blue-700">Your voice matters.</strong>{" "}
              <strong>Your privacy is protected.</strong> We collect{" "}
              <strong>team insights, not individual identities</strong> — so
              real problems get fixed, fast. This short exercise helps us test a
              new way for teams and leaders to get better insights into
              performance and engagement.
            </p>

            <div className="text-sm text-gray-700 text-left mb-8 bg-blue-50 rounded-xl p-5 space-y-1.5">
              <p className="font-medium mb-1">Before you start:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Your responses are fully anonymous.</li>
                <li>Please don’t include any names, emails, or personal details.</li>
                <li>
                  Responses may be processed by AI to generate aggregated reports.
                </li>
                <li>
                  Data is stored securely and deleted 30 days after report delivery.
                </li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mb-8">
              Questions? Contact{" "}
              <a
                href="mailto:pilot@video-coach.com"
                className="text-blue-600 underline hover:text-blue-700"
              >
                pilot@video-coach.com
              </a>
            </p>

            <div className="flex items-center justify-center mb-6">
              <input
                type="checkbox"
                id="consent"
                className="mr-2 h-4 w-4"
                onChange={(e) => setConsentGiven(e.target.checked)}
              />
              <label htmlFor="consent" className="text-gray-700 text-sm">
                I understand and consent to take part anonymously.
              </label>
            </div>

            <button
              onClick={handleStart}
              className={`px-10 py-3 rounded-xl text-white font-medium shadow-md transition ${
                consentGiven
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Start
            </button>
          </>
        ) : (
          <div className="w-full h-[80vh] flex items-center justify-center">
            <iframe
              src="https://www.videoask.com/fjtaofiub"
              allow="camera; microphone; autoplay; encrypted-media;"
              className="w-full h-full border-0 rounded-2xl shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </main>
  );
}
