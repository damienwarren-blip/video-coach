"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Zap, 
  TrendingUp, 
  Quote, 
  ChevronRight, 
  MoveUpRight, 
  CheckCircle2, 
  Circle, 
  ArrowUpRight 
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

      {/* TOP BAR */}
      <div className="bg-slate-900 text-white py-3 px-6 text-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] relative z-[60]">
        In beta. Early access for pilot partners
      </div>

      {/* NAVIGATION */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-3 border-b border-slate-100' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white fill-current" />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter uppercase">
              Data<span className="text-violet-600">Unlock</span>.io
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <a href="#process" className="hover:text-violet-600 transition-colors">The Process</a>
              <a href="#case-study" className="hover:text-violet-600 transition-colors">Case Study</a>
              <button className="px-6 py-2.5 bg-slate-900 text-white rounded-full hover:bg-violet-600 transition-all font-black">
                Let's Talk
              </button>
          </div>
          
          <button className="md:hidden px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
            Let's Talk
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-12 md:pt-20 pb-16 lg:pt-32 lg:pb-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="max-w-4xl">
          <h1 className="text-[2.75rem] md:text-8xl lg:text-9xl font-black mb-6 md:mb-10 tracking-tighter leading-[0.95] md:leading-[0.9] text-slate-900">
            Unlock the revenue <br />
            <span className="text-violet-600 italic">in your data.</span>
          </h1>
          
          <div className="text-base md:text-2xl text-slate-500 max-w-3xl font-medium leading-relaxed mb-10 md:mb-12">
            We are building a platform to unlock revenue from your untapped customer data — turning surveys, tickets, and CSVs into clear strategy that <span className="text-slate-900 font-black tracking-tight inline-block">drives action</span>, <span className="text-slate-900 font-black tracking-tight inline-block">builds trust</span>, and <span className="text-slate-900 font-black tracking-tight inline-block">grows revenue</span>.
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-violet-600 text-white hover:bg-slate-900 rounded-xl md:rounded-2xl font-black text-base md:text-lg transition-all shadow-xl shadow-violet-100 flex items-center justify-center gap-3 group">
              Join as Pilot Partner
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* PROCESS SECTION */}
      <section id="process" className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-slate-50">
        <div className="mb-12 md:mb-20">
          <p className="text-violet-600 font-black uppercase tracking-[0.4em] text-[10px] mb-3">The Process</p>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900">How we unlock.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12">
          {/* Feature 1 */}
          <div className="space-y-6 group bg-slate-50/50 p-6 md:p-8 rounded-3xl md:bg-transparent">
            <div className="w-14 h-14 bg-white md:bg-violet-50 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-500 shadow-sm md:shadow-none">
              <Layers size={28} className="text-violet-600 group-hover:text-white transition-colors duration-500" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600 mb-2">Step 01</div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 leading-tight mb-4">Load Raw Data</h3>
              <p className="text-lg md:text-base text-slate-700 leading-relaxed font-bold md:font-medium mb-6">
                Instantly process your CSVs, surveys, and support tickets. No cleanup, no reformatting—we extract the raw customer voice immediately.
              </p>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-violet-600 transition-colors">
                See our data governance policy <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="space-y-6 group bg-slate-50/50 p-6 md:p-8 rounded-3xl md:bg-transparent">
            <div className="w-14 h-14 bg-white md:bg-violet-50 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-500 shadow-sm md:shadow-none">
              <Zap size={28} className="text-violet-600 group-hover:text-white transition-colors duration-500" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600 mb-2">Step 02</div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 leading-tight mb-4">Strategic Mapping</h3>
              <p className="text-lg md:text-base text-slate-700 leading-relaxed font-bold md:font-medium mb-6">
                This is where we unlock the revenue hidden in your data. We build a clear strategy showing exactly what moves the needle. We replace weeks of manual analysis with instant, revenue-focused priorities.
              </p>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-violet-600 transition-colors">
                See example report <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="space-y-6 group bg-slate-50/50 p-6 md:p-8 rounded-3xl md:bg-transparent">
            <div className="w-14 h-14 bg-white md:bg-violet-50 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-500 shadow-sm md:shadow-none">
              <TrendingUp size={28} className="text-violet-600 group-hover:text-white transition-colors duration-500" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600 mb-2">Step 03</div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 leading-tight mb-4">Direct Revenue Impact</h3>
              <p className="text-lg md:text-base text-slate-700 leading-relaxed font-bold md:font-medium mb-6">
                Execute with the confidence that comes from a data-led strategy. Turn customer feedback into tangible improvements that build trust and scale your revenue.
              </p>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-violet-600 transition-colors">
                See case study <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section id="case-study" className="py-12 md:py-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 md:mb-20">
            <p className="text-violet-600 font-black uppercase tracking-[0.4em] text-[10px] mb-3">Case Study</p>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900">Zeus Scooters.</h2>
          </div>
          
          <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px] border border-slate-800">
            <div className="lg:w-1/2 p-8 md:p-16 bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8 md:mb-12">
                   <div className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center font-black text-slate-900 text-lg">Z</div>
                   <span className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase">Zeus Scooters</span>
                </div>
                <p className="text-violet-400 font-black uppercase tracking-[0.4em] text-[9px] mb-4">Micro-Mobility Impact</p>
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-10 md:mb-12">
                  Reducing churn for 150k users.
                </h2>
                <div className="flex flex-row md:grid md:grid-cols-2 gap-6 md:gap-8 pt-8 border-t border-slate-800">
                  <div className="flex-1">
                    <div className="text-3xl md:text-5xl font-black text-white">€900K</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-500 mt-2 leading-tight">Revenue <br className="hidden md:block"/>Recovery</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl md:text-5xl font-black text-white">&lt; 7 Days</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-500 mt-2 leading-tight">Execution <br className="hidden md:block"/>Speed</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-16 bg-white flex flex-col justify-center">
              <Quote size={40} className="text-violet-100 mb-6 md:mb-8" />
              <blockquote className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-10 md:mb-12">
                "You've given me a <span className="text-violet-600">step-by-step guide</span> to reduce churn."
              </blockquote>
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-violet-600 flex items-center justify-center shadow-lg border-2 border-slate-50 text-white font-black text-xl">
                  CK
                </div>
                <div>
                  <div className="text-lg md:text-xl font-black text-slate-900">Chris Kemp</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mt-0.5">
                    Deputy CEO, Zeus Scooters 
                    <MoveUpRight size={12} className="text-violet-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <footer className="py-24 md:py-32 bg-white text-center px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[1] md:leading-[0.9]">
            Unlock the revenue <br /><span className="text-violet-600 italic">in your data.</span>
          </h2>
          <p className="text-lg md:text-2xl text-slate-400 font-medium px-4">
            We’re looking to partner with forward-thinking teams to help shape the future of DataUnlock.
          </p>
          <div className="flex flex-col items-center gap-8 md:gap-10">
            <button className="w-full sm:w-auto px-10 py-5 md:px-12 md:py-7 bg-violet-600 text-white rounded-2xl font-black text-xl md:text-2xl hover:bg-slate-900 transition-all shadow-2xl shadow-violet-200 active:scale-95">
              Let's talk about what would work for you
            </button>
          </div>
          
          <div className="pt-20 md:pt-32 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-50">
             <div className="flex items-center gap-2">
                <Zap size={14} className="text-violet-600 fill-current" />
                <span className="text-sm font-black uppercase tracking-tighter text-slate-900">
                  Data<span className="text-violet-600">Unlock</span>.io
                </span>
             </div>
             <div className="flex gap-6 md:gap-8 text-[9px] font-black uppercase tracking-widest text-slate-300">
                <a href="#">Privacy</a>
                <span>|</span>
                <a href="#">Ethics</a>
             </div>
             <p className="text-slate-300 text-[8px] font-black uppercase tracking-widest">
               © 2026 DataUnlock Operations.
             </p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #fff; -webkit-font-smoothing: antialiased; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;