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
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-rose-700 to-amber-800 animate-gradient-x">
        {/* Energy motion lines (sports silhouette effect) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full opacity-10 text-white"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,192L80,213.3C160,235,320,277,480,266.7C640,256,800,192,960,170.7C1120,149,1280,171,1360,181.3L1440,192V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
          ></path>
        </svg>
      </div>

      {/* Floating card */}
      <div
        className={`relative z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10 max-w-lg w-full text-center transition-all duration-700 transform ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {!showVideo ? (
          <>
            {/* Quick Chat header */}
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
                Quick Chat
              </h1>
              <p className="text-amber-700 font-medium text-lg sm:text-xl mt-1 tracking-wide">
                Real voices. Real impact.
              </p>
            </div>

            {/* Intro copy */}
            <p className="text-gray-800 mb-5 text-base sm:text-lg leading-relaxed">
              Every team works best when everyone’s voice is heard.  
              <span className="block mt-1">
                This is your space to share what’s working — and what’s not —
                so we can perform and grow together.
              </span>
            </p>

            {/* Trust element */}
            <div className="text-gray-800 mb-6 text-base sm:text-lg leading-relaxed">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold text-rose-700 text-xl sm:text-2xl">
                  Be open. Be honest.
                </span>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>• How’s motivation across the group?</li>
                <li>• What’s helping or holding you back?</li>
                <li>• What could make training or feedback better?</li>
              </ul>
            </div>

            {/* CTA section */}
            <div className="mt-6">
              <p className="text-gray-800 mb-6 text-base sm:text-lg leading-relaxed">
                <strong className="text-xl sm:text-2xl text-rose-700">
                  Ready for a Quick Chat?
                </strong>{" "}
                It only takes a minute — and what you share could make a real
                difference for the whole squad.
              </p>

              <button
                onClick={handleStart}
                className="px-10 py-3 sm:px-12 sm:py-4 rounded-xl text-white font-semibold shadow-lg transition bg-gradient-to-r from-rose-700 to-amber-600 hover:from-rose-800 hover:to-amber-700 transform hover:scale-105"
              >
                Start Quick Chat
              </button>
            </div>

            {/* Privacy note */}
            <p className="text-sm text-gray-600 mt-5">
              Your Quick Chat is private and helps the coaching team understand
              how to support you better — no names, no pressure.
            </p>
          </>
        ) : (
          // Video view
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

      {/* Subtle motion effects */}
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
