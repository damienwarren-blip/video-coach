import React from "react";
import { UsersIcon, ChartBarIcon, AcademicCapIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-6 py-12 space-y-16">

      {/* Hero Section */}
      <section className="text-center max-w-4xl space-y-6">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full shadow-lg animate-pulse">
              <PlayCircleIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
              Video Coach
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
          The Video Coach — The next-generation coaching platform - we deliver fast, affordable human insight with 3× higher response rates than tradional surveys that reveal what truly drives high performance teams.
          </p>
          <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition font-medium text-lg">
            Press Play to Get Started
          </button>
        </div>

        {/* Centered VideoAsk Embed - Taller */}
        <div className="mt-8 flex justify-center w-full">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl h-[480px] sm:h-[600px] md:h-[720px] shadow-lg rounded-xl overflow-hidden">
            <iframe
              src="https://www.videoask.com/fjtaofiub"
              title="VideoAsk"
              className="w-full h-full rounded-xl object-cover"
              allow="camera; microphone; autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="max-w-5xl w-full mt-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Key Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <UsersIcon className="h-10 w-10 text-blue-400 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Better Data</h3>
            <p className="text-gray-600">Employees, Customers, Teams.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <ChartBarIcon className="h-10 w-10 text-green-400 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Better Insights</h3>
            <p className="text-gray-600">Measurable, actionable insights instantly.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <AcademicCapIcon className="h-10 w-10 text-purple-400 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Better Results</h3>
            <p className="text-gray-600">Real performance impact on key metrics.</p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-5xl w-full mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <UsersIcon className="h-10 w-10 text-blue-400 mb-2" />
            <h3 className="text-lg font-semibold mb-2">Sports Clubs</h3>
            <p className="text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <ChartBarIcon className="h-10 w-10 text-green-400 mb-2" />
            <h3 className="text-lg font-semibold mb-2">Business</h3>
            <p className="text-gray-500"></p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <AcademicCapIcon className="h-10 w-10 text-purple-400 mb-2" />
            <h3 className="text-lg font-semibold mb-2">High Performance Teams</h3>
            <p className="text-gray-500"></p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Ready to see results?
        </h2>
        <p className="text-gray-700 mb-6">
          Book a demo and see how Video Coach can transform team performance.
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
