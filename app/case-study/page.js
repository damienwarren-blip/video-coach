'use client';
import React, { useState } from 'react'; // Import useState
import { motion } from 'framer-motion';

// The component is renamed to 'App' for compatibility with the execution environment
export default function App() {
  // State to control the checkbox and button activity
  const [strategyAgreed, setStrategyAgreed] = useState(false);
  
  // Define the CTA email target once for easy updates (copied from main page)
  const ctaLink = "mailto:damien@quickchat.space?subject=I want to hear my people&body=Hey Damien – let’s talk about how QuickChat can help us really listen.%0A%0ATeam size: %0ACurrent challenge: ";

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER & BACK BUTTON */}
        <a href="/" className="text-pink-400 hover:text-pink-300 font-bold mb-12 block transition duration-300 ease-in-out">
          ← Back to Homepage
        </a>

        {/* 1. HERO & METRICS */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <p className="text-xl text-cyan-400 font-semibold mb-4 tracking-wider">
            ZEUS SCOOTERS • CUSTOMER CHURN
          </p>
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-white bg-clip-text text-transparent leading-tight">
            How QuickChat Unlocked 3X Churn Insights for Zeus Scooters.
          </h1>
          
          {/* Metrics/Outcome Strip - Added backdrop-blur and shadow for visual pop */}
          <div className="mt-12 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-8 p-6 border-y border-pink-700/50 backdrop-blur-sm bg-white/5 rounded-xl">
            {/* Metric 1: 3X */}
            <div className="text-center">
              <div className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">3×</div>
              <p className="text-white/70 text-sm md:text-base mt-2">Participation Rate vs. Surveys</p>
            </div>
            {/* Metric 2: 150K */}
            <div className="text-center">
              <div className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">150K</div>
              <p className="text-white/70 text-sm md:text-base mt-2">German Customers Contacted</p>
            </div>
            {/* Metric 3: Revenue Recovery (UPDATED) */}
            <div className="text-center">
              <div className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">€900K</div>
              <p className="text-white/70 text-sm md:text-base mt-2">annual projected revenue recovery</p>
            </div>
          </div>
        </motion.div>

        {/* 2. THE CHALLENGE */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-rose-400">
            The Challenge: The Cost of Silent Churn
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Zeus Scooters was battling a critical customer retention crisis. Their reliance on traditional email surveys yielded a <strong>sub-1% engagement rate</strong>, providing only shallow, multiple-choice data. This meant they were unable to determine the true 'why' behind their escalating churn—a problem costing them <strong>significant annual revenue</strong>. To solve this, <strong>the Irish management team needed a culturally appropriate, German-speaking, high-engagement method</strong> to truly listen to their massive German user base: 150,000 customers across 30 cities.
          </p>
        </section>

        {/* 3. THE APPROACH & OUTCOME */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-rose-400">
            The Solution: Video at Scale
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            QuickChat implemented a <strong>high-impact, interactive video campaign</strong>, strategically distributed across email, in-app, and social channels. This personalized, mobile-first approach, delivered entirely in German, was specifically engineered to mirror the casual, high-speed brand experience of Zeus Scooters. The result was immediate: QuickChat achieved a <strong>3X higher participation rate</strong> than traditional surveys and, crucially, delivered the <strong>rich, qualitative 'why'</strong> necessary to understand and solve their retention problems.
          </p>
          
          <div className="mt-12 p-8 bg-pink-900/20 rounded-xl border border-pink-700/50 shadow-2xl shadow-pink-900/40">
            <h3 className="text-2xl font-bold mb-4 text-pink-300">Key Results:</h3>
            {/* Broken down the high-level metrics into clear, actionable bullets */}
            <ul className="list-disc list-inside space-y-3 text-lg text-white/80 pl-4">
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
        <section className="mt-20 py-16 bg-gradient-to-r from-purple-900/30 to-black rounded-xl border border-purple-700/50">
          <figure className="max-w-4xl mx-auto px-8 text-center">
            <blockquote className="text-4xl italic font-light leading-snug text-white">
              “You’ve given me a <strong>step-by-step guide to reduce churn</strong>. We went from guessing to knowing exactly which button to press to fix our problem.”
            </blockquote>
            <figcaption className="mt-8 text-2xl font-bold text-cyan-400">
              — Chris Kemp / Deputy CEO, Zeus Scooters
            </figcaption>
          </figure>
        </section>
        
        {/* FINAL CTA - New design based on uploaded image */}
        <div className="text-center mt-20 pb-20">
          <div className="max-w-lg mx-auto space-y-6">

            {/* Disclosure Checkbox */}
            <div className="flex items-start justify-center text-sm text-white/70">
              <div className="p-4 border border-pink-700/50 rounded-lg bg-white/5 backdrop-blur-sm w-full mx-auto shadow-md">
                <label className="flex items-start space-x-3 cursor-pointer">
                  {/* Checkbox now controls the strategyAgreed state */}
                  <input 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 text-pink-500 bg-black border-pink-500 rounded focus:ring-pink-500 checked:bg-pink-500 appearance-none transition duration-150 ease-in-out" 
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
              // Link is only active if agreed
              href={strategyAgreed ? ctaLink : "#"}
              // Motion properties controlled by state for enabled/disabled effects
              whileHover={strategyAgreed ? { scale: 1.03, y: -1 } : { scale: 1.0 }}
              whileTap={strategyAgreed ? { scale: 0.98 } : { scale: 1.0 }}
              
              className={`flex items-center justify-center w-full px-12 py-5 text-xl font-bold rounded-full shadow-2xl transition-all duration-300 ease-in-out
                ${strategyAgreed
                  // Active State Styling: Added active:bg-pink-700 for the click color
                  ? "bg-gray-800 text-white hover:bg-gray-700 active:bg-pink-700 active:shadow-pink-700/50 cursor-pointer" 
                  // Disabled State Styling
                  : "bg-gray-800/50 text-gray-500 cursor-not-allowed shadow-none"
                }`} 
              
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              
              // Prevent navigation if not agreed
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