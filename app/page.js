'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ShieldCheckIcon,
  UsersIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';

const MOCKUPS = [
  { src: '/mockup-1.png', alt: 'App Screenshot 1', initialRotation: -10 },
  { src: '/mockup-2.png', alt: 'App Screenshot 2', initialRotation: 5 },
  { src: '/mockup-3.png', alt: 'App Screenshot 3', initialRotation: 15 },
];

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div ref={container} className="relative bg-black overflow-hidden text-white">

      {/* Background blobs */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-fuchsia-500/50 via-purple-600/40 to-pink-600/50 rounded-full blur-3xl" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-tl from-cyan-400/40 via-blue-500/50 to-teal-500/40 rounded-full blur-3xl" />
      </motion.div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-8 pb-32 md:pb-20">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} className="text-center pt-24 md:pt-48 z-30">
          <h1 className="text-8xl leading-none font-black tracking-tighter md:text-9xl lg:text-[200px] xl:text-[220px]">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Quick</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
          </h1>
          <p className="mt-8 text-4xl md:text-5xl text-white/70 font-light">Conversations @ scale</p>
          <p className="mt-8 md:mt-12 text-2xl md:text-3xl text-white font-normal leading-relaxed tracking-wide max-w-2xl mx-auto text-center">
            Give employees and customers the FREEDOM to tell you WHY they feel like they do.
          </p>
        </motion.div>

        {/* Mockups */}
        <motion.div className="relative mt-16 md:mt-24 w-full max-w-4xl flex justify-center items-end z-20">
          {MOCKUPS.map((mock, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotate: mock.initialRotation }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 100 }}
              className={`relative w-1/3 aspect-[9/16] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/5 mx-4 ${index === 1 ? '-translate-y-16' : ''}`}
              style={{ zIndex: 10 + index }}
            >
              <img src={mock.src} alt={mock.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Let's Chat */}
      <section className="pt-16 pb-12 px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Let's Chat
        </motion.h2>
      </section>

      {/* Video */}
      <section className="px-4 md:px-8 -mt-12">
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
          <div className="aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <iframe src="https://www.videoask.com/fvk6am2q6" allow="camera; microphone; autoplay; display-capture" className="w-full h-full" title="QuickChat" />
          </div>
        </motion.div>
      </section>

      {/* CLEAN METRICS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-20 md:gap-32">
          <div className="text-center">
            <div className="text-9xl md:text-[180px] lg:text-[220px] font-black leading-none bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">3×</div>
            <p className="mt-6 text-xl md:text-2xl text-white/70 font-light">Higher response rates</p>
          </div>
          <div className="text-center">
            <div className="text-9xl md:text-[180px] lg:text-[220px] font-black leading-none bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">10×</div>
            <p className="mt-6 text-xl md:text-2xl text-white/70 font-light">Deeper insight</p>
          </div>
          <div className="text-center">
            <div className="text-9xl md:text-[180px] lg:text-[220px] font-black leading-none bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">&lt;48h</div>
            <p className="mt-6 text-xl md:text-2xl text-white/70 font-light">Question to insight</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS – HEADING */}
      <section className="pt-16 pb-20 px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          How it Works
        </motion.h2>
      </section>

      {/* HOW IT WORKS – PREMIUM GLASSMORPHIC CARDS */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Step 1 – Updated */}
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 text-center hover:border-white/30 transition-all duration-500">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 p-1">
                  <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">What do you want to know?</h3>
                <p className="text-white/70">What's the goal, what pain do you want to solve, what interests you about your customers or employees</p>
              </div>
            </motion.div>

            {/* Step 2 – Updated to "Reach out" */}
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 text-center hover:border-white/30 transition-all duration-500">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-1">
                  <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14h.01M12 14h.01M7 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Reach out</h3>
                <p className="text-white/70">Give employees and customers the freedom to tell you WHY they feel like they do where they are comfortable – video, voice interaction</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 text-center hover:border-white/30 transition-all duration-500">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-600 p-1">
                  <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our AI Engine creates your strategy</h3>
                <p className="text-white/70">No admin, no manual analysis – instant themes, sentiment, and actionable insights.</p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 text-center hover:border-white/30 transition-all duration-500">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 p-1">
                  <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">You action → you win!!!</h3>
                <p className="text-white/70">Get the real WHY behind the data and make better decisions, faster.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-32 px-6">
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto text-center">
          <div>
            <ShieldCheckIcon className="h-20 w-20 mx-auto mb-6 text-fuchsia-400" />
            <h3 className="text-3xl font-bold mb-4">Security by design</h3>
            <p className="text-lg text-white/60">GDPR • SOC2 • E2E encryption</p>
          </div>
          <div>
            <UsersIcon className="h-20 w-20 mx-auto mb-6 text-purple-400" />
            <h3 className="text-3xl font-bold mb-4">Built for every human</h3>
            <p className="text-lg text-white/60">120+ languages • Offline • Voice & text</p>
          </div>
          <div>
            <GlobeAltIcon className="h-20 w-20 mx-auto mb-6 text-cyan-400" />
            <h3 className="text-3xl font-bold mb-4">Carbon aware</h3>
            <p className="text-lg text-white/60">87% lighter than old-school video</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
          <h2 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to<br />learn more?
          </h2>
          <p className="mt-12 text-2xl md:text-3xl text-white/70">15 minutes. No slides. Just conversation.</p>
          <motion.a
            href="mailto:damien@quickchat.space?subject=QuickChat Demo&body=Hey Damien – I’m ready!"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-20 inline-block px-28 py-14 text-3xl font-bold bg-white text-black rounded-full shadow-2xl"
          >
            Let’s Talk →
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
}