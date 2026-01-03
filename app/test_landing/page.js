"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mic, 
  Shield, 
  Accessibility, 
  FileText, 
  HardDriveUpload, 
  Heart, 
  TrendingUp, 
  Users, 
  Zap, 
  BarChartHorizontal,
  CloudUpload,
  Share2,
  Languages,
  CheckCircle2,
  TrendingDown,
  Smile
} from 'lucide-react';

const PhoneFrame = ({ children, bgColor = "bg-slate-950" }) => (
  <div className="relative mx-auto w-[260px] h-[520px] bg-slate-950 rounded-[3rem] p-3 shadow-2xl border-[6px] border-slate-800 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-50"></div>
    <div className={`relative w-full h-full rounded-[2.2rem] overflow-hidden ${bgColor}`}>
      {children}
    </div>
  </div>
);

const Avatar = ({ char, color }) => (
  <div className={`w-6 h-6 rounded-full border border-white flex items-center justify-center text-[8px] font-bold text-white ${color}`}>
    {char}
  </div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] font-sans text-slate-950 antialiased selection:bg-indigo-100">
      <style>{`
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        .animate-fadeIn { animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-pulse-soft { animation: pulse-soft 3s ease-in-out infinite; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        
        .hero-mesh {
          background-color: #F8F9FF;
          background-image: 
            radial-gradient(at 0% 0%, hsla(243,75%,95%,1) 0, transparent 50%), 
            radial-gradient(at 100% 0%, hsla(270,70%,95%,1) 0, transparent 50%),
            radial-gradient(at 50% 100%, hsla(243,75%,92%,1) 0, transparent 50%);
        }
        .dot-grid {
          background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>

      {/* Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">Q</div>
            <span className="text-2xl font-black tracking-tighter">QuickChat<span className="text-indigo-600">.</span></span>
          </div>
          <div className="flex items-center gap-8">
            <button onClick={() => scrollTo('how-it-works')} className="hidden md:block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition">How it works</button>
            <button onClick={() => scrollTo('byod')} className="hidden md:block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition">BYOD</button>
            <button onClick={() => scrollTo('early-success')} className="hidden md:block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition">Success</button>
            <button onClick={() => scrollTo('pilots')} className="group bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-200 flex items-center gap-2 text-sm">
              Book Pilot Call <Heart size={16} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen pt-48 pb-20 px-6 overflow-hidden hero-mesh flex items-center">
        <div className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col items-center text-center animate-fadeIn">
            <h1 className="text-7xl md:text-[110px] font-black leading-[0.82] mb-12 tracking-tighter text-slate-950">
              The power of <br/>
              <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-[12px]">voice.</span> <br/>
              The speed <br/>
              of <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-[12px]">AI.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-500 mb-6 max-w-4xl font-medium leading-relaxed">
              We are building a new kind of survey tool. Enabling you to <span className="text-slate-900 font-bold underline decoration-indigo-100 decoration-4 underline-offset-4">understand customer churn, act fast, and increase revenue.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full mt-12">
               <button onClick={() => scrollTo('how-it-works')} className="group flex items-center gap-3 text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] hover:text-indigo-600 transition-colors">
                  See the process <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-64 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-40">
            <div className="px-6 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-8 border border-indigo-100">
              The Journey
            </div>
            <h2 className="text-7xl md:text-[100px] font-black tracking-tighter leading-none text-slate-950 mb-8">
              How it works<span className="text-indigo-600 italic">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Step 01 - Churn Chatbot Update */}
            <div className="flex flex-col gap-10 group">
              <PhoneFrame bgColor="bg-slate-50">
                <div className="absolute inset-0 flex flex-col p-6 items-center justify-center">
                  <div className="relative w-full aspect-square mb-8">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-indigo-200">
                        <Share2 size={32} />
                      </div>
                      <div className="absolute inset-0 w-full h-full bg-indigo-400 rounded-2xl animate-pulse-soft"></div>
                    </div>
                    {[
                      { angle: 0, char: 'JD', color: 'bg-orange-500' },
                      { angle: 45, char: 'AM', color: 'bg-pink-500' },
                      { angle: 90, char: 'SK', color: 'bg-green-600' },
                      { angle: 135, char: 'TW', color: 'bg-blue-500' },
                      { angle: 180, char: 'RB', color: 'bg-purple-500' },
                      { angle: 225, char: 'ML', color: 'bg-red-400' },
                      { angle: 270, char: 'YP', color: 'bg-yellow-600' },
                      { angle: 315, char: 'CJ', color: 'bg-cyan-500' }
                    ].map((node) => (
                      <div 
                        key={node.angle}
                        className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-indigo-500/40 to-indigo-500/10 origin-left"
                        style={{ transform: `rotate(${node.angle}deg)` }}
                      >
                        <div 
                          className="absolute right-0 -top-3 transform"
                          style={{ transform: `rotate(-${node.angle}deg)` }}
                        >
                          <Avatar char={node.char} color={node.color} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">Live Segment</div>
                    <div className="text-xl font-black text-slate-900 tracking-tighter">CHURN CHAT</div>
                    <div className="text-[9px] font-bold text-slate-400 mt-2">Connecting to 12,400 Users...</div>
                  </div>
                </div>
              </PhoneFrame>
              <div className="px-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-indigo-100 font-black">01</div>
                <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tight uppercase leading-[0.9]">Launch our Churn chatbot</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">A short, friendly chat designed to engage — share the link with your customer segments via your usual channels.</p>
              </div>
            </div>

            {/* Step 02 - Designed for Everyone (Realistic Face Update) */}
            <div className="flex flex-col gap-10 group lg:mt-12">
              <PhoneFrame bgColor="bg-indigo-600">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                   {/* Realistic Portrait of an Older Black Woman */}
                   <div className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden mb-6 shadow-2xl relative bg-indigo-800">
                      <img 
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&h=300&q=80" 
                        alt="Older Black woman smiling"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=User&background=6366f1&color=fff'; }}
                      />
                   </div>
                   <div className="w-full bg-white rounded-3xl p-6 shadow-2xl text-left relative overflow-hidden mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600"><Accessibility size={18} /></div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Feedback Capture</span>
                      </div>
                      <div className="text-sm font-bold text-slate-900 leading-tight">
                        "I'm finding it hard to check out. The <span className="text-indigo-600 underline underline-offset-2">navigation is so confusing</span> when I'm in a rush."
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white backdrop-blur-sm border border-white/20"><Languages size={20} /></div>
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white backdrop-blur-sm border border-white/20"><Mic size={20} /></div>
                   </div>
                </div>
              </PhoneFrame>
              <div className="px-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-100 font-black">02</div>
                <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tight leading-none uppercase">Designed for everyone</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">Fully accessible and easy to use — customers respond naturally in their own language, giving you 10× richer feedback through simple conversation.</p>
              </div>
            </div>

            {/* Step 03 - Action-Ready Reports */}
            <div className="flex flex-col gap-10 group">
              <PhoneFrame bgColor="bg-slate-50">
                <div className="absolute inset-0 p-5 flex flex-col bg-white overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Strategic Insight</span>
                      <span className="font-black text-xs text-slate-900 tracking-tighter">APP ISSUES & FIXES</span>
                    </div>
                    <div className="p-2 bg-indigo-50 rounded-lg"><BarChartHorizontal size={14} className="text-indigo-600" /></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-900 rounded-2xl shadow-lg border border-slate-800">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="text-[9px] font-bold text-white uppercase tracking-tighter">Issue: Navigation Friction</div>
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight mb-3 italic">"Checkout flow fails for 12% of users due to complex UI."</div>
                      <div className="p-2 bg-indigo-600/20 border border-indigo-500/30 rounded-lg">
                        <div className="text-[8px] font-black text-indigo-400 uppercase">Recommended Fix</div>
                        <div className="text-[9px] text-white">Streamline to 1-click checkout.</div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                       <div className="text-[9px] font-black text-slate-400 uppercase mb-2">Impact Score</div>
                       <div className="flex items-center gap-3">
                         <div className="h-2 flex-1 bg-indigo-100 rounded-full overflow-hidden">
                            <div className="h-full w-[85%] bg-indigo-600"></div>
                         </div>
                         <span className="text-[10px] font-black text-indigo-600">85%</span>
                       </div>
                    </div>
                  </div>
                </div>
              </PhoneFrame>
              <div className="px-4">
                <div className="w-12 h-12 bg-violet-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-violet-100 font-black">03</div>
                <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tight leading-none uppercase">Action-ready reports</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">No manual work needed — our AI turns the feedback into clear themes, root causes, and next steps you can act on right away.</p>
              </div>
            </div>

            {/* Step 04 - Drive Results & Trust */}
            <div className="flex flex-col gap-10 group lg:mt-12">
              <PhoneFrame bgColor="bg-white">
                <div className="absolute inset-0 flex flex-col p-6 bg-white overflow-hidden">
                  <div className="text-center mb-8">
                     <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-3 mx-auto shadow-sm">
                        <TrendingUp className="text-green-600" size={32} />
                     </div>
                     <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Growth Metric</div>
                     <div className="text-2xl font-black text-slate-900 tracking-tighter">+24% MRR Recovery</div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                          <Heart size={20} fill="currentColor" />
                       </div>
                       <div>
                         <div className="text-xs font-black text-indigo-950 uppercase">Trust Index</div>
                         <div className="text-[10px] text-indigo-600">Customer loyalty up 42%</div>
                       </div>
                    </div>
                    
                    <div className="bg-slate-900 p-4 rounded-2xl text-white">
                       <div className="flex justify-between items-center mb-2">
                          <div className="text-[8px] font-bold uppercase text-slate-400">Churn Reduction</div>
                          <TrendingDown className="text-green-400" size={14} />
                       </div>
                       <div className="text-2xl font-black leading-none">-18%</div>
                       <div className="mt-3 h-1 w-full bg-white/10 rounded-full">
                          <div className="h-full w-2/3 bg-green-400 rounded-full"></div>
                       </div>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-center gap-2 py-4">
                     <CheckCircle2 size={12} className="text-green-500" />
                     <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Loyalty Secured</span>
                  </div>
                </div>
              </PhoneFrame>
              <div className="px-4">
                <div className="w-12 h-12 bg-slate-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-slate-100 font-black">04</div>
                <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tight leading-none uppercase">Drive results & build trust</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">Fix things quickly, show customers you’ve listened, and turn their input into stronger loyalty and growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BYOD Section */}
      <section id="byod" className="py-48 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="text-white">
               <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black tracking-widest uppercase mb-8 border border-white/20">
                  <CloudUpload size={14} /> Zero Risk Start
               </div>
               <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.9]">
                 Bring Your Own Data <br/>
                 <span className="text-indigo-400 font-light italic">– No Risk Start.</span>
               </h2>
               <p className="text-2xl text-slate-400 mb-12 font-medium italic">Already have feedback sitting in a spreadsheet?</p>
               <ul className="space-y-6">
                 {[
                   "Upload an anonymized CSV — we’ll turn it into a clear report in days.",
                   "You control everything: pick columns, anonymize sensitive info.",
                   "Perfect low-risk test — try with old data and see the insights.",
                   "Many pilots start here and quickly spot hidden churn drivers."
                 ].map((text, i) => (
                   <li key={i} className="flex gap-4 items-start group">
                     <div className="mt-1.5 shrink-0 w-6 h-6 rounded-full bg-indigo-600/20 flex items-center justify-center border border-indigo-500/30 group-hover:bg-indigo-600 transition-all">
                        <ArrowRight size={12} className="text-indigo-400 group-hover:text-white" />
                     </div>
                     <span className="text-xl text-slate-300 font-medium leading-relaxed">{text}</span>
                   </li>
                 ))}
               </ul>
            </div>
            <div className="relative p-12 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-xl">
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                     <FileText className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-black uppercase text-xs tracking-widest">Pilot Environment</div>
                    <div className="text-slate-400 text-sm">Upload & Analyze</div>
                  </div>
               </div>
               <div className="border-2 border-dashed border-white/10 rounded-3xl p-12 flex flex-col items-center text-center">
                  <HardDriveUpload size={48} className="text-indigo-400 mb-6 opacity-50" />
                  <div className="text-white font-black text-xl mb-2">Drop your CSV here</div>
                  <div className="text-slate-500 text-sm">GDPR Secure Upload</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Success Section */}
      <section id="early-success" className="py-48 px-6 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-indigo-100">
               <Zap size={12} className="fill-indigo-600" /> Case Study
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 leading-[0.9]">
              QuickChat Recovered <br/>
              <span className="text-indigo-600 italic">€900K Revenue.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
              <div className="mb-10 text-indigo-600 italic font-black text-6xl opacity-10">“</div>
              <p className="text-3xl md:text-4xl font-bold text-slate-950 leading-tight mb-12 italic">
                "You've given me a step-by-step guide to reduce churn. We went from guessing to knowing exactly which button to press."
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#3d2b1f] rounded-full overflow-hidden flex items-center justify-center text-white font-black">CK</div>
                <div>
                  <div className="font-black text-xl text-slate-900 tracking-tight">Chris Kemp</div>
                  <div className="text-indigo-600 font-bold uppercase text-xs tracking-widest">Deputy CEO, Zeus Scooters</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:mt-12">
              {[
                { val: "€900K", label: "Recovery", desc: "Projected annual revenue saved through churn fixes." },
                { val: "10K+", label: "Target", desc: "Customers engaged in high-trust win-back campaigns." },
                { val: "42%", label: "Loyalty", desc: "Increase in customer trust indices post-resolution." },
                { val: "<7", label: "Days", desc: "Time from raw feedback to board-ready strategy." }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                  <div className="text-5xl font-black text-indigo-600 mb-4">{stat.val}</div>
                  <div className="text-slate-900 font-black tracking-widest mb-3 uppercase text-[10px]">{stat.label}</div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilots CTA */}
      <section id="pilots" className="py-40 px-6 text-center relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-[100px] font-black mb-12 tracking-tight leading-none text-slate-950">
            Fix your churn problem.
          </h2>
          <p className="text-2xl text-slate-500 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Bring your data or test our bot. Show your customers you're listening.
          </p>
          <div className="flex flex-col items-center gap-8">
            <button className="bg-indigo-600 text-white px-16 py-8 rounded-[2rem] text-3xl font-black hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-200">
              Book Pilot Call
            </button>
            <div className="flex items-center gap-6 text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2"><Shield size={14}/> GDPR COMPLIANT</span>
              <span className="flex items-center gap-2"><Accessibility size={14}/> WCAG AA</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-40">
           <div className="text-xs font-black tracking-widest uppercase text-slate-950">QuickChat © 2025</div>
           <div className="text-[10px] font-black tracking-widest uppercase italic text-slate-950">Built for Inclusion</div>
        </div>
      </footer>
    </div>
  );
}