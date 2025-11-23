'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ShieldCheckIcon,
  GlobeAltIcon,
  HeartIcon,
  SparklesIcon,
  VideoCameraIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid';

const MOCKUPS = [
  { src: '/mockup-1.png', alt: 'Real conversations', initialRotation: -8 },
  { src: '/mockup-2.png', alt: 'People opening up', initialRotation: 6 },
  { src: '/mockup-3.png', alt: 'Instant insights', initialRotation: 12 },
];

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

      {/* Background blobs */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-pink-400/40 via-rose-400/30 to-purple-500/40 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-bl from-fuchsia-400/30 to-violet-500/20 rounded-full blur-3xl" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-tl from-teal-400/30 via-cyan-400/30 to-sky-400/20 rounded-full blur-3xl" />
      </motion.div>

      {/* HERO – mobile-perfect */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} className="text-center z-30 max-w-7xl px-6">
          <h1 className="text-8xl leading-none font-black tracking-tighter md:text-9xl lg:text-[200px] xl:text-[220px]">
            <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-white bg-clip-text text-transparent">Quick</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
          </h1>

          {/* One line on mobile – slightly smaller */}
          <p className="mt-8 text-4xl md:text-5xl lg:text-6xl text-white/70 font-light tracking-tight">
            Conversations @ scale
          </p>

          <div className="mt-16 max-w-4xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-3xl text-white/85 leading-snug text-center px-4"
            >
              Short interactive videos that feel like real conversation.<br />
              <span className="text-pink-300 font-medium">
                Strategic insight delivered — no analysis, no waiting.
              </span>
            </motion.p>
          </div>
        </motion.div>

        {/* Mockups */}
        <motion.div className="relative mt-32 w-full max-w-5xl flex justify-center items-end z-20">
          {MOCKUPS.map((mock, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, rotate: mock.initialRotation }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: index * 0.15 + 1, type: "spring", stiffness: 90 }}
              className={`relative w-80 md:w-96 aspect-[9/16] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white/10 
                ${index === 1 ? '-translate-y-32' : index === 0 ? '-translate-y-8' : '-translate-y-12'}`}
              style={{ zIndex: 20 + index }}
            >
              <img src={mock.src} alt={mock.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Let’s really talk */}
      <section className="pt-20 pb-16 px-6 text-center">
        <motion.h2 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
          Let’s really talk
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
              <h3 className="text-2xl font-bold mb-3">Create the right video</h3>
              <p className="text-white/70">A real person asks a real question.</p>
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
              <p className="text-white/70">No analysis required — instantly clear.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS – replaces old metrics */}
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
              <p className="mt-6 text-xl md:text-2xl text-white/70">Deeper emotional insight</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="text-9xl md:text-[180px] font-black leading-none bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">&lt;48h</div>
              <p className="mt-6 text-xl md:text-2xl text-white/70">From question to clarity</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-32 px-6">
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto text-center">
          <div>
            <ShieldCheckIcon className="h-20 w-20 mx-auto mb-6 text-pink-400" />
            <h3 className="text-3xl font-bold mb-4">Safe & private</h3>
            <p className="text-lg text-white/60">GDPR • SOC2 • End-to-end encryption</p>
          </div>
          <div>
            <HeartIcon className="h-20 w-20 mx-auto mb-6 text-rose-400" />
            <h3 className="text-3xl font-bold mb-4">Made for every voice</h3>
            <p className="text-lg text-white/60">120+ languages • Fully accessible</p>
          </div>
          <div>
            <GlobeAltIcon className="h-20 w-20 mx-auto mb-6 text-cyan-400" />
            <h3 className="text-3xl font-bold mb-4">Gentler on the planet</h3>
            <p className="text-lg text-white/60">87% lighter than traditional video</p>
          </div>
        </div>
      </section>

      {/* CTA */}
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