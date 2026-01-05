"use client";

import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  ArrowRight, 
  Lock, 
  ShieldCheck, 
  BarChart3, 
  Repeat,
  ArrowUpRight,
  Quote,
  Globe,
  Target,
  ChevronRight,
  Sparkles,
  Waves,
  MessageSquare,
  Activity,
  Zap
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20 transition-transform group-hover:rotate-6">
              <Mic className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 uppercase tracking-[0.1em]">VoxLoop</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">
            <a href="#methodology" className="hover:text-indigo-600 transition-colors">Methodology</a>
            <a href="#case-study" className="hover:text-indigo-600 transition-colors">Case Study</a>
            <a href="#analysis" className="hover:text-indigo-600 transition-colors">Analysis Engine</a>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-black hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10">
              Book Pilot Call
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-64 lg:pb-72 flex flex-col items-center overflow-hidden bg-white">
        
        {/* Dynamic Signal Weave Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg className="absolute w-full h-full opacity-60" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M-100 450C150 450 300 250 500 250C700 250 850 550 1100 550C1350 550 1550 350 1800 350" 
              stroke="url(#hero-gradient-1)" 
              strokeWidth="80" 
              strokeLinecap="round"
              className="animate-wave-slow opacity-20 lg:opacity-30 blur-2xl"
            />
            <path 
              d="M-50 400C200 400 350 200 550 200C750 200 900 600 1150 600C1400 600 1600 400 1850 400" 
              stroke="url(#hero-gradient-2)" 
              strokeWidth="2" 
              className="animate-wave-fast"
            />
             <path 
              d="M-50 410C200 410 350 210 550 210C750 210 900 610 1150 610C1400 610 1600 410 1850 410" 
              stroke="url(#hero-gradient-2)" 
              strokeWidth="1" 
              className="animate-wave-medium opacity-50"
            />
            
            <defs>
              <linearGradient id="hero-gradient-1" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#818CF8" />
              </linearGradient>
              <linearGradient id="hero-gradient-2" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
                <stop offset="25%" stopColor="#4F46E5" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200 rounded-full blur-[120px] opacity-30 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-8 lg:mb-10 shadow-sm">
            <Sparkles size={14} className="animate-spin-slow" /> Intelligence for Retention
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[120px] font-black text-slate-900 mb-8 lg:mb-10 tracking-tighter leading-[1] lg:leading-[0.85]">
            The power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 italic">voice.</span><br />
            The speed of <span className="text-indigo-600 bg-clip-text font-black drop-shadow-sm">AI.</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8 mb-12 lg:mb-16">
            <p className="text-lg lg:text-3xl text-slate-700 font-bold tracking-tight leading-tight">
              We are building a new way to connect with customers.
            </p>
            <p className="text-base lg:text-xl text-slate-500 leading-relaxed font-medium">
              One that lets them talk naturally — accessible to everyone, in any language — so you truly understand them. 
              Act fast on what matters, build lasting trust, and turn every conversation into revenue.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
            <button className="w-full sm:w-auto px-10 lg:px-12 py-5 lg:py-6 bg-slate-900 text-white hover:bg-slate-800 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 group shadow-xl shadow-slate-900/10 active:scale-95">
              Secure Your Slot <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 lg:px-12 py-5 lg:py-6 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 active:scale-95">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-24 lg:py-40 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-32 gap-6 lg:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-indigo-600 mb-4 lg:mb-6 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-indigo-600" /> The Methodology
              </h2>
              <p className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tight">How it works</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* 01: CAPTURE - Premium Visual */}
            <div className="group relative p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] bg-white border border-slate-200 overflow-hidden transition-all hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-200">
              <div className="absolute top-0 right-0 p-6 lg:p-8">
                <span className="text-7xl lg:text-8xl font-black text-slate-200 leading-none opacity-50 group-hover:text-indigo-100 transition-colors">01</span>
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 lg:mb-12 shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-500">
                  <Mic className="text-white w-7 h-7 lg:w-8 lg:h-8" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 lg:mb-6 tracking-tight leading-tight">Launch a short <br/>voice conversation</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6 lg:mb-8">
                  Want to understand your customers? Replace text-based fatigue with human voice. A short bot chat removes friction and works in any language.
                </p>
                
                <div className="relative h-56 lg:h-64 bg-slate-950 rounded-[2rem] border border-slate-800 p-6 overflow-hidden transition-transform group-hover:scale-[1.02]">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full border border-white/20 p-0.5">
                       <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Customer" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="space-y-1">
                      <div className="w-24 h-2 bg-white/20 rounded-full" />
                      <div className="w-16 h-1.5 bg-white/10 rounded-full" />
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                       <span className="text-[9px] font-black text-white/50 uppercase tracking-widest">Recording</span>
                    </div>
                  </div>
                  
                  <div className="flex items-end justify-center gap-1.5 h-20 mb-4">
                    {[0.4, 0.7, 1, 0.5, 0.9, 0.3, 0.6, 1, 0.7, 0.4, 0.9, 0.5, 0.8, 0.4].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 bg-indigo-500 rounded-full animate-wave" 
                        style={{ 
                          height: `${h * 100}%`, 
                          animationDelay: `${i * 0.1}s` 
                        }} 
                      />
                    ))}
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center">
                    <p className="text-[11px] font-medium text-white/80 italic">"The interface is so much simpler than..."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 02: STRATEGIC REPORT - Premium Visual */}
            <div className="group relative p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] bg-white border border-slate-200 overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-200">
              <div className="absolute top-0 right-0 p-6 lg:p-8">
                <span className="text-7xl lg:text-8xl font-black text-slate-200 leading-none opacity-50 group-hover:text-purple-100 transition-colors">02</span>
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-8 lg:mb-12 shadow-lg shadow-purple-600/20 group-hover:scale-110 transition-transform duration-500">
                  <BarChart3 className="text-white w-7 h-7 lg:w-8 lg:h-8" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 lg:mb-6 tracking-tight leading-tight">Strategic <br/>Report</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6 lg:mb-8">
                   AI instantly synthesizes every conversation into a clear action plan: themes, root causes, and prioritized fixes for your team.
                </p>

                <div className="relative h-56 lg:h-64 bg-slate-50 rounded-[2rem] border border-slate-200 p-6 overflow-hidden group-hover:bg-white transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Insight Engine</span>
                    <Zap size={14} className="text-purple-600 fill-purple-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm transform group-hover:translate-x-1 transition-transform">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-black text-slate-900 uppercase">Friction Hotspot</span>
                        <span className="text-[9px] font-black text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">Priority A</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full">
                        <div className="h-full bg-purple-600 w-[88%] rounded-full" />
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm transform group-hover:translate-x-2 transition-transform delay-75">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-black text-slate-900 uppercase">Value Perception</span>
                        <span className="text-[9px] font-black text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">Priority B</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full">
                        <div className="h-full bg-purple-400 w-[42%] rounded-full" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-purple-600 p-2 rounded-lg text-center">
                        <div className="text-[14px] font-black text-white">92%</div>
                        <div className="text-[7px] font-black text-white/50 uppercase tracking-tighter">Confidence</div>
                      </div>
                      <div className="flex-1 bg-slate-900 p-2 rounded-lg text-center">
                        <div className="text-[14px] font-black text-white">2.4h</div>
                        <div className="text-[7px] font-black text-white/50 uppercase tracking-tighter">Turnaround</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 03: TRUST LOOP - Premium Visual */}
            <div className="group relative p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] bg-white border border-slate-200 overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-200">
              <div className="absolute top-0 right-0 p-6 lg:p-8">
                <span className="text-7xl lg:text-8xl font-black text-slate-200 leading-none opacity-50 group-hover:text-emerald-100 transition-colors">03</span>
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 lg:mb-12 shadow-lg shadow-emerald-600/20 group-hover:scale-110 transition-transform duration-500">
                  <Repeat className="text-white w-7 h-7 lg:w-8 lg:h-8" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 lg:mb-6 tracking-tight leading-tight">Drive results and <br/>build long-term trust</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6 lg:mb-8">
                  Fix issues, show customers you listened, and close the loop. Trust grows, and feedback becomes your growth engine.
                </p>

                <div className="relative h-56 lg:h-64 bg-emerald-950 rounded-[2rem] border border-emerald-900 overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent opacity-50" />
                   
                   <div className="relative z-10 flex flex-col items-center">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-500/50 flex items-center justify-center relative">
                        <ShieldCheck size={40} className="text-emerald-400" />
                        <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-ping opacity-20" />
                        <div className="absolute -inset-4 rounded-full border border-emerald-500/10 animate-pulse delay-75" />
                      </div>
                      <div className="mt-6 space-y-2 text-center">
                        <div className="text-[12px] font-black uppercase text-emerald-400 tracking-[0.3em]">Verified Loop</div>
                        <div className="flex gap-1 justify-center">
                           {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-emerald-400" />)}
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - Zeus Scooters */}
      <section id="case-study" className="py-24 lg:py-40 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] lg:rounded-[4rem] p-8 lg:p-24 border border-slate-800 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 lg:p-12 hidden lg:block">
               <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">
                  <Globe size={14} /> European Micro-Mobility Case
               </div>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
               <div className="lg:col-span-7 space-y-10 lg:space-y-12 text-white">
                  <div className="flex items-center gap-4 lg:gap-6">
                     <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-2xl lg:rounded-3xl flex items-center justify-center text-black font-black text-xl lg:text-2xl">
                        ZEUS
                     </div>
                     <div>
                        <h4 className="font-black text-white text-xl lg:text-2xl tracking-tight leading-none">Chris Kemp</h4>
                        <p className="text-slate-400 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] mt-2 lg:mt-3">Deputy CEO, Zeus Scooters</p>
                     </div>
                  </div>

                  <div className="relative">
                     <Quote className="absolute -top-6 lg:-top-10 -left-6 lg:-left-12 text-white/5 w-16 lg:w-24 h-16 lg:h-24 -z-10" />
                     <p className="text-3xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                        "You've given me a step-by-step guide to <span className="text-indigo-400 italic">reduce churn.</span>"
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 lg:gap-10 pt-8 border-t border-white/10">
                    <div className="space-y-3 lg:space-y-4">
                      <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-indigo-400" /> The Challenge
                      </div>
                      <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-medium">
                        Zeus couldn't uncover why churn was climbing among 150,000 users—costing significant revenue.
                      </p>
                    </div>
                    <div className="space-y-3 lg:space-y-4">
                      <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-indigo-400" /> The Solution
                      </div>
                      <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-medium">
                        VOXLOOP voice campaigns achieved 3x participation and uncovered hidden drivers.
                      </p>
                    </div>
                  </div>
               </div>

               <div className="lg:col-span-5 grid grid-cols-1 gap-4 lg:gap-6">
                  <div className="bg-white/5 p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 flex flex-col justify-center backdrop-blur-md">
                     <div className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter">€900K</div>
                     <div className="text-indigo-400 text-[10px] lg:text-[11px] font-black uppercase tracking-widest mb-4 lg:mb-6">Revenue Recovery</div>
                     <p className="text-slate-500 text-[10px] font-bold leading-relaxed uppercase tracking-wider">Projected annual revenue saved.</p>
                  </div>
                  <div className="bg-indigo-600 p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl shadow-indigo-600/20 flex flex-col justify-center transform hover:scale-[1.02] transition-transform">
                     <div className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter">&lt;7 Days</div>
                     <div className="text-white/60 text-[10px] lg:text-[11px] font-black uppercase tracking-widest mb-4 lg:mb-6">Execution Speed</div>
                     <p className="text-white/80 text-[10px] font-bold leading-relaxed uppercase tracking-wider">From data to action plan.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Engine Section */}
      <section id="analysis" className="py-24 lg:py-40 bg-[#F8FAFC] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] lg:rounded-[5rem] p-8 lg:p-24 relative overflow-hidden border border-slate-200 group shadow-xl shadow-indigo-500/5">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-8 lg:mb-10">
                   <Target size={14} /> Intelligence Pipeline
                </div>
                <h2 className="text-4xl lg:text-7xl font-black text-slate-900 mb-6 lg:mb-8 tracking-tighter leading-[1] lg:leading-[0.9]">
                  Try our analysis engine.
                </h2>
                <p className="text-slate-500 text-lg lg:text-xl mb-10 lg:mb-12 leading-relaxed font-medium">
                   Upload your historical data—surveys, support tickets, or transcripts—and our engine identifies "High Churn Risks" in hours, giving you a prioritized roadmap for retention.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex items-center gap-3 text-slate-600 text-[10px] font-black uppercase tracking-widest border border-slate-200 px-5 lg:px-6 py-4 lg:py-5 rounded-2xl bg-slate-50">
                      <ShieldCheck size={18} className="text-indigo-600" /> GDPR Ready
                   </div>
                   <div className="flex items-center gap-3 text-slate-600 text-[10px] font-black uppercase tracking-widest border border-slate-200 px-5 lg:px-6 py-4 lg:py-5 rounded-2xl bg-slate-50">
                      <Lock size={18} className="text-indigo-600" /> NDA Secure
                   </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-slate-900 rounded-[2.5rem] lg:rounded-[3rem] p-8 lg:p-10 border border-slate-800 shadow-2xl shadow-indigo-900/10">
                  <div className="space-y-6">
                    {[
                      { label: "Data Quality Score", val: "98%", color: "bg-indigo-400", width: "98%" },
                      { label: "Insights Extracted", val: "1,240", color: "bg-purple-400", width: "85%" },
                      { label: "Action Priority", val: "High", color: "bg-emerald-400", width: "100%" }
                    ].map((item, i) => (
                      <div key={i} className="space-y-3">
                        <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                          <span>{item.label}</span>
                          <span className="text-white">{item.val}</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: scrolled ? item.width : '0%' }} />
                        </div>
                      </div>
                    ))}
                    <button className="w-full mt-6 py-5 lg:py-6 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 group hover:bg-indigo-50 transition-colors">
                      Upload Dataset <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 lg:py-60 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl lg:text-[130px] font-black text-slate-900 mb-8 lg:mb-10 tracking-tighter leading-[1] lg:leading-[0.85]">
            Secure your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 italic">pilot call.</span>
          </h2>
          <p className="text-slate-500 text-lg lg:text-3xl mb-12 lg:mb-16 leading-relaxed font-medium max-w-4xl mx-auto">
            We’re working closely with teams to test and shape VOXLOOP — turning real customer feedback into real churn reduction.
          </p>
          <button className="group w-full sm:w-auto px-10 lg:px-16 py-8 lg:py-10 bg-slate-900 text-white rounded-[2rem] lg:rounded-[2.5rem] font-black text-xl lg:text-2xl transition-all shadow-2xl shadow-slate-900/20 hover:scale-105 active:scale-95">
            <span className="flex items-center gap-4">
              Schedule My Strategic Call <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 lg:py-24 bg-white border-t border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 mb-16 lg:mb-20">
            <div className="flex items-center gap-4 font-black text-2xl lg:text-3xl tracking-tighter text-slate-900">
              <div className="w-12 h-12 lg:w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                <Mic size={24} className="text-white" />
              </div>
              VOXLOOP
            </div>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12 text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Security</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center pt-8 lg:pt-10 border-t border-slate-100">
            <p className="text-slate-400 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.5em] lg:tracking-[0.6em] leading-relaxed">
              © 2026 VoxLoop Global • Advanced Customer Intelligence Infrastructure
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes wave-animation {
          0% { transform: translateX(0); }
          50% { transform: translateX(-50px); }
          100% { transform: translateX(0); }
        }
        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-wave {
          animation: wave 1.2s ease-in-out infinite;
          transform-origin: bottom;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-wave-slow {
          animation: wave-animation 15s ease-in-out infinite;
        }
        .animate-wave-medium {
          animation: wave-animation 10s ease-in-out infinite;
        }
        .animate-wave-fast {
          animation: wave-animation 7s ease-in-out infinite;
        }
        body {
          background-color: #F8FAFC;
        }
      `}</style>
    </div>
  );
};

export default App;