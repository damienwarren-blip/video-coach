"use client";
import { useState } from "react";

export default function ClientRBK() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleStart = () => {
    if (consentGiven) {
      setShowVideo(true);
    } else {
      alert("Please agree to the consent before continuing.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-gray-800">
      {!showVideo ? (
        <div className="max-w-lg text-center bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-2xl font-semibold mb-4">Before You Start</h1>
          <p className="text-gray-600 mb-6">
            This short video exercise is completely anonymous. Please do not share
            any personal information such as names or contact details in your answers.
            Your responses will help us test and improve our model.
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
            className={`px-6 py-3 rounded-xl text-white font-medium transition ${
              consentGiven
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Start
          </button>
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <iframe
            src="https://www.videoask.com/fjtaofiub"
            allow="camera; microphone; autoplay; encrypted-media;"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </main>
  );
}
