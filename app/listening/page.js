'use client'; 
import { motion } from 'framer-motion';
import React from 'react';

export default function CaseStudyPage() {
  // Video link for the interactive experience
  const videoAskLink = "https://www.videoask.com/fvfteqxa4";

  return (
    // Main container with full height and black background
    <div className="min-h-screen bg-black text-white relative p-4 sm:p-8">
      
      {/* ----------------------------------------------------------- */}
      {/* 2. MAIN CONTENT (Z-10) */}
      {/* ----------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER & BACK BUTTON */}
        <a href="/" className="text-pink-400 hover:text-pink-300 font-bold mb-12 block">
          ← Back to Homepage
        </a>

        {/* PROMOTIONAL/DESCRIPTIVE AREA - QUICKCHAT LOGO STYLE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.4 }} 
          className="text-center pt-10 pb-4 z-20"
        >
          <h1 className="text-8xl leading-none font-black tracking-tighter md:text-9xl lg:text-[200px] xl:text-[220px]">
            <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-white bg-clip-text text-transparent">Quick</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
          </h1>
          
          {/* Descriptive lines - UPDATED */}
          <div className="mt-8">
            <p className="text-3xl font-extrabold text-cyan-300/90 uppercase tracking-widest drop-shadow-lg">
              Press Play to Help us shape the future.
            </p>
          </div>
        </motion.div>

        {/* INTERACTIVE CONTENT CONTAINER */}
        <div className="pt-8 pb-20 flex justify-center">
          {/* Increased max-width to max-w-6xl for a larger video */}
          <div className="max-w-6xl w-full">
            
            {/* VIDEO CONTAINER with Aspect Ratio */}
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-pink-500/30 ring-4 ring-pink-500/50" style={{ paddingBottom: '56.25%' }}>

              {/* Iframe for the video - fully visible and interactive */}
              <iframe 
                  src={videoAskLink} 
                  allow="camera; microphone; autoplay; encrypted-media; geolocation; fullscreen" 
                  className="absolute top-0 left-0 w-full h-full border-none transition-opacity duration-500"
                  title="QuickChat Interactive Story"
              ></iframe>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}