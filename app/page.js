import React from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6 py-12 space-y-20">

      {/* Hero Section */}
      <section className="text-center max-w-3xl space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
          The Performance Edge
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          The VideoCoach — the next-generation coaching platform. It analyzes private video dialogue with advanced AI to deliver fast, actionable insights on team health and engagement.
        </p>

        {/* VideoAsk Embed */}
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-2xl aspect-video rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.videoask.com/fjtaofiub"
              title="VideoAsk"
              className="w-full h-full"
              allow="camera; microphone; autoplay"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <ChatBubbleBottomCenterTextIcon className="mx-auto h-12 w-12 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Conversations @ Scale</h3>
          <p className="text-gray-600">Employees, Customers, Team</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <ChartBarIcon className="mx-auto h-12 w-12 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Better Insights</h3>
          <p className="text-gray-600">Measurable, actionable insights</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <RocketLaunchIcon className="mx-auto h-12 w-12 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Better Results</h3>
          <p className="text-gray-600">Real performance impact</p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Sports Clubs</h3>
          <p className="text-gray-600">See how teams improve performance</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Business</h3>
          <p className="text-gray-600">Transform employee engagement</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">High-Performance Teams</h3>
          <p className="text-gray-600">Unlock full potential and results</p>
        </div>
      </section>

      {/* CTA (Simple Text Style) */}
      <section className="text-center space-y-4 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Ready to see results?
        </h2>
        <p className="text-lg text-gray-700">
          Book a demo and see how VideoCoach can transform team performance.
        </p>
        <button className="mt-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition font-medium text-lg">
          Book a Demo
        </button>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm text-center space-y-2">
        <p>© 2025 Performance Edge. All rights reserved.</p>
        <p>
          <a href="#" className="underline hover:text-gray-700">Privacy Policy</a> |{" "}
          <a href="#" className="underline hover:text-gray-700">Terms of Service</a>
        </p>
      </footer>
    </main>
  );
}
