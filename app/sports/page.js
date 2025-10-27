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
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-amber-500 via-rose-700 to-amber-700 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-36 h-36 bg-rose-300/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-56 h-56 bg-amber-300/20 rounded-full filter blur-2xl"></div>
      </div>

      {/* Card */}
      <div
        className={`relative z-10 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center transition-opacity duration-700 overflow-hidden ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Sports motif inside the card */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-64 h-64 text-rose-700"
            fill="currentColor"
          >
            <path d="M47 10a7 7 0 11-7-7 7 7 0 017 7zM34.91 23.45a2 2 0 00-2.38 3.24l6.36 4.68-4.05 8.37a2 2 0 00.21 2l7.26 10.08a2 2 0 003.25-2.3L39.8 39.18l4.3-8.89 3.69 2.71a2 2 0 102.37-3.23zM18.76 26.59a2 2 0 10-2.52 3.12l6.36 5.13-2.28 11.66a2 2 0 103.93.76l2.53-12.93a2 2 0 00-.69-1.9z" />
          </svg>
        </div>

        {!showVideo ? (
          <>
            {/* Header */}
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 drop-shadow-md relative z-10">
              Quick Chat
            </h1>

            {/* Subheader */}
            <p className="text-gray-800 mb-4 text-base sm:text-lg leading-relaxed relative z-10">
              Every athlete on the team matters — from beginners to high performers.{" "}
              <br />
              This is your space to share what's going well and what could be
              better.
            </p>

            {/* Key message */}
            <div className="text-gray-800 mb-4 text-base sm:text-lg leading-relaxed relative z-10">
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
                  Your honesty drives improvement
                </span>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>• Share how the team's feeling and performing</li>
                <li>• Tell us what helps you grow and stay motivated</li>
                <li>• Help create a high-support environment for everyone</li>
              </ul>
            </div>

            {/* CTA */}
            <p className="text-gray-800 mb-6 text-base sm:text-lg leading-relaxed relative z-10">
              It only takes a{" "}
              <strong className="text-xl sm:text-2xl text-rose-700">
                Quick Chat
              </strong>{" "}
              — your feedback helps us support every athlete's journey.
            </p>

            {/* Start button */}
            <button
              onClick={handleStart}
              className="px-10 py-3 sm:px-12 sm:py-4 rounded-xl text-white font-semibold shadow-lg transition bg-gradient-to-r from-rose-700 to-amber-600 hover:from-rose-800 hover:to-amber-700 transform hover:scale-105 relative z-10"
            >
              Start Quick Chat
            </button>

            {/* Disclaimer */}
            <p className="text-sm text-gray-600 mt-4 relative z-10">
              100% confidential — building a progressive and caring sports programme together.
            </p>
          </>
        ) : (
          <div className="w-full h-[70vh] flex items-center justify-center relative z-10">
            <iframe
              src="https://www.videoask.com/fqqlzbxwp"
              allow="camera; microphone; autoplay; encrypted-media;"
              className="w-full h-full border-0 rounded-3xl shadow-2xl"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </main>
  );
}
