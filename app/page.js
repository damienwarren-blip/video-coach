import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles,
    MessageSquare,
    ChevronRight,
    ArrowRight,
    Send,
    ClipboardList,
    Zap,
    FileText,
    Mic,
    TrendingUp,
    ShieldCheck,
    Lock,
    Globe,
    FileCheck,
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
        detail: "Customers respond via a short voice note or brief written message. This low-friction, voice-accessible approach ensures you capture raw sentiment.",
        icon: MessageSquare,
        color: "rose"
    },
    {
        step: "04",
        title: "Instant Strategy Blueprint",
        detail: "We return a clear, practical view of what to focus on next, summarising patterns and concerns, usually within 48 hours.",
        icon: Zap,
        color: "cyan"
    }
];

const ROI_DATA = [
    { metric: "3×", title: "Participation", detail: "Higher engagement than traditional surveys.", color: "pinkText" },
    { metric: "10×", title: "Depth", detail: "Understand the 'Why' behind customer behavior.", color: "darkText" },
    { metric: "<48h", title: "Turnaround", detail: "Rapid delivery of actionable strategy.", color: "pinkText" },
];

const COMPLIANCE_ITEMS = [
    { icon: ShieldCheck, title: "GDPR Ready", detail: "Data processed within EU boundaries." },
    { icon: Lock, title: "AES-256", detail: "Encryption at rest and in transit." },
    { icon: Globe, title: "WCAG + Multilingual", detail: "Universal access. 20+ languages." },
    { icon: FileCheck, title: "SOC 2 Type I", detail: "Strict auditing procedures." }
];

// --- COMPONENTS ---

const HeroGraphic = () => {
    return (
        <div className="relative w-full h-[550px] md:h-[700px] flex items-center justify-center">
            <div className="relative z-20 w-[300px] md:w-[340px] h-[600px] md:h-[680px] bg-black rounded-[3.5rem] md:rounded-[4.5rem] border-[12px] md:border-[16px] border-gray-900 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.4)] overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-7 md:h-9 bg-gray-900 rounded-b-[2rem] z-40 flex items-center justify-center">
                    <div className="w-12 md:w-16 h-1 bg-gray-800 rounded-full" />
                </div>
                
                <div className="w-full h-full relative bg-gray-50 flex flex-col items-center overflow-hidden">
                    <div className="relative w-full h-full flex flex-col items-center pt-16 md:pt-20 pb-20 px-4">
                        
                        <div className="w-full space-y-4 md:space-y-6 relative z-10">
                            {[
                                { emoji: "🧔🏿", text: "Training was very engaging.", color: "border-pink-200", delay: 0 },
                                { emoji: "👩🏼‍💼", text: "Matches our product needs.", color: "border-purple-200", delay: 0.2 },
                                { emoji: "👨🏽‍💻", text: "Best customer experience yet!", color: "border-cyan-200", delay: 0.4 }
                            ].map((user, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ x: -60, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: user.delay + 0.3, duration: 0.7 }}
                                    className={`flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl md:rounded-[2rem] bg-white border ${user.color} shadow-xl shadow-gray-200/50 w-full`}
                                >
                                    <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 bg-gray-100 rounded-2xl md:rounded-[1.2rem] flex items-center justify-center text-2xl md:text-3xl shadow-inner">
                                        {user.emoji}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1.5 mb-1.5">
                                            <Mic className="w-3 h-3 text-pink-500 flex-shrink-0" />
                                            <div className="h-1 w-full bg-gray-100 rounded-full relative overflow-hidden">
                                                <motion.div 
                                                    animate={{ x: ["-100%", "100%"] }}
                                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                                    className="absolute inset-0 bg-pink-500 w-1/3"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-[10px] md:text-[11px] font-black text-gray-800 leading-tight line-clamp-2">{user.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center relative w-full">
                            <motion.div 
                                animate={{ scale: [1, 1.08, 1] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="relative z-10 w-28 h-28 md:w-36 md:h-36 bg-pink-600 rounded-[3rem] shadow-[0_30px_60px_rgba(236,72,153,0.3)] flex flex-col items-center justify-center text-white"
                            >
                                <FileText className="w-12 h-12 md:w-16 md:h-16 mb-2" />
                                <span className="text-[10px] md:text-xs font-black tracking-[0.3em]">STRATEGY</span>
                            </motion.div>
                        </div>

                        <div className="w-full bg-gray-900 rounded-[2rem] p-5 shadow-2xl border border-white/5">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-pink-400 fill-pink-400" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Enterprise Engine</span>
                                </div>
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            </div>
                            <div className="grid grid-cols-4 gap-1.5">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="h-1 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div 
                                            animate={{ width: ["0%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                            className="h-full bg-pink-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-pink-500/5 rounded-full blur-[120px] -z-10" />
        </div>
    );
};

export default function App() {
    return (
        <div className="bg-[#FAFAFA] font-sans selection:bg-pink-100 selection:text-pink-900 text-gray-900 overflow-x-hidden">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 p-4 md:p-6 bg-white/80 backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="text-xl font-black tracking-tighter flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <MessageSquare className="text-white w-4 h-4" />
                        </div>
                        QUICKCHAT
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden md:block text-[10px] font-black bg-pink-100 text-pink-600 px-3 py-1 rounded-full uppercase tracking-widest">Private Beta</span>
                        <button 
                            onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-all flex items-center gap-2"
                        >
                            Contact <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 md:pt-48 pb-16 md:pb-32 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-block md:hidden mb-6 text-[10px] font-black bg-pink-100 text-pink-600 px-3 py-1 rounded-full uppercase tracking-widest">Private Beta</div>
                        <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-10">
                            Understand your customers.<br/>
                            <span className="text-pink-600">Act faster.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-xl mb-12 leading-relaxed">
                            We capture real voice feedback and turn it into a high-impact strategy.
                        </p>
                        <button 
                            onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-5 bg-black text-white rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-gray-200"
                        >
                            Reserve Q1 Slot
                        </button>
                    </motion.div>
                    <HeroGraphic />
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-6 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-20">How it works</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {HOW_IT_WORKS.map((item, i) => (
                            <div key={i}>
                                <div className="text-7xl font-black text-gray-50 mb-4">{item.step}</div>
                                <div className={`w-14 h-14 rounded-2xl ${THEME[item.color + 'Light']} flex items-center justify-center mb-6`}>
                                    <item.icon className={`w-7 h-7 ${THEME[item.color + 'Text']}`} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-16">
                    {ROI_DATA.map((item, i) => (
                        <div key={i} className="text-center">
                            <div className={`text-8xl md:text-[10rem] font-black mb-4 tracking-tighter ${THEME[item.color]}`}>{item.metric}</div>
                            <h4 className="text-2xl font-black mb-2">{item.title}</h4>
                            <p className="text-gray-500 font-medium text-lg">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Success Case: Zeus Scooters */}
            <section className="py-24 px-6 bg-black text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-pink-500 bg-pink-500/10 px-4 py-2 rounded-full">Success Case</span>
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Zeus Scooters</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">
                                Reducing <span className="text-pink-500">Churn</span> across Europe.
                            </h2>
                            
                            <div className="relative p-8 md:p-12 bg-white/5 border border-white/10 rounded-[3rem] mb-12">
                                <Quote className="absolute top-6 right-8 w-12 h-12 text-pink-500/20" />
                                <p className="text-2xl md:text-3xl font-bold leading-tight mb-8">
                                    "You've given me a step-by-step guide to reduce churn."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center font-black">CK</div>
                                    <div>
                                        <div className="font-black text-lg">Chris Kemp</div>
                                        <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">Deputy CEO, Zeus Scooters</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col justify-between hover:bg-white/10 transition-all">
                                <TrendingUp className="w-10 h-10 text-pink-500 mb-12" />
                                <div>
                                    <div className="text-5xl font-black mb-2">€900K</div>
                                    <div className="text-xs font-black text-gray-500 uppercase tracking-widest leading-relaxed">Annual Projected<br/>Revenue Recovery</div>
                                </div>
                            </div>
                            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col justify-between hover:bg-white/10 transition-all">
                                <MessageSquare className="w-10 h-10 text-cyan-500 mb-12" />
                                <div>
                                    <div className="text-5xl font-black mb-2">10K</div>
                                    <div className="text-xs font-black text-gray-500 uppercase tracking-widest leading-relaxed">Customers Targeted<br/>for Win-Back Q1</div>
                                </div>
                            </div>
                            <div className="p-10 bg-pink-600 rounded-[2.5rem] flex flex-col justify-between md:col-span-2">
                                <div className="flex justify-between items-start">
                                    <Zap className="w-10 h-10 text-white mb-12" />
                                    <div className="text-right">
                                        <div className="text-5xl font-black leading-none">&lt;7</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-80 mt-1">Days</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black mb-1">Strategy Delivered</div>
                                    <div className="text-xs font-bold opacity-80 uppercase tracking-widest">Full roadmap to European market retention</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] -z-10" />
            </section>

            {/* Compliance Section (Simplified & Direct) */}
            <section className="py-24 md:py-32 px-6 bg-gray-50 border-y border-gray-100 overflow-hidden relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">Compliance.</h2>
                            <p className="text-xl md:text-2xl text-gray-500 font-bold uppercase tracking-widest">Built-in by design.</p>
                        </div>
                        <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-pink-600 border-b-2 border-pink-100 pb-1 hover:border-pink-600 transition-all">
                            Full Security & Compliance Report <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {COMPLIANCE_ITEMS.map((item, i) => (
                            <div key={i} className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-sm transition-all hover:shadow-md">
                                <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon className="w-5 h-5 text-pink-600" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-black mb-1 tracking-tight">{item.title}</h3>
                                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-100 rounded-full blur-[100px] opacity-20 -z-10" />
            </section>

            {/* Final CTA */}
            <section id="final-cta" className="py-24 md:py-48 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-6xl md:text-[9rem] font-black mb-16 tracking-tighter leading-[0.85]">
                        Let's have a <br/><span className="text-pink-600">Quick Chat.</span>
                    </h2>
                    <a
                        href="mailto:damien@quickchat.space?subject=QuickChat Private Beta Inquiry"
                        className="inline-flex items-center justify-center w-full max-w-2xl py-8 md:py-10 text-2xl md:text-4xl font-black rounded-[3rem] bg-black text-white hover:scale-[1.02] shadow-2xl transition-all"
                    >
                        Contact Us <ChevronRight className="ml-4 w-10 h-10" />
                    </a>
                    <p className="mt-12 text-sm font-black text-gray-400 uppercase tracking-widest">Limited slots available for Q1 2026</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 bg-white px-8 border-t border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-xl font-black tracking-tighter flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <MessageSquare className="text-white w-4 h-4" />
                        </div>
                        QUICKCHAT
                    </div>
                    <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest italic">© 2026 ALL RIGHTS RESERVED</div>
                </div>
            </footer>
        </div>
    );
}