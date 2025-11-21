'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ShieldCheckIcon,
  UsersIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';

// --- CONFIGURATION: ONLY 3 MOCKUPS FOR THE VIBRANT BOX ---
const MOCKUPS = [
  {
    src: '/mockup-1.png',
    alt: 'App Screenshot 1',
    initialRotation: -10, // Slight rotation for effect
    xOffset: '-35%',      // Position relative to its parent container
    yOffset: '10%',       // Position relative to its parent container
    scale: 0.7,           // Smaller scale for background effect
    zIndex: 5,            // Behind the text
  },
  {
    src: '/mockup-2.png',
    alt: 'App Screenshot 2',
    initialRotation: 5,   // Slight rotation
    xOffset: '0%',        // Center position
    yOffset: '30%',       // Slightly lower
    scale: 0.8,           // Slightly larger for middle
    zIndex: 8,            // Behind the text
  },
  {
    src: '/mockup-3.png',
    alt: 'App Screenshot 3',
    initialRotation: 15,  // Slight rotation
    xOffset: '35%',       // Position relative to its parent container
    yOffset: '15%',       // Position relative to its parent container
    scale: 0.75,          // Smaller scale for background effect
    zIndex: 6,            // Behind the text
  },
];

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Background gradient parallax remains
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div ref={container} className="relative bg-black overflow-hidden text-white">
      {/* Vibrant parallax blobs */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-fuchsia-500/50 via-purple-600/40 to-pink-600/50 rounded-full blur-3xl" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-tl from-cyan-400/40 via-blue-500/50 to-teal-500/40 rounded-full blur-3xl" />
      </motion.div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-8 pb-32 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-center pt-24 md:pt-48 z-30"
        >
          {/* Title (Quick Chat) */}
          <h1 className="text-8xl leading-none font-black tracking-tighter md:text-9xl lg:text-[200px] xl:text-[220px]">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Quick</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
          </h1>

          {/* Strap Line (Conversations @ scale) */}
          <p className="mt-8 text-4xl md:text-5xl text-white/70 font-light">
            Conversations @ scale
          </p>

          {/* VIBRANT CONTAINER: Freedom text and 3 background mockups */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="relative mt-12 mx-auto w-[90vw] md:max-w-2xl min-h-[300px] md:min-h-[350px]
                       rounded-3xl p-6 md:p-10
                       bg-gradient-to-br from-purple-700/60 to-pink-600/60
                       backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
          >
            {/* Background Mockups (First 3) inside the vibrant container */}
            {MOCKUPS.map((mock, index) => (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  left: '50%', // Center horizontally
                  top: '50%',  // Center vertically
                  transform: `translate(-50%, -50%) rotate(${mock.initialRotation}deg) translateX(${mock.xOffset}) translateY(${mock.yOffset}) scale(${mock.scale})`,
                  zIndex: mock.zIndex,
                }}
                className="w-1/2 aspect-[9/16] rounded-3xl overflow-hidden opacity-40 md:opacity-60"
              >
                <img
                  src={mock.src}
                  alt={mock.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}

            {/* "Freedom" text - placed above the background mockups */}
            <p className="relative z-10 text-2xl md:text-3xl text-white font-normal leading-relaxed tracking-wide mt-2 text-center">
              Give employees and customers the freedom to tell you what's really going on with short interactive videos.
            </p>
          </motion.div>
        </motion.div>

        {/* MOCKUPS 4 & 5 REMOVED ENTIRELY */}

      </section>

      ---

      {/* Separator to ensure the next section starts well below the images */}
      <div className="h-[20vh] md:h-[10vh]" />

      {/* HOW IT WORKS HEADING */}
      <section className="pt-24 pb-12 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black mb-12 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          How it Works
        </motion.h2>
      </section>

      {/* VIDEO */}
      <section className="px-4 md:px-8 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
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
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Strategy</h3>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">Numbers tell you what. Video tells you why. Tone, pauses, emotion — the signals no checkbox can capture.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Voice & freedom</h3>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">People can answer with video, voice notes, or text — whatever feels natural. No forced formats, just authentic responses.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Be Trendy</h3>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">The world runs on Reels, voice messages, and real moments. Your people insights should feel just as natural.</p>
          </motion.div>
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