import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles,
    Video,
    MessageSquare,
    ChevronRight,
    ArrowRight,
    Send,
    ClipboardList,
    Zap,
    FileText,
    Users,
    Mic,
    TrendingUp,
    Quote
} from 'lucide-react';

// --- THEME CONSTANTS ---
const THEME = {
    pink: "bg-pink-600",
    pinkLight: "bg-pink-50",
    pinkText: "text-pink-600",
    purple: "bg-purple-500",
    purpleLight: "bg-purple-50",
    purpleText: "text-purple-600",
    cyan: "bg-cyan-500",
    cyanLight: "bg-cyan-50",
    cyanText: "text-cyan-600",
    rose: "bg-rose-500",
    roseLight: "bg-rose-50",
    roseText: "text-rose-600",
    darkText: "text-gray-900"
};

// --- DATA ---

const HOW_IT_WORKS = [
    {
        step: "01",
        title: "Set your question.",
        detail: "We agree on clear questions to explore — onboarding, cancellations, trust, pricing, or product fit.",
        icon: ClipboardList,
        color: "pink"
    },
    {
        step: "02",
        title: "Deploy to key segments",
        detail: "You share one simple link with the customers you want to hear from — new, loyal, at-risk, or recently cancelled.",
        icon: Send,
        color: "purple"
    },
    {
        step: "03",
        title: "Hear the Real Experience",
        detail: "Customers respond via a short voice note or brief written message, in any language. This low-friction, voice-accessible approach ensures you capture what truly shaped their experience.",
        icon: MessageSquare,
        color: "rose"
    },
    {
        step: "04",
        title: "Instant Strategy Blueprint",
        detail: "We summarise the main patterns, concerns, and drivers — and return a clear, practical view of what to focus on next, usually within 48 hours.",
        icon: Zap,
        color: "cyan"
    }
];

const ROI_DATA = [
    { 
        metric: "3×", 
        title: "Participation", 
        detail: "Higher participation than traditional surveys.", 
        color: "pinkText" 
    },
    { 
        metric: "10×", 
        title: "Insights", 
        detail: "Better understanding of the 'Why'.", 
        color: "darkText" 
    },
    { 
        metric: "<48h", 
        title: "Action", 
        detail: "Rapid delivery of actionable strategy.", 
        color: "pinkText" 
    },
];

// --- HELPER COMPONENTS ---

const HeroGraphic = () => {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Phone Frame */}
            <div className="relative z-20 w-[320px] h-[640px] bg-black rounded-[4rem] border-[14px] border-gray-900 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.4)] overflow-hidden">
                {/* Dynamic Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-gray-900 rounded-b-[2rem] z-40 flex items-center justify-center">
                    <div className="w-12 h-1 bg-gray-800 rounded-full" />
                </div>
                
                <div className="w-full h-full relative bg-gray-50 flex flex-col items-center overflow-hidden">
                    {/* Visualizing the Network to Report */}
                    <div className="relative w-full h-full flex flex-col items-center pt-16 pb-20 px-4">
                        
                        {/* 3 Large, Overlapping Insight Cards */}
                        <div className="w-full space-y-4 relative z-10">
                            {[
                                { emoji: "🧔🏿", text: "Pricing felt a bit high...", color: "border-pink-200", delay: 0 },
                                { emoji: "👩🏼‍💼", text: "The onboarding was quick!", color: "border-purple-200", delay: 0.2 },
                                { emoji: "👨🏽‍💻", text: "Loved the new API docs.", color: "border-cyan-200", delay: 0.4 }
                            ].map((user, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ y: 20, opacity: 0, scale: 0.9 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    transition={{ delay: user.delay, duration: 0.5 }}
                                    className={`flex items-center gap-3 p-4 rounded-3xl bg-white border ${user.color} shadow-xl shadow-gray-200/50`}
                                >
                                    <div className="w-12 h-12 flex-shrink-0 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl">
                                        {user.emoji}
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <div className="flex items-center gap-1 mb-1">
                                            <Mic className="w-3 h-3 text-pink-500" />
                                            <div className="h-1.5 w-full bg-gray-100 rounded-full relative overflow-hidden">
                                                <motion.div 
                                                    animate={{ x: ["-100%", "100%"] }}
                                                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                                    className="absolute inset-0 bg-pink-500 w-1/2"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-[11px] font-bold text-gray-800 truncate">{user.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Convergence Point */}
                        <div className="flex-1 flex flex-col items-center justify-center relative w-full">
                             {/* Floating Particle Lines */}
                             <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                                <motion.path 
                                    d="M 150 0 L 150 120" 
                                    stroke="#ec4899" 
                                    strokeWidth="2" 
                                    strokeDasharray="4,8"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 0.3 }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </svg>

                            {/* Central Strategy Icon */}
                            <motion.div 
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 2, -2, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="relative z-10 w-32 h-32 bg-pink-600 rounded-[3rem] shadow-[0_20px_50px_rgba(236,72,153,0.4)] flex flex-col items-center justify-center text-white p-4"
                            >
                                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full animate-pulse" />
                                <FileText className="w-14 h-14 mb-2 relative z-10" />
                                <span className="text-[12px] font-black uppercase tracking-[0.2em] relative z-10 text-center leading-none">STRATEGY</span>
                            </motion.div>
                        </div>

                        {/* Bottom Status Bar */}
                        <div className="w-full mt-4 bg-gray-900 rounded-[2rem] p-5 shadow-2xl">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-pink-400 fill-pink-400" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Active Analysis</span>
                                </div>
                                <span className="text-[10px] font-black text-pink-400 uppercase tracking-widest">48h Target</span>
                            </div>
                            <div className="grid grid-cols-4 gap-1">
                                {[1, 2, 3, 4].map(i => (
                                    <motion.div 
                                        key={i}
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                        className="h-1 bg-pink-500 rounded-full"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Blurs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-400/10 rounded-full blur-[140px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-400/10 rounded-full blur-[140px] translate-x-24 -z-10" />
        </div>
    );
};

// --- MAIN APP ---

export default function App() {
    return (
        <div className="bg-[#FAFAFA] font-sans selection:bg-pink-100 selection:text-pink-900 text-gray-900">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-white/80 backdrop-blur-xl border-b border-gray-100">
                <div className="text-xl font-black tracking-tighter flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <MessageSquare className="text-white w-4 h-4" />
                    </div>
                    QUICKCHAT
                </div>
                <div className="flex items-center gap-6">
                    <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-pink-600 bg-pink-50 px-3 py-1 rounded-full">Private Beta</span>
                    <button 
                        onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:bg-gray-800 transition-all flex items-center gap-2"
                    >
                        Contact Us <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-7xl md:text-[8.5rem] font-black tracking-tighter leading-[0.85] mb-8">
                            Quick<span className="text-pink-600">Chat</span>
                        </h1>
                        <p className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.05] mb-8">
                            Hear from everyone. <br/>
                            <span className="text-pink-600">Get Targeted Strategy.</span>
                        </p>
                    </motion.div>
                    <HeroGraphic />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 px-6 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">How it works</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {HOW_IT_WORKS.map((item, i) => (
                            <div key={i} className="group relative">
                                <div className="text-6xl font-black text-gray-100 mb-4 group-hover:text-pink-50 transition-colors">
                                    {item.step}
                                </div>
                                <div className={`w-12 h-12 rounded-2xl ${THEME[item.color + 'Light'] || 'bg-gray-50'} flex items-center justify-center mb-6`}>
                                    <item.icon className={`w-6 h-6 ${THEME[item.color + 'Text'] || 'text-gray-900'}`} />
                                </div>
                                <h3 className="text-xl font-black mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">
                                    {item.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI Section (Key Benefits) */}
            <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12">
                    {ROI_DATA.map((item, i) => (
                        <div key={i} className="text-center group">
                            <div className={`text-9xl font-black mb-4 tracking-tighter transition-transform group-hover:scale-110 duration-500 ${THEME[item.color]}`}>
                                {item.metric}
                            </div>
                            <h4 className="text-2xl font-black mb-2">{item.title}</h4>
                            <p className="text-gray-500 font-medium">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Case Study / Success Story Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="bg-black rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8">
                        <TrendingUp className="text-pink-600 w-16 h-16 opacity-20 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 text-pink-500 text-xs font-black uppercase tracking-widest border border-white/10">
                            <Sparkles className="w-3 h-3" />
                            Early Success Story
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
                                        Zeus Scooters <br/>
                                        <span className="text-gray-600">• Customer Churn</span>
                                    </h3>
                                    <p className="text-xl md:text-2xl font-bold text-gray-500 leading-tight">
                                        European customer base.
                                    </p>
                                </div>

                                {/* Testimonial Quote */}
                                <div className="relative pl-10 border-l-2 border-pink-600">
                                    <Quote className="absolute -left-2 -top-4 w-8 h-8 text-pink-600 opacity-30" />
                                    <p className="text-2xl md:text-3xl font-black text-white leading-tight italic tracking-tight">
                                        "You've given me a step-by-step guide to reduce churn."
                                    </p>
                                    <div className="mt-4">
                                        <p className="text-sm font-black text-pink-600 uppercase tracking-widest">— Chris Kemp</p>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Deputy CEO, Zeus Scooters</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12 lg:border-t-0 lg:pt-0 self-end">
                                <div>
                                    <div className="text-4xl font-black text-pink-600">€900K</div>
                                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2 leading-tight">Annual Projected Revenue Recovery</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white">10K</div>
                                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2 leading-tight">Customers Targeted for Win-Back Q1</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-pink-600">{'<'}7</div>
                                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2 leading-tight">Strategy Delivered in Days</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subtle glow background */}
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px]" />
                </div>
            </section>

            {/* Final CTA */}
            <section id="final-cta" className="py-40 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-pink-50 text-pink-600 text-xs font-black uppercase tracking-widest">
                        Currently in Private Beta
                    </div>
                    <h2 className="text-6xl md:text-[8rem] font-black mb-12 tracking-tighter leading-none">
                        Let's have a <br/><span className="text-pink-600">Quick Chat.</span>
                    </h2>
                    
                    <a
                        href="mailto:damien@quickchat.space?subject=QuickChat Private Beta Inquiry"
                        className="inline-flex items-center justify-center w-full max-w-2xl py-8 text-3xl font-black rounded-[2.5rem] bg-black text-white hover:scale-105 shadow-2xl shadow-pink-200 transition-all"
                    >
                        Contact Us
                        <ChevronRight className="ml-4 w-10 h-10" />
                    </a>
                    
                    <p className="mt-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
                        Limited slots available for Q1 2026
                    </p>
                </div>
            </section>

            <footer className="py-20 bg-gray-50 px-8 text-center md:text-left rounded-t-[4rem]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
                    <div className="flex items-center gap-2 text-black">
                        <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                            <MessageSquare className="text-white w-3 h-3" />
                        </div>
                        QUICKCHAT
                    </div>
                    <div className="flex gap-12">
                        <span className="text-pink-600">Private Beta</span>
                    </div>
                    <div>© 2026 ALL RIGHTS RESERVED</div>
                </div>
            </footer>
        </div>
    );
}