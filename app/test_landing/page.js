"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mic, 
  Shield, 
  Lock, 
  Sparkles, 
  Play,
  CheckCircle2,
  MessageSquare,
  Target,
  FileText,
  Accessibility,
  Database,
  FileSearch,
  Layers,
  HardDriveUpload,
  Heart,
  TrendingUp,
  BarChart3,
  Users,
  Zap
} from 'lucide-react';

const PhoneFrame = ({ children, bgColor = "bg-slate-950" }) => (
  <div className="relative mx-auto w-[260px] h-[520px] bg-slate-950 rounded-[3rem] p-3 shadow-2xl border-[6px] border-slate-800 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-50"></div>
    <div className={`relative w-full h-full rounded-[2.2rem] overflow-hidden ${bgColor}`}>
      {children}
    </div>
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
        @keyframes wave {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 30% / 50% 60% 30% 60%; }
        }
        .animate-wave { animation: wave 1.2s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-morph { animation: morph 12s ease-in-out infinite; }
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
            <button onClick={() => scrollTo('byod')} className="hidden md:block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition">Intelligence</button>
            <button onClick={() => scrollTo('early-success')} className="hidden md:block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition">Success</button>
            <button onClick={() => scrollTo('pilots')} className="group bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-200 flex items-center gap-2 text-sm">
              Get Started <Heart size={16} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen pt-48 pb-20 px-6 overflow-hidden hero-mesh flex items-center">
        <div className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="flex flex-col items-start animate-fadeIn">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white rounded-full text-[10px] font-black tracking-[0.3em] text-indigo-600 mb-12 border border-slate-200 shadow-sm uppercase">
                <Sparkles size={14} /> Reimagining Feedback
              </div>
              
              <h1 className="text-7xl md:text-[110px] font-black leading-[0.82] mb-12 tracking-tighter text-slate-950">
                The power of <br/>
                <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-[12px]">voice.</span> <br/>
                The speed <br/>
                of <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-[12px]">AI.</span>
              </h1>
              
              <p className="text-2xl text-slate-500 mb-12 max-w-lg font-medium leading-relaxed">
                A new kind of customer survey tool. Accessible to everyone, delivering strategic insights fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center w-full">
                <button onClick={() => scrollTo('pilots')} className="group w-full sm:w-auto bg-indigo-600 text-white px-12 py-6 rounded-[2rem] text-xl font-black shadow-2xl shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
                  Let's Build Together <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative h-[600px] w-full flex items-center justify-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="absolute w-[80%] h-[80%] bg-indigo-500/10 animate-morph rounded-full blur-3xl"></div>
              
              <div className="relative w-full max-w-[550px] h-full flex flex-col items-center justify-center">
                <div className="relative w-full aspect-[4/5] md:aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white z-20">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
                    className="w-full h-full object-cover" 
                    alt="A happy, diverse group of people of various ages and races laughing and looking at their phones" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-950/70 backdrop-blur-xl p-10 flex items-end justify-center gap-2.5 h-32">
                    {[...Array(24)].map((_, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-indigo-400 rounded-full animate-wave" 
                        style={{ 
                          height: `${15 + (i % 8) * 10}%`, 
                          animationDelay: `${i * 0.04}s`,
                        }} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl z-30 animate-float border-[8px] border-white">
                  <Mic size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-64 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-40">
            <div className="px-6 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-8 border border-indigo-100">
              User Experience
            </div>
            <h2 className="text-7xl md:text-[100px] font-black tracking-tighter leading-none text-slate-950 mb-8">
              How it works<span className="text-indigo-600 italic">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Step 01 */}
            <div className="flex flex-col gap-10 group">
              <PhoneFrame bgColor="bg-slate-50">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Portrait of a user" />
                    <div className="absolute inset-0 bg-indigo-600/10 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl animate-pulse">
                        <Mic size={28} className="text-indigo-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </PhoneFrame>
              <div className="px-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-indigo-100 font-black">01</div>
                <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tight">Hear Every Voice.</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">Frictionless voice responses ensure that feedback is accessible to everyone, regardless of ability.</p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col gap-10 group lg:mt-12">
              <PhoneFrame bgColor="bg-indigo-600">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                   <div className="w-32 h-32 rounded-full border-4 border-white/30 p-1 mb-8">
                      <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover rounded-full" alt="Speaker" />
                   </div>
                   <div className="bg-white rounded-3xl p-6 shadow-2xl w-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Analysis</span>
                      </div>
                      <p className="text-slate-950 font-bold text-sm text-left leading-relaxed">
                        "The interface is so much easier to use with voice commands..."
                      </p>
                   </div>
                </div>
              </PhoneFrame>
              <div className="px-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-100 font-black">02</div>
                <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tight">Deeper Nuance.</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">Voice captures the emotion and specific pain points that text forms miss.</p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col gap-10 group">
              <PhoneFrame bgColor="bg-slate-50">
                <div className="absolute inset-0 p-4 flex flex-col bg-white">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b">
                    <div className="font-black text-[10px] uppercase tracking-tighter">Strategic Report</div>
                    <BarChart3 size={16} className="text-indigo-600" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-20 bg-indigo-50 rounded-xl p-3">
                      <div className="w-full h-2 bg-indigo-200 rounded-full mb-2"></div>
                      <div className="w-2/3 h-2 bg-indigo-200 rounded-full mb-3"></div>
                      <div className="flex justify-between items-end">
                        <div className="w-8 h-4 bg-indigo-400 rounded-sm"></div>
                        <div className="w-8 h-8 bg-indigo-600 rounded-sm"></div>
                        <div className="w-8 h-6 bg-indigo-300 rounded-sm"></div>
                      </div>
                    </div>
                    {[1,2,3].map(i => (
                      <div key={i} className="flex items-center gap-3 p-2 border-b border-slate-50">
                        <div className="w-4 h-4 bg-slate-100 rounded-full"></div>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full"></div>
                      </div>
                    ))}
                    <div className="bg-indigo-600 p-3 rounded-xl text-[10px] text-white font-bold">
                      Insight: Users prefer voice navigation by 78%
                    </div>
                  </div>
                </div>
              </PhoneFrame>
              <div className="px-4">
                <div className="w-12 h-12 bg-violet-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-violet-100 font-black">03</div>
                <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tight">Fast Synthesis.</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">No manual analysis. Our engine turns raw voice into full strategic reports instantly.</p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="flex flex-col gap-10 group lg:mt-12">
              <PhoneFrame bgColor="bg-white">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp size={40} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-950 mb-2">Real Results</h4>
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <span className="text-[10px] font-black text-slate-600">Completion Rate</span>
                      <span className="text-[10px] font-black text-green-600">+42%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <span className="text-[10px] font-black text-slate-600">Sentiment Score</span>
                      <span className="text-[10px] font-black text-green-600">+18%</span>
                    </div>
                  </div>
                </div>
              </PhoneFrame>
              <div className="px-4">
                <div className="w-12 h-12 bg-slate-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-slate-100 font-black">04</div>
                <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tight">Results.</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">Turn high-quality feedback into measurable growth and customer loyalty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Section */}
      <section id="byod" className="py-40 bg-indigo-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black tracking-widest uppercase mb-8 border border-white/20 backdrop-blur-md">
                <Database size={14} /> Intelligence Integration
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                Intelligence <br/>
                <span className="text-indigo-200 font-light italic">on demand.</span>
              </h2>
              <p className="text-xl md:text-2xl text-indigo-100 mb-12 font-medium leading-relaxed max-w-xl">
                Connect your existing support channels or survey results. Our AI extracts the human signals you've been missing.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: HardDriveUpload, title: "Data Ticket Import", desc: "Upload support tickets or CRM notes to find hidden themes." },
                  { icon: Layers, title: "Legacy Surveys", desc: "Bring in your CSVs and let our engine find the real signal." },
                  { icon: FileSearch, title: "Synthesis Engine", desc: "Fast sentiment and theme detection on your existing stacks." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white group-hover:text-indigo-600 transition-all">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-1">{item.title}</h4>
                      <p className="text-indigo-200 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 animate-float">
                <PhoneFrame bgColor="bg-slate-50">
                  <div className="absolute inset-0 p-8 flex flex-col items-center justify-center">
                    <div className="w-full space-y-4">
                       <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                          <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center"><FileText size={16}/></div>
                          <div className="flex-1">
                             <div className="h-2 w-16 bg-slate-200 rounded-full mb-2"></div>
                          </div>
                       </div>
                       <div className="mt-8 p-6 bg-indigo-600 rounded-[2rem] shadow-xl text-center">
                          <div className="text-white font-black text-xs uppercase tracking-[0.2em] mb-4">Processing Data</div>
                          <div className="flex items-center justify-center gap-1 h-8">
                             {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-1 bg-white/40 rounded-full animate-wave" style={{ animationDelay: `${i*0.1}s` }} />
                             ))}
                          </div>
                       </div>
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Success Section - Zeus Scooters Case Study */}
      <section id="early-success" className="py-48 px-6 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-indigo-100">
               <Zap size={12} className="fill-indigo-600" /> Case Study
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 leading-[0.9]">
              Early Success: QuickChat Unlocked <br/>
              <span className="text-indigo-600 italic">3X Churn Insights</span> for Zeus Scooters.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="relative">
              <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl relative z-10 border border-slate-100">
                <div className="mb-10 text-indigo-600">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.89543 1.89543 3 3 3H6C8.20914 3 10 4.79086 10 7V15C10 18.3137 7.31371 21 4 21H1Z" />
                  </svg>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-slate-950 leading-tight mb-12 italic">
                  "You've given me a step-by-step guide to reduce churn. We went from guessing to knowing exactly which button to press to fix our problem."
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden flex items-center justify-center">
                    <Users size={32} className="text-slate-400" />
                  </div>
                  <div>
                    <div className="font-black text-xl text-slate-900 tracking-tight">Chris Kemp</div>
                    <div className="text-indigo-600 font-bold uppercase text-xs tracking-widest">Deputy CEO, Zeus Scooters</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-indigo-600/5 rounded-[4rem] -z-10"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:mt-12">
              {[
                { val: "€900K", label: "Recovery", desc: "Annual projected revenue recovery from churn reduction." },
                { val: "10K", label: "Target", desc: "Customers targeted for win-back campaign in Q1." },
                { val: "<7", label: "Velocity", desc: "Strategic feedback delivery in days, not months." },
                { val: "3x", label: "Clarity", desc: "More actionable insights compared to previous NPS surveys." }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
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
            Secure your edge.
          </h2>
          <p className="text-2xl text-slate-500 mb-16 font-medium max-w-2xl mx-auto">
            Opening a few co-creation slots for teams building inclusive customer experiences.
          </p>
          <div className="flex flex-col items-center gap-8">
            <button className="bg-indigo-600 text-white px-16 py-8 rounded-[2rem] text-3xl font-black hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-200">
              Apply for Pilot
            </button>
            <div className="flex items-center gap-6 text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2"><Lock size={14}/> NDA PROTECTED</span>
              <span className="flex items-center gap-2"><Shield size={14}/> GDPR COMPLIANT</span>
              <span className="flex items-center gap-2"><Accessibility size={14}/> WCAG AA</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-40">
           <div className="text-xs font-black tracking-widest uppercase text-slate-950">QuickChat © 2025</div>
           <div className="text-[10px] font-black tracking-widest uppercase italic text-slate-950">Built for Everyone</div>
        </div>
      </footer>
    </div>
  );
}