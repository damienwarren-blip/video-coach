'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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

  // CX/Customer Churn Aligned CTA LINKS
  const pilotLink = "/book-cx-pilot-call";
  const videoAskLink = "https://www.videoask.com/fvk6am2q6";
  
  // Revised final CTA (to book pilot call)
  const finalCTALink = "mailto:damien@quickchat.space?subject=I want to run a 2-Week Customer Retention Pilot&body=Hey Damien – let's discuss running a 2-week pilot to reduce our customer churn. %0A%0ACompany Turnover: %0ACurrent Churn Rate: ";


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
          {/* Tagline uses strong text formatting for impact without double stars */}
          <p className="mt-8 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white/90 max-w-4xl mx-auto">
            Listen to the <span className="font-semibold text-rose-300">Voice</span> of your customers and get the real <span className="font-semibold text-rose-300">WHY</span>.
          </p>
        </motion.div>
      </section>

      {/* DIVIDER — same style as case study */}
      <div className="border-y border-pink-700/50" />

      {/* VALUE PROP - POLISHED AND CORRECTED */}
      <section className="py-24 md:py-32 px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {/* Problem Statement */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-snug bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent max-w-5xl mx-auto">
            Traditional email surveys get low response rates,<br />
            don't deliver <span className="text-rose-300">WHY</span>, and take weeks to aggregate.
          </h2>
          {/* Solution Statement - Clearer visual separation and impact */}
          <p className="mt-8 md:mt-12 text-3xl md:text-4xl text-white/95 font-medium max-w-4xl mx-auto">
            Our Short interactive videos deliver the **instant <span className="font-extrabold text-cyan-300">strategy</span>** you need to save at-risk accounts immediately.
          </p>
        </motion.div>
      </section>

      <div className="border-y border-pink-700/50" />

      {/* VIDEOASK - Keep this section, it's a good feature display */}
      <section className="pt-20 pb-16 px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
          Have a QuickChat with us
        </motion.h2>
      </section>
      <section className="px-4 md:px-8 -mt-12 pb-24 md:pb-32">
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
          <div className="aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <iframe src={videoAskLink} allow="camera; microphone; autoplay; display-capture" className="w-full h-full" title="QuickChat Demo" />
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
              <p className="text-white/70">"What is the biggest roadblock to your success?"</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><PaperAirplaneIcon className="h-14 w-14 text-purple-300 rotate-12" /></div></div>
              <h3 className="text-2xl font-bold mb-3">2. Send to at-risk segments</h3>
              <p className="text-white/70">One link, any device, global language support.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><ChatBubbleLeftRightIcon className="h-14 w-14 text-rose-300" /></div></div>
              <h3 className="text-2xl font-bold mb-3">3. Customers reply in their voice</h3>
              <p className="text-white/70">Capturing the emotional urgency you need to act.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 p-2"><div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center"><SparklesIcon className="h-16 w-16 text-cyan-300" /></div></div>
              <h3 className="text-2xl font-bold mb-3">4. Instant Action Plan</h3>
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
              <p className="mt-6 text-xl md:text-2xl text-white/70">Higher response rates than NPS/CSAT email surveys</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="text-9xl md:text-[180px] font-black leading-none bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">10×</div>
              <p className="mt-6 text-xl md:text-2xl text-white/70">Get the <span className="font-semibold text-rose-300">WHY</span> behind attrition and prioritize feature requests</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="text-9xl md:text-[180px] font-black leading-none bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">&lt;48h</div>
              <p className="mt-6 text-xl md:text-2xl text-white/70">From customer question to **retention action plan**</p>
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

            <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white/90 leading-tight">
              See how we helped an Irish company reach out to its German customer base<br />
              and <span className="font-medium bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent">
                strategically reduce churn in one week
              </span>.
            </p>

            <motion.a
              href="/case-study-germany-churn"
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
              <h3 className="text-2xl font-bold mb-3">Safe & Compliant</h3>
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

      {/* FINAL CTA - CLEAR PATH TO PILOT (CX Focus) */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
          <h2 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Ready to Save<br />Your At-Risk Accounts?
          </h2>
          <p className="mt-12 text-2xl md:text-3xl text-white/80 max-w-2xl mx-auto">
            Run a <span className="font-semibold text-white">2-week pilot with 50 at-risk customers</span>. See how much churn you can prevent before you commit.
          </p>
          <motion.a
            href={finalCTALink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-20 inline-block px-32 py-16 text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all"
          >
            Book Your Pilot Call →
          </motion.a>
          <p className="mt-8 text-xl text-white/50">
            Or, <a href={videoAskLink} className="underline text-white/90 hover:text-white transition">Answer 5 Quick Questions →</a> about your current churn challenges.
          </p>
        </motion.div>
      </section>
    </div>
  );
}