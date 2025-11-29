'use client';
import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import {
    ShieldCheckIcon, HeartIcon, SparklesIcon, VideoCameraIcon, PaperAirplaneIcon, ChatBubbleLeftRightIcon, LockClosedIcon,
} from '@heroicons/react/24/solid';

// --- DATA STRUCTURES ---

const HOW_IT_WORKS_DATA = [
    { title: "1. Set your question.", detail: "We agree on one clear question to explore — onboarding, cancellations, trust, pricing, or product fit.", icon: "VideoCameraIcon", color: "pink" },
    { title: "2. Deploy to key segments", detail: "You share one simple link with the customers you want to hear from — new, loyal, at-risk, or recently cancelled.", icon: "PaperAirplaneIcon", color: "purple" },
    { title: "3. Hear the Real Experience", detail: "Customers respond in a short voice note or a brief written message. It’s often the first time they’ve had an easy way to say what really shaped their experience.", icon: "ChatBubbleLeftRightIcon", color: "rose" },
    { title: "4. Instant Strategy Blueprint", detail: "We summarise the main patterns, concerns, and drivers — and return a clear, practical view of what to focus on next, usually within 48 hours.", icon: "SparklesIcon", color: "cyan" },
];

const ROI_DATA = [
    { metric: "3×", detail: "Higher participation than traditional surveys, because people find it easier to speak or write naturally.", color: "pink" },
    { metric: "10×", detail: "Faster understanding of the reasons behind cancellations, hesitation, and long-term loyalty.", color: "purple" },
    { metric: "<48h", detail: "From question to clear direction while there is still time to act.", color: "cyan" },
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

const textColor = (color) => {
    switch (color) {
        case 'pink': return 'text-pink-300';
        case 'purple': return 'text-purple-300';
        case 'rose': return 'text-rose-300';
        case 'cyan': return 'text-cyan-300';
        default: return 'text-white';
    }
};

const metricColorGradient = (color) => {
    switch (color) {
        case 'pink': return 'bg-gradient-to-r from-pink-400 to-rose-400';
        case 'purple': return 'bg-gradient-to-r from-purple-400 to-fuchsia-400';
        case 'cyan': return 'bg-gradient-to-r from-cyan-400 to-teal-300';
        default: return 'bg-gray-500';
    }
};

// --- INTERNAL COMPONENT FUNCTIONS ---

function Hero({ y1, y2 }) {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 md:pb-32">
            {/* Parallax blobs */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-pink-400/40 via-rose-400/30 to-purple-500/40 rounded-full blur-3xl" />
                <div className="absolute top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-bl from-fuchsia-400/30 to-violet-500/20 rounded-full blur-3xl" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-tl from-teal-400/30 via-cyan-400/30 to-sky-400/20 rounded-full blur-3xl" />
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 opacity-70 scale-150 md:scale-125 pointer-events-none">
                    {/* Image mockups remain */}
                    <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl"><img src="/mockup-1.png" alt="" className="w-full h-full object-cover" /></div>
                    <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl translate-y-8 md:translate-y-16"><img src="/mockup-2.png" alt="" className="w-full h-full object-cover" /></div>
                    <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl"><img src="/mockup-3.png" alt="" className="w-full h-full object-cover" /></div>
                    <div className="relative aspect-[9/16] w-40 md:w-64 rounded-3xl overflow-hidden border-4 border-white/5 shadow-xl translate-y-8 md:translate-y-16"><img src="/mockup-4.png" alt="" className="w-full h-full object-cover" /></div>
                </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} className="text-center z-20 max-w-7xl px-6">
                <h1 className="text-8xl leading-none font-black tracking-tighter md:text-9xl lg:text-[200px] xl:text-[220px]">
                    <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-white bg-clip-text text-transparent">Quick</span>
                    <br />
                    <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
                </h1>
                {/* UPDATED: Hero strap line */}
                <p className="mt-8 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight max-w-4xl mx-auto">
                    <span className="bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">
                        START CREATING WHAT CUSTOMERS LOVE.
                    </span>
                </p>
            </motion.div>
        </section>
    );
}

function VideoAskSection() { // Removed videoConsent, setVideoConsent props
    return (
        <>
            <section className="pt-20 pb-16 px-6 text-center">
                <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                    Have a QuickChat with us
                </motion.h2>
            </section>
            <section className="px-4 md:px-8 -mt-12 pb-24 md:pb-32">
                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
                    <div className="aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative">
                        {/* REMOVED: !videoConsent logic and consent card */}
                        <iframe 
                            src="https://www.videoask.com/f79eyujri" 
                            allow="camera; microphone; autoplay; display-capture" 
                            className="w-full h-full" 
                            title="QuickChat Demo" 
                        />
                    </div>
                </motion.div>
            </section>
        </>
    );
}

function FeatureBlock({ title, data, type, gridColumns }) {
    const gridClass = `grid md:grid-cols-${gridColumns} gap-12 mt-20`;

    return (
        <section className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2 className="text-center text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                    {title}
                </motion.h2>

                <div className={gridClass}>
                    {data.map((item, index) => {
                        const Icon = type === 'icon' ? getIconComponent(item.icon) : null;
                        
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
                                        <div className="w-full h-full rounded-full bg-black/60 backdrop-blur flex items-center justify-center">
                                            <Icon className={`h-16 w-16 ${textColor(item.color)}`} />
                                        </div>
                                    </div>
                                )}
                                
                                {type === 'metric' && (
                                    <div className={`text-9xl md:text-[180px] font-black leading-none ${metricColorGradient(item.color)} bg-clip-text text-transparent`}>
                                        {item.metric}
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-white/70">{item.detail}</p>
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
        <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
                <h2 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                    Ready to Inform Your Next<br /><span className="text-cyan-300">Big Strategy</span>?
                </h2>
                <p className="mt-12 text-2xl md:text-3xl text-white/80 max-w-2xl mx-auto">
                    If you’d like a clearer picture of what your customers actually experience, a <span className="font-bold">short pilot</span> can give you that insight within days.
                </p>
                
                {/* Privacy Notice and Consent Checkbox for Strategy Call */}
                <div className="mt-16 mb-8 max-w-lg mx-auto p-4 rounded-xl bg-white/5 shadow-inner shadow-pink-500/10 border border-pink-400/30">
                    <label className="flex items-start cursor-pointer text-sm md:text-base text-white/90">
                        <input 
                            type="checkbox" 
                            checked={strategyAgreed} 
                            onChange={() => setStrategyAgreed(!strategyAgreed)} 
                            className="mt-1 mr-3 w-5 h-5 form-checkbox accent-pink-500 bg-transparent border-pink-400 rounded-md focus:ring-pink-500 transition duration-150 ease-in-out"
                        />
                        <span className="text-left leading-snug font-light">
                            By checking, you agree to the temporary use of your name and email address for <span className="font-bold">scheduling purposes only</span>.
                        </span>
                    </label>
                </div>
                
                <motion.a
                    href={strategyAgreed ? finalCTALink : "#"} 
                    whileHover={strategyAgreed ? { scale: 1.05 } : { scale: 1.0 }}
                    whileTap={strategyAgreed ? { scale: 0.95 } : { scale: 1.0 }}
                    className={`mt-8 inline-block px-32 py-16 text-3xl font-bold rounded-full shadow-2xl transition-all duration-300
                        ${strategyAgreed 
                            ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-pink-500/50 cursor-pointer"
                            : "bg-gray-700/50 text-gray-400 cursor-not-allowed shadow-none"
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

export default function Home() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -900]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -700]);

    const [strategyAgreed, setStrategyAgreed] = useState(false);
    // REMOVED: videoConsent state as it's no longer used

    // --- Specific URL for the QuickChat Data Listening Page ---
    const listeningPageLink = "/listening"; 

    return (
        <div ref={container} className="relative bg-black overflow-hidden text-white">
            {/* 1. HERO SECTION */}
            <Hero y1={y1} y2={y2} />

            <div className="border-y border-pink-700/50" />

            {/* 2. VALUE PROPOSITION (List Centering Applied) */}
            <section className="py-24 md:py-32 px-6 text-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-snug bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent max-w-5xl mx-auto">
                    Your Customer has the Strategy.
                </h2>
                <div className="mt-12 text-3xl md:text-4xl text-white/95 font-medium max-w-4xl mx-auto">
                    {/* Centering is achieved by making the <ul> block centered and using text-center on it */}
                    <ul className="list-none space-y-4 font-normal text-center mx-auto">
                        <li className="text-rose-300">→ The value they prioritize.</li>
                        <li className="text-rose-300">→ The experience that frustrates them.</li>
                        <li className="text-rose-300">→ The moment they nearly decided to leave.</li>
                    </ul>
                </div>
                
                {/* --- SINGLE SENTENCE CORE VALUE (SPACING FIXED) --- */}
                
                <p className="mt-16 text-4xl md:text-5xl font-light max-w-5xl mx-auto leading-snug">
                    QuickChat uses video to provide the missing
                    <span className="font-extrabold bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">
                        {' '}WHY{' '}
                    </span> 
                    and delivers clear strategy in
                    <span className="font-extrabold bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">
                        {' '}48 hours{' '}
                    </span> 
                    for faster growth.
                </p>
                
                {/* ---------------------------------------------------- */}
                
            </section>

            <div className="border-y border-pink-700/50" />

            {/* 3. VIDEO ASK SECTION */}
            <VideoAskSection /> {/* Removed videoConsent, setVideoConsent props */}

            <div className="border-y border-pink-700/50" />

            {/* 4. HOW IT WORKS SECTION (Title Changed) */}
            <FeatureBlock
                title="How it works"
                data={HOW_IT_WORKS_DATA}
                type="icon"
                gridColumns={4}
            />

            <div className="border-y border-pink-700/50" />

            {/* 5. ROI SECTION */}
            <FeatureBlock
                title="The Real Impact of Listening"
                data={ROI_DATA}
                type="metric"
                gridColumns={3}
            />

            <div className="border-y border-pink-700/50" />

            {/* 6. CASE STUDY TEASER (Spacing Guaranteed with explicit { ' ' } ) */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="relative">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60" />
                        <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white/80 leading-snug">
                            See how we helped an Irish company use QuickChat to inform their
                            {' '}
                            <span className="font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                                European market strategy
                            </span>
                            {' '}
                            and started to fix
                            {' '}
                            <span className="font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                churn
                            </span> 
                            {' '}
                            within one week.
                        </p>
                        <a
                            href="/case-study"
                            className="mt-12 inline-block px-10 py-4 text-lg font-medium text-black bg-white rounded-full shadow-xl hover:shadow-white/40 transition-all duration-300"
                        >
                            Read the Full Case Study →
                        </a>
                    </div>
                </div>
            </section>

            <div className="border-y border-pink-700/50" />

            {/* 7. TRUST PARTNER SECTION */}
            <FeatureBlock
                title="Your Trusted CX Partner"
                data={TRUST_DATA}
                type="icon"
                gridColumns={3}
            />

            <div className="border-y border-pink-700/50" />

            {/* 8. OUR OWN DATA SECTION */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-center text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
                        Our Own QuickChat Data
                    </h2>
                    <p className="mt-8 text-2xl md:text-3xl text-white/80 font-light max-w-2xl mx-auto">
                        Each quarter, we run QuickChat with our own customers and publish what we learn. It helps us improve the platform in practical, customer-led ways.
                    </p>
                    <a
                        href={listeningPageLink}
                        className="mt-12 inline-block px-10 py-4 text-lg font-medium text-black bg-cyan-400 rounded-full shadow-xl hover:shadow-cyan-400/40 transition-all duration-300"
                    >
                        Check out the latest!
                    </a>
                </div>
            </section>

            <div className="border-y border-pink-700/50" />

            {/* 9. FINAL CTA */}
            <FinalCTA
                strategyAgreed={strategyAgreed}
                setStrategyAgreed={setStrategyAgreed}
            />

            {/* 10. SIMPLE FOOTER */}
            <div className="py-8 px-6 text-center text-sm text-white/50 bg-black/20">
                © 2025 QuickChat. All rights reserved.
            </div>
        </div>
    );
}