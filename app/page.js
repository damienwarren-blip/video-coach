import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6 py-12 space-y-16">

      {/* Hero Section */}
      <section className="text-center max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
          The Performance Edge
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          The VideoCoach — The next-generation coaching platform. It analyzes private video dialogue (like this one!) with sophisticated AI to provide quick, actionable insights on team health and engagement, driving measurable results.
        </p>
        <button className="mt-4 px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition font-medium text-base sm:text-lg">
          Get Started
        </button>

        {/* Responsive VideoAsk Embed */}
        <div className="mt-8 w-full px-4 sm:px-0 flex justify-center">
          <div className="w-full max-w-3xl aspect-video sm:rounded-xl shadow-lg" style={{ minHeight: "300px" }}>
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
          <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
          <p className="text-gray-600">Get your landing page live in minutes with Next.js and Tailwind.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Interactive Video</h3>
          <p className="text-gray-600">Embed VideoAsk and engage visitors with real-time responses.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-600">Looks perfect on mobile, tablet, and desktop screens.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm text-center space-y-2">
        <p>© 2025 Your Company. All rights reserved.</p>
        <p>
          <a href="#" className="underline hover:text-gray-700">Privacy Policy</a> | 
          <a href="#" className="underline hover:text-gray-700">Terms of Service</a>
        </p>
      </footer>
    </main>
  );
}
