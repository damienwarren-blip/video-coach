"use client";
import { useState, useEffect } from "react";

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
            {/* Header */}
            <h1 className="text-4xl font-bold mb-4 text-gray-900 drop-shadow-md">
              Let’s Chat — Your Feedback Matters
            </h1>
            <p className="text-lg mb-6 text-gray-800 leading-relaxed">
              You're not just a customer — you're our partner in building something extraordinary. Your experience matters, and we're here to listen.
            </p>

            {/* Feedback powers our evolution section */}
            <div className="text-gray-800 mb-6 text-lg leading-relaxed">
              <div className="flex items-center justify-center gap-2 mb-3">
                <svg className="w-6 h-6 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
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

            {/* Call to Action */}
            <p className="text-gray-800 mb-6 text-lg leading-relaxed">
              <strong className="text-xl">Ready to share your thoughts?</strong> Press the button below to start a conversation — it only takes a few minutes, and your insights will directly shape what we do next.
            </p>

            <button
              onClick={handleStart}
              className="px-12 py-4 rounded-xl text-white font-semibold shadow-lg transition bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 transform hover:scale-105"
            >
              Start Conversation
            </button>

            {/* Privacy notice */}
            <p className="text-sm text-gray-600 mt-6">
              Your responses are anonymous and used solely to improve our service. We handle your feedback with care and never share it with third parties.
            </p>
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
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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
