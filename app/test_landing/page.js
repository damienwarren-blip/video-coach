"use client";

import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  ArrowRight, 
  Lock, 
  ShieldCheck, 
  BarChart3, 
  Zap,
  Repeat,
  ArrowUpRight,
  Quote,
  Globe,
  Target
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/10 transition-transform group-hover:rotate-6">
              <Mic className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">VoxLoop</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <a href="#methodology" className="hover:text-slate-900 transition-colors">Methodology</a>
            <a href="#case-study" className="hover:text-slate-900 transition-colors">Case Study</a>
            <a href="#analysis" className="hover:text-slate-900 transition-colors">Analysis Engine</a>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:shadow-xl hover:shadow-indigo-500/20 transition-all">
              Book Pilot Call
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-64 flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full opacity-80 md:opacity-60" viewBox="0 0 1440 800" fill="none">
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d={`M -200 ${400 + i * 15} Q 360 ${200 - i * 30} 720 ${400 + i * 5} T 1640 ${400 - i * 15}`}
                stroke="url(#waveGrad)"
                strokeWidth="2"
                fill="none"
              >
                <animate 
                  attributeName="d" 
                  dur={`${6 + i}s`} 
                  repeatCount="indefinite"
                  values={`
                    M -200 ${400 + i * 15} Q 360 ${200 - i * 30} 720 ${400 + i * 5} T 1640 ${400 - i * 15};
                    M -200 ${400 - i * 5} Q 360 ${600 + i * 20} 720 ${400 - i * 15} T 1640 ${400 + i * 30};
                    M -200 ${400 + i * 15} Q 360 ${200 - i * 30} 720 ${400 + i * 5} T 1640 ${400 - i * 15}
                  `}
                />
              </path>
            ))}
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-10">
            <Zap size={14} /> Intelligence for Retention
          </div>
          <h1 className="text-6xl lg:text-[110px] font-black text-slate-900 mb-10 tracking-tighter leading-[0.85]">
            The power of <span className="text-indigo-600 italic">voice.</span><br />
            The speed of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 underline decoration-indigo-200 decoration-8 underline-offset-[-5px]">AI.</span>
          </h1>
          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            <p className="text-xl lg:text-3xl text-slate-900 font-black tracking-tight leading-tight">
              We are building a new way to connect with customers.
            </p>
            <p className="text-lg lg:text-2xl text-slate-500 leading-relaxed font-medium">
              One that lets them talk naturally — accessible to everyone, in any language — so you truly understand them. 
              Act fast on what matters, build lasting trust, and turn every conversation into revenue.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-12 py-7 bg-slate-900 hover:bg-slate-800 text-white rounded-[2.5rem] font-black text-xl transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-slate-900/20 active:scale-95">
              Secure Your Slot <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="pt-40 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-32">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-indigo-600 mb-6">The Methodology</h2>
            <p className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">How it works</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* 01: CAPTURE */}
            <div className="group">
              <div className="relative mb-12 overflow-hidden rounded-[3rem] bg-slate-50 border border-slate-100 h-[450px] shadow-sm">
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105 opacity-60">
                   <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" 
                    alt="Customer Insight" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl mb-6 relative group-hover:scale-110 transition-all duration-500 border border-slate-100">
                      <div className="absolute inset-0 rounded-full bg-indigo-100 animate-ping opacity-30" />
                      <Mic className="text-indigo-600 w-10 h-10 relative z-10" />
                   </div>
                   <div className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-full mb-8 shadow-xl">
                      Start Recording
                   </div>
                   <div className="px-8 text-center">
                      <p className="text-slate-900 text-xl font-black italic leading-tight">
                        'What's the one thing we can do to improve?'
                      </p>
                   </div>
                </div>
              </div>
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black mb-6 shadow-lg shadow-indigo-200">01</div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Launch a short <br/>voice conversation</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Want to understand your customers? Replace text-based fatigue with human voice. A short bot chat removes friction — no forms, no typing — and is accessible to everyone, in any language. Just share a link. Customers talk naturally, revealing the real "why".
              </p>
            </div>

            {/* 02: STRATEGIC REPORT */}
            <div className="group">
              <div className="relative mb-12 overflow-hidden rounded-[3rem] bg-slate-50 h-[450px] flex flex-col items-center justify-center shadow-sm p-8 border border-slate-100 transition-colors group-hover:bg-slate-100/50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[80px]" />
                
                <div className="relative w-full max-w-[280px] perspective-[1200px] transform transition-all duration-1000 ease-out group-hover:rotate-x-2 group-hover:scale-105">
                  <div className="relative bg-slate-200 rounded-xl p-1.5 shadow-xl border border-slate-300 transform-style-3d">
                    <div className="bg-white rounded-lg aspect-[16/10] overflow-hidden p-3 relative flex flex-col border border-slate-100 shadow-inner">
                      <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-2">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        </div>
                        <div className="px-2 py-0.5 bg-slate-50 rounded text-[6px] font-black text-slate-400 uppercase tracking-widest">
                          VOX_GEN_REPORT
                        </div>
                      </div>

                      <div className="flex-1 space-y-3">
                        <div className="h-16 bg-slate-50/50 rounded-lg p-2 relative overflow-hidden group/chart border border-slate-100">
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="lineGradWhite" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            <path d="M0,35 C10,32 20,5 30,12 S45,35 60,15 S85,5 100,20 V40 H0 Z" fill="url(#lineGradWhite)" />
                            <path d="M0,35 C10,32 20,5 30,12 S45,35 60,15 S85,5 100,20" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" className="group-hover:stroke-indigo-400 transition-colors" />
                            <circle cx="85" cy="5" r="1.5" fill="#6366f1" className="animate-pulse" />
                          </svg>
                          <div className="relative flex justify-between h-full items-end">
                             <div className="text-[5px] font-black text-indigo-600/60 tracking-widest">RETENTION FORECAST</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 flex-1">
                          {[1,2,3].map(i => (
                            <div key={i} className="bg-slate-50 rounded-lg p-2 flex flex-col justify-between border border-slate-100">
                              <div className="w-3 h-1 bg-indigo-100 rounded-full" />
                              <div className="flex items-end gap-0.5 h-5">
                                {[1,2,3,4].map(j => (
                                  <div key={j} className="flex-1 bg-indigo-500/10 rounded-t-[1px] group-hover:bg-indigo-500/20 transition-colors" style={{ height: `${20 + Math.random() * 80}%` }} />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative w-[112%] -left-[6%] h-2.5 bg-slate-200 rounded-b-xl border-t border-slate-300 shadow-lg">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-300 rounded-b-lg opacity-40" />
                  </div>
                  <div className="absolute -right-8 top-1/3 bg-slate-900 text-white p-3 rounded-2xl shadow-xl transform rotate-12 group-hover:rotate-0 transition-all duration-500 scale-90">
                    <Target size={18} strokeWidth={3} className="text-indigo-400" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-100">
                      <BarChart3 size={16} />
                    </div>
                    <div>
                      <div className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Priority Metric</div>
                      <div className="text-xs font-bold text-slate-900 tracking-tight leading-none mt-1">Churn intent down <span className="text-emerald-500">14%</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black mb-6 shadow-lg shadow-indigo-200">02</div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Strategic <br/>Report</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                We remove the burden of manual analysis. Our AI instantly synthesizes every conversation into a clear action plan: themes, root causes, prioritized fixes. The report gives you the true "why", data-led and actionable.
              </p>
            </div>

            {/* 03: TRUST LOOP */}
            <div className="group">
              <div className="relative mb-12 overflow-hidden rounded-[3rem] bg-slate-50 border border-slate-100 h-[450px] flex items-center justify-center shadow-sm">
                 <div className="absolute w-[360px] h-[360px] border border-slate-200 md:border-slate-100 rounded-full animate-[spin_60s_linear_infinite]" />
                 <div className="absolute w-[280px] h-[280px] border border-slate-300 md:border-slate-200 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                 
                 <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-indigo-100 mb-8 transform group-hover:rotate-12 transition-transform duration-500">
                       <Repeat size={32} strokeWidth={2.5} />
                    </div>
                    <div className="text-center px-8">
                       <p className="text-slate-900 font-black text-xl mb-4 tracking-tight uppercase">The Trust Loop</p>
                       <div className="inline-flex flex-wrap justify-center gap-3">
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 md:text-slate-400">Listen</span>
                          <ArrowRight size={10} className="text-indigo-400 mt-1" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 md:text-slate-400">Fix</span>
                          <ArrowRight size={10} className="text-indigo-400 mt-1" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Grow</span>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black mb-6 shadow-lg shadow-indigo-200">03</div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Drive results and <br/>build long-term trust</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Act fast on the insights. Fix issues, show customers you listened, and close the loop. Trust grows, loyalty strengthens, and feedback becomes your growth engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - Zeus Scooters */}
      <section id="case-study" className="py-40 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-indigo-600 mb-6">Evidence</h2>
            <p className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">Case Study: Zeus Scooters</p>
          </div>

          <div className="bg-slate-50 rounded-[4rem] p-8 lg:p-20 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 hidden lg:block">
               <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600/40">
                  <Globe size={14} /> Global Deployment
               </div>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
               <div className="lg:col-span-7 space-y-12">
                  <div className="flex items-center gap-5">
                     <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl">
                        CK
                     </div>
                     <div>
                        <h4 className="font-black text-slate-900 text-xl tracking-tight leading-none">Chris Kemp</h4>
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Deputy CEO, Zeus Scooters</p>
                     </div>
                  </div>

                  <div className="relative">
                     <Quote className="absolute -top-6 -left-8 text-indigo-100 w-16 h-16 -z-10" />
                     <p className="text-3xl lg:text-4xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                        "You've given me a step-by-step guide to reduce churn."
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 pt-4">
                    <div className="space-y-4">
                      <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">The Challenge</div>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        Zeus Scooters couldn't uncover why churn was climbing among their 150,000 users across 30 German cities—costing significant revenue.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">The Solution</div>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        VOXLOOP deployed personalized voice campaigns achieving 3x participation and uncovering the retention drivers competitors missed.
                      </p>
                    </div>
                  </div>
               </div>

               <div className="lg:col-span-5 grid grid-cols-1 gap-6 h-full">
                  <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center transform hover:scale-[1.02] transition-transform">
                     <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">€900K</div>
                     <div className="text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-6">Recovery</div>
                     <p className="text-slate-400 text-xs font-bold leading-relaxed uppercase">Projected annual revenue saved.</p>
                  </div>
                  <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center transform hover:scale-[1.02] transition-transform">
                     <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">10K+</div>
                     <div className="text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-6">Target</div>
                     <p className="text-slate-400 text-xs font-bold leading-relaxed uppercase">Win-back triggers automated.</p>
                  </div>
                  <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center transform hover:scale-[1.02] transition-transform">
                     <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">&lt;7</div>
                     <div className="text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-6">Days</div>
                     <p className="text-slate-400 text-xs font-bold leading-relaxed uppercase">From raw feedback to strategy.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Engine Section */}
      <section id="analysis" className="py-24 lg:py-40 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] lg:rounded-[4rem] p-8 lg:p-24 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-indigo-600/10 rounded-full blur-[80px] lg:blur-[120px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-8">
                 <BarChart3 size={14} /> Intelligence Pipeline
              </div>
              <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight max-w-2xl">
                Try our analysis engine.
              </h2>
              <p className="text-slate-400 text-lg lg:text-xl mb-12 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                Got old surveys or support tickets? We turn your historical data into a prioritized report in hours. We identify the "High Churn Risks" so you can act to improve your customer churn.
              </p>
              
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start">
                 <div className="flex items-center gap-3 text-slate-400 text-[9px] lg:text-[10px] font-black uppercase tracking-widest border border-white/10 px-6 py-4 rounded-2xl bg-white/5 w-full lg:w-auto justify-center lg:justify-start">
                    <ShieldCheck size={16} className="text-indigo-500" /> GDPR Compliant
                 </div>
                 <div className="flex items-center gap-3 text-slate-400 text-[9px] lg:text-[10px] font-black uppercase tracking-widest border border-white/10 px-6 py-4 rounded-2xl bg-white/5 w-full lg:w-auto justify-center lg:justify-start">
                    <Lock size={16} className="text-indigo-500" /> NDA Guaranteed
                 </div>
                 <button className="group flex items-center gap-3 text-white text-[9px] lg:text-[10px] font-black uppercase tracking-widest bg-indigo-600 px-8 py-4 rounded-2xl hover:bg-indigo-500 transition-all w-full lg:w-auto justify-center">
                    Discuss Data Ingest <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 lg:py-48 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl lg:text-[110px] font-black text-slate-900 mb-8 lg:mb-10 tracking-tighter leading-[0.85]">
            Secure your <span className="text-indigo-600 italic">pilot call.</span>
          </h2>
          <p className="text-slate-500 text-xl lg:text-3xl mb-12 lg:text-16 leading-relaxed font-medium max-w-4xl mx-auto">
            We’re working closely with teams to test and shape VOXLOOP — turning real customer feedback into real churn reduction.
          </p>
          <button className="w-full sm:w-auto px-12 lg:px-20 py-8 lg:py-10 bg-slate-900 hover:bg-slate-800 text-white rounded-[2rem] lg:rounded-[2.5rem] font-black text-xl lg:text-3xl transition-all shadow-3xl hover:scale-105 active:scale-95">
            Schedule My Call
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="flex items-center gap-3 font-black text-3xl tracking-tighter">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-900/10">
              <Mic size={24} className="text-white" />
            </div>
            VOXLOOP
          </div>
          <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] text-center">
            © 2026 VoxLoop • High Trust Infrastructure
          </div>
          <div className="flex gap-10 text-[10px] font-black text-slate-900 uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default App;