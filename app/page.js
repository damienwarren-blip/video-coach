import React from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  TrophyIcon,
  PlayCircleIcon,
  BuildingOffice2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6 py-12 space-y-20">
      
      {/* Hero Section */}
      <section className="relative text-center max-w-4xl space-y-6 mx-auto">
        {/* Decorative background shape */}
        <div className="absolute inset-0 -z-10">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <polygon points="0,0 100%,0 100%,100" fill="url(#grad)" />
          </svg>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 drop-shadow-md">
          The Performance Edge
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 drop-shadow-sm">
          The VideoCoach — The next-generation coaching platform. It analyzes private video dialogue
          (like this one!) with AI to provide quick, actionable insights on team health and engagement,
          driving measurable results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition font-medium text-lg">
            Get Started
          </button>
          <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition font-medium text-lg">
            Learn More
          </button>
        </div>

        {/* VideoAsk Embed */}
        <div className="mt-12 flex justify-center w-full">
          <div className="w-full max-w-md sm:max-w-2xl rounded-3xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.videoask.com/fjtaofiub"
              title="VideoAsk"
              className="w-full h-[500px] sm:h-[600px] object-cover"
              allow="camera; microphone; autoplay"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-center mt-10">
        <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <ChatBubbleBottomCenterTextIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Conversations @ Scale</h3>
          <p className="text-gray-600">
            Engage players, teams, or employees through asynchronous video dialogue.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <ChartBarIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Better Insights</h3>
          <p className="text-gray-600">
            Instant sentiment, trend, and theme summaries with actionable clarity.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <TrophyIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Better Results</h3>
          <p className="text-gray-600">
            Drive measurable performance impact across teams and organizations.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-6xl w-full mt-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <PlayCircleIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sports Clubs</h3>
            <p className="text-gray-600">
              Building mentally resilient teams through feedback & dialogue.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <BuildingOffice2Icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Businesses</h3>
            <p className="text-gray-600">
              Enabling authentic communication & engagement at every level.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <UsersIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">High-Performance Teams</h3>
            <p className="text-gray-600">
              Driving team alignment and sustained elite performance culture.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm text-center space-y-2 mt-20">
        <p>© 2025 Performance Edge. All rights reserved.</p>
        <p>
          <a href="#" className="underline hover:text-gray-700">Privacy Policy</a> |{" "}
          <a href="#" className="underline hover:text-gray-700">Terms of Service</a>
        </p>
      </footer>
    </main>
  );
}
