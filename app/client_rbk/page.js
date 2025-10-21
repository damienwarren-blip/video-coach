"use client";
import { useState, useEffect } from "react";
import { Cog6ToothIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function ClientRBK() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleStart = () => {
    if (consentGiven) {
      setShowVideo(true);
    } else {
      alert("Please tick the consent box before starting.");
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-500 animate-gradient-x"></div>
        <div className="absolute top-10 left-10 w-36 h-36 bg-indigo-300/20 rounded-full filter blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-16 w-56 h-56 bg-teal-300/20 rounded-full filter blur-2xl animate-bounce-slow"></div>
      </div>

      {/* Card */}
      <div
        className={`relative z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-10 max-w-2xl w-full text-center transition-opacity duration-700 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {!showVideo ? (
          <>
            {/* Header section */}
            <div className="w-full flex flex-col items-center mb-6">
              <div className="relative w-full max-w-md h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-500 rounded-2xl shadow-xl overflow-hidden mb-6">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-full blur-2xl animate-pulse"></div>
                  <div
                    className="absolute bottom-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-6">
                  <svg
                    className="w-20 h-20 mb-3 drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  <h1 className="text-4xl font-bold mb-2 drop-shadow-md">
                    Video Coach
                  </h1>
                  <p className="text-sm font-medium opacity-90">
                    Your Voice. Your Impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Intro */}
            <p className="text-gray-800 mb-6 text-lg leading-relaxed">
              We're designing the next generation of employee surveys — one that
              ensures your perspective is truly heard and acted upon.
            </p>

            {/* How it works */}
            <div className="text-gray-800 mb-6 text-lg leading-relaxed">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Cog6ToothIcon className="w-6 h-6 text-purple-600" />
                <span className="font-semibold text-purple-600">
                  How it works
                </span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• You share your experience and ideas</li>
                <li>• We keep it confidential</li>
                <li>• We work to action your feedback</li>
              </ul>
            </div>

            {/* Consent instructions */}
            <div className="text-gray-700 text-left mb-8 bg-indigo-50/80 rounded-xl p-5 shadow-inner space-y-1.5">
              <div className="flex items-center gap-2 mb-2">
                <LockClosedIcon className="w-5 h-5 text-purple-600" />
                <p className="font-medium">Before you start:</p>
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li>Your responses are fully anonymous.</li>
                <li>
                  Please don't include names, emails, or personal identifiers.
                </li>
                <li>
                  Responses may be processed by AI to generate aggregated
                  reports.
                </li>
                <li>
                  Data is stored securely and deleted 30 days after report
                  delivery.
                </li>
              </ul>
            </div>

            {/* Contact */}
            <p className="text-sm text-gray-600 mb-8">
              Questions? Contact{" "}
              <a
                href="mailto:pilot@video-coach.com"
                className="text-purple-600 underline hover:text-indigo-600"
              >
                pilot@video-coach.com
              </a>
            </p>

            {/* Consent checkbox */}
            <div className="flex items-center justify-center mb-6">
              <input
                type="checkbox"
                id="consent"
                className="mr-2 h-4 w-4 accent-purple-600"
                onChange={(e) => setConsentGiven(e.target.checked)}
              />
              <label htmlFor="consent" className="text-gray-700 text-sm">
                I understand and consent to take part anonymously.
              </label>
            </div>

            {/* Start button */}
            <button
              onClick={handleStart}
              className={`px-10 py-3 rounded-xl text-white font-medium shadow-md transition ${
                consentGiven
                  ? "bg-purple-600 hover:bg-indigo-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Start
            </button>
          </>
        ) : (
          // Video iframe
          <div className="w-full h-[80vh] flex items-center justify-center">
            <iframe
              src="https://www.videoask.com/fjtaofiub"
              allow="camera; microphone; autoplay; encrypted-media;"
              className="w-full h-full border-0 rounded-3xl shadow-2xl"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      {/* Tailwind animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        .animate-bounce-slow {
          animation: bounce 8s infinite alternate;
        }
      `}</style>
    </main>
  );
}
