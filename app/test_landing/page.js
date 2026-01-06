"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Layers,
  Zap,
  TrendingUp,
  Quote,
  ChevronRight,
  MoveUpRight
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor(window.innerWidth / 15), 80);
      for(let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 58, 237, 0.15)`;
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-violet-100 selection:text-violet-700 overflow-x-hidden">
      
      {/* BACKGROUND LAYER */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />

      {/* PRIORITY ACCESS TOP BAR */}
      <div className="bg-violet-600 text-white py-3 px-6 text-center text-[11px] font-black uppercase tracking-[0.3em] relative z-[60]">
        Priority Access: 2 Pilot Slots Remaining for Q1 2026 — 
        <button className="underline ml-2 hover:text-violet-100 transition-colors">Let's Talk</button>
      </div>

      {/* NAVIGATION */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl py-4 border-b border-slate-100' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center">
               <Zap size={18} className="text-white fill-current" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase text-slate-900">DataUnlock.io</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
             <a href="#process" className="hover:text-violet-600 transition-colors">The Process</a>
             <a href="#case-study" className="hover:text-violet-600 transition-colors">Case Study</a>
             <button className="px-6 py-2.5 border-2 border-slate-900 text-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all font-black">
               Get in touch
             </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-violet-50 border border-violet-100 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-violet-600">
            Strategic Insight Engine
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.9] text-slate-900">
            Unlock strategy from your <br />
            <span className="text-violet-600">customers' voice.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-12">
            We help you decode customer data fast—turning surveys, tickets, and CSVs into clear roadmaps to drive action, build trust, and grow revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-violet-600 text-white hover:bg-slate-900 rounded-2xl font-black text-lg transition-all shadow-xl shadow-violet-100 flex items-center justify-center gap-4 group">
              Get in touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm font-bold text-slate-400 italic">
              "If you'd like to be a pilot partner, get in touch."
            </p>
          </div>
        </div>
      </header>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-slate-50">
        <div className="mb-20">
          <p className="text-violet-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Process</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900">How we unlock.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {/* Feature 1: The Foundation */}
          <div className="space-y-6 group">
            <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-500">
              <Layers size={32} className="text-violet-600 group-hover:text-white transition-colors duration-500" />
            </div>
            <div className="text-xs font-black uppercase tracking-[0.3em] text-violet-600">The Foundation</div>
            <h3 className="text-3xl font-black tracking-tight text-slate-900 leading-tight">Load Your Data</h3>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              You've already collected all this customer data. Now let's actually understand it. Drop your CSV, survey export, support tickets — any format. Your customers' voice is here.
            </p>
            <div className="h-px bg-slate-100"></div>
            <ul className="space-y-3">
              {["No reformatting needed", "Multi-language support", "Your data stays protected"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-600 mt-2 flex-shrink-0"></span>
                  <span className="text-sm font-bold text-slate-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature 2: The Strategy */}
          <div className="space-y-6 group">
            <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-500">
              <Zap size={32} className="text-violet-600 group-hover:text-white transition-colors duration-500" />
            </div>
            <div className="text-xs font-black uppercase tracking-[0.3em] text-violet-600">The Brain</div>
            <h3 className="text-3xl font-black tracking-tight text-slate-900 leading-tight">The Strategy</h3>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              We analyse your customers' voice and deliver a strategic roadmap with recommended actions. Clarity in hours, not weeks.
            </p>
            <div className="h-px bg-slate-100"></div>
            <ul className="space-y-3">
              {["What to build next", "Why they're leaving", "What to fix first"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-600 mt-2 flex-shrink-0"></span>
                  <span className="text-sm font-bold text-slate-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature 3: Growth Execution */}
          <div className="space-y-6 group">
            <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-500">
              <TrendingUp size={32} className="text-violet-600 group-hover:text-white transition-colors duration-500" />
            </div>
            <div className="text-xs font-black uppercase tracking-[0.3em] text-violet-600">The Output</div>
            <h3 className="text-3xl font-black tracking-tight text-slate-900 leading-tight">Growth Execution</h3>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Now you have what you need. You execute. Communicate with your customers, they see the difference.
            </p>
            <div className="h-px bg-slate-100"></div>
            <ul className="space-y-3">
              {["You get results", "Build trust", "Grow revenue"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-600 mt-2 flex-shrink-0"></span>
                  <span className="text-sm font-bold text-slate-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section id="case-study" className="py-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px] border border-slate-800">
            
            {/* Left: Branding & Metrics */}
            <div className="lg:w-1/2 p-12 md:p-16 bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-10">
                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-black text-slate-900 text-lg">Z</div>
                   <span className="text-2xl font-black text-white tracking-tighter uppercase">Zeus Scooters</span>
                </div>
                <p className="text-violet-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4">European Micro-Mobility Case</p>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-10">
                  Reducing churn for 150k users.
                </h2>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800">
                  <div>
                    <div className="text-4xl md:text-5xl font-black text-white">€900K</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-2">Revenue Recovery</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-black text-white">&lt; 7 Days</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-2">Execution Speed</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-slate-400 text-sm font-medium leading-relaxed italic border-l-2 border-violet-500 pl-6">
                Uncovered hidden drivers for churn using voice analysis, achieving 3x participation vs standard surveys.
              </div>
            </div>

            {/* Right: The Human Quote */}
            <div className="lg:w-1/2 p-12 md:p-16 bg-white flex flex-col justify-center">
              <Quote size={48} className="text-violet-100 mb-8" />
              <blockquote className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-12">
                "You've given me a <span className="text-violet-600">step-by-step guide</span> to reduce churn. The clarity DataUnlock provided transformed how we prioritize our dev cycle."
              </blockquote>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden shadow-inner border border-slate-100">
                  <img src="https://i.pravatar.cc/150?u=kemp" alt="Chris Kemp" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900">Chris Kemp</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mt-1">
                    Deputy CEO, Zeus Scooters 
                    <MoveUpRight size={14} className="text-violet-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <footer className="py-32 bg-white text-center px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]">
            Unlock your data's <br /><span className="text-violet-600 italic">potential.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium">
            We’re working closely with teams to test and shape DataUnlock.io.
          </p>
          <div className="flex flex-col items-center gap-10">
            <button className="px-12 py-7 bg-violet-600 text-white rounded-2xl font-black text-2xl hover:bg-slate-900 transition-all shadow-2xl shadow-violet-200 active:scale-95">
              Let’s talk.
            </button>
            <button className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] hover:text-violet-600 transition-colors">
              Reserve Your Slot
            </button>
          </div>
          
          <div className="pt-32 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-50">
             <div className="flex items-center gap-2">
                <Zap size={14} className="text-slate-900 fill-current" />
                <span className="text-sm font-black uppercase tracking-tighter text-slate-900">DataUnlock.io</span>
             </div>
             <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-300">
                <a href="#">Privacy</a>
                <span>|</span>
                <a href="#">Ethics</a>
             </div>
             <p className="text-slate-300 text-[9px] font-black uppercase tracking-widest">
               © 2026 DataUnlock Operations.
             </p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #fff; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;