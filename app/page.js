// app/page.js
import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Performance Edge — VideoCoach for team health & engagement</title>
        <meta name="description" content="The Performance Edge: Next-gen VideoCoach. Analyze private video dialogue with AI to deliver actionable insights on team health, engagement and measurable performance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="The Performance Edge — VideoCoach" />
        <meta property="og:description" content="Next-gen VideoCoach: AI-driven analysis of private video dialogue for team health and measurable engagement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://VIDEO_COACH_YOUR_DOMAIN" />
        <meta property="og:image" content="https://VIDEO_COACH_YOUR_DOMAIN/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Performance Edge — VideoCoach" />
        <meta name="twitter:description" content="AI-driven analysis of private video dialogue for team health and measurable engagement." />

        <link rel="canonical" href="https://VIDEO_COACH_YOUR_DOMAIN/" />
        {/* Preconnect typical CDNs or analytics */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* NAV */}
        <header className="w-full bg-white/90 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-xl font-bold text-slate-800">Performance Edge</div>
              <div className="hidden sm:flex gap-6 text-sm text-slate-600">
                <a href="#services" className="hover:underline">Services</a>
                <a href="#cases" className="hover:underline">Case Studies</a>
                <a href="#contact" className="hover:underline">Contact</a>
              </div>
            </div>
            <div>
              <a href="#contact" className="inline-block bg-slate-900 text-white px-4 py-2 rounded-full text-sm shadow">Get a demo</a>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                The Performance Edge
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-xl">
                The VideoCoach — a next-generation coaching platform that analyzes private video dialogue with powerful AI to surface quick, actionable insights driving measurable team health and engagement improvements.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-500">Book a demo</a>
                <a href="#cases" className="px-6 py-3 border rounded-full text-slate-700 hover:bg-slate-50">See case studies</a>
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                <span>Trusted by</span>
                <div className="flex gap-4 items-center">
                  <div className="h-6 w-16 bg-slate-100 rounded" />
                  <div className="h-6 w-16 bg-slate-100 rounded" />
                  <div className="h-6 w-16 bg-slate-100 rounded" />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center">
              {/* Taller pull-down video container */}
              <div className="w-full max-w-lg md:max-w-xl h-[560px] md:h-[680px] rounded-xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.videoask.com/fjtaofiub"
                  title="VideoAsk"
                  className="w-full h-full"
                  allow="camera; microphone; autoplay"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-slate-900">What we do</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">End-to-end coaching, team diagnostics, and performance measurement.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl shadow">
                <h3 className="font-semibold">Conversations @ Scale</h3>
                <p className="mt-2 text-slate-600 text-sm">Collect and analyze private video dialogues at scale.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow">
                <h3 className="font-semibold">Better Insights</h3>
                <p className="mt-2 text-slate-600 text-sm">Actionable analytics surfaced by AI models.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow">
                <h3 className="font-semibold">Better Results</h3>
                <p className="mt-2 text-slate-600 text-sm">Measureable improvements in team outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section id="cases" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold">Selected case studies</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl shadow">
                <div className="h-40 w-full bg-slate-100 rounded mb-4" />
                <h3 className="font-semibold">Case Study 1</h3>
                <p className="mt-2 text-slate-600 text-sm">Short summary of outcome and ROI.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow">
                <div className="h-40 w-full bg-slate-100 rounded mb-4" />
                <h3 className="font-semibold">Case Study 2</h3>
                <p className="mt-2 text-slate-600 text-sm">Short summary of outcome and ROI.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow">
                <div className="h-40 w-full bg-slate-100 rounded mb-4" />
                <h3 className="font-semibold">Case Study 3</h3>
                <p className="mt-2 text-slate-600 text-sm">Short summary of outcome and ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold">Ready to see results?</h2>
            <p className="mt-2 text-slate-600">Book a demo and see how VideoCoach can transform team performance.</p>
            <div className="mt-6">
              <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-full shadow">Book a demo</a>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-slate-500">
          © 2025 Performance Edge. All rights reserved.
        </footer>
      </main>
    </>
  );
}
