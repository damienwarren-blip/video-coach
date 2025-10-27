"use client";
import { useState, useEffect } from "react";

export default function QuickChatAthlete() {
  const [showVideo, setShowVideo] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleStart = () => {
    setShowVideo(true);
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-rose-800 via-amber-600 to-rose-700 animate-gradient-x"></div>

        {/* Abstract energy lines */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full opacity-15 text-white"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            d="M0,160 C180,220 420,100 640,160 C860,220 1100,140 1440,180"
          />
        </svg>

        {/* Sports silhouette */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-72 sm:w-96 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6a3 3 0 11-3 3 3 3 0 013-3zm-2 8l-4 5m6-5l4 5m-4-5v5"
            />
          </svg>
        </div>
      </div>

      {/* Card */}
      <div
        className={`relative z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center transition-all duration-700 ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {!showVideo ? (
          <>
            {/* Header */}
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 drop-shadow-md">
              Quick Chat
            </h1>
            <p className="text-amber-700 font-medium text-lg sm:text-xl mb-6">
              Your voice. Your team. Your impact.
            </p>

            {/* Intro */}
            <p className="text-gray-800 mb-4 text-base sm:text-lg leading-relaxed">
              Every strong team thrives on trust and communication.  
              <span className="block mt-1">
                Quick Chat gives you space to share what’s really happening —
                how you’re feeling, performing, and connecting — in your own words.
              </span>
            </p>

            {/* Trust cues */}
            <div className="text-gray-800 mb-5 text-base sm:text-lg leading-relaxed">
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg
                  className="w-6 h-6 text-rose-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c0-1.38 1.12-2.5 2.5-2.5S17 9.62 17 11v1.5a2.5 2.5 0 01-2.5 2.5H12v3l-4-4 4-4v3h2.5a.5.5 0 00.5-.5V11z"
                  />
                </svg>
                <span className="font-semibold text-rose-700 text-xl sm:text-2xl">
                  Be real. Be heard.
                </span>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>• How’s the energy in training?</li>
                <li>• What’s keeping you motivated?</li>
                <li>• Anything we could do better as a team?</li>
              </ul>
            </div>

            {/* CTA */}
            <p className="text-gray-800 mb-6 text-base sm:text-lg leading-relaxed">
              <strong className="text-xl sm:text-2xl text-rose-700">
                Ready for a Quick Chat?
              </strong>{" "}
              It’s short, private, and helps your coaches understand how to help you perform at your best.
            </p>

            {/* Start button */}
            <button
              onClick={handleStart}
              className="px-10 py-3 sm:px-12 sm:py-4 rounded-xl text-white font-semibold shadow-lg transition bg-gradient-to-r from-rose-700 to-amber-600 hover:from-rose-800 hover:to-amber-700 transform hover:scale-105"
            >
              Start Quick Chat
            </button>

            {/* Privacy */}
            <p className="text-sm text-gray-600 mt-4">
              Your Quick Chat is anonymous and helps make the team environment
              stronger for everyone.
            </p>
          </>
        ) : (
          // Video iframe
          <div className="w-full h-[70vh] flex items-center justify-center">
            <iframe
              src="https://www.videoask.com/fqqlzbxwp"
              allow="camera; microphone; autoplay; encrypted-media;"
              className="w-full h-full border-0 rounded-3xl shadow-2xl"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      {/* Animation */}
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
      `}</style>
    </main>
  );
}
