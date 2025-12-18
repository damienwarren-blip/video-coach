"use client";

import React, { useState, useEffect } from 'react';

/**
 * QUICKCHAT LANDING PAGE - REFINED FOR UK/IE EXECUTIVES
 * Fully self-contained, responsive, and using modern UI principles.
 * Removed lucide-react dependency to resolve "Module not found" build errors.
 */

// --- Comprehensive Inline SVG Icon Library ---
// Replaces external 'lucide-react' dependency with optimized inline SVGs
const Icon = ({ name, className = "" }) => {
  const icons = {
    MessageSquareText: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M13 8H7"/><path d="M17 12H7"/>
      </svg>
    ),
    Zap: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    Rocket: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.95.12-3.5-.5-4.5l-2.5 1.5Z"/><path d="M11.5 4.5c1.26-1.5 5-2 5-2s-.5 3.74-2 5c-.95.71-3.5.12-4.5-.5l1.5-2.5Z"/><path d="M8 10V7l4-3 5 1 1 5-3 4h-3"/><path d="M11.5 11.5 10 13c-1.17 1.17-2.61 2.15-3.98 3.12l-1.02.73a1 1 0 0 0-.01 1.63l.53.38a1 1 0 0 0 1.25-.09l1.63-1.63a14.88 14.88 0 0 0 4.11-8.14"/>
      </svg>
    ),
    Target: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    Users: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    TrendingUp: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    TrendingDown: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>
      </svg>
    ),
    CheckCircle: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    ArrowRight: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
      </svg>
    ),
    Database: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    Bot: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
      </svg>
    ),
    Globe: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    )
  };
  
  return icons[name] || icons.Zap;
};

// --- Reusable UI Elements ---

const PrimaryButton = ({ children, className = '', href = '#' }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 bg-lime-400 rounded-xl shadow-lg hover:bg-lime-300 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 ${className}`}
  >
    {children}
  </a>
);

// --- Main Application ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-lime-200 antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center font-black italic shadow-sm">Q</div>
            <span className="text-2xl font-black tracking-tight">QuickChat<span className="text-lime-500">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => scrollTo('tiers')} className="font-bold text-slate-600 hover:text-slate-900 transition-colors">Process</button>
            <button onClick={() => scrollTo('audit')} className="font-bold text-slate-600 hover:text-slate-900 transition-colors">Audit</button>
            <PrimaryButton className="py-2.5 px-6 text-sm" href="#cta">Schedule Pilot</PrimaryButton>
          </div>

          <div className="md:hidden">
             <PrimaryButton className="py-2 px-4 text-xs" href="#cta">Pilot</PrimaryButton>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-lime-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-lime-400 rounded-full mr-2 animate-pulse"></span>
              UK & Ireland Scale-up Diagnostic
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 tracking-tighter text-slate-950">
              Turn <span className="relative inline-block text-orange-500">
                Churn
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span> into Strategy.
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Why do they really leave? QuickChat uncovers the sincere truth from your data or via active AI deployment—delivered in a 48-hour roadmap.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <PrimaryButton className="text-lg md:text-xl px-10 md:px-12 py-5 shadow-lime-400/30" href="#cta">
                Book Diagnostic Call
              </PrimaryButton>
              <button 
                onClick={() => scrollTo('tiers')}
                className="inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl font-bold text-slate-600 hover:text-lime-600 transition-all group"
              >
                How it Works <Icon name="ArrowRight" className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        {/* Quick Stats / Trust Bar */}
        <section className="py-16 bg-white border-y border-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            <div className="text-center group">
              <div className="text-4xl font-black text-slate-950 group-hover:text-lime-500 transition-colors">48h</div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-2">Strategy Turnaround</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-slate-950 group-hover:text-lime-500 transition-colors">35%+</div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-2">Active Engagement</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-slate-950 group-hover:text-lime-500 transition-colors">10x</div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-2">Survey ROI</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-slate-950 group-hover:text-lime-500 transition-colors">UK/IE</div>
              <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-2">Executive Focus</div>
            </div>
          </div>
        </section>

        {/* Tiers Section */}
        <section id="tiers" className="py-24 md:py-32 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Two Paths to Certainty.</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">The fastest way to identify and fix your revenue leaks without the overhead of a traditional consultancy.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Tier 1 */}
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-t-8 border-slate-900 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute -right-6 -top-6 transition-transform group-hover:scale-110 group-hover:-rotate-12 duration-500 opacity-5 md:opacity-10">
                  <Icon name="Database" className="w-32 h-32 text-slate-900" />
                </div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Tier 1</span>
                <h3 className="text-3xl md:text-4xl font-black mb-6">BYOD <span className="text-slate-400 font-light block md:inline-block md:ml-2 text-xl md:text-3xl">(Bring Your Data)</span></h3>
                <p className="text-slate-600 mb-10 leading-relaxed text-lg font-medium">Upload existing support tickets, call logs, or raw exit data. Our engine synthesizes the noise into a high-level strategic action plan.</p>
                <ul className="space-y-5 mb-12">
                  {['Synthesis of existing silos', 'Impact-weighted priority list', '48-hour report delivery'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-700 font-bold">
                      <div className="w-6 h-6 bg-lime-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                        <Icon name="CheckCircle" className="w-4 h-4 text-lime-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <PrimaryButton className="w-full bg-slate-900 text-white hover:bg-slate-800" href="#cta">Start BYOD Process</PrimaryButton>
              </div>

              {/* Tier 2 */}
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-lime-200/30 border-t-8 border-lime-400 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute -right-6 -top-6 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-500 opacity-10">
                  <Icon name="Bot" className="w-32 h-32 text-lime-400" />
                </div>
                <span className="text-xs font-black text-lime-600 uppercase tracking-widest block mb-4">Tier 2</span>
                <h3 className="text-3xl md:text-4xl font-black mb-6">Active Deployment</h3>
                <p className="text-slate-600 mb-10 leading-relaxed text-lg font-medium">We deploy conversational bots directly to your churned segments. Capture qualitative data that traditional surveys miss.</p>
                <ul className="space-y-5 mb-12">
                  {['Conversational AI Bots', 'Dynamic objection handling', 'Emotion & Sentiment tracking'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-700 font-bold">
                      <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center mr-4 shrink-0">
                        <Icon name="CheckCircle" className="w-4 h-4 text-slate-900" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <PrimaryButton className="w-full shadow-lime-400/20" href="#cta">Deploy Diagnostic Bots</PrimaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Icons Grid */}
        <section id="audit" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
              <div className="text-center md:text-left group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:bg-lime-400 transition-colors duration-300">
                  <Icon name="Target" className="w-8 h-8 text-slate-900" />
                </div>
                <h4 className="text-2xl font-black mb-4">Revenue Leak Audit</h4>
                <p className="text-slate-500 leading-relaxed text-lg">We pinpoint exactly where you're losing money and which segments are at highest risk using quantitative modeling.</p>
              </div>
              <div className="text-center md:text-left group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:bg-lime-400 transition-colors duration-300">
                  <Icon name="TrendingUp" className="w-8 h-8 text-slate-900" />
                </div>
                <h4 className="text-2xl font-black mb-4">Roadmap Priorities</h4>
                <p className="text-slate-500 leading-relaxed text-lg">Don't fix everything. We isolate the three initiatives that will move the retention needle the most this quarter.</p>
              </div>
              <div className="text-center md:text-left group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:bg-lime-400 transition-colors duration-300">
                  <Icon name="Users" className="w-8 h-8 text-slate-900" />
                </div>
                <h4 className="text-2xl font-black mb-4">Segment Specifics</h4>
                <p className="text-slate-500 leading-relaxed text-lg">Understand the deep divide between your 'Bad Fit' churn and your 'Product Gap' churn to fix GTM alignment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-32 px-6 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-lime-500 to-transparent"></div>
            <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-lime-500 to-transparent"></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-lime-500 to-transparent"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter">Stop Guessing.</h2>
            <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
              Book a 15-minute diagnostic call for your scale-up. We'll show you how to turn silent churn into strategic growth.
            </p>
            <PrimaryButton className="px-16 py-7 text-2xl" href="mailto:hello@quickchat.io">
              Schedule Diagnostic <Icon name="ArrowRight" className="ml-3 w-6 h-6" />
            </PrimaryButton>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <span>GDPR Compliant</span>
              <span>Enterprise Ready</span>
              <span>UK/IE Hosted</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-100 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center font-black italic text-slate-950 text-xs">Q</div>
              <span className="text-2xl font-black text-slate-950">QuickChat.</span>
            </div>
            <p className="text-slate-400 text-sm font-medium">Retention intelligence for the modern scale-up.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex space-x-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <a href="#" className="hover:text-lime-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-lime-500 transition-colors">Security</a>
              <a href="#" className="hover:text-lime-500 transition-colors">Legal</a>
              <a href="#" className="hover:text-lime-500 transition-colors">Contact</a>
            </div>
            <div className="text-slate-400 text-xs font-bold">
              © 2025 QuickChat Diagnostic Platform. London | Dublin
            </div>
          </div>
        </div>
      </footer>

      {/* Styles for subtle animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
}