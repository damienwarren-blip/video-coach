'use client'; 
import { motion } from 'framer-motion';
import React from 'react';

// Main, single component for the Listening Challenge page.
export default function ListeningPage() {
  // Dedicated Video link for the 5-Question Listening Challenge
  const listeningChallengeLink = "https://www.videoask.com/fvfteqxa4"; 

  // State to track if the user has agreed (used to toggle between consent prompt and main content/assurance)
  const [agreed, setAgreed] = React.useState(false);

  // Function to handle proceeding after agreement
  const handleProceed = () => {
    // Set agreed state instantly. The main video content will fade in immediately.
    setAgreed(true); 
  };
  
  // Custom transition for content fade-in
  const contentTransition = { duration: 0.8, ease: "easeOut" };

  // Component rendering starts here
  return (
    // 1. MAIN CONTAINER: Handles full height, fixed background, and padding.
    <div className="min-h-screen bg-black text-white relative p-0 font-sans">
      
      {/* ----------------------------------------------------------- */}
      {/* 1. ANIMATED BACKGROUND EFFECT (z-0) - Maintains the Vibe */}
      {/* ----------------------------------------------------------- */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0.8 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] sm:w-[80vw] sm:h-[80vw] 
                        bg-pink-500/10 dark:bg-pink-500/5 
                        rounded-full blur-3xl opacity-50 mix-blend-lighten 
                        md:w-[60vw] md:h-[60vw] lg:w-[40vw] lg:h-[40vw]"
        />
        <div className="absolute bottom-0 right-0 w-80 h-80 
                        bg-cyan-500/10 dark:bg-cyan-500/5 
                        rounded-full blur-3xl opacity-50 mix-blend-lighten"
        />
      </motion.div>

      {/* ----------------------------------------------------------- */}
      {/* 2. MAIN CONTENT CONTAINER (z-10) */}
      {/* ----------------------------------------------------------- */}
      <div className="mx-auto relative z-10 max-w-7xl pb-16 pt-4 sm:p-8">
        
        {/* HEADER & BACK BUTTON (always visible) */}
        <div className="px-4 sm:px-0">
          <a href="/" className="text-pink-400 hover:text-pink-300 font-bold mb-8 block transition duration-300 text-lg">
            ← Back to Homepage
          </a>
        </div>

        {/* PROMOTIONAL/DESCRIPTIVE AREA - QUICKCHAT LOGO STYLE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.0, ease: "easeOut" }} 
          className="text-center pt-4 pb-2 z-20 px-4 sm:px-0"
        >
          {/* QUICKCHAT LOGO STYLE */}
          <h1 className="text-8xl leading-none font-black tracking-tighter md:text-9xl lg:text-[180px] xl:text-[220px]">
            <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-white bg-clip-text text-transparent">Quick</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
          </h1>
          
          {/* Descriptive lines */}
          <div className="mt-6">
            <p className="text-4xl font-extrabold text-pink-300/90 tracking-tight drop-shadow-lg">
              we love listening and learning
            </p>
          </div>
        </motion.div>


        {/* --- CONSENT/ASSURANCE CARD (Integrated) --- */}
        <div className="mt-10 p-6 max-w-2xl mx-auto rounded-3xl bg-white/5 shadow-2xl shadow-pink-500/10 border border-white/10 backdrop-blur-sm text-center">
            
            {agreed ? (
                // ASSURANCE MESSAGE (Visible once agreed=true)
                <motion.p
                    key="assurance-text"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl sm:text-2xl font-semibold text-cyan-400 tracking-tight"
                >
                    As your trusted survey partner, please be assured that your personal data is inputted, processed and stored safely, securely and compliantly with anonymity maintained.
                </motion.p>
            ) : (
                // CONSENT PROMPT & BUTTONS (Visible initially)
                <>
                    <p className="text-lg sm:text-xl font-semibold text-pink-300 mb-6 leading-relaxed">
                        Before starting, I need your consent to process and store your personal data (voice, name, email) solely for this survey's completion.
                    </p>
                    <p className="text-base text-white/70 italic mb-6">
                        — Text or say YES to proceed, NO to end.
                    </p>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 flex justify-center space-x-4 sm:space-x-6"
                    >
                        <button
                            onClick={handleProceed}
                            className="px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-bold rounded-full text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-xl shadow-cyan-500/40 transform hover:scale-[1.02]"
                        >
                            Yes, I Agree & Proceed
                        </button>
                        <a
                            href="/" // Redirect back to homepage if they decline
                            className="px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-bold rounded-full border border-pink-400 text-pink-400 hover:bg-pink-400/20 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            No, End Survey
                        </a>
                    </motion.div>
                </>
            )}
        </div>


        {/* --- INTERACTIVE VIDEO CONTENT (Visible ONLY if agreed) --- */}
        {agreed && (
            <motion.div 
                key="video-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, ...contentTransition }}
                className="pt-10 pb-4 flex flex-col items-center px-4 w-full"
            >
                {/* Secondary CTA */}
                <p className="mb-6 text-3xl font-bold text-cyan-400">
                    Press Play Below to get started
                </p>

                <div className="w-full max-w-5xl mx-auto"> 
                    
                    {/* VIDEO CONTAINER: Uses responsive aspect ratio classes */}
                    <div className="aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/50 ring-8 ring-pink-500/20 hover:ring-pink-400/30 transition-all duration-500 ease-in-out">

                      {/* Iframe: w-full h-full inside aspect container */}
                      <iframe 
                        src={listeningChallengeLink} 
                        allow="camera; microphone; autoplay; encrypted-media; geolocation; fullscreen" 
                        className="w-full h-full border-none"
                        title="QuickChat Strategy Discovery"
                        loading="eager"
                      />
                    </div>
                </div>
            </motion.div>
        )}
        
      </div>
    </div>
  );
}