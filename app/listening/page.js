'use client'; 
import { motion } from 'framer-motion';
import React from 'react';

export default function ListeningPage() {
  // Dedicated Video link for the 5-Question Listening Challenge
  // NOTE: This is the correct VideoAsk link for the interactive video.
  const listeningChallengeLink = "https://www.videoask.com/fvfteqxa4"; 

  return (
    // Main container (p-0 on mobile for max width, p-4 on sm and up)
    <div className="min-h-screen bg-black text-white relative p-0 sm:p-4">
      
      {/* ----------------------------------------------------------- */}
      {/* 2. MAIN CONTENT (Z-10) - This container ensures text content is centered and padded */}
      {/* ----------------------------------------------------------- */}
      <div className="mx-auto relative z-10">
        
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

        {/* INTERACTIVE CONTENT CONTAINER (Reduced vertical padding) */}
        {/* FIX: Removed px-4 sm:px-0 to ensure absolute maximum width expansion on mobile. */}
        <div className="pt-4 pb-4 flex justify-center">
          <div className="w-full"> 
            
            {/* VIDEO CONTAINER with Aspect Ratio - This now spans the full width of the viewport */}
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-pink-500/30 ring-4 ring-pink-500/50" style={{ paddingBottom: '56.25%' }}>

              {/* Iframe for the video - fully visible and interactive */}
              <iframe 
                src={listeningChallengeLink} 
                allow="camera; microphone; autoplay; encrypted-media; geolocation; fullscreen" 
                className="absolute top-0 left-0 w-full h-full border-none transition-opacity duration-500"
                title="QuickChat Strategy Discovery"
              ></iframe>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}