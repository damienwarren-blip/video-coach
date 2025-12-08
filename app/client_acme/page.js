// Note: This component uses client-side hooks like useState and Framer Motion.

"use client";

import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import {
    ShieldCheckIcon, HeartIcon, SparklesIcon, VideoCameraIcon, PaperAirplaneIcon, ChatBubbleLeftRightIcon, LockClosedIcon,
} from '@heroicons/react/24/solid';

// --- DATA STRUCTURES ---

// Define the primary brand gradient for text coloring
const BRAND_GRADIENT = "bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600";
const SECONDARY_GRADIENT = "bg-gradient-to-r from-cyan-600 to-teal-700";

const HOW_IT_WORKS_DATA = [
    { title: "1. Set your question.", detail: "We agree on clear questions to explore — onboarding, cancellations, trust, pricing, or product fit.", icon: "VideoCameraIcon", color: "pink" },
    { title: "2. Deploy to key segments", detail: "You share one simple link with the customers you want to hear from — new, loyal, at-risk, or recently cancelled.", icon: "PaperAirplaneIcon", color: "purple" },
    { title: "3. Hear the Real Experience", detail: "Customers respond via a short voice note or brief written message, in any language. This low-friction, voice-accessible approach ensures you capture what truly shaped their experience.", icon: "ChatBubbleLeftRightIcon", color: "rose" },
    { title: "4. Instant Strategy Blueprint", detail: "We summarise the main patterns, concerns, and drivers — and return a clear, practical view of what to focus on next, usually within 48 hours.", icon: "SparklesIcon", color: "cyan" },
];

const ROI_DATA = [
    { metric: "3×", detail: "Higher participation than traditional surveys, because people find it easier to speak or write naturally.", color: "pink", title: "Higher Participation" },
    { metric: "10×", detail: "Faster understanding of the reasons behind cancellations, hesitation, and long-term loyalty.", color: "purple", title: "Faster Insights" },
    { metric: "<48h", detail: "From question to clear direction while there is still time to act.", color: "cyan", title: "Strategy Actionable" },
];

const TRUST_DATA = [
    { title: "Safe, Secure & Compliant", detail: "✓ GDPR compliant • ✓ SOC2 aligned • ✓ Fully encrypted", icon: "ShieldCheckIcon", color: "pink" },
    { title: "Made for Global Customers", detail: "Works across 120+ languages and on any modern device.", icon: "HeartIcon", color: "rose" },
    { title: "Impartial Platform", detail: "Independent platform designed to encourage open, honest feedback.", icon: "LockClosedIcon", color: "cyan" },
];

// --- UTILITY/HELPER FUNCTIONS ---

const IconMap = { ShieldCheckIcon, HeartIcon, SparklesIcon, VideoCameraIcon, PaperAirplaneIcon, ChatBubbleLeftRightIcon, LockClosedIcon };
const getIconComponent = (iconName) => IconMap[iconName] || 'div';

const colorGradient = (color) => {
    switch (color) {
        case 'pink': return 'bg-gradient-to-br from-pink-400 to-rose-400';
        case 'purple': return 'bg-gradient-to-br from-purple-400 to-fuchsia-400';
        case 'rose': return 'bg-gradient-to-br from-rose-400 to-pink-400';
        case 'cyan': return 'bg-gradient-to-br from-cyan-400 to-teal-400';
        default: return 'bg-gray-500';
    }
};

// Adjusted for white background: uses darker shades
const textColor = (color) => {
    switch (color) {
        case 'pink': return 'text-pink-600';
        case 'purple': return 'text-purple-600';
        case 'rose': return 'text-rose-600';
        case 'cyan': return 'text-cyan-600';
        default: return 'text-gray-900';
    }
};

const metricColorGradient = (color) => {
    switch (color) {
        case 'pink': return 'bg-gradient-to-r from-pink-500 to-rose-600'; // Made slightly stronger
        case 'purple': return 'bg-gradient-to-r from-purple-500 to-fuchsia-600'; // Made slightly stronger
        case 'cyan': return 'bg-gradient-to-r from-cyan-500 to-teal-600'; // Made slightly stronger
        default: return 'bg-gray-500';
    }
};

// Function to generate placeholder image URL (Switched to white background, dark text)
const placeholderUrl = (w, h, text) => `https://placehold.co/${w}x${h}/fff/374151?text=${text}`;


// --- INTERNAL COMPONENT FUNCTIONS ---

function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
                {/* QuickChat Logo with Play Button Icon and Gradient Style (Matching portal component) */}
                <a href="#top" className="flex items-center space-x-3 group" aria-label="QuickChat Home">
                    {/* Icon: Play Button SVG */}
                    <svg className="w-8 h-8 text-transparent fill-transparent stroke-purple-600 group-hover:scale-105 transition-transform" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197 2.132A1 1 0 0110 13.82V8.18a1 1 0 011.555-.832l3.197 2.132c.207.138.207.485 0 .623z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {/* Logo Text: QuickChat with gradient background and clipped text */}
                    <span className={`text-2xl font-extrabold tracking-tight ${BRAND_GRADIENT} bg-clip-text text-transparent`}>
                        QuickChat
                    </span>
                </a>
                
                {/* Simple Navigation - Adjusted for the light background */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
                    <a href="#how-it-works" className="hover:text-purple-600 transition">How it Works</a>
                    <a href="#key-benefits" className="hover:text-purple-600 transition">ROI</a>
                    <a href="/case-study" className="hover:text-purple-600 transition">Case Studies</a>
                    <a href="#final-cta" className="px-4 py-2 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition">
                        Book Strategy Call
                    </a>
                </nav>
            </div>
        </header>
    );
}

function Hero({ y1, y2 }) {
    return (
        <section id="top" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 md:pb-32">
            {/* Parallax blobs (Adjusted opacity for subtle background) */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-pink-300/20 via-rose-300/10 to-purple-400/20 rounded-full blur-3xl" />
                <div className="absolute top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-bl from-fuchsia-300/10 to-violet-400/10 rounded-full blur-3xl" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-tl from-teal-300/10 via-cyan-300/10 to-sky-300/10 rounded-full blur-3xl" />
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 opacity-80 scale-150 md:scale-125 pointer-events-none">
                    {/* Image mockups using placeholders. */}
                    {[1, 2, 3, 4].map((i, index) => (
                        <div key={i} className={`relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-gray-200 shadow-xl ${index % 2 !== 0 ? 'translate-y-8 md:translate-y-16' : ''}`}>
                             <img 
                                src={placeholderUrl(300, 533, `App UI ${i}`)}
                                alt={`QuickChat Mockup ${i}`}
                                className="w-full h-full object-cover" 
                                onError={(e) => { e.target.onerror = null; e.target.src=placeholderUrl(300, 533, `App UI ${i}`) }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} className="text-center z-20 max-w-7xl px-6">
                <h1 className="text-8xl leading-none font-black tracking-tighter md:text-9xl lg:text-[200px] xl:text-[220px]">
                    {/* Updated gradient to BRAND_GRADIENT for consistency */}
                    <span className={`${BRAND_GRADIENT} bg-clip-text text-transparent`}>Quick</span>
                    <br />
                    {/* Kept a complementary gradient for contrast */}
                    <span className={`${SECONDARY_GRADIENT} bg-clip-text text-transparent`}>Chat</span>
                </h1>
                {/* Hero strap line */}
                <p className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
                    <span className={`${SECONDARY_GRADIENT} bg-clip-text text-transparent`}>
                        START CREATING WHAT CUSTOMERS LOVE.
                    </span>
                </p>
            </motion.div>
        </section>
    );
}

function VideoAskSection() {
    // The URL for the VideoAsk demo
    const demoVideoAskUrl = "https://www.videoask.com/f79eyujri";
    
    return (
        <section className="pt-20 pb-24 md:pb-32 px-6 text-center">
            
            {/* Main Heading - Updated to BRAND_GRADIENT */}
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className={`text-5xl md:text-9xl font-extrabold ${BRAND_GRADIENT} bg-clip-text text-transparent mb-12`}>
                Experience QuickChat Now
            </motion.h2>

            {/* Embedded Video Demo (Seamless, no border/shadow) */}
            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
                <div className="aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden relative shadow-2xl">
                    {/* Embedded Video Ask iframe */}
                    <iframe 
                        src={demoVideoAskUrl} 
                        allow="camera; microphone; autoplay; display-capture" 
                        className="w-full h-full" 
                        title="QuickChat Demo" 
                        loading="eager"
                        style={{ border: 'none' }}
                    />
                </div>
            </motion.div>
        </section>
    );
}

function FeatureBlock({ title, data, type, gridColumns }) {
    // Dynamically calculate grid class
    const gridClass = `grid md:grid-cols-${gridColumns} gap-12 mt-20`;

    return (
        <section className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Feature Block Title - Updated to BRAND_GRADIENT */}
                <motion.h2 className={`text-center text-6xl md:text-8xl font-black ${BRAND_GRADIENT} bg-clip-text text-transparent`}>
                    {title}
                </motion.h2>

                <div className={gridClass}>
                    {data.map((item, index) => {
                        const Icon = type === 'icon' ? getIconComponent(item.icon) : 'div';
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className="text-center"
                            >
                                {type === 'icon' && (
                                    <div className={`w-28 h-28 mx-auto mb-8 rounded-full ${colorGradient(item.color)} p-2`}>
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-inner">
                                            <Icon className={`h-16 w-16 ${textColor(item.color)}`} />
                                        </div>
                                    </div>
                                )}
                                
                                {type === 'metric' && (
                                    <div className={`text-9xl md:text-[180px] font-black leading-none ${metricColorGradient(item.color)} bg-clip-text text-transparent`}>
                                        {item.metric}
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-3">{item.title || item.metric}</h3>
                                <p className="text-gray-700 font-medium">{item.detail}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function FinalCTA({ strategyAgreed, setStrategyAgreed }) {
    const finalCTALink = "mailto:damien@quickchat.space?subject=I want to run a QuickChat Discovery & Retention Pilot&body=Hey Damien – let's discuss running a pilot to inform our customer strategy for growth and retention. %0A%0ACompany Turnover: %0ACurrent Churn Rate: %0APrimary Goal (Discovery or Retention): ";

    return (
        // Adjusted gradient for light background effect
        <section id="final-cta" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-transparent via-pink-100/30 to-transparent">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
                {/* CTA Title - Adjusted main color to match new brand gradient */}
                <h2 className={`text-7xl md:text-9xl font-black ${BRAND_GRADIENT} bg-clip-text text-transparent leading-tight`}>
                    Ready to Inform Your Next<br /><span className={`${SECONDARY_GRADIENT} bg-clip-text text-transparent`}>Big Strategy</span>?
                </h2>
                <p className="mt-12 text-2xl md:text-3xl text-gray-700 max-w-2xl mx-auto">
                    If you’d like a clearer picture of what your customers actually experience, a <span className="font-bold">short pilot</span> can give you that insight within days.
                </p>
                
                {/* Privacy Notice and Consent Checkbox. */}
                <div className="mt-16 mb-8 max-w-lg mx-auto p-4 rounded-xl bg-gray-100 shadow-inner shadow-pink-500/10 border border-pink-300/60">
                    <label className="flex items-start cursor-pointer text-sm md:text-base text-gray-700">
                        <input 
                            type="checkbox" 
                            checked={strategyAgreed} 
                            onChange={() => setStrategyAgreed(!strategyAgreed)} 
                            // Custom styling for checkbox appearance
                            className="mt-1 mr-3 w-5 h-5 form-checkbox appearance-none bg-transparent border-2 border-pink-500 rounded-md checked:bg-pink-600 checked:border-transparent focus:ring-0 transition duration-150 ease-in-out"
                        />
                        <span className="text-left leading-snug font-light">
                            By checking, you agree to the temporary use of your name and email address for <span className="font-bold">scheduling purposes only.</span>
                        </span>
                    </label>
                </div>
                
                <motion.a
                    href={strategyAgreed ? finalCTALink : "#"} 
                    whileHover={strategyAgreed ? { scale: 1.05 } : { scale: 1.0 }}
                    whileTap={strategyAgreed ? { scale: 0.95 } : { scale: 1.0 }}
                    className={`mt-8 inline-block px-32 py-4 text-3xl font-bold rounded-full shadow-2xl transition-all duration-300
                        ${strategyAgreed 
                            ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-pink-500/50 cursor-pointer"
                            : "bg-gray-200 text-gray-500 cursor-not-allowed shadow-none"
                        }`}
                    onClick={(e) => { !strategyAgreed && e.preventDefault(); }} 
                >
                    Book Your Strategy Call →
                </motion.a>
            </motion.div>
        </section>
    );
}


// --- MAIN EXPORT COMPONENT ---
export default function App() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    // Parallax values for the Hero section backgrounds
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -900]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -700]);

    const [strategyAgreed, setStrategyAgreed] = useState(false);

    // Dummy link for internal navigation items
    const listeningPageLink = "/listening"; 

    return (
        // Changed bg-white to bg-white and added 'font-inter' preference
        <div ref={container} className="relative bg-white overflow-hidden text-gray-900 min-h-screen font-sans">
            
            <Header />

            {/* 1. HERO SECTION (Parallax) */}
            <Hero y1={y1} y2={y2} />

            <div className="border-y border-gray-300" />

            {/* 2. VALUE PROPOSITION */}
            <section className="py-24 md:py-32 px-6 text-center">
                {/* Heading - Updated to BRAND_GRADIENT */}
                <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black leading-snug ${BRAND_GRADIENT} bg-clip-text text-transparent max-w-5xl mx-auto`}>
                    The Customer Dictates Success.
                </h2>
                <div className="mt-12 text-3xl md:text-4xl text-gray-900 font-medium max-w-4xl mx-auto">
                    <ul className="list-none space-y-4 font-normal text-center mx-auto">
                        <li className="text-rose-600">The value they prioritize.</li>
                        <li className="text-rose-600">The experience that frustrates them.</li>
                        <li className="text-rose-600">The moment they nearly decided to leave.</li>
                    </ul>
                </div>
                
                <p className="mt-16 text-4xl md:text-5xl font-semibold max-w-5xl mx-auto leading-snug text-gray-800"> 
                    QuickChat delivers video conversations @ scale, giving you the critical
                    <span className={`font-extrabold ${SECONDARY_GRADIENT} bg-clip-text text-transparent`}>
                        {' '}WHY{' '}
                    </span> 
                    and a clear strategic action plan in less than
                    <span className={`font-extrabold ${SECONDARY_GRADIENT} bg-clip-text text-transparent`}>
                        {' '}48 hours.
                    </span> 
                </p>
                
            </section>

            <div className="border-y border-gray-300" />

            {/* 3. VIDEO ASK SECTION (Embedded Demo) */}
            <VideoAskSection />

            <div className="border-y border-gray-300" />

            {/* 4. HOW IT WORKS SECTION */}
            <FeatureBlock
                title="How it works"
                data={HOW_IT_WORKS_DATA}
                type="icon"
                gridColumns={4}
            />
            
            <div className="border-y border-gray-300" />

            {/* 5. KEY BENEFITS SECTION (Metrics) */}
            <FeatureBlock
                title="Key Benefits"
                data={ROI_DATA}
                type="metric"
                gridColumns={3}
            />

            <div className="border-y border-gray-300" />

            {/* 6. CASE STUDY TEASER */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="relative">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60" />
                        <p className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-800 leading-snug">
                            See how we helped an Irish company use QuickChat to inform their
                            {' '}
                            <span className="font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                                European market strategy
                            </span>
                            {' '}
                            and started to fix
                            {' '}
                            <span className={`font-bold ${SECONDARY_GRADIENT} bg-clip-text text-transparent`}>
                                churn
                            </span> 
                            {' '}
                            within one week.
                        </p>
                        <a
                            href="/case-study"
                            className="mt-12 inline-block px-10 py-4 text-lg font-medium text-white bg-pink-500 rounded-full shadow-xl hover:shadow-pink-500/50 transition-all duration-300"
                        >
                            Read the Full Case Study →
                        </a>
                    </div>
                </div>
            </section>

            <div className="border-y border-gray-300" />

            {/* 7. TRUST PARTNER SECTION */}
            <FeatureBlock
                title="Your Trusted CX Partner"
                data={TRUST_DATA}
                type="icon"
                gridColumns={3}
            />

            <div className="border-y border-gray-300" />

            {/* 8. OUR OWN DATA SECTION */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Title - Updated to SECONDARY_GRADIENT */}
                    <h2 className={`text-center text-6xl md:text-8xl font-black ${SECONDARY_GRADIENT} bg-clip-text text-transparent`}>
                        Our Own QuickChat Data
                    </h2>
                    <p className="mt-8 text-2xl md:text-3xl text-gray-800 font-semibold max-w-2xl mx-auto">
                        Each quarter, we run QuickChat with our own customers and publish what we learn. It helps us improve the platform in practical, customer-led ways.
                    </p>
                    <a
                        href={listeningPageLink}
                        className="mt-12 inline-block px-10 py-4 text-lg font-medium text-white bg-cyan-600 rounded-full shadow-xl hover:shadow-cyan-600/50 transition-all duration-300"
                    >
                        Check out the latest!
                    </a>
                </div>
            </section>

            <div className="border-y border-gray-300" />

            {/* 9. FINAL CTA (Requires checkbox check to activate) */}
            <FinalCTA
                strategyAgreed={strategyAgreed}
                setStrategyAgreed={setStrategyAgreed}
            />

            {/* 10. SIMPLE FOOTER. Adjusted for light mode. */}
            <div className="py-8 px-6 text-center text-sm text-gray-500 bg-gray-100">
                © 2025 QuickChat. All rights reserved.
            </div>
        </div>
    );
}