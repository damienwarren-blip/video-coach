'use client'; 
import { motion } from 'framer-motion';
// Import any icons you need (e.g., from @heroicons/react/24/solid)

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
          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-white bg-clip-text text-transparent leading-tight">
            How QuickChat Unlocked 3X Churn Insights for Zeus Scooters.
          </h1>
          
          {/* Metrics/Outcome Strip */}
          <div className="mt-12 grid grid-cols-3 gap-8 p-6 border-y border-pink-700/50">
            <div className="text-center">
                <div className="text-7xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">3×</div>
                <p className="text-white/70">Participation Rate vs. Surveys</p>
            </div>
            <div className="text-center">
                <div className="text-7xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">150K</div>
                <p className="text-white/70">German Customers Contacted</p>
            </div>
            <div className="text-center">
                <div className="text-7xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Clear Why</div>
                <p className="text-white/70">Insights Delivered Instantly</p>
            </div>
          </div>
        </motion.div>

        {/* 2. THE CHALLENGE */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-rose-400">
            The Challenge: The Cost of Silent Churn
          </h2>
          <p className="text-lg text-white/80">
            Zeus Scooters was facing a critical customer retention problem. Traditional email surveys were yielding less than 1% engagement and provided only shallow, multiple-choice data. They couldn't determine the true **"why"** behind their churn, estimated to be costing the company hundreds of thousands annually in lost revenue. They needed an empathetic, high-engagement method to truly listen to 150,000 customers in the German market.
          </p>
        </section>

        {/* 3. THE APPROACH & OUTCOME */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-rose-400">
            The Solution: Video at Scale
          </h2>
          <p className="text-lg text-white/80">
            QuickChat implemented an interactive video campaign, delivered directly via email, asking customers short, open-ended questions. This personalized, mobile-first approach was designed to match the casual, high-speed brand experience of Zeus Scooters, resulting in 3X higher participation.
          </p>
          
          <div className="mt-12 p-8 bg-pink-900/20 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Key Insights Delivered (Actionable, Not Specific)</h3>
              <ul className="list-disc list-inside space-y-3 text-lg text-white/80">
                  <li>**Pricing Strategy:** Identified the precise moment of price friction, allowing for surgical adjustment of their monthly subscription tiers.</li>
                  <li>**Critical UX Barrier:** Pinpointed a specific, overlooked interface flow in the application that was causing immediate high-value user abandonment.</li>
                  <li>**Untapped Feature Demand:** Uncovered a high-demand feature request that, when implemented, would increase customer stickiness by an estimated 20%.</li>
              </ul>
          </div>
        </section>

        {/* 4. THE QUOTE & CONCLUSION */}
        <section className="mt-20 py-16 bg-gradient-to-r from-purple-900/30 to-black rounded-xl">
            <figure className="max-w-4xl mx-auto px-8 text-center">
                <blockquote className="text-4xl italic font-light leading-snug">
                    “You’ve given me a **step-by-step guide to reduce churn**. We went from guessing to knowing exactly which button to press to fix our problem.”
                </blockquote>
                <figcaption className="mt-8 text-2xl font-bold text-cyan-400">
                    — [Name/Title], Head of Customer Experience, Zeus Scooters
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