'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ShieldCheckIcon,
  HeartIcon,
  SparklesIcon,
  VideoCameraIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  LockClosedIcon,
} from '@heroicons/react/24/solid';

export default function Home() {
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
            <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl"><img src="/mockup-1.png" alt="" className="w-full h-full object-cover" /></div>
            <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl translate-y-8 md:translate-y-16"><img src="/mockup-2.png" alt="" className="w-full h-full object-cover" /></div>
            <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl"><img src="/mockup-3.png" alt="" className="w-full h-full object-cover" /></div>
            <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl translate-y-8 md:translate-y-16"><img src="/mockup-4.png" alt="" className="w-full h-full object-cover" /></div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} className="text-center z-20 max-w-7xl px-6">
          
          
          <h1 className="text-8xl leading-none font-black tracking-tighter md:text-9xl lg:text-[200px] xl:text-[220px]">
            <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-white bg-clip-text text-transparent">Quick</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
          </h1>
          
          {/* REVISED TAGLINE (User Request) */}
          <p className="mt-8 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-cyan-300 max-w-4xl mx-auto">
            START CREATING WHAT CUSTOMERS LOVE.
          </p>
          
        </motion.div>
      </section>

      {/* DIVIDER — same style as case study */}
      <div className="border-y border-pink-700/50" />

      {/* VALUE PROP - REWRITTEN TO FOCUS ON CUSTOMER KNOWLEDGE */}
      <section className="py-24 md:py-32 px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-6xl mx-auto">
          
          {/* NEW H2 TEXT */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-snug bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent max-w-5xl mx-auto">
            Stop Guessing. Your Customers Already Know the Answers.
          </h2>
          
          {/* NEW BULLETED LIST - High Impact Display */}
          <div className="mt-16 text-3xl md:text-4xl text-left inline-block">
              <p className="font-extrabold text-white">Your customers already know:</p>
              <ul className="mt-4 space-y-3 font-medium text-white/95 leading-normal">
                  <li className="flex items-center"><span className="text-rose-400 text-4xl mr-4">→</span> what’s brilliant about your product</li>
                  <li className="flex items-center"><span className="text-rose-400 text-4xl mr-4">→</span> what’s confusing</li>
                  <li className="flex items-center"><span className="text-rose-400 text-4xl mr-4">→</span> and exactly what’s missing.</li>
              </ul>
          </div>

          <div className="mt-16 max-w-4xl mx-auto text-3xl md:text-4xl text-white/95 font-medium">
              {/* MODIFIED: More concise phrasing */}
              <p className="font-light leading-normal">
                  This knowledge surpasses your roadmap, your PMs, and every ignored customer survey.
              </p>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto text-4xl md:text-5xl text-white/95 font-medium border-l-4 border-cyan-400 pl-8 pt-2 pb-2 text-left">
              <p className="font-extrabold leading-snug">
                  Here’s the thing: QuickChat lets them tell you — in short videos — what they actually use, love, and want next.
              </p>
          </div>

          <div className="mt-16 max-w-5xl mx-auto text-3xl md:text-4xl text-white/95 font-medium">
              <p className="font-extrabold leading-normal text-cyan-300">
                  You get the real priority list in days, not months. <br/>Perfect timing for your next sprint, quarter plan, or board meeting.
              </p>
          </div>

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
            
            <iframe 
                src="https://www.videoask.com/fvk6am2q6" 
                allow="camera; microphone; autoplay; display-capture" 
                className="w-full h-full" 
                title="QuickChat Demo" 
            />
            
            {/* UPDATED: Glass-like Consent Panel - SMALLER AND FRIENDLIER */}
            {!videoConsent && (
                <div 
                    // This container ensures the panel is perfectly centered over the video area
                    className="absolute inset-0 z-10 flex items-center justify-center p-4 md:p-8 pointer-events-none"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        // REDUCED SIZE: max-w-sm -> max-w-xs, p-6 -> p-4
                        className="max-w-xs text-center p-4 rounded-xl bg-white/10 border border-white/30 shadow-2xl backdrop-blur-xl pointer-events-auto"
                    >
                        {/* REDUCED FONT SIZE: text-base/lg -> text-sm */}
                        <p className="text-sm font-light text-white leading-snug">
                            {/* NEW TEXT: Focuses on video capture AND sales data (name, email) */}
                            By proceeding, you consent to giving your name/email to discuss sales and strategy.
                        </p>
                        
                        {/* REDUCED BUTTON SIZE: text-lg -> text-base, py-3 -> py-2 */}
                        <motion.button
                            onClick={() => setVideoConsent(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-3 px-5 py-2 text-base font-bold rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/50 transition-all duration-300 transform"
                        >
                            Let's Chat →
                        </motion.button>
                    </motion.div>
                </div>
            )}
            {/* END UPDATED: Glass-like Consent Panel */}
            
          </div>
        </motion.div>
      </section>

      <div className="border-y border-pink-700/50" />

      {/* HOW IT WORKS - FOCUS ON EVIDENCE & PARTNERSHIP */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-center text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
            How it works
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-12 mt-20">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><VideoCameraIcon className="h-14 w-14 text-pink-300" /></div></div>
              <h3 className="text-2xl font-bold mb-3">1. Align on the Co-Creation Goal</h3> 
              {/* UPDATED TEXT: Focus on the 'why' */}
              <p className="text-white/70">Pinpoint the exact challenge you and your customers will solve together, focusing on mutual value and growth.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><PaperAirplaneIcon className="h-14 w-14 text-purple-300 rotate-12" /></div></div>
              <h3 className="text-2xl font-bold mb-3">2. Deploy to Key Segments</h3>
              <p className="text-white/70">Target your most valuable, newest, or at-risk customers via a simple, personalized link.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><ChatBubbleLeftRightIcon className="h-14 w-14 text-rose-300" /></div></div>
              <h3 className="text-2xl font-bold mb-3">3. Capture Evidence (Not Opinions)</h3> {/* REVISED TITLE */}
              {/* REFINED TEXT: Focuses on 'Evidence' and 'Partnership' */}
              <p className="text-white/70">Capture honest video evidence from paying customers. This unfiltered dialogue moves the relationship from transaction to true partnership.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><SparklesIcon className="h-16 w-16 text-cyan-300" /></div></div>
              <h3 className="text-2xl font-bold mb-3">4. Deliver the Collaborative Roadmap</h3> 
              {/* UPDATED TEXT */}
              <p className="text-white/70">AI synthesizes feedback and pain points. We deliver a **Co-developed Roadmap** to your team, validated by customer voice in under 48 hours.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="border-y border-pink-700/50" />

      {/* KEY BENEFITS - ROI - SOFTENED */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-center text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
            The Real Impact of Listening
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
              <div className="text-9xl md:text-[180px] font-black leading-none bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">3×</div>
              <p className="mt-6 text-xl md:text-2xl text-white/70">Higher response rates than traditional text-based surveys, guaranteeing data liquidity.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="text-9xl md:text-[180px] font-black leading-none bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">10×</div>
              {/* Softened text - removed 'LTV accelerators' */}
              <p className="mt-6 text-xl md:text-2xl text-white/70">Faster identification of why customers leave and what makes them stay loyal.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="text-9xl md:text-[180px] font-black leading-none bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">&lt;48h</div>
              {/* Softened text - removed 'financially justified' */}
              <p className="mt-6 text-xl md:text-2xl text-white/70">From customer question to a **clear, confident decision** on what to build next.</p>
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

      {/* NEW SECTION: OUR OWN QUICKCHAT DATA */}
      <div className="border-y border-pink-700/50" />

      <section className="py-24 md:py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto">
            <motion.h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
                Our Own QuickChat Data
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }} 
                className="mt-16"
            >
                <p className="text-2xl md:text-3xl font-light text-white/90">
                    We eat our own cooking. Every quarter we run QuickChat on ourselves and publish the results. We use the evidence to make our platform better and more focused on **real customer needs**.
                </p>
                <motion.a 
                    href={videoAskLink} 
                    className="mt-6 inline-block px-8 py-3 text-xl font-extrabold rounded-full text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Read Our Self-Assessment →
                </motion.a>
            </motion.div>
        </div>
      </section>

      <div className="border-y border-pink-700/50" />
      {/* END NEW SECTION */}

      {/* FINAL CTA - REVISED FOR GENERIC GROWTH FOCUS */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
          <h2 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Ready for Real <br /><span className="text-cyan-300">Customer Clarity?</span> 
          </h2>
          
          {/* NEW GENERIC TEXT: Focuses on customer evidence, strategy, and growth */}
          <p className="mt-12 text-2xl md:text-3xl text-white/80 max-w-3xl mx-auto">
            Stop guessing and start growing. Launch a **custom pilot** to get the direct customer evidence that transforms product strategy and fuels reliable long-term growth.
          </p>
          
          {/* UPDATED: PRIVACY NOTICE AND CONSENT CHECKBOX for Strategy Call */}
          <div className="mt-16 mb-8 max-w-lg mx-auto p-4 rounded-xl bg-white/5 shadow-inner shadow-pink-500/10 border border-pink-400/30">
            <label className="flex items-start cursor-pointer text-sm md:text-base text-white/90">
                <input 
                    type="checkbox" 
                    checked={strategyAgreed} 
                    onChange={() => setStrategyAgreed(!strategyAgreed)} 
                    className="mt-1 mr-3 w-5 h-5 form-checkbox accent-pink-500 bg-transparent border-pink-400 rounded-md focus:ring-pink-500 transition duration-150 ease-in-out"
                />
                {/* REVISED CONSENT TEXT */}
                <span className="text-left leading-snug font-medium">
                    By checking, you agree to the temporary capture of your name and email address for scheduling purposes.
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
            {/* UPDATED BUTTON TEXT */}
            Book Your Strategy Call →
          </motion.a>
          

        </motion.div>
      </section>
      
      {/* NEWSLETTER SIGNUP and FOOTER - The commitment section was removed from here. */}
      <div className="py-16 px-6 text-center border-t border-pink-700/50 bg-black/20">
        <div className="max-w-2xl mx-auto">
          {/* Newsletter Signup (Now the first element in this div) */}
          <label className="flex items-center justify-center cursor-pointer text-xl text-white font-medium">
              <input 
                  type="checkbox" 
                  checked={newsletterChecked} 
                  onChange={() => setNewsletterChecked(!newsletterChecked)} 
                  className="mr-3 w-6 h-6 form-checkbox accent-cyan-500 bg-transparent border-cyan-400 rounded-md focus:ring-cyan-500 transition duration-150 ease-in-out"
              />
              <span className="leading-snug">
                  Click here If you would like to receive our company newsletter with marketing & sales updates
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
                  <button className="px-6 py-4 rounded-xl font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50">
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