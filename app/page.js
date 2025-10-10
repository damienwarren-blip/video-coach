// app/page.js
import React from "react";

function IconChat(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconChart(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="none" aria-hidden {...props}>
      <rect x="3" y="11" width="4" height="9" rx="1.2" fill="currentColor"/>
      <rect x="10" y="6" width="4" height="14" rx="1.2" fill="currentColor"/>
      <rect x="17" y="3" width="4" height="17" rx="1.2" fill="currentColor"/>
    </svg>
  );
}
function IconTrophy(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <path d="M8 7h8a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a2 2 0 0 1 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 3v3M17 3v3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 21h6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconPlay(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M5 3v18l15-9L5 3z" />
    </svg>
  );
}
function IconBuilding(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <rect x="3" y="3" width="14" height="18" rx="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 7h2M7 11h2M11 7h2M11 11h2M7 15h2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 21V7h-2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconUsers(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-6 py-12 space-y-20">
      {/* HERO */}
      <section className="relative text-center max-w-4xl space-y-6 mx-auto">
        <div className="absolute inset-0 -z-10">
          <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#bfdbfe" stopOpacity="0.28" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0.18" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g1)" />
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          The Performance Edge
        </h1>

        <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
          The VideoCoach — next-generation coaching that analyzes private video dialogue with AI to deliver fast,
          actionable insights on team health and engagement.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
          <a className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-500" href="#contact">Get Started</a>
          <a className="inline-block px-6 py-3 border border-slate-200 text-slate-700 rounded-full hover:bg-slate-50" href="#cases">See case studies</a>
        </div>

        {/* Video wrapper: fixed aspect ratio (16:9) using padding-top method */}
        <div className="mt-10 flex justify-center w-full">
          <div
            className="w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden bg-black"
            style={{ position: "relative", paddingTop: "56.25%" }} // 16:9
          >
            <iframe
              src="https://www.videoask.com/fjtaofiub"
              title="VideoAsk"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allow="camera; microphone; autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
            <IconChat className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Conversations @ Scale</h3>
          <p className="text-slate-600">Engage players, teams, or employees through asynchronous video dialogue.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
            <IconChart className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Better Insights</h3>
          <p className="text-slate-600">Instant sentiment, trend and theme summaries with actionable clarity.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
            <IconTrophy className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Better Results</h3>
          <p className="text-slate-600">Drive measurable performance impact across teams and organisations.</p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="max-w-6xl w-full mt-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-900">Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
              <IconPlay className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold">Sports Clubs</h3>
            <p className="text-slate-600 mt-2">Building mentally resilient teams through feedback and dialogue.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
              <IconBuilding className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold">Business</h3>
            <p className="text-slate-600 mt-2">Transforming employee engagement and coaching at scale.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
              <IconUsers className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold">High-Performance Teams</h3>
            <p className="text-slate-600 mt-2">Driving alignment, resilience, and measurable performance.</p>
          </div>
        </div>
      </section>

      {/* CTA (simple) */}
      <section id="contact" className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Ready to see results?</h2>
        <p className="text-lg text-slate-700">Book a demo and see how VideoCoach can transform team performance.</p>
        <a className="inline-block mt-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition font-medium" href="#contact">Book a Demo</a>
      </section>

      <footer className="text-slate-500 text-sm text-center mt-12">
        <p>© 2025 Performance Edge. All rights reserved.</p>
      </footer>
    </main>
  );
}
