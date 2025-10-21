"use client";
import { useState, useEffect } from "react";
import { Sparkles, Heart } from "lucide-react";

export default function CustomerFeedback() {
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
        <div className="w-full h-full bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500 animate-gradient-x"></div>
        <div className="absolute top-10 left-10 w-36 h-36 bg-violet-300/20 rounded-full filter blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-16 w-56 h-56 bg-cyan-300/20 rounded-full filter blur-2xl animate-bounce-slow"></div>
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
              <div className="relative w-full max-w-md h-48 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 rounded-2xl shadow-xl overflow-hidden mb-6">
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
                    We Want to Hear From You
                  </h1>
                  <p className="text-sm font-medium opacity-90">
                    Your Insights Shape Our Future
                  </p>
                </div>
              </div>
            </div>

            {/* Intro */}
            <p className="text-gray-800 mb-6 text-lg leading-relaxed">
              You're not just a customer — you're our partner in building something extraordinary. 
              Your experience matters, and we're here to listen.
            </p>

            {/* How it works */}
            <div className="text-gray-800 mb-6 text-lg leading-relaxed">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Sparkles className="w-6 h-6 text-fuchsia-600" />
                <span className="font-semibold text-fuchsia-600">
                  Your feedback powers our evolution
                </span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Share your honest feedback and brilliant ideas</li>
                <li>• Help us understand what you truly need</li>
                <li>• Watch us transform your insights into action</li>
              </ul>
            </div>

            {/* Privacy notice */}
            <div className="text-gray-700 text-center mb-8 bg-violet-50/80 rounded-xl p-5 shadow-inner">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-fuchsia-600" />
                <p className="font-medium text-fuchsia-600">Your Privacy Matters</p>
              </div>
              <p className="text-sm">
                Your responses are anonymous and used solely to improve our service. 
                We handle your feedback with care and never share it with third parties.
              </p>
            </div>

            {/* Contact */}
            <p className="text-sm text-gray-600 mb-8">
              Questions? Reach out anytime at{" "}
              <a
                href="mailto:hello@video-coach.com"
                className="text-fuchsia-600 underline hover:text-violet-600"
              >
                hello@video-coach.com
              </a>
            </p>

            {/* Start button */}
            <button
              onClick={handleStart}
              className="px-12 py-4 rounded-xl text-white font-semibold shadow-lg transition bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 transform hover:scale-105"
            >
              Share Your Thoughts
            </button>
          </>
        ) : (
          // Video iframe
          <div className="w-full h-[80vh] flex items-center justify-center">
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
