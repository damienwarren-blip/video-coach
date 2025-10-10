import React from "react";
import { AcademicCapIcon, UsersIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6 py-12 space-y-16">

      {/* Hero Section */}
      <section className="text-center max-w-3xl space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <span className="w-6 h-6 bg-blue-600 rounded-full inline-block" />
          Video Coach
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          The VideoCoach — The next-generation coaching platform. It analyzes private video dialogue (like this one!) with sophisticated AI to provide quick, actionable insights on team health and engagement, driving measurable results.
        </p>
        <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition font-medium text-lg">
          Get Started
        </button>

        {/* Video Section */}
        <div className="mt-10 flex justify-center w-full">
          <div className="w-full max-w-3xl aspect-video rounded-2xl shadow-xl overflow-hidden bg-black">
            <iframe
              src="https://www.videoask.com/fjtaofiub"
              title="VideoAsk"
              className="w-full h-full border-0"
              allow="camera; microphone; autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <UsersIcon className="h-10 w-10 text-blue-600 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Conversations @ Scale</h3>
          <p className="text-gray-600 text-center">Employees, Customers, Team</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <ChartBarIcon className="h-10 w-10 text-green-600 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Better Insights</h3>
          <p className="text-gray-600 text-center">Measurable, Actionable Insights</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <AcademicCapIcon className="h-10 w-10 text-purple-600 mb-2" />
          <h3 className="text-xl font-semibold mb-2">Better Results</h3>
          <p className="text-gray-600 text-center">Real Performance Impact</p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <UsersIcon className="h-10 w-10 text-blue-400 mb-2" />
          <h3 className="text-lg font-semibold mb-2">Sports Clubs</h3>
          <p className="text-gray-500">Example placeholder</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <ChartBarIcon className="h-10 w-10 text-green-400 mb-2" />
          <h3 className="text-lg font-semibold mb-2">Business</h3>
          <p className="text-gray-500">Example placeholder</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <AcademicCapIcon className="h-10 w-10 text-purple-400 mb-2" />
          <h3 className="text-lg font-semibold mb-2">High Performance Teams</h3>
          <p className="text-gray-500">Example placeholder</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Ready to see results?
        </h2>
        <p className="text-gray-700 mb-6">
          Book a demo and see how VideoCoach can transform team performance.
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition font-medium text-lg">
          Book a Demo
        </button>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm text-center space-y-2 mt-12">
        <p>© 2025 Performance Edge. All rights reserved.</p>
        <p>
          <a href="#" className="underline hover:text-gray-700">Privacy Policy</a> | 
          <a href="#" className="underline hover:text-gray-700">Terms of Service</a>
        </p>
      </footer>
    </main>
  );
}
