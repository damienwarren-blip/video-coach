'use client'; 
import { motion } from 'framer-motion';

export default function CaseStudyPage() {
  // Define the CTA email target once for easy updates (copied from main page)
  const ctaLink = "mailto:damien@quickchat.space?subject=I want to hear my people&body=Hey Damien – let’s talk about how QuickChat can help us really listen.%0A%0ATeam size: %0ACurrent challenge: ";

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER & BACK BUTTON */}
        <a href="/" className="text-pink-400 hover:text-pink-300 font-bold mb-12 block">
          ← Back to Homepage
        </a>

        {/* 1. HERO & METRICS */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <p className="text-xl text-cyan-400 font-semibold mb-4">
            ZEUS SCOOTERS • CUSTOMER CHURN
          </p>
          {/* Main Headline (Fixed) */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-white bg-clip-text text-transparent leading-tight">
            How QuickChat Unlocked 3X Churn Insights for Zeus Scooters.
          </h1>
          
          {/* Metrics/Outcome Strip - FIX APPLIED HERE */}
          <div className="mt-12 grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-8 p-6 border-y border-pink-700/50">
            {/* Metric 1: 3X */}
            <div className="text-center">
                <div className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">3×</div>
                <p className="text-white/70 text-sm md:text-base">Participation Rate vs. Surveys</p>
            </div>
            {/* Metric 2: 150K */}
            <div className="text-center">
                <div className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">150K</div>
                <p className="text-white/70 text-sm md:text-base">German Customers Contacted</p>
            </div>
            {/* Metric 3: Clear Why */}
            <div className="text-center">
                <div className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Clear Why</div>
                <p className="text-white/70 text-sm md:text-base">Insights Delivered Instantly</p>
            </div>
          </div>
          {/* END FIX */}
        </motion.div>

        {/* 2. THE CHALLENGE (UPDATED) */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-rose-400">
            The Challenge: The Cost of Silent Churn
          </h2>
          <p className="text-lg text-white/80">
            Zeus Scooters was battling a critical customer retention crisis. Their reliance on traditional email surveys yielded a **sub-1% engagement rate**, providing only shallow, multiple-choice data. This meant they were unable to determine the true 'why' behind their escalating churn—a problem costing them **significant annual revenue**. To solve this, **the Irish management team needed a culturally appropriate, German-speaking, high-engagement method** to truly listen to their massive German user base: 150,000 customers across 30 cities.
          </p>
        </section>

        {/* 3. THE APPROACH & OUTCOME (UPDATED) */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-rose-400">
            The Solution: Video at Scale
          </h2>
          <p className="text-lg text-white/80">
            QuickChat implemented a **high-impact, interactive video campaign**, strategically distributed across email, in-app, and social channels. This personalized, mobile-first approach, delivered entirely in German, was specifically engineered to mirror the casual, high-speed brand experience of Zeus Scooters. The result was immediate: QuickChat achieved a **3X higher participation rate** than traditional surveys and, crucially, delivered the **rich, qualitative 'why'** necessary to understand and solve their retention problems.
          </p>
          
          <div className="mt-12 p-8 bg-pink-900/20 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Key Insights Delivered (Actionable, Not Specific)</h3>
              <ul className="list-disc list-inside space-y-3 text-lg text-white/80">
                  <li>**Vehicle Quality:** Solving the **#1 detractor** (defective scooters) is projected to instantly move company NPS from **Critical** to **Healthy** in one quarter.</li>
                  <li>**Pricing:** Targeting the painful **unlock fee + broken scooter** combination is projected to **cut price complaints by half**.</li>
                  <li>**City Operations:** Deploying an intervention blitz in specific **Crisis City hotspots** is targeted to **reverse their negative NPS scores** within 90 days.</li>
              </ul>
          </div>
        </section>

        {/* 4. THE QUOTE & CONCLUSION (UPDATED) */}
        <section className="mt-20 py-16 bg-gradient-to-r from-purple-900/30 to-black rounded-xl">
            <figure className="max-w-4xl mx-auto px-8 text-center">
                <blockquote className="text-4xl italic font-light leading-snug">
                    “You’ve given me a **step-by-step guide to reduce churn**. We went from guessing to knowing exactly which button to press to fix our problem.”
                </blockquote>
                <figcaption className="mt-8 text-2xl font-bold text-cyan-400">
                    — Chris Kemp / Deputy CEO, Zeus Scooters
                </figcaption>
            </figure>
        </section>
        
        {/* FINAL CTA */}
        <div className="text-center mt-20 pb-20">
            <motion.a
                href={ctaLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-12 py-5 text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg hover:shadow-pink-500/50 transition-all"
            >
                Get Your Own Step-by-Step Guide
            </motion.a>
        </div>
      </div>
    </div>
  );
}