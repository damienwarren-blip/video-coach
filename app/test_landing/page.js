import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles,
  Quote,
  Activity,
  ArrowUpRight,
  Database,
  Search,
  RefreshCw,
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const methodology = [
    {
      id: "01",
      phase: "Easy Onboarding",
      title: "Load Your Data",
      desc: "Drop your CSV, survey export, support tickets — any format. Your customers' voice is here, stay in control.",
      icon: <Database className="w-6 h-6" />,
      tag: "YOUR DATA"
    },
    {
      id: "02",
      phase: "Clarity in Hours",
      title: "The Strategy",
      desc: "We analyze your customers' voice and build a strategic roadmap: what to build next, why they're leaving, what to fix first.",
      icon: <Search className="w-6 h-6" />,
      tag: "OUR ANALYSIS"
    },
    {
      id: "03",
      phase: "Measurable Success",
      title: "The Results",
      desc: "You execute. Your customers feel heard. Issues get fixed. Your churn drops. Your trust grows. Your revenue increases.",
      icon: <RefreshCw className="w-6 h-6" />,
      tag: "YOUR GROWTH"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      
      {/* GLOBAL STATUS BAR */}
      <div className="bg-indigo-600 text-white py-2.5 px-6 text-[9px] font-black uppercase tracking-[0.5em] text-center sticky top-0 z-[60]">
        Priority Access: 2 Pilot Slots Remaining for Q1 2026
      </div>

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-700 top-[34px] ${scrolled ? 'bg-white/80 backdrop-blur-xl py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-9 h-9 bg-slate-950 rounded-lg flex items-center justify-center transition-all group-hover:bg-indigo-600 group-hover:rotate-6">
               <Activity size={18} className="text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">VoxLoop</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
             <a href="#process" className="hover:text-indigo-600 transition-colors">Process</a>
             <a href="#case-study" className="hover:text-indigo-600 transition-colors">Case Study</a>
          </div>

          <button className="bg-slate-950 text-white px-8 py-4 rounded-full text-[10px] font-black hover:bg-indigo-600 transition-all uppercase tracking-widest shadow-xl shadow-indigo-600/10 active:scale-95">
            Let's Talk
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-48 pb-24 lg:pt-64 lg:pb-48 px-6 md:px-12 max-w-[1600px] mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-11">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-indigo-600 animate-fade-in-up">
              <Sparkles size={12} /> Strategic Insight Engine
            </div>
            
            <h1 className="text-[55px] md:text-[90px] lg:text-[130px] font-black text-slate-900 mb-12 tracking-tighter leading-[0.9] lg:leading-[0.85]">
              Build strategy with your <br/>
              <span className="text-indigo-600">customers' voice.</span>
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <p className="text-xl lg:text-2xl text-slate-500 font-medium leading-[1.4] tracking-tight">
                We're building an engine that turns customer data into action, trust, and revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="w-full sm:w-auto px-12 py-7 bg-indigo-600 text-white hover:bg-slate-900 rounded-full font-black text-lg transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95 group">
                  Let's talk <ArrowUpRight size={22} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* THE PROCESS SECTION */}
      <section id="process" className="py-32 lg:py-48 bg-white border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-24">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.5em] mb-6">The Process</h2>
            <div className="text-5xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]">
              How it works.
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {methodology.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`group p-10 lg:p-14 rounded-[3rem] transition-all duration-700 border-2 ${activeStep === idx ? 'bg-indigo-50/50 border-indigo-200 shadow-xl' : 'bg-white border-slate-100'}`}
              >
                <div className="flex justify-between items-start mb-16">
                  <div className={`text-6xl font-black tracking-tighter ${activeStep === idx ? 'text-indigo-200' : 'text-slate-100 group-hover:text-indigo-100'}`}>
                    {step.id}
                  </div>
                  <div className={`p-4 rounded-2xl transition-all duration-500 ${activeStep === idx ? 'bg-indigo-600 text-white scale-110 rotate-3' : 'bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600'}`}>
                    {step.icon}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className={`text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-500 ${activeStep === idx ? 'text-indigo-600' : 'text-slate-400'}`}>
                    {step.phase}
                  </div>
                  <h3 className="text-4xl font-black tracking-tighter text-slate-900">
                    {step.title}
                  </h3>
                  <p className={`text-lg font-medium leading-relaxed transition-colors duration-500 ${activeStep === idx ? 'text-slate-700' : 'text-slate-500'}`}>
                    {step.desc}
                  </p>
                </div>
                <div className={`mt-10 pt-10 border-t transition-colors duration-700 ${activeStep === idx ? 'border-indigo-200' : 'border-slate-50'} flex items-center justify-between`}>
                   <span className={`text-[10px] font-black uppercase tracking-widest ${activeStep === idx ? 'text-indigo-600' : 'text-slate-300'}`}>{step.tag}</span>
                   <ArrowRight size={18} className={activeStep === idx ? 'text-indigo-600' : 'text-slate-200'} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section id="case-study" className="py-32 lg:py-48 bg-indigo-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32"></div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7 space-y-16">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-indigo-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                  European Micro-Mobility Case
                </div>
                <h2 className="text-8xl lg:text-[120px] font-black tracking-tighter leading-[0.8]">
                  ZEUS
                </h2>
              </div>
              
              <div className="relative pl-12">
                <Quote className="absolute top-0 left-0 text-indigo-400/40 w-10 h-10" />
                <p className="text-4xl lg:text-5xl font-black tracking-tighter leading-[1.1] mb-12">
                  "You've given me a step-by-step guide to reduce churn."
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center font-black text-xl border border-white/20">CK</div>
                  <div>
                    <div className="text-xl font-black">Chris Kemp</div>
                    <div className="text-[10px] text-white/60 font-black uppercase tracking-widest">Deputy CEO, Zeus Scooters</div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-12 pt-8 border-t border-white/10">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-300 mb-2">The Challenge</h4>
                  <p className="text-lg font-medium opacity-90">Zeus couldn't uncover why churn was climbing among 150,000 users—costing significant revenue.</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-300 mb-2">The Solution</h4>
                  <p className="text-lg font-medium opacity-90">VOXLOOP voice campaigns achieved 3x participation and uncovered hidden drivers.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid gap-6">
              <div className="p-10 bg-white rounded-[2.5rem] shadow-2xl">
                 <div className="text-[10px] font-black uppercase text-indigo-600 tracking-widest mb-4">Revenue Recovery</div>
                 <div className="text-7xl font-black text-slate-900 tracking-tighter">€900K</div>
                 <p className="text-slate-500 font-bold mt-2">Projected annual revenue saved.</p>
              </div>
              <div className="p-10 bg-slate-900 rounded-[2.5rem] shadow-2xl">
                 <div className="text-[10px] font-black uppercase text-indigo-400 tracking-widest mb-4">Execution Speed</div>
                 <div className="text-7xl font-black text-white tracking-tighter">&lt;7 Days</div>
                 <p className="text-slate-400 font-bold mt-2">From data to action plan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <footer className="py-32 lg:py-64 bg-white text-center px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto space-y-24">
          <div className="space-y-10">
            <h2 className="text-[50px] md:text-[100px] lg:text-[140px] font-black text-slate-950 tracking-tighter leading-[0.8]">
              Let’s <span className="text-indigo-600 underline decoration-indigo-100 decoration-8 underline-offset-8">talk.</span>
            </h2>
            <div className="flex flex-col items-center gap-10">
              <p className="text-xl lg:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                We’re working closely with teams to test and shape VOXLOOP.
              </p>
              <button className="px-16 py-10 bg-slate-950 text-white rounded-full font-black text-2xl hover:bg-indigo-600 transition-all shadow-2xl active:scale-95 group">
                Reserve Your Slot
              </button>
            </div>
          </div>
          
          <div className="pt-32 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-12">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-950 rounded flex items-center justify-center">
                   <Activity size={14} className="text-white" />
                </div>
                <span className="text-slate-950 font-black uppercase tracking-tighter text-2xl">VoxLoop</span>
             </div>
             
             <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <a href="#" className="hover:text-indigo-600">Privacy</a>
                <a href="#" className="hover:text-indigo-600">Ethics</a>
             </div>
             
             <p className="text-slate-300 text-[8px] font-black uppercase tracking-[0.5em]">
               © 2026 VOXLOOP OPERATIONS.
             </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;