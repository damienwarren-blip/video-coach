import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6 py-12 space-y-16">

      {/* Hero Section */}
      <section className="text-center max-w-3xl space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
          The Performance Edge
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          The VideoCoach — The next-generation coaching platform. It analyzes private video dialogue (like this one!) with sophisticated AI to provide quick, actionable insights on team health and engagement, driving measurable results.
        </p>
        <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition font-medium text-lg">
          Get Started
        </button>

        {/* Centered VideoAsk Embed - Taller */}
        <div className="mt-8 flex justify-center w-full">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl h-[480px] sm:h-[600px] md:h-[720px] shadow-lg rounded-xl overflow-hidden">
            <iframe
              src="https://www.videoask.com/fjtaofiub"
              title="VideoAsk"
              className="w-full h-full rounded-xl object-cover"
              allow="camera; microphone; autoplay"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Conversations @ Scale</h3>
          <p className="text-gray-600 text-center">Employees, Customers, Team</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Better Insights </h3>
          <p className="text-gray-600 text-center">Meaureable, Actionable insights</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Better Results</h3>
          <p className="text-gray-600 text-center">Real performance Impact</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm text-center space-y-2">
        <p>© 2025 Performance Edge. All rights reserved.</p>
        <p>
          <a href="#" className="underline hover:text-gray-700">Privacy Policy</a> | 
          <a href="#" className="underline hover:text-gray-700">Terms of Service</a>
        </p>
      </footer>
    </main>
  );
}
