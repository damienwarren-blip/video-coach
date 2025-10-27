"use client";
import { useState, useEffect } from "react";

export default function AthleteFeedback() {
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
        <div className="w-full h-full bg-gradient-to-br from-amber-500 via-rose-700 to-amber-800 animate-gradient-x"></div>

        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-36 h-36 bg-rose-300/20 rounded-full filter blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-16 w-56 h-56 bg-amber-300/20 rounded-full filter blur-2xl animate-bounce-slow"></div>

        {/* Sports icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4/5 max-w-2xl text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6a3 3 0 11-3 3 3 3 0 013-3zm-2.25 9.75a4.5 4.5 0 019 0V21h-9z"
            />
          </svg>
        </div>
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
              Let’s Talk Team
            </h1>

            {/* Subheader */}
            <p className="text-gray-800 mb-4 text-base sm:text-lg leading-relaxed">
              Your perspective helps shape how we train, play, and perform.
              We’re all part of the same team — and every voice counts.
            </p>

            {/* Trust-building section */}
            <div className="text-gray-800 mb-4 text-base sm:text-lg leading-relaxed">
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg
                  className="w-6 h-6 text-amber-700"
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
                <span className="font-semibold text-amber-700 text-xl sm:text-2xl">
                  Be honest. Be heard.
                </span>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>• How’s motivation in the group?</li>
                <li>• What’s helping — or holding us back?</li>
                <li>• What would make training or feedback better?</li>
              </ul>
            </div>

            {/* CTA */}
            <p className="text-gray-800 mb-6 text-base sm:text-lg leading-relaxed">
              <strong className="text-xl sm:text-2xl text-rose-700">
                Ready to speak up?
              </strong>{" "}
              Share your thoughts in a short video — your input shapes how we
              perform and grow together.
            </p>

            {/* Start button */}
            <button
              onClick={handleStart}
              className="px-10 py-3 sm:px-12 sm:py-4 rounded-xl text-white font-semibold shadow-lg transition bg-gradient-to-r from-rose-700 to-amber-600 hover:from-rose-800 hover:to-amber-700 transform hover:scale-105"
            >
              Let’s Talk
            </button>

            {/* Privacy note */}
            <p className="text-sm text-gray-600 mt-4">
              Your responses are private and used only to help coaches and
              teammates improve together.
            </p>
          </>
        ) : (
          // Videoask iframe
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

      {/* Animations */}
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
