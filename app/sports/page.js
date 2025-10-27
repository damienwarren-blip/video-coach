"use client";
import { useState, useEffect } from "react";
import { Flame, Activity } from "lucide-react";

export default function QuickChatAthlete() {
  const [showVideo, setShowVideo] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => setFadeIn(true), []);
  const handleStart = () => setShowVideo(true);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-800 via-amber-600 to-rose-700 animate-gradient-x"></div>

      {/* Energy lines */}
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

      {/* Main card */}
      <div
        className={`relative z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center transition-all duration-700 ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Faint internal sports mark (behind text) */}
        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.2),transparent_70%)]"></div>

        {!showVideo ? (
          <>
            {/* Title with sports icon */}
            <div className="flex justify-center items-center gap-2 mb-4 relative z-10">
              <Activity className="w-7 h-7 text-rose-700" strokeWidth={2} />
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 drop-shadow-md">
                Quick Chat
              </h1>
            </div>

            <p className="text-amber-700 font-medium text-lg sm:text-xl mb-4 relative z-10">
              Your voice. Your team. Your performance.
            </p>

            <p className="text-gray-800 mb-4 text-base sm:text-lg leading-relaxed relative z-10">
              Every strong team thrives on trust and open feedback.  
              <span className="block mt-1">
                Quick Chat helps you share how you’re feeling, performing, and
                connecting — quickly and confidently.
              </span>
            </p>

            <div className="text-gray-800 mb-5 text-base sm:text-lg leading-relaxed relative z-10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Flame className="w-6 h-6 text-amber-600" />
                <span className="font-semibold text-rose-700 text-xl sm:text-2xl">
                  Be real. Be heard.
                </span>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>• How’s training energy this week?</li>
                <li>• What’s helping you perform?</li>
                <li>• What can we do better as a team?</li>
              </ul>
            </div>

            <p className="text-gray-800 mb-6 text-base sm:text-lg leading-relaxed relative z-10">
              <strong className="text-xl sm:text-2xl text-rose-700">
                Ready for a Quick Chat?
              </strong>{" "}
              It’s private, simple, and helps your coach understand what you need to perform your best.
            </p>

            {/* CTA */}
            <button
              onClick={handleStart}
              className="px-10 py-3 sm:px-12 sm:py-4 rounded-xl text-white font-semibold shadow-lg transition bg-gradient-to-r from-rose-700 to-amber-600 hover:from-rose-800 hover:to-amber-700 transform hover:scale-105 relative z-10"
            >
              Start Quick Chat
            </button>

            <p className="text-sm text-gray-600 mt-4 relative z-10">
              Your Quick Chat is anonymous and helps strengthen team culture.
            </p>
          </>
        ) : (
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

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
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
