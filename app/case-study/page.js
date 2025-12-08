'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [strategyAgreed, setStrategyAgreed] = useState(false);
  const ctaLink = "mailto:damien@quickchat.space?subject=I want to hear my people&body=Hey Damien – let's talk about how QuickChat can help us really listen.%0A%0ATeam size: %0ACurrent challenge: ";

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* HEADER & BACK BUTTON */}
        <a href="/" className="text-pink-400 hover:text-pink-300 font-bold mb-12 block transition duration-300 ease-in-out">
          ← Back to Homepage
        </a>

        {/* 1. HERO & METRICS */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <p className="text-xl text-cyan-600 font-bold mb-4 tracking-wider">
            ZEUS SCOOTERS • CUSTOMER CHURN
          </p>
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            How QuickChat Unlocked 3X Churn Insights for Zeus Scooters.
          </h1>

          {/* Metrics/Outcome Strip - Fixed for mobile */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 p-6 border-y border-gray-300 bg-gray-50 rounded-xl">
            {/* Metric 1: Revenue Recovery (€900K) */}
            <div className="text-center py-4">
              <div className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">€900K</div>
              <p className="text-gray-700 text-sm md:text-base mt-2 font-medium">annual projected revenue recovery</p>
            </div>
            {/* Metric 2: Win-back Goal (10K) */}
            <div className="text-center py-4">
              <div className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">10K</div>
              <p className="text-gray-700 text-sm md:text-base mt-2 font-medium">customers targeted for win-back Q1</p>
            </div>
            {/* Metric 3: Strategy Delivered (<7 days) */}
            <div className="text-center py-4">
              <div className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{'<7'}</div>
              <p className="text-gray-700 text-sm md:text-base mt-2 font-medium">Strategy delivered in days</p>
            </div>
          </div>
        </motion.div>

        {/* 2. THE CHALLENGE */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-rose-600">
            The Challenge: The Cost of Silent Churn
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed font-medium">
            Zeus Scooters was battling a critical customer retention crisis. Their reliance on traditional email surveys yielded a <strong>sub-1% engagement rate</strong>, providing only shallow, multiple-choice data. This meant they were unable to determine the true 'why' behind their escalating churn—a problem costing them <strong>significant annual revenue</strong>. To solve this, <strong>the Irish management team needed a culturally appropriate, German-speaking, high-engagement method</strong> to truly listen to their massive German user base: 150,000 customers across 30 cities.
          </p>
        </section>

        {/* 3. THE APPROACH & OUTCOME */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-rose-600">
            The Solution: Video at Scale
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed font-medium">
            QuickChat implemented a <strong>high-impact, interactive video campaign</strong>, strategically distributed across email, in-app, and social channels. This personalized, mobile-first approach, delivered entirely in German, was specifically engineered to mirror the casual, high-speed brand experience of Zeus Scooters. The result was immediate: QuickChat achieved a <strong>3X higher participation rate</strong> than traditional surveys and, crucially, delivered the <strong>rich, qualitative 'why'</strong> necessary to understand and solve their retention problems.
          </p>

          <div className="mt-12 p-8 bg-pink-50 rounded-xl border border-pink-200 shadow-2xl shadow-pink-200/40">
            <h3 className="text-2xl font-bold mb-4 text-pink-600">Key Results:</h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 pl-4 font-medium">
              <li>
                <strong>Rapid Strategy:</strong> Full strategic blueprint delivered in less than seven days from campaign launch.
              </li>
              <li>
                <strong>Financial Impact:</strong> €900K annual projected revenue recovery, achieved at only 30% of the cost of new customer acquisition.
              </li>
              <li>
                <strong>Win-Back Goal:</strong> Targeted initiatives to win back 10,000 high-value customers in the next quarter by directly addressing specific churn reasons.
              </li>
              <li>
                <strong>Root Cause Action:</strong> Identified and prioritized the top 3 operational friction points for immediate resolution across all 30 German cities.
              </li>
            </ul>
          </div>
        </section>

        {/* 4. THE QUOTE & CONCLUSION */}
        <section className="mt-20 py-16 bg-gradient-to-r from-purple-50 to-gray-50 rounded-xl border border-purple-200">
          <figure className="max-w-4xl mx-auto px-8 text-center">
            <blockquote className="text-4xl italic font-semibold leading-snug text-gray-900">
              "You've given me a <strong>step-by-step guide to reduce churn</strong>. We went from guessing to knowing exactly which button to press to fix our problem."
            </blockquote>
            <figcaption className="mt-8 text-2xl font-bold text-cyan-600">
              — Chris Kemp / Deputy CEO, Zeus Scooters
            </figcaption>
          </figure>
        </section>

        {/* FINAL CTA */}
        <div className="text-center mt-20 pb-20">
          <div className="max-w-lg mx-auto space-y-6">

            {/* Disclosure Checkbox */}
            <div className="flex items-start justify-center text-sm text-gray-700">
              <div className="p-4 border border-pink-300 rounded-lg bg-gray-50 w-full mx-auto shadow-md">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 text-pink-500 bg-white border-2 border-pink-500 rounded focus:ring-pink-500 checked:bg-pink-600 checked:border-transparent appearance-none transition duration-150 ease-in-out" 
                    required 
                    checked={strategyAgreed}
                    onChange={() => setStrategyAgreed(!strategyAgreed)}
                  />
                  <span>
                    By checking, you agree to the temporary capture of your name and email address for scheduling purposes.
                  </span>
                </label>
              </div>
            </div>

            {/* Button */}
            <motion.a
              href={strategyAgreed ? ctaLink : "#"}
              whileHover={strategyAgreed ? { scale: 1.03, y: -1 } : { scale: 1.0 }}
              whileTap={strategyAgreed ? { scale: 0.98 } : { scale: 1.0 }}
              className={`flex items-center justify-center w-full px-12 py-5 text-xl font-bold rounded-full shadow-2xl transition-all duration-300 ease-in-out
                ${strategyAgreed
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-pink-500/50 cursor-pointer" 
                  : "bg-gray-200 text-gray-500 cursor-not-allowed shadow-none"
                }`} 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={(e) => { !strategyAgreed && e.preventDefault(); }}
            >
              Book Your Strategy Call &rarr;
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}