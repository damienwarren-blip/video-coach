'use client'; 
import { motion } from 'framer-motion';
import React from 'react';

export default function ListeningPage() {
  // Dedicated Video link for the 5-Question Listening Challenge
  const listeningChallengeLink = "https://www.videoask.com/fvfteqxa4"; 

  return (
    // Main container (p-0 on mobile for max width, p-4 on sm and up)
    <div className="min-h-screen bg-black text-white relative p-0 sm:p-4">
      
      {/* ----------------------------------------------------------- */}
      {/* 2. MAIN CONTENT (Z-10) - This container ensures text content is centered and padded */}
      {/* ----------------------------------------------------------- */}
      <div className="mx-auto relative z-10 max-w-7xl">
        
        {/* HEADER & BACK BUTTON (Apply horizontal padding to text elements) */}
        <div className="px-4 sm:px-0">
          <a href="/" className="text-pink-400 hover:text-pink-300 font-bold mb-4 block">
            ← Back to Homepage
          </a>
        </div>

        {/* PROMOTIONAL/DESCRIPTIVE AREA - QUICKCHAT LOGO STYLE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.4 }} 
          className="text-center pt-4 pb-2 z-20 px-4 sm:px-0"
        >
          {/* QUICKCHAT LOGO STYLE */}
          <h1 className="text-8xl leading-none font-black tracking-tighter md:text-9xl lg:text-[200px] xl:text-[220px]">
            <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-white bg-clip-text text-transparent">Quick</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
          </h1>
          
          {/* Descriptive lines - UPDATED */}
          <div className="mt-6">
            {/* New Tagline */}
            <p className="text-4xl font-extrabold text-pink-300/90 tracking-tight drop-shadow-lg">
              we love listening and learning
            </p>
             {/* Retained descriptive text */}
             <p className="mt-2 text-xl text-white/70 max-w-2xl mx-auto">
                This short interactive video helps us understand your current challenges in customer discovery, feature validation, and churn prevention.
            </p>
             {/* Secondary CTA - Updated to match your exact request */}
             <p className="mt-4 text-2xl font-semibold text-cyan-400">
                Press Play Below to get started
            </p>
          </div>
        </motion.div>

        {/* INTERACTIVE CONTENT CONTAINER - NOW USES WORKING EXAMPLE STRUCTURE */}
        <div className="pt-4 pb-4 flex justify-center px-4">
          {/* max-w-5xl mx-auto centers and constrains the video block on larger screens. */}
          <div className="w-full max-w-5xl mx-auto"> 
            
            {/* VIDEO CONTAINER: Uses responsive aspect ratio classes (Aspect-[9/16] on mobile, 16/9 on desktop) */}
            <div className="aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/30 ring-4 ring-pink-500/50">

              {/* Iframe: w-full h-full inside aspect container */}
              <iframe 
                src={listeningChallengeLink} 
                allow="camera; microphone; autoplay; encrypted-media; geolocation; fullscreen" 
                className="w-full h-full border-none"
                title="QuickChat Strategy Discovery"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}