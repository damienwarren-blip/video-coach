"use client";
import { useState, useEffect } from "react";

export default function CoachLanding() {
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
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-amber-500 via-rose-700 to-amber-700 animate-gradient-x"></div>
        <div className="absolute top-10 left-10 w-36 h-36 bg-rose-300/20 rounded-full filter blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-16 w-56 h-56 bg-amber-300/20 rounded-full filter blur-2xl animate-bounce-slow"></div>
      </div>

      {/* Card */}
      <div
        className={`relative z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center transition-opacity duration-700 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {!showVideo ? (
          <>
            {/* Header */}
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 drop-shadow-md">
              Building Stronger Teams
            </h1>

            {/* Subheader */}
            <p className="text-gray-800 mb-4 text-base sm:text-lg leading-relaxed">
              You know your squad — the talent, the personalities, the dynamics.
              But what happens when motivation dips or communication breaks down?
            </p>

            {/* Key message */}
            <div className="text-gray-800 mb-4 text-base sm:text-lg leading-relaxed">
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
                  Your insights matter
                </span>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>• Help us understand your team’s real challenges</li>
                <li>• Share what’s working — and what’s not</li>
                <li>• Shape tools designed for modern coaching demands</li>
              </ul>
            </div>

            {/* CTA */}
            <p className="text-gray-800 mb-6 text-base sm:text-lg leading-relaxed">
              <strong className="text-xl sm:text-2xl text-rose-700">
                Ready to share your coaching experience?
              </strong>{" "}
              Take a short video reflection — it takes just a few minutes and
              helps us build solutions that truly support coaches like you.
            </p>

            {/* Start button */}
            <button
              onClick={handleStart}
              className="px-10 py-3 sm:px-12 sm:py-4 rounded-xl text-white font-semibold shadow-lg transition bg-gradient-to-r from-rose-700 to-amber-600 hover:from-rose-800 hover:to-amber-700 transform hover:scale-105"
            >
              Share Your Perspective
            </button>

            {/* Privacy note */}
            <p className="text-sm text-gray-600 mt-4">
              Your responses are confidential and will be used to improve
              support tools for coaches and athletes.
            </p>
          </>
        ) : (
          // Videoask or feedback iframe
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

