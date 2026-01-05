import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Activity,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Plus,
  ArrowUpRight,
  Database,
  Search,
  TrendingUp,
  Quote
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      
      {/* PRE-NAV TOP BAR */}
      <div className="bg-slate-900 text-white py-2.5 px-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-center">
        Strategic Partnership Slots Open for Q1 2026
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-2xl py-3 md:py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-6 md:py-10'}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-4 cursor-pointer group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-900 rounded-full flex items-center justify-center transition-all group-hover:bg-indigo-600">
               <Activity size={16} className="text-white md:w-[18px]" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">VoxLoop</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-16 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
             <a href="#process" className="hover:text-indigo-600 transition-colors">How we work</a>
             <a href="#case-study" className="hover:text-indigo-600 transition-colors">Success Stories</a>
          </div>

          <button className="bg-indigo-600 text-white px-6 md:px-10 py-3 md:py-5 rounded-full text-[10px] md:text-[11px] font-black hover:bg-slate-900 transition-all uppercase tracking-widest shadow-xl shadow-indigo-600/10">
            Contact
          </button>
        </div>
      </nav>

      {/* ULTRA-PREMIUM HERO */}
      <header className="relative pt-40 pb-20 md:pt-64 md:pb-32 lg:pt-80 lg:pb-64 px-6 md:px-10 max-w-[1600px] mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-11">
            <div className="inline-flex items-center gap-3 px-4 md:px-5 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-12 text-indigo-600 shadow-sm animate-fade-in">
              <Plus size={12} /> Strategy Built on Ground Truth
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[145px] font-black text-slate-900 mb-8 md:mb-16 tracking-tighter leading-[0.9] lg:leading-[0.78]">
              Build strategy with your <br className="hidden md:block" />
              <span className="text-indigo-600 italic">customers' voice.</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-4xl text-slate-500 max-w-4xl font-medium leading-snug lg:leading-[1.2] mb-12 md:mb-20 tracking-tight">
              We're building an engine that turns customer data into action, trust, and revenue.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <button className="w-full sm:w-auto px-8 md:px-16 py-6 md:py-9 bg-slate-900 text-white hover:bg-indigo-600 rounded-full font-black text-lg md:text-xl transition-all flex items-center justify-center gap-4 md:gap-6 shadow-2xl active:scale-95 group">
                Let's Build Your Roadmap <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* THE METHODOLOGY — THE STRATEGIC LOOP */}
      <section id="process" className="py-24 md:py-40 bg-white relative z-10 border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="mb-16 md:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-10">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-[10px] md:text-xs font-black text-indigo-600 uppercase tracking-[0.4em] md:tracking-[0.6em]">The Partnership</h2>
              <div className="text-5xl sm:text-7xl lg:text-[100px] font-black tracking-tighter text-slate-900 leading-[0.9] md:leading-[0.85]">
                The Strategic <br className="hidden md:block" />Loop.
              </div>
            </div>
            <p className="text-lg md:text-xl text-slate-400 max-w-sm font-medium leading-relaxed">
              A high-impact collaboration designed to solve friction and find your next growth engine.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-0 border-y border-slate-200">
            
            {/* Step 1 */}
            <div className="group relative border-b lg:border-b-0 lg:border-r border-slate-200 pt-16 pb-20 md:pt-20 md:pb-24 px-6 md:px-12 transition-all duration-500 hover:bg-slate-50">
              <div className="flex justify-between items-start mb-16 md:mb-24">
                <div className="text-7xl md:text-[100px] font-black text-slate-100 group-hover:text-indigo-100 transition-colors leading-none tracking-tighter">01</div>
                <div className="p-4 bg-slate-950 text-white rounded-2xl transition-transform group-hover:scale-110">
                  <Database size={24} />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 relative z-10">
                <div className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em]">Easy Onboarding</div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900">Load Your Data</h3>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                  Drop your CSV, survey export, support tickets — any format. Your customers' voice is here, stay in control.
                </p>
              </div>
              <div className="mt-10 md:mt-12 pt-10 md:pt-12 border-t border-slate-100 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-500 transition-colors">
                 <span>YOUR DATA</span>
                 <ArrowRight size={14} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative border-b lg:border-b-0 lg:border-r border-slate-200 pt-16 pb-20 md:pt-20 md:pb-24 px-6 md:px-12 transition-all duration-500 hover:bg-slate-50">
              <div className="flex justify-between items-start mb-16 md:mb-24">
                <div className="text-7xl md:text-[100px] font-black text-slate-100 group-hover:text-indigo-100 transition-colors leading-none tracking-tighter">02</div>
                <div className="p-4 bg-indigo-600 text-white rounded-2xl transition-transform group-hover:scale-110">
                  <Search size={24} />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 relative z-10">
                <div className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em]">Clarity in Hours</div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900">The Strategy</h3>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                  We analyze your customers' voice and build a strategic roadmap: what to build next, why they're leaving, what to fix first.
                </p>
              </div>
              <div className="mt-10 md:mt-12 pt-10 md:pt-12 border-t border-slate-100 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-500 transition-colors">
                 <span>OUR ANALYSIS</span>
                 <ArrowRight size={14} />
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative pt-16 pb-20 md:pt-20 md:pb-24 px-6 md:px-12 transition-all duration-500 hover:bg-slate-50">
              <div className="flex justify-between items-start mb-16 md:mb-24">
                <div className="text-7xl md:text-[100px] font-black text-slate-100 group-hover:text-indigo-100 transition-colors leading-none tracking-tighter">03</div>
                <div className="p-4 bg-slate-950 text-white rounded-2xl transition-transform group-hover:scale-110">
                  <TrendingUp size={24} />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 relative z-10">
                <div className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em]">Measurable Success</div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900">The Results</h3>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                  You execute. Your customers feel heard. Issues get fixed. Your churn drops. Your trust grows. Your revenue increases.
                </p>
              </div>
              <div className="mt-10 md:mt-12 pt-10 md:pt-12 border-t border-slate-100 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-500 transition-colors">
                 <span>YOUR GROWTH</span>
                 <ArrowUpRight size={14} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REVISED CASE STUDY SECTION */}
      <section id="case-study" className="py-24 md:py-40 lg:py-64 bg-slate-50 relative overflow-hidden z-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            <div className="lg:col-span-7 space-y-12 md:space-y-20">
              <div className="space-y-6 md:space-y-8">
                <div className="text-indigo-600 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em]">European Micro-Mobility Case</div>
                <h2 className="text-7xl sm:text-8xl lg:text-[130px] font-black tracking-tighter text-slate-900 leading-[0.9] md:leading-[0.8]">
                  ZEUS
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-4 md:pt-8">
                  <div className="space-y-3 md:space-y-4">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">The Challenge</div>
                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                      Zeus couldn't uncover why churn was climbing among 150,000 users—costing significant revenue.
                    </p>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">The Solution</div>
                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                      VOXLOOP voice campaigns achieved 3x participation and uncovered hidden drivers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pt-8 md:pt-12 border-t border-slate-200">
                <Quote className="absolute -top-4 md:-top-6 -left-6 md:-left-12 text-slate-200 w-24 h-24 md:w-32 md:h-32 -z-0" />
                <p className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 leading-[1.1] md:leading-[1.05]">
                  "You've given me a step-by-step guide to reduce churn."
                </p>
                <div className="flex items-center gap-4 md:gap-6 mt-10 md:mt-16">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-950 rounded-full overflow-hidden flex items-center justify-center text-white font-black text-lg">CK</div>
                  <div>
                    <div className="text-xl md:text-2xl font-black text-slate-900">Chris Kemp</div>
                    <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">Deputy CEO, Zeus Scooters</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-6 md:gap-8">
              <div className="group p-8 md:p-12 bg-white border border-slate-200 rounded-[2rem] md:rounded-[3rem] transition-all hover:bg-slate-900 hover:border-slate-950 shadow-sm hover:shadow-2xl">
                 <div className="text-5xl md:text-7xl font-black text-slate-900 mb-2 md:mb-4 tracking-tighter group-hover:text-white">€900K</div>
                 <div className="text-[10px] font-black uppercase text-slate-900 tracking-[0.2em] group-hover:text-white/60 mb-2 md:mb-3">Revenue Recovery</div>
                 <div className="text-sm text-slate-400 font-bold group-hover:text-white/40">Projected annual revenue saved.</div>
              </div>
              <div className="group p-8 md:p-12 bg-white border border-slate-200 rounded-[2rem] md:rounded-[3rem] transition-all hover:bg-slate-900 hover:border-slate-950 shadow-sm hover:shadow-2xl">
                 <div className="text-5xl md:text-7xl font-black text-slate-900 mb-2 md:mb-4 tracking-tighter group-hover:text-white">&lt;7 Days</div>
                 <div className="text-[10px] font-black uppercase text-slate-900 tracking-[0.2em] group-hover:text-white/60 mb-2 md:mb-3">Execution Speed</div>
                 <div className="text-sm text-slate-400 font-bold group-hover:text-white/40">From data to action plan.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <footer className="py-32 md:py-64 bg-white text-center px-6 md:px-10 relative overflow-hidden z-10 border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto space-y-24 md:space-y-32">
          <div className="space-y-8 md:space-y-12">
            <h2 className="text-5xl sm:text-7xl md:text-[100px] lg:text-[180px] font-black text-slate-950 tracking-tighter leading-[0.85] md:leading-[0.75]">
              Book your <br className="hidden md:block" /><span className="text-indigo-600 italic">pilot call.</span>
            </h2>
            <div className="flex flex-col items-center gap-8 md:gap-10">
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-400 font-medium max-w-2xl mx-auto leading-tight">
                We’re working closely with teams to test and shape VOXLOOP.
              </p>
              <button className="w-full sm:w-auto px-10 md:px-20 py-8 md:py-12 bg-slate-900 text-white rounded-full font-black text-xl md:text-3xl hover:bg-indigo-600 transition-all shadow-2xl active:scale-95 group">
                Check Availability for Q1
              </button>
            </div>
          </div>
          
          <div className="pt-20 md:pt-40 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
             <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-950 rounded-full flex items-center justify-center">
                   <Activity size={18} className="text-white" />
                </div>
                <span className="text-slate-950 font-black uppercase tracking-tighter text-2xl md:text-3xl">VoxLoop</span>
             </div>
             <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
                <a href="#" className="hover:text-indigo-600 transition-colors">Operations</a>
                <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
             </div>
             <p className="text-slate-300 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-center md:text-right">
               VoxLoop Irish Operations • Strategy for Builders
             </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;