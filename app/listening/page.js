'use client';
import { motion } from 'framer-motion';
import React from 'react';

// Main, single component for the Listening Challenge page. Renamed to 'App' for execution environment compatibility.
export default function App() {
    // Dedicated Video link for the 5-Question Listening Challenge
    const listeningChallengeLink = "https://www.videoask.com/fvfteqxa4"; 
    
    // State to track if the user has agreed (used to toggle the overlay)
    const [agreed, setAgreed] = React.useState(false);

    // Function to handle proceeding after agreement
    const handleProceed = () => {
        // Set agreed state to hide the overlay and enable video interaction.
        setAgreed(true); 
    };

    // Custom transition for content fade-in
    const contentTransition = { duration: 0.8, ease: "easeOut" };

    // Component rendering starts here
    return (
        // 1. MAIN CONTAINER: Handles full height, fixed background, and padding.
        // Added flex properties to the main container for better layout control
        <div className="min-h-screen bg-black text-white relative p-0 font-sans flex flex-col items-center justify-center">
            
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
            {/* 2. MAIN CONTENT CONTAINER (z-20) - Now holds the central video */}
            {/* ----------------------------------------------------------- */}
            <div className="mx-auto relative z-20 max-w-7xl pb-16 pt-4 sm:p-8 w-full">
                
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
                        
                        <br className="h-4"/> 
                        
                        <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
                    </h1>
                    
                    {/* Descriptive lines - ALIGNMENT REINFORCED */}
                    <div className="mt-6 max-w-4xl mx-auto">
                        <p className="text-4xl font-black tracking-tight drop-shadow-lg leading-snug">
                            <span className="text-3xl font-extrabold text-cyan-400/80">Help us build the ultimate QuickChat experience.</span>
                            <br/>
                        </p>
                    </div>
                </motion.div>


                {/* --- INTERACTIVE VIDEO CONTENT (Central Focus) --- */}
                <motion.div 
                    key="video-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, ...contentTransition }}
                    className="pt-10 pb-4 flex flex-col items-center px-4 w-full"
                >
                    {/* The primary container for the video and the consent overlay */}
                    <div className="w-full max-w-5xl mx-auto relative">
                        
                        {/* VIDEO CONTAINER: Prominent styling */}
                        <div className="aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/50 ring-8 ring-pink-500/20">

                            {/* Iframe: w-full h-full inside aspect container */}
                            <iframe 
                                src={listeningChallengeLink} 
                                allow="camera; microphone; autoplay; encrypted-media; geolocation; fullscreen" 
                                className="w-full h-full border-none"
                                title="QuickChat Strategy Discovery"
                                loading="eager"
                            />
                        </div>

                        {/* --- TRANSPARENT CONSENT OVERLAY (Visible only if not agreed) --- */}
                        {!agreed && (
                            <motion.div
                                key="consent-overlay"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                // Absolute positioning to cover the video, high z-index, and pointer events enabled
                                className="absolute inset-0 flex items-center justify-center z-30 bg-black/50 backdrop-blur-sm rounded-3xl"
                            >
                                
                                {/* CONSENT CARD - Floating, translucent card for readability */}
                                <div className="p-6 m-4 max-w-sm mx-auto rounded-xl bg-white/10 shadow-2xl border border-white/20 backdrop-blur-lg text-center">
                                    
                                    {/* REMOVED: Previous 'Anonymous' line */}
                                    {/* NEW: Anonymous line inserted here */}
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex justify-center space-x-4 mb-4"
                                    >
                                        <button
                                            onClick={handleProceed}
                                            className="px-6 py-2 text-base font-bold rounded-full text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-xl shadow-cyan-500/40 transform hover:scale-[1.02]"
                                        >
                                            Yes! Lets go!
                                        </button>
                                        <a
                                            href="/" // Redirect back to homepage if they decline
                                            className="px-6 py-2 text-base font-bold rounded-full border border-pink-400 text-pink-400 hover:bg-pink-400/20 transition-all duration-300 transform hover:scale-[1.02]"
                                        >
                                            No, End Survey
                                        </a>
                                    </motion.div>

                                    {/* CONSENT TEXT - Now includes the "Quick and Anonymous" line */}
                                    <p className="text-xs font-semibold text-cyan-400/80 mt-4 leading-snug">
                                        It's Quick and Anonymous (contact details optional).
                                        <br />
                                        <span className="text-white/70">
                                            Please confirm consent to process and store your personal data (voice, name, email) solely for this survey's completion.
                                        </span>
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* --- POST-AGREEMENT OVERLAY MESSAGE (Optional - Reassurance) --- */}
                        {agreed && (
                            <motion.div
                                key="assurance-message"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1.0 }}
                                // This message is non-interactive (pointer-events-none)
                                className="absolute bottom-4 left-0 right-0 p-4 flex justify-center pointer-events-none"
                            >
                                <p className="text-sm font-semibold text-cyan-400/80 bg-black/30 rounded-full px-4 py-1 backdrop-blur-sm">
                                    Ready to chat!
                                </p>
                            </motion.div>
                        )}

                    </div>
                </motion.div>
                
            </div>
        </div>
    );
}