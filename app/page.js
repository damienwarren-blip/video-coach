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
}
 from '@heroicons/react/24/solid';

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -700]);

  return (
    <div ref={container} className="relative bg-black overflow-hidden text-white">

      {/* Background blobs (Parallax Effect) - z-10 ensures they are lowest */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-pink-400/40 via-rose-400/30 to-purple-500/40 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-bl from-fuchsia-400/30 to-violet-500/20 rounded-full blur-3xl" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-tl from-teal-400/30 via-cyan-400/30 to-sky-400/20 rounded-full blur-3xl" />
      </motion.div>

      {/* 🎯 HERO SECTION - MOCKUPS WITH OPACITY 70 🎯 */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 md:pb-32">
        
        {/* The 4 Mockup Images centered and scaled/rotated for a background look */}
        <div className="absolute inset-0 flex items-center justify-center z-0"> 
            {/* The parent grid container */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 opacity-70 scale-150 md:scale-125 pointer-events-none"> 
                
                {/* Image 1 */}
                <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl">
                    <img src="/mockup-1.png" alt="QuickChat Mockup 1" className="w-full h-full object-cover" />
                </div>
                
                {/* Image 2 */}
                <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl translate-y-8 md:translate-y-16">
                    <img src="/mockup-2.png" alt="QuickChat Mockup 2" className="w-full h-full object-cover" />
                </div>
                
                {/* Image 3 */}
                <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl">
                    <img src="/mockup-3.png" alt="QuickChat Mockup 3" className="w-full h-full object-cover" />
                </div>
                
                {/* Image 4 */}
                <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl translate-y-8 md:translate-y-16">
                    <img src="/mockup-4.png" alt="QuickChat Mockup 4" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
        
        {/* Hero Text (z-20 ensures text is above mockups) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.4 }} 
          className="text-center z-20 max-w-7xl px-6"
        >
          <h1 className="text-8xl leading-none font-black tracking-tighter md:text-9xl lg:text-[200px] xl:text-[220px]">
            <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-white bg-clip-text text-transparent">Quick</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
          </h1>

          <p className="mt-8 text-4xl md:text-5xl lg:text-6xl text-white/70 font-light tracking-tight">
            Conversations @ scale
          </p>
        </motion.div>
      </section>

      {/* --- Short interactive videos... --- */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
            >
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                  Short interactive videos that feel like real conversation.
                </h2>
                <p className="mt-8 md:mt-12 text-xl md:text-2xl text-white/95 font-medium">
                  Go beyond surveys.<br/>
                  Talk to Customers, Employees, Teams like never before.<br/>
                  {/* REVISION: Replaced **WHY** with <strong>WHY</strong> */}
                  Get the <strong>WHY</strong> behind the numbers.
                </p>
            </motion.div>
        </div>
      </section>
      
      {/* Have a QuickChat with us */}
      <section className="pt-20 pb-16 px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent"
        >
          Have a QuickChat with us
        </motion.h2>
      </section>

      {/* VIDEO */}
      <section className="px-4 md:px-8 -mt-12">
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
          <div className="aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <iframe src="https://www.videoask.com/fvk6am2q6" allow="camera; microphone; autoplay; display-capture" className="w-full h-full" title="QuickChat Demo" />
          </div>
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-center text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
            How it works
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-12 mt-20">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 p-2">
                <div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center">
                  <VideoCameraIcon className="h-14 w-14 text-pink-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Create a video.</h3>
              <p className="text-white/70">Ask what you want to know.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 p-2">
                <div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center">
                  <PaperAirplaneIcon className="h-14 w-14 text-purple-300 rotate-12" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Send it out</h3>
              <p className="text-white/70">Email or social — one click, any phone.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 p-2">
                <div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="h-14 w-14 text-rose-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Reply in their voice</h3>
              <p className="text-white/70">Their style, their language.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 p-2">
                <div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center">
                  <SparklesIcon className="h-16 w-16 text-cyan-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Strategic insight delivered</h3>
              <p className="text-white/70">No analysis required — instantly clear. Quick time to value.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-center text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
            Key benefits
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
              <div className="text-9xl md:text-[180px] font-black leading-none bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">3×</div>
              <p className="mt-6 text-xl md:text-2xl text-white/70">Higher response rates</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="text-9xl md:text-[180px] font-black leading-none bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">10×</div>
              {/* REVISION: Replaced **WHY** with <strong>WHY</strong> */}
              <p className="mt-6 text-xl md:text-2xl text-white/70">Get the <strong>WHY</strong> behind the data</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="text-9xl md:text-[180px] font-black leading-none bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">&lt;48h</div>
              <p className="mt-6 text-xl md:text-2xl text-white/70">From question to clarity</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YOUR TRUSTED PARTNER */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-center text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
            Your trusted partner
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 p-2">
                <div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center">
                  <ShieldCheckIcon className="h-16 w-16 text-pink-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Safe & private</h3>
              <p className="text-white/70">GDPR • SOC2 • End-to-end encryption</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 p-2">
                <div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center">
                  <HeartIcon className="h-16 w-16 text-rose-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Made for every voice</h3>
              <p className="text-white/70">120+ languages • Fully accessible</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 p-2">
                <div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center">
                  <LockClosedIcon className="h-16 w-16 text-cyan-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Impartial and Trusted</h3>
              <p className="text-white/70">Third-party security • Freedom to voice</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
          <h2 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Ready to<br />truly listen?
          </h2>
          <p className="mt-12 text-2xl md:text-3xl text-white/80 max-w-2xl mx-auto">
            15 minutes. No slides. Just a real conversation about your people.
          </p>
          <motion.a
            href="mailto:damien@quickchat.space?subject=I want to hear my people&body=Hey Damien – let’s talk about how QuickChat can help us really listen.%0A%0ATeam size: %0ACurrent challenge: "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-20 inline-block px-32 py-16 text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all"
          >
            Yes, let’s talk
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
}