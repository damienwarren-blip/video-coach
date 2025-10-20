"use client";
import { useState } from "react";
import Image from "next/image";

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
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-gray-800"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="backdrop-blur-md bg-white/85 rounded-3xl shadow-lg p-10 max-w-2xl text-center leading-relaxed">
        {!showVideo ? (
          <>
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <Image
                src="/logo-play-icon.png"
                alt="Video Coach Logo"
                width={60}
                height={60}
                className="opacity-90"
              />
            </div>

            <h1 className="text-3xl font-semibold mb-2 text-blue-700">
              Welcome to Video Coach
            </h1>

            <p className="text-lg text-gray-700 mb-4 font-medium">
              We really want your voice to be heard.
            </p>

            <p className="text-gray-700 mb-6">
              Your voice matters. Your privacy is protected. We collect team
              insights, not individual identities — so real problems get fixed,
              fast.
            </p>

            <p className="text-gray-700 mb-6">
              We’re testing a new tool to help teams and leaders gain better
              insights into performance and engagement. Your participation helps
              us improve and refine this experience.
            </p>

            <div className="text-sm text-gray-700 text-left mb-6 bg-blue-50 rounded-xl p-5 space-y-2">
              <p className="font-medium">Before you start:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Your responses (video, text, Likert scales) are fully anonymous.</li>
                <li>Please do not include names, emails, or other personal identifiers.</li>
                <li>Responses may be processed by AI to generate aggregated reports.</li>
                <li>
                  Data is stored securely and deleted automatically 30 days after
                  report delivery.
                </li>
                <li>You can stop participating at any time.</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mb-8">
              Questions? Contact us at{" "}
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
