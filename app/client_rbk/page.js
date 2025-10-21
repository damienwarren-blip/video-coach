import { useState, useEffect } from "react";
import { Shield, MessageSquare, Lock, CheckCircle } from 'lucide-react';

export default function VideoCoach() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleStart = () => {
    if (consentGiven) {
      setShowVideo(true);
    } else {
      alert("Please tick the consent box before starting.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-teal-500 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-slate-900">Video Coach</span>
          </div>
        </div>
      </header>

      <main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
        {/* Card */}
        <div
          className={`relative z-10 bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-10 max-w-3xl w-full transition-opacity duration-700 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {!showVideo ? (
            <>
              {/* Header graphic */}
              <div className="w-full flex justify-center mb-6">
                <div className="relative w-full max-w-2xl h-56 bg-gradient-to-br from-purple-600 to-teal-500 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-32 -translate-y-32"></div>
                  <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full translate-x-36 translate-y-36"></div>
                  
                  {/* Single large video/play icon */}
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-16 h-16 text-purple-600 ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                  Video Coach
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  We're designing the next generation of employee surveys — one that ensures your perspective is truly heard and acted upon.
                </p>
              </div>

              {/* How it works box */}
              <div className="bg-gradient-to-r from-purple-600 to-teal-500 rounded-xl p-8 mb-8 text-white">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                  </svg>
                  <h2 className="text-2xl font-bold">How it works</h2>
                </div>
                <div className="max-w-xl mx-auto space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-bold mt-0.5">•</span>
                    <p className="text-lg font-medium">You share your experience and ideas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-bold mt-0.5">•</span>
                    <p className="text-lg font-medium">We keep it confidential</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-bold mt-0.5">•</span>
                    <p className="text-lg font-medium">We work to action your feedback</p>
                  </div>
                </div>
              </div>

              {/* Before you start section */}
              <div className="mb-8">
                <div className="flex items-start gap-4 bg-purple-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Before you start:</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Your responses are fully anonymous.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Please don't include names, emails, or personal identifiers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Responses may be processed by AI to generate aggregated reports.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Data is stored securely and deleted 30 days after report delivery.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <p className="text-sm text-center text-slate-600 mb-8">
                Questions? Contact{" "}
                <a
                  href="mailto:pilot@video-coach.com"
                  className="text-purple-600 underline hover:text-teal-600 font-medium"
                >
                  pilot@video-coach.com
                </a>
              </p>

              {/* Consent checkbox */}
              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 h-5 w-5 text-purple-600 rounded border-slate-300 focus:ring-purple-500"
                    onChange={(e) => setConsentGiven(e.target.checked)}
                  />
                  <span className="text-slate-700 font-medium group-hover:text-purple-600 transition-colors">
                    I understand and consent to take part anonymously.
                  </span>
                </label>
              </div>

              {/* Start button */}
              <button
                onClick={handleStart}
                disabled={!consentGiven}
                className={`w-full px-10 py-4 rounded-xl text-white font-semibold shadow-lg transition-all ${
                  consentGiven
                    ? "bg-gradient-to-r from-purple-600 to-teal-500 hover:shadow-xl hover:scale-105"
                    : "bg-slate-300 cursor-not-allowed"
                }`}
              >
                Start Survey
              </button>
            </>
          ) : (
            // Video iframe
            <div className="w-full h-[600px] flex items-center justify-center">
              <iframe
                src="https://www.videoask.com/fjtaofiub"
                allow="camera; microphone; autoplay; encrypted-media;"
                className="w-full h-full border-0 rounded-xl shadow-2xl"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-teal-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-slate-900">Video Coach</span>
            </div>
            <div className="text-sm text-slate-600">
              © 2025 Video Coach. Your voice, protected and heard.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
