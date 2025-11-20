'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ShieldCheckIcon,
  UsersIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div ref={container} className="relative bg-black overflow-hidden text-white">
      {/* Parallax blobs */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-fuchsia-500/50 via-purple-600/40 to-pink-600/50 rounded-full blur-3xl" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-tl from-cyan-400/40 via-blue-500/50 to-teal-500/40 rounded-full blur-3xl" />
      </motion.div>

      {/* Hero – no button anymore */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.6 }} className="text-center z-10">
          <div className="h-32 w-32 md:h-48 md:w-48 mx-auto mb-12" /> {/* empty space for future logo if you want */}
          <h1 className="text-7xl md:text-9xl lg:text-[180px] font-black tracking-tighter leading-none">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Quick</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
          </h1>
          <p className="mt-10 text-3xl md:text-5xl text-white/70 font-light">
            Conversations @ scale
          </p>
        </motion.div>
      </section>

      {/* MASSIVE video – no overlap, full bleed on mobile */}
      <section className="px-4 md:px-8 -mt-32 md:-mt-48 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <iframe
              src="https://www.videoask.com/fjtaofiub"
              allow="camera; microphone; autoplay; display-capture"
              className="w-full h-full"
              title="QuickChat"
            />
          </div>
        </motion.div>
      </section>

      {/* Metrics */}
      <section className="py-32 px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">3×</div>
            <p className="mt-6 text-xl md:text-2xl text-white/70">Higher response rates</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">10×</div>
            <p className="mt-6 text-xl md:text-2xl text-white/70">Deeper insight</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">&lt;48h</div>
            <p className="mt-6 text-xl md:text-2xl text-white/70">Question to insight</p>
          </motion.div>
        </div>
      </section>

      {/* Get the WHY */}
      <section className="py-32 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-black text-center mb-20 bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent"
        >
          Get the WHY
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Strategy",
              desc: "Numbers tell you what. Video tells you why. Tone, pauses, emotion — the signals no checkbox can capture.",
            },
            {
              title: "Voice & freedom",
              desc: "People can answer with video, voice notes, or text — whatever feels natural. No forced formats, just authentic responses.",
            },
            {
              title: "Be Trendy",
              desc: "The world runs on Reels, voice messages, and real moments. Your people insights should feel just as natural.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="py-32 px-6">
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto text-center">
          <div>
            <ShieldCheckIcon className="h-20 w-20 mx-auto mb-6 text-fuchsia-400" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Security by design</h3>
            <p className="text-lg text-white/60">GDPR · SOC2 · E2E encryption</p>
          </div>
          <div>
            <UsersIcon className="h-20 w-20 mx-auto mb-6 text-purple-400" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Built for every human</h3>
            <p className="text-lg text-white/60">120+ languages · Offline · Voice & text</p>
          </div>
          <div>
            <GlobeAltIcon className="h-20 w-20 mx-auto mb-6 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Carbon aware</h3>
            <p className="text-lg text-white/60">87% lighter than old-school video</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
            className="mt-20 inline-block px-20 py-10 md:px-28 md:py-14 text-2xl md:text-3xl font-bold bg-white text-black rounded-full shadow-2xl"
          >
            Let’s Talk →
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}