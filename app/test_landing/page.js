"use client";

import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap,
  Menu,
  X,
  Mic,
  TrendingUp,
  Heart,
  UploadCloud,
  FileSpreadsheet,
  Quote,
  BrainCircuit,
  Calendar,
  Sparkles,
  Smartphone,
  Send,
  Globe,
  Accessibility,
  Lock,
  FileText,
  ShieldAlert
} from 'lucide-react';

// --- Supporting Components ---

const PhoneFrame = ({ children }) => (
  <div className="relative mx-auto border-slate-900 bg-slate-900 border-[14px] rounded-[3rem] h-[640px] w-[320px] shadow-[0_0_100px_rgba(0,0,0,0.1)] overflow-hidden">
    <div className="w-[148px] h-[22px] bg-slate-900 top-0 left-1/2 -translate-x-1/2 absolute rounded-b-2xl z-20"></div>
    <div className="h-full w-full relative flex flex-col overflow-hidden">
      {children}
    </div>
  </div>
);

const VoiceWaveGraphic = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none overflow-hidden">
    <svg viewBox="0 0 800 400" className="w-full max-w-5xl">
      {[...Array(5)].map((_, i) => (
        <path
          key={i}
          d={`M 0 ${200 + i * 15} Q 200 ${100 - i * 30}, 400 ${200} T 800 ${200 + i * 15}`}
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="1.5"
          className="animate-pulse"
          style={{
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${4 + i}s`,
            opacity: 1 - i * 0.2
          }}
        />
      ))}
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
          <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// --- High Fidelity Step Visuals ---

const Step01Visual = () => (
  <div className="flex flex-col h-full bg-slate-50 relative p-6 font-sans">
    <div className="mt-16 flex flex-col items-center">
      <div className="relative mb-10">
        <div className="w-32 h-32 bg-white rounded-[2.5rem] flex items-center justify-center shadow-2xl border border-indigo-100 overflow-hidden relative">
           <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop" 
            alt="Customer Representative" 
            className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl animate-pulse">
          <Mic size={24} />
        </div>
      </div>
      <div className="bg-white rounded-3xl p-7 shadow-xl border border-indigo-50/50 relative z-10">
        <p className="text-slate-900 font-bold text-lg leading-tight tracking-tight text-center">
          "What’s the one thing we could improve?"
        </p>
      </div>
      <div className="mt-12 w-full px-4 flex flex-col items-center gap-4">
        <div className="flex gap-1.5 h-8 items-center">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1.5 bg-indigo-600/40 rounded-full animate-waveform h-full" 
                 style={{ height: `${30 + Math.random() * 70}%`, animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
        <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.3em]">Listening...</span>
      </div>
    </div>
  </div>
);

const Step02Visual = () => (
  <div className="flex flex-col h-full bg-indigo-600 p-8 text-white">
    <div className="mt-12 flex justify-center">
      <div className="bg-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-center">Natural Language Processing</div>
    </div>
    <div className="mt-12 text-center">
      <div className="flex justify-center mb-6"><Globe size={48} className="text-indigo-200" /></div>
      <p className="text-xl font-bold leading-tight mb-2 italic">"The setup was quite smooth..."</p>
      <p className="text-indigo-200 text-sm">Translating Voice-to-Text</p>
    </div>
    <div className="flex-1 flex items-end justify-center gap-2 mb-12">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="w-2 bg-white rounded-full" style={{ height: `${20 + Math.random() * 80}%`, opacity: 0.5 }}></div>
      ))}
    </div>
    <div className="bg-white/10 p-4 rounded-2xl text-[10px] font-bold text-center border border-white/10 uppercase tracking-widest">
      No Typing Required
    </div>
  </div>
);

const Step03Visual = () => (
  <div className="flex flex-col h-full bg-slate-900 p-6 font-sans">
    <div className="mt-10 mb-8"><span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]">Strategy Report</span></div>
    <div className="bg-white rounded-2xl p-5 shadow-2xl mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg text-[10px] font-black uppercase">Root Cause</div>
        <BrainCircuit size={18} className="text-indigo-600" />
      </div>
      <div className="text-slate-900 font-black text-base mb-1">Board-Ready Insight</div>
      <div className="text-slate-500 text-xs mb-4">Automated Clustering</div>
      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-2">
        <div className="flex justify-between text-[9px] font-black text-slate-400 uppercase"><span>Issue</span><span>Fix Now</span></div>
        <div className="text-slate-900 text-[11px] font-bold flex justify-between"><span>App Latency</span><span className="text-indigo-600">AWS Edge Fix</span></div>
      </div>
    </div>
    <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-5">
      <div className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-4 italic">Sentiments</div>
      <div className="grid grid-cols-7 gap-1.5 h-12 items-end">
         {[40, 60, 90, 30, 70, 40, 20].map((v, i) => (
           <div key={i} className="w-full bg-indigo-500 rounded-sm" style={{ height: `${v}%`, opacity: 0.6 }}></div>
         ))}
      </div>
    </div>
  </div>
);

const Step04Visual = () => (
  <div className="flex flex-col h-full bg-white p-6 relative">
    <div className="mt-14 mb-8">
      <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Build Loyalty</div>
      <h4 className="text-slate-900 text-2xl font-black tracking-tighter">Close the Loop</h4>
    </div>
    <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-6 shadow-sm mb-6">
      <div className="flex items-center gap-3 mb-4">
         <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white"><Send size={20} /></div>
         <div className="text-slate-900 text-xs font-black">Personalized Response</div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-100 text-slate-700 text-[11px] font-bold leading-relaxed italic">
        "We heard you about checkout — here's what we changed."
      </div>
    </div>
    <div className="bg-green-50 border-2 border-green-500 rounded-[2rem] p-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white"><Heart size={24} fill="currentColor" /></div>
        <div>
           <div className="text-slate-900 font-black text-xl">42% Lift</div>
           <div className="text-green-600 text-[10px] font-black uppercase">Trust Index</div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App ---

const App = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <style>{`
        @keyframes waveform {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.4); }
        }
        .animate-waveform { animation: waveform 0.8s ease-in-out infinite; }
      `}</style>

      {/* Availability Banner */}
      <div className="bg-indigo-600 px-4 py-3 text-center text-white text-[11px] font-black uppercase tracking-[0.2em] z-[60] relative">
        Fix your churn problem. Bring your data or test our bot.
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center transform rotate-3 shadow-lg group-hover:rotate-0 transition-transform">
                  <span className="text-white font-black text-xl">V</span>
                </div>
                <span className="font-black text-xl tracking-tighter">VOXLOOP</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <button onClick={() => scrollTo('how-it-works')} className="hover:text-indigo-600 transition-colors">Journey</button>
              <button onClick={() => scrollTo('byod')} className="hover:text-indigo-600 transition-colors">Existing Data</button>
              <button onClick={() => scrollTo('success')} className="hover:text-indigo-600 transition-colors">Success</button>
              <button onClick={() => scrollTo('pilot')} className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-indigo-600 transition-all text-[10px] font-black">
                Book Pilot Call
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <header className="relative py-24 md:py-48 px-6 bg-white overflow-hidden">
        <VoiceWaveGraphic />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-[7.5rem] font-black text-slate-950 mb-10 tracking-tighter leading-[0.9] uppercase">
            The power of <span className="text-indigo-600">voice.</span><br/>
            The speed of <span className="italic opacity-80 font-medium">AI.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            We are building a new kind of survey tool. Enabling you to understand customer churn, act fast, and increase revenue.
          </p>
          <div className="flex justify-center">
            <button onClick={() => scrollTo('pilot')} className="px-12 py-6 bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-xl hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95">
              Secure Your Slot
            </button>
          </div>
        </div>
      </header>

      {/* Journey Section */}
      <section id="how-it-works" className="py-24 md:py-48 px-6 bg-white relative border-t border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 md:mb-40">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">How it works</h2>
            <div className="w-20 h-2 bg-indigo-600 mt-6"></div>
          </div>

          <div className="space-y-48 md:space-y-64">
            {/* Step 01 */}
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="order-2 md:order-1">
                <div className="text-[100px] font-black text-indigo-600/5 absolute -translate-y-20 select-none">01</div>
                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-950 uppercase tracking-tighter">Launch a short <br/>voice conversation</h3>
                <p className="text-lg md:text-xl text-slate-600 mb-6 font-bold leading-relaxed">Traditional surveys are exhausting customers.</p>
                <p className="text-md text-slate-500 mb-8 leading-relaxed font-medium">
                  Response rates have fallen to single digits in many industries — people are tired of long forms, tick boxes, and questions that feel irrelevant. 
                  <br/><br/>
                  We start simple: a short 3–5 question conversation, ready in minutes. No complex setup. Just share a link with the customers you’re losing — or any segment you want to understand better.
                </p>
                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl">
                  <p className="text-indigo-900 font-bold italic">It’s tuned to uncover churn drivers, but flexible enough for any feedback need.</p>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center"><PhoneFrame><Step01Visual /></PhoneFrame></div>
            </div>

            {/* Step 02 */}
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="order-2">
                <div className="text-[100px] font-black text-indigo-600/5 absolute -translate-y-20 select-none">02</div>
                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-950 uppercase tracking-tighter">Designed for everyone</h3>
                <p className="text-lg md:text-xl text-slate-600 mb-6 font-bold leading-relaxed italic">Accessibility from the ground up</p>
                <p className="text-md text-slate-500 mb-8 leading-relaxed font-medium">Most surveys unintentionally exclude people. Older adults, neurodiverse users, non-native speakers — they drop off because typing is hard, forms are long, or language feels off.</p>
                <div className="space-y-4 text-slate-700 font-bold text-sm">
                  <div className="flex gap-3"><CheckCircle2 className="text-indigo-600 w-5 h-5" /> Voice-first — no typing required</div>
                  <div className="flex gap-3"><CheckCircle2 className="text-indigo-600 w-5 h-5" /> Multilingual — respond naturally in your own language</div>
                  <div className="flex gap-3"><CheckCircle2 className="text-indigo-600 w-5 h-5" /> Fully accessible — WCAG-compliant</div>
                </div>
                <p className="mt-8 text-indigo-600 font-black italic">The result? Up to 10× higher completion and feedback that’s richer, more honest, and more representative.</p>
              </div>
              <div className="order-1 flex justify-center"><PhoneFrame><Step02Visual /></PhoneFrame></div>
            </div>

            {/* Step 03 */}
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="order-2 md:order-1">
                <div className="text-[100px] font-black text-indigo-600/5 absolute -translate-y-20 select-none">03</div>
                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-950 uppercase tracking-tighter">Action-ready reports</h3>
                <p className="text-lg md:text-xl text-slate-600 mb-6 font-bold leading-relaxed italic">Actionable strategy, automatically</p>
                <p className="text-md text-slate-500 mb-8 leading-relaxed font-medium">Even when companies do get survey data, it often sits unused. Because turning raw responses into strategy takes time — manual tagging, spreadsheets, or weeks of analysis.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3 font-bold text-slate-800"><Zap className="text-amber-500 w-5 h-5" /> No manual transcription. No data crunching.</div>
                  <p className="text-md text-slate-500 font-medium">Our AI listens, identifies recurring themes, pinpoints root causes, and delivers a prioritized report — usually in days.</p>
                </div>
                <p className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-700 font-black uppercase text-[10px] tracking-widest inline-block">
                  Insights you can act on immediately
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center"><PhoneFrame><Step03Visual /></PhoneFrame></div>
            </div>

            {/* Step 04 */}
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="order-2">
                <div className="text-[100px] font-black text-indigo-600/5 absolute -translate-y-20 select-none">04</div>
                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-950 uppercase tracking-tighter">Drive results <br/>and build trust</h3>
                <p className="text-lg md:text-xl text-slate-600 mb-6 font-bold leading-relaxed italic">Earn loyalty through action</p>
                <p className="text-md text-slate-500 mb-8 leading-relaxed font-medium">The real power isn’t just knowing why customers leave — it’s doing something about it. Research shows that customers who feel heard are far more likely to stay and spend more.</p>
                <div className="flex flex-col gap-4">
                  <div className="p-4 bg-slate-900 text-white rounded-2xl text-center font-black uppercase tracking-[0.2em] text-[10px]">listen → act → communicate → earn loyalty → grow</div>
                  <p className="text-sm text-slate-400 font-bold text-center">That’s how feedback becomes your competitive advantage.</p>
                </div>
              </div>
              <div className="order-1 flex justify-center"><PhoneFrame><Step04Visual /></PhoneFrame></div>
            </div>
          </div>
        </div>
      </section>

      {/* BYOD Section */}
      <section id="byod" className="py-24 md:py-48 px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-600/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-indigo-600/30">
                <FileText size={14} /> Analysis Engine
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase tracking-tighter">
                Got old surveys or <br/>support tickets?
              </h2>
              <div className="space-y-6 text-slate-400 font-medium text-lg leading-relaxed">
                <p>Upload an anonymized CSV (you pick what to share) and we’ll turn it into a clear, actionable report in days — no setup, no integration, no manual work.</p>
                <p>You stay in control — choose columns and anonymize anything sensitive.</p>
                <div className="flex items-center gap-3 text-white font-bold text-sm bg-white/5 p-4 rounded-xl border border-white/10">
                  <ShieldCheck className="text-indigo-400" />
                  Fully NDA-protected and GDPR-compliant
                </div>
                <p className="text-sm italic">Perfect low-risk start — test with old or anonymized data to see the insights without worry.</p>
              </div>
            </div>
            <div className="bg-indigo-600 rounded-[3rem] p-12 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 to-transparent opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                 <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center mb-8 border border-white/20 shadow-inner">
                    <UploadCloud size={48} className="text-white animate-bounce" />
                 </div>
                 <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">Drop your CSV</h4>
                 <p className="text-indigo-100 text-sm mb-12 font-bold max-w-xs">Many pilot partners begin right here: a quick, safe look at their existing feedback that reveals hidden churn drivers they’d missed.</p>
                 <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-white animate-[pulse_2s_infinite]"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="success" className="py-24 md:py-48 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
               <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-widest mb-8">Case Study: QuickChat</div>
               <blockquote className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight mb-12 uppercase italic">
                 "You've given me a step-by-step guide to <span className="text-indigo-600 underline">reduce churn.</span>"
               </blockquote>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-lg">CK</div>
                 <div>
                   <h5 className="text-xl font-black text-slate-950 tracking-tight">Chris Kemp</h5>
                   <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Deputy CEO, Zeus Scooters</p>
                 </div>
               </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { label: "Recovery", value: "€900K", desc: "Projected annual revenue saved." },
                { label: "Target", value: "10K+", desc: "Win-back triggers automated." },
                { label: "Loyalty", value: "42%", desc: "Increase in customer trust indices." },
                { label: "Days", value: "<7", desc: "From raw feedback to strategy." }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="text-2xl font-black text-indigo-600 mb-1">{stat.value}</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">{stat.label}</div>
                  <p className="text-[10px] text-slate-500 font-bold leading-tight">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="pilot" className="py-24 md:py-48 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center shadow-[0_40px_100px_rgba(79,70,229,0.2)]">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-none uppercase tracking-tighter">
                Join our <span className="italic opacity-80">pilot program.</span>
              </h2>
              <div className="max-w-2xl mx-auto space-y-4 text-indigo-50 font-bold text-base mb-10 leading-relaxed">
                <p>We’re working closely with teams to test and shape VOXLOOP — turning real customer feedback into real churn reduction.</p>
                
                <div className="grid sm:grid-cols-2 gap-4 text-left">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                    <p className="text-white text-[10px] font-black uppercase tracking-widest mb-1 flex items-center gap-2"><Sparkles size={12} /> Why join now?</p>
                    <p className="text-xs opacity-80 leading-snug">Get a free, full pilot — we analyze your data or run a live voice conversation. Your insights directly influence what we build next.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                    <p className="text-white text-[10px] font-black uppercase tracking-widest mb-1 flex items-center gap-2"><ShieldAlert size={12} /> Safe & Focused</p>
                    <p className="text-xs opacity-80 leading-snug">NDA-protected, low-risk, and focused on your biggest churn challenges. We uncover hidden drivers in days.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl max-w-lg mx-auto text-left">
                <h3 className="text-xl font-black text-slate-950 mb-1 uppercase tracking-tight">Ready to work together?</h3>
                <p className="text-xs text-slate-500 mb-6 font-medium">Book a 15-minute call — let’s explore if this is the right fit for you.</p>
                
                <div className="space-y-3">
                  <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-black text-base hover:bg-indigo-700 transition-all shadow-lg flex items-center justify-center gap-3 group">
                    Schedule Your Call
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <div className="flex items-center justify-center gap-4 pt-4 opacity-50">
                    <div className="flex items-center gap-1.5 text-slate-900 font-black text-[9px] uppercase tracking-widest">
                      <Lock size={12} /> Secure
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-900 font-black text-[9px] uppercase tracking-widest">
                      <ShieldCheck size={12} /> Confidential
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center border-t border-slate-50 pt-12">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">© 2026 VoxLoop • Built for high-trust companies</p>
        </div>
      </footer>
    </div>
  );
};

export default App;