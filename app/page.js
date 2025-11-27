import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ShieldCheckIcon,
  HeartIcon,
  SparklesIcon,
  VideoCameraIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  LockClosedIcon,
  PlayCircleIcon, // Added for the new embedded CTA
} from '@heroicons/react/24/solid';

// The main component, renamed from Home to App for consistency
const App = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -700]);

  // State to manage consent for the final strategy call CTA
  const [strategyAgreed, setStrategyAgreed] = useState(false);
  // State to manage consent for the general newsletter signup
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  // NEW STATE: State to manage consent for the VideoAsk chat
  const [videoConsent, setVideoConsent] = useState(false); 

  // CX/Customer Churn Aligned CTA LINKS
  const pilotLink = "/book-cx-pilot-call";
  const videoAskLink = "/listening";
  
  // Revised final CTA link: Now targets both Discovery and Retention
  const finalCTALink = "mailto:damien@quickchat.space?subject=I want to run a QuickChat Discovery & Retention Pilot&body=Hey Damien – let's discuss running a pilot to inform our customer strategy for growth and retention. %0A%0ACompany Turnover: %0ACurrent Churn Rate: %0APrimary Goal (Discovery or Retention): ";


  return (
    <div ref={container} className="relative bg-black overflow-hidden text-white">
      {/* Parallax blobs */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-pink-400/40 via-rose-400/30 to-purple-500/40 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-bl from-fuchsia-400/30 to-violet-500/20 rounded-full blur-3xl" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-tl from-teal-400/30 via-cyan-400/30 to-sky-400/20 rounded-full blur-3xl" />
      </motion.div>

      {/* HERO - LOGO RESTORED, SINGLE-LINE TAGLINE */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 md:pb-32">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 opacity-70 scale-150 md:scale-125 pointer-events-none">
            {/* Image mockups remain */}
            <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl">
              <img src="https://placehold.co/100x178/1f2937/ffffff?text=Mockup+1" alt="Mockup 1" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl translate-y-8 md:translate-y-16">
              <img src="https://placehold.co/100x178/1f2937/ffffff?text=Mockup+2" alt="Mockup 2" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl">
              <img src="https://placehold.co/100x178/1f2937/ffffff?text=Mockup+3" alt="Mockup 3" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl translate-y-8 md:translate-y-16">
              <img src="https://placehold.co/100x178/1f2937/ffffff?text=Mockup+4" alt="Mockup 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} className="text-center z-20 max-w-7xl px-6">
          <h1 className="text-8xl leading-none font-black tracking-tighter md:text-9xl lg:text-[200px] xl:text-[220px]">
            <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-white bg-clip-text text-transparent">Quick</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
          </h1>
          {/* UPDATED TAGLINE: Focus on Strategy, Growth, and Churn with distinct colors */}
          <p className="mt-8 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white/90 max-w-4xl mx-auto">
            Unlock the <span className="font-semibold text-rose-300">Voice</span> of your customers to fuel <span className="font-semibold text-cyan-300">Growth</span> and accelerate <span className="font-semibold text-rose-300">Retention</span>.
          </p>
        </motion.div>
      </section>

      {/* DIVIDER — same style as case study */}
      <div className="border-y border-pink-700/50" />

      {/* VALUE PROP - POLISHED AND CORRECTED */}
      <section className="py-24 md:py-32 px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {/* Problem Statement - EDITED to include WHY! */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-snug bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent max-w-5xl mx-auto">
            We deliver the <span className="text-rose-300">WHY!</span>,<br />
            powering strategic decisions and customer retention.
          </h2>
          {/* UPDATED SOLUTION STATEMENT: "instant strategy" is one color span */}
          <p className="mt-8 md:mt-12 text-3xl md:text-4xl text-white/95 font-medium max-w-4xl mx-auto">
            Our Short interactive videos deliver the <span className="font-extrabold text-cyan-300">instant strategy</span> you need to inform product development, accelerate growth, and prevent churn.
          </p>
        </motion.div>
      </section>

      <div className="border-y border-pink-700/50" />

      {/* VIDEOASK - Keep this section, it's a good feature display. */}
      <section className="pt-20 pb-16 px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
          Have a QuickChat with us
        </motion.h2>
      </section>
      <section className="px-4 md:px-8 -mt-12 pb-24 md:pb-32">
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
          {/* Wrapper for the VideoAsk and the Consent Overlay */}
          <div className="aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative">
            
            {/* The iframe is always present but obscured if consent is not given */}
            <iframe 
              src="https://www.videoask.com/fvk6am2q6" 
              allow="camera; microphone; autoplay; display-capture" 
              className="w-full h-full" 
              title="QuickChat Demo" 
            />
            
            {/* RADICAL EMBEDDED CONSENT: The entire video area becomes the low-friction barrier */}
            {!videoConsent && (
                <div 
                    // Background remains bg-black/40 for good visibility
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 md:p-8 bg-black/40 pointer-events-auto"
                    onClick={() => setVideoConsent(true)} // Click anywhere to consent
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        // INCREASED TRANSPARENCY of the bottom card
                        className="absolute bottom-4 left-0 right-0 p-6 flex flex-col items-center justify-center bg-black/30 backdrop-blur-md rounded-b-2xl md:rounded-b-3xl"
                    >
                        
                        {/* 1. Main Action - Made significantly softer and less harsh */}
                        <motion.button
                            // New Soft/Frosted Styling
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center space-x-4 py-3 px-8 text-2xl font-bold rounded-full border border-white/50 bg-white/10 text-white shadow-lg shadow-fuchsia-900/40 backdrop-blur-sm transition-all duration-300 transform cursor-pointer"
                        >
                            <PlayCircleIcon className="h-8 w-8 text-pink-300" />
                            <span>Click to Start QuickChat</span>
                        </motion.button>

                        {/* 2. Consent Text - Minimal, reduced opacity, small font, integrated below CTA */}
                        <p className="mt-4 text-xs text-gray-400 leading-snug text-center max-w-md">
                            By clicking, you consent to QuickChat processing your voice and personal data solely for sales & discovery purposes.
                            <a href="#" className="ml-1 underline hover:text-gray-300 transition">Privacy Policy</a>
                        </p>
                    </motion.div>
                </div>
            )}
            
          </div>
        </motion.div>
      </section>

      <div className="border-y border-pink-700/50" />

      {/* HOW IT WORKS - NEW HEADING */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-center text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
            Get Actionable Answers in 4 Simple Steps
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-12 mt-20">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><VideoCameraIcon className="h-14 w-14 text-pink-300" /></div></div>
              <h3 className="text-2xl font-bold mb-3">1. Create a personalized video.</h3>
              {/* Updated text to reflect Discovery/Retention scope */}
              <p className="text-white/70">"What is the biggest roadblock to your success?" or "What feature would you miss most?"</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><PaperAirplaneIcon className="h-14 w-14 text-purple-300 rotate-12" /></div></div>
              {/* Updated text to reflect Discovery/Retention scope */}
              <h3 className="text-2xl font-bold mb-3">2. Deploy to key segments</h3>
              <p className="text-white/70">Target growth, product, or at-risk segments via a single link.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><ChatBubbleLeftRightIcon className="h-14 w-14 text-rose-300" /></div></div>
              <h3 className="text-2xl font-bold mb-3">3. Customers reply in their voice</h3>
              {/* EDITED to be shorter and focus on the WHY */}
              <p className="text-white/70">Capturing the WHY so you can act.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><SparklesIcon className="h-16 w-16 text-cyan-300" /></div></div>
              {/* Updated text to reflect Discovery/Retention scope */}
              <h3 className="text-2xl font-bold mb-3">4. Instant Strategy Blueprint</h3>
              <p className="text-white/70">AI analyzes sentiment and pain points. Delivered to your CRM in &lt;48 hours.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="border-y border-pink-700/50" />

      {/* KEY BENEFITS - ROI */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-center text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
            The ROI of Customer Voice
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
              <div className="text-9xl md:text-[180px] font-black leading-none bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">3×</div>
              <p className="mt-6 text-xl md:text-2xl text-white/70">Higher response rates than traditional text-based surveys</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="text-9xl md:text-[180px] font-black leading-none bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">10×</div>
              {/* Updated text to reflect Discovery/Retention scope */}
              <p className="mt-6 text-xl md:text-2xl text-white/70">Get the <span className="font-semibold text-rose-300">WHY</span> behind attrition **and** prioritize future features</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="text-9xl md:text-[180px] font-black leading-none bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">&lt;48h</div>
              {/* Updated text to reflect Discovery/Retention scope */}
              <p className="mt-6 text-xl md:text-2xl text-white/70">From customer question to **strategic action plan**</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="border-y border-pink-700/50" />

      {/* CASE STUDY TEASER - PROMINENT CX CHURN STORY */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60" />

            {/* UPDATED TEXT: European market strategy */}
            <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white/90 leading-tight">
              See how we helped an Irish company use QuickChat to inform their **European market strategy**<br />
              and <span className="font-medium bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent">
                strategically reduce churn in one week
              </span>.
            </p>

            <motion.a
              href="/case-study"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-12 inline-block px-10 py-4 text-lg font-medium text-black bg-white rounded-full shadow-xl hover:shadow-white/40 transition-all duration-300"
            >
              Read the Full Case Study →
            </motion.a>
          </motion.div>
        </div>
      </section>

      <div className="border-y border-pink-700/50" />

      {/* TRUSTED PARTNER - CX Focused */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-center text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
            Your Trusted CX Partner
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><ShieldCheckIcon className="h-16 w-16 text-pink-300" /></div></div>
              {/* UPDATED TEXT: Safe, Secure & Compliant */}
              <h3 className="text-2xl font-bold mb-3">Safe, Secure & Compliant</h3>
              <p className="text-white/70">✓ GDPR • ✓ SOC2 • ✓ End-to-end encryption</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><HeartIcon className="h-16 w-16 text-rose-300" /></div></div>
              <h3 className="text-2xl font-bold mb-3">Made for Global Customers</h3>
              <p className="text-white/70">120+ languages • Fully accessible on any device.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><LockClosedIcon className="h-16 w-16 text-cyan-300" /></div></div>
              <h3 className="text-2xl font-bold mb-3">Impartial Platform</h3>
              <p className="text-white/70">Trusted third-party for unbiased, honest feedback.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - DUAL FOCUS: STRATEGY & PILOT */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
          <h2 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Ready to Inform Your Next<br /><span className="text-cyan-300">Big Strategy</span>?
          </h2>
          {/* UPDATED TEXT: Reflects dual focus and custom pilot */}
          <p className="mt-12 text-2xl md:text-3xl text-white/80 max-w-2xl mx-auto">
            Run a <span className="font-semibold text-white">custom pilot</span> to validate your next feature, find your ideal customer profile, or save at-risk accounts.
          </p>
          
          {/* NEW: PRIVACY NOTICE AND CONSENT CHECKBOX for Strategy Call */}
          <div className="mt-16 mb-8 max-w-lg mx-auto p-4 rounded-xl bg-white/5 shadow-inner shadow-pink-500/10 border border-pink-400/30">
            <label className="flex items-start cursor-pointer text-sm md:text-base text-white/90">
                <input 
                    type="checkbox" 
                    checked={strategyAgreed} 
                    onChange={() => setStrategyAgreed(!strategyAgreed)} 
                    className="mt-1 mr-3 w-5 h-5 form-checkbox accent-pink-500 bg-transparent border-pink-400 rounded-md focus:ring-pink-500 transition duration-150 ease-in-out"
                />
                <span className="text-left leading-snug font-light">
                    By clicking the link, you AGREE for "QuickChat" to capture your personal data (first name, surname, email address) for the sole purpose of emailing you about setting up a strategy call.
                </span>
            </label>
          </div>
          
          <motion.a
            // Link is only active if agreed
            href={strategyAgreed ? finalCTALink : "#"} 
            whileHover={strategyAgreed ? { scale: 1.05 } : { scale: 1.0 }}
            whileTap={strategyAgreed ? { scale: 0.95 } : { scale: 1.0 }}
            className={`mt-8 inline-block px-32 py-16 text-3xl font-bold rounded-full shadow-2xl transition-all duration-300
                ${strategyAgreed 
                    // Active State Styling
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-pink-500/50 cursor-pointer"
                    // Disabled State Styling
                    : "bg-gray-700/50 text-gray-400 cursor-not-allowed shadow-none"
                }`}
            // Prevent navigation if not agreed
            onClick={(e) => { !strategyAgreed && e.preventDefault(); }} 
          >
            Book Your Strategy Call →
          </motion.a>
          

        </motion.div>
      </section>
      
      {/* NEW SECTION: NEWSLETTER SIGNUP (At the end of the site) */}
      <div className="py-16 px-6 text-center border-t border-pink-700/50 bg-black/20">
        <div className="max-w-2xl mx-auto">
            <label className="flex items-center justify-center cursor-pointer text-xl text-white font-medium">
                <input 
                    type="checkbox" 
                    checked={newsletterChecked} 
                    onChange={() => setNewsletterChecked(!newsletterChecked)} 
                    className="mr-3 w-6 h-6 form-checkbox accent-cyan-500 bg-transparent border-cyan-400 rounded-md focus:ring-cyan-500 transition duration-150 ease-in-out"
                />
                <span className="leading-snug">
                    If you would like to receive our company newsletter with marketing & sales updates
                </span>
            </label>
            {newsletterChecked && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 flex flex-col sm:flex-row gap-4"
                >
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-grow p-4 rounded-xl bg-black/50 border border-cyan-400/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 focus:outline-none transition-colors"
                    />
                    <button className="px-6 py-4 rounded-xl font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/30">
                        Subscribe
                    </button>
                </motion.div>
            )}
        </div>
        <p className="mt-16 text-sm text-white/50">
            © 2025 QuickChat. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;