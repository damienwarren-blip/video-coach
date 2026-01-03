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
  Smile,
  X,
  Info,
  ChevronRight,
  Globe,
  Lock,
  Plus,
  Minus
} from 'lucide-react';

const PhoneFrame = ({ children, bgColor = "bg-slate-950", className = "" }) => (
  <div className={`relative mx-auto w-[260px] h-[520px] bg-slate-950 rounded-[3rem] p-3 shadow-2xl border-[6px] border-slate-800 overflow-hidden ${className}`}>
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

// FAQ Component
const FAQItem = ({ question, answer, subAnswer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group hover:text-indigo-600 transition-colors"
      >
        <span className="text-xl md:text-2xl font-black tracking-tight text-slate-950 group-hover:text-indigo-600">{question}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-indigo-600 font-bold mb-3 italic text-lg">{answer}</p>
        <p className="text-slate-500 text-lg leading-relaxed">{subAnswer}</p>
      </div>
    </div>
  );
};

// Modular UI Components for Phone Frames
const Step01Visual = () => (
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
      <div className="text-[9px] font-bold text-slate-400 mt-2">Connecting...</div>
    </div>
  </div>
);

const Step02Visual = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
     <div className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden mb-6 shadow-2xl relative bg-indigo-800">
        <img 
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&h=300&q=80" 
          alt="User Profile"
          className="w-full h-full object-cover"
        />
     </div>
     <div className="w-full bg-white rounded-3xl p-6 shadow-2xl text-left relative overflow-hidden mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600"><Mic size={18} /></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Speaking Now</span>
        </div>
        <div className="text-sm font-bold text-slate-900 leading-tight">
          "The checkout process took way too long on my commute..."
        </div>
     </div>
     <div className="flex gap-4">
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white backdrop-blur-sm border border-white/20"><Languages size={20} /></div>
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white backdrop-blur-sm border border-white/20"><Accessibility size={20} /></div>
     </div>
  </div>
);

const Step03Visual = () => (
  <div className="absolute inset-0 p-5 flex flex-col bg-white overflow-hidden">
    <div className="flex items-center justify-between mb-6">
      <div className="flex flex-col">
        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Deep Analysis</span>
        <span className="font-black text-xs text-slate-900 tracking-tighter">AI INSIGHTS</span>
      </div>
      <div className="p-2 bg-indigo-50 rounded-lg"><BarChartHorizontal size={14} className="text-indigo-600" /></div>
    </div>
    <div className="space-y-4">
      <div className="p-4 bg-slate-900 rounded-2xl shadow-lg border border-slate-800">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
          <div className="text-[9px] font-bold text-white uppercase tracking-tighter">Theme: UX Friction</div>
        </div>
        <div className="p-2 bg-indigo-600/20 border border-indigo-500/30 rounded-lg">
          <div className="text-[8px] font-black text-indigo-400 uppercase">Primary Root Cause</div>
          <div className="text-[9px] text-white">Mobile loading times exceed 4s.</div>
        </div>
      </div>
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
         <div className="text-[9px] font-black text-slate-400 uppercase mb-2">Confidence Level</div>
         <div className="flex items-center gap-3">
           <div className="h-2 flex-1 bg-indigo-100 rounded-full overflow-hidden">
              <div className="h-full w-[94%] bg-indigo-600"></div>
           </div>
           <span className="text-[10px] font-black text-indigo-600">94%</span>
         </div>
      </div>
    </div>
  </div>
);

const Step04Visual = () => (
  <div className="absolute inset-0 flex flex-col p-6 bg-white overflow-hidden">
    <div className="text-center mb-8">
       <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-3 mx-auto shadow-sm">
          <TrendingUp className="text-green-600" size={32} />
       </div>
       <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Strategy Result</div>
       <div className="text-2xl font-black text-slate-900 tracking-tighter">+24% MRR Recovery</div>
    </div>
    <div className="space-y-3">
      <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 flex items-center gap-4">
         <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg">
            <Heart size={20} fill="currentColor" />
         </div>
         <div>
           <div className="text-xs font-black text-indigo-950 uppercase">Trust Index</div>
           <div className="text-[10px] text-indigo-600">Loyalty up 42%</div>
         </div>
      </div>
      <div className="bg-slate-900 p-4 rounded-2xl text-white">
         <div className="flex justify-between items-center mb-2">
            <div className="text-[8px] font-bold uppercase text-slate-400">Churn Reduction</div>
            <TrendingDown className="text-green-400" size={14} />
         </div>
         <div className="text-2xl font-black leading-none">-18%</div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const walkthroughData = [
    {
      id: "01",
      visual: <Step01Visual />,
      bgColor: "bg-slate-50",
      mainTitle: "Simple Delivery",
      mainHeadline: "You send your customers a simple link",
      mainDescription: "It opens a short voice conversation on their phone — just 3–5 friendly questions about why they might leave.",
      headline: "Start with a simple link",
      body: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p className="font-bold text-slate-900">No long forms, no typing, no login.</p>
          <p>The conversation is tuned specifically for the mobile experience, making it feel lightweight and low-effort.</p>
          <p>Customers just talk naturally, like they are leaving a voicemail for a friend.</p>
        </div>
      )
    },
    {
      id: "02",
      visual: <Step02Visual />,
      bgColor: "bg-indigo-600",
      mainTitle: "Natural Response",
      mainHeadline: "They respond with their voice",
      mainDescription: "Voice removes all the usual barriers, so more people reply, and they share deeper, more honest thoughts.",
      headline: "Everyone has a voice",
      body: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p className="font-bold text-slate-900">Anyone can do this — older customers, people who find typing hard, or who speak different languages.</p>
          <p>By removing the friction of a keyboard, we unlock insights that traditional surveys miss.</p>
          <p>The result is 10x more qualitative data that captures the emotion behind the feedback.</p>
        </div>
      )
    },
    {
      id: "03",
      visual: <Step03Visual />,
      bgColor: "bg-slate-50",
      mainTitle: "Instant Analysis",
      mainHeadline: "Our AI listens and understands",
      mainDescription: "We automatically turn thousands of voice responses into a clear report — spotting the main themes and root causes.",
      headline: "AI-Powered Strategy",
      body: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p className="font-bold text-slate-900">You don’t have to listen to recordings or analyse spreadsheets. We do the heavy work.</p>
          <p>Our AI identifies what needs to be fixed first, prioritizing issues by revenue impact.</p>
          <p>Get a board-ready report in days, not weeks.</p>
        </div>
      )
    },
    {
      id: "04",
      visual: <Step04Visual />,
      bgColor: "bg-white",
      mainTitle: "Strategic Results",
      mainHeadline: "Act fast and build trust",
      mainDescription: "When customers see you’ve listened and made changes, they stay longer — turning feedback into loyalty.",
      headline: "Closing the loop",
      body: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p className="font-bold text-slate-900">With clear next steps, you can fix real issues quickly.</p>
          <p>Communication is key: show your customers the "Why" behind your updates to build long-term trust.</p>
          <p>This virtuous cycle transforms feedback from a cost center into your biggest growth lever.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FF] font-sans text-slate-950 antialiased selection:bg-indigo-100 overflow-x-hidden">
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

      {/* Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">Q</div>
            <span className="text-2xl font-black tracking-tighter">QuickChat<span className="text-indigo-600">.</span></span>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <button onClick={() => scrollTo('how-it-works')} className="hidden md:block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition">How it works</button>
            <button onClick={() => scrollTo('pilots')} className="group bg-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-200 flex items-center gap-2 text-sm">
              Book Pilot <Heart size={16} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen pt-48 pb-20 px-6 overflow-hidden hero-mesh flex items-center">
        <div className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col items-center text-center animate-fadeIn">
            {/* Header Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
               <div className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600">
                  <Shield size={12} className="text-indigo-600" /> GDPR COMPLIANT
               </div>
               <div className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600">
                  <Lock size={12} className="text-indigo-600" /> SOC2 TYPE II
               </div>
               <div className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600">
                  <Accessibility size={12} className="text-indigo-600" /> WCAG 2.1
               </div>
            </div>

            <h1 className="text-6xl md:text-[110px] font-black leading-[0.85] mb-12 tracking-tighter text-slate-950">
              The power of <br/>
              <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-[12px]">voice.</span> <br/>
              The speed <br/>
              of <span className="text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-[12px]">AI.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 mb-6 max-w-4xl font-medium leading-relaxed">
              We are building a new kind of survey tool. Enabling you to <span className="text-slate-900 font-bold underline decoration-indigo-100 decoration-4 underline-offset-4">understand customer churn, act fast, and increase revenue.</span>
            </p>
            <div className="mt-12">
               <button onClick={() => scrollTo('how-it-works')} className="group flex items-center gap-3 text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] hover:text-indigo-600 transition-colors">
                  See how it works <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 md:py-48 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-24 md:mb-40">
            <div className="px-6 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-8 border border-indigo-100">
              The Journey
            </div>
            <h2 className="text-5xl md:text-[100px] font-black tracking-tighter leading-none text-slate-950 mb-8">
              How it Works<span className="text-indigo-600 italic">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
            {walkthroughData.map((step) => (
              <div key={step.id} className={`flex flex-col gap-10 group ${step.id === '02' || step.id === '04' ? 'lg:mt-16' : ''}`}>
                <PhoneFrame bgColor={step.bgColor}>
                  {step.visual}
                </PhoneFrame>
                <div className="px-4">
                  <div className={`w-12 h-12 ${step.id === '01' ? 'bg-indigo-600' : step.id === '02' ? 'bg-blue-600' : step.id === '03' ? 'bg-violet-600' : 'bg-slate-800'} text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl font-black`}>
                    {step.id}
                  </div>
                  <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tight uppercase leading-[0.9]">
                    {step.mainTitle}
                  </h3>
                  <p className="text-slate-900 font-bold mb-3">{step.mainHeadline}</p>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed">
                    {step.mainDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 flex justify-center">
             <button 
               onClick={() => setShowModal(true)}
               className="group flex items-center gap-4 bg-slate-950 text-white px-8 md:px-12 py-4 md:py-6 rounded-3xl font-black text-lg md:text-xl hover:bg-indigo-600 transition-all shadow-2xl hover:scale-105 active:scale-95"
             >
                Read Detailed Guide <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setShowModal(false)}></div>
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-100 shrink-0">
               <div>
                 <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">How it Works</h2>
                 <p className="text-slate-500 font-medium hidden md:block">A step-by-step look at the customer journey.</p>
               </div>
               <button onClick={() => setShowModal(false)} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-950 hover:bg-red-50 hover:text-red-600 transition-colors">
                 <X size={24} />
               </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 md:p-12 custom-scrollbar">
               <div className="space-y-24 md:space-y-32 mb-20">
                 {walkthroughData.map((step) => (
                   <div key={step.id} className={`flex flex-col ${parseInt(step.id) % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                      <div className="shrink-0 scale-75 md:scale-90 lg:scale-100">
                        <PhoneFrame bgColor={step.bgColor}>{step.visual}</PhoneFrame>
                      </div>
                      <div className="flex-1 space-y-4 md:space-y-6">
                        <div className="flex items-center gap-4">
                           <span className="text-4xl md:text-6xl font-black text-indigo-600/20">{step.id}</span>
                           <div className="h-px flex-1 bg-slate-100"></div>
                        </div>
                        <h4 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-none">{step.mainHeadline}</h4>
                        <p className="text-xl md:text-2xl text-indigo-600 font-bold italic leading-tight">{step.mainDescription}</p>
                        <div className="text-base md:text-xl text-slate-600">{step.body}</div>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      )}

      {/* BYOD Section */}
      <section id="byod" className="py-24 md:py-48 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="text-white">
               <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black tracking-widest uppercase mb-8 border border-white/20">
                  <CloudUpload size={14} /> Zero Friction Start
               </div>
               <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.9]">
                  Bring Your Own Data <br/>
                  <span className="text-indigo-400 font-light italic">– No Risk Start.</span>
               </h2>
               <p className="text-xl md:text-2xl text-slate-400 mb-12 font-medium italic">Already have feedback sitting in a spreadsheet?</p>
               <ul className="space-y-6">
                 {[
                   "Upload an anonymized CSV — report in days.",
                   "You control everything: pick columns, anonymize info.",
                   "Perfect low-risk test — try with historical data.",
                 ].map((text, i) => (
                   <li key={i} className="flex gap-4 items-start group">
                     <div className="mt-1.5 shrink-0 w-6 h-6 rounded-full bg-indigo-600/20 flex items-center justify-center border border-indigo-500/30">
                        <ArrowRight size={12} className="text-indigo-400" />
                     </div>
                     <span className="text-lg md:text-xl text-slate-300 font-medium">{text}</span>
                   </li>
                 ))}
               </ul>
            </div>
            <div className="relative p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[4rem] backdrop-blur-xl">
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
                     <FileText className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-black uppercase text-xs tracking-widest">Pilot Portal</div>
                    <div className="text-slate-400 text-sm">Secure Data Sync</div>
                  </div>
               </div>
               <div className="border-2 border-dashed border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center">
                  <HardDriveUpload size={48} className="text-indigo-400 mb-6 opacity-50" />
                  <div className="text-white font-black text-xl mb-2">Drop your CSV here</div>
                  <div className="text-slate-500 text-sm">GDPR Secure Upload</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Success / Case Study */}
      <section className="py-24 md:py-48 px-6 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-indigo-100">
               <Zap size={12} className="fill-indigo-600" /> Success Story
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 leading-[0.9]">
              QuickChat Recovered <br/>
              <span className="text-indigo-600 italic">€900K Revenue.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="bg-white p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] shadow-2xl border border-slate-100">
              <div className="mb-10 text-indigo-600 italic font-black text-6xl opacity-10">“</div>
              <p className="text-2xl md:text-4xl font-bold text-slate-950 leading-tight mb-12 italic">
                "You've given me a step-by-step guide to reduce churn. We went from guessing to knowing exactly which button to press."
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-white font-black">CK</div>
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
                <div key={i} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                  <div className="text-4xl md:text-5xl font-black text-indigo-600 mb-4">{stat.val}</div>
                  <div className="text-slate-900 font-black tracking-widest mb-3 uppercase text-[10px]">{stat.label}</div>
                  <p className="text-slate-500 text-sm font-medium">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-48 px-6 bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="px-6 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-8 inline-block border border-indigo-100">
              Information
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-slate-950">
              Questions & <br/>
              <span className="text-indigo-600 italic">Answers.</span>
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            <FAQItem 
              question="Is this another survey tool?"
              answer="No — it's a completely new approach."
              subAnswer="Traditional surveys have low response rates and shallow answers. QuickChat uses short, natural voice conversations to capture 10× richer feedback — with higher completion and real human truth."
            />
            <FAQItem 
              question="How is it accessible and inclusive?"
              answer="Designed for everyone from day one."
              subAnswer="Voice removes typing barriers, it's multilingual, and fully WCAG-compliant — so older customers, neurodiverse users, and non-native speakers can respond easily and naturally."
            />
            <FAQItem 
              question="Do I need to analyze the data myself?"
              answer="No manual work needed."
              subAnswer="Our AI automatically turns raw voice feedback into clear themes, root causes, and prioritized next steps — delivered in days."
            />
            <FAQItem 
              question="What about privacy and compliance?"
              answer="Built with trust in mind."
              subAnswer="GDPR-compliant, NDA-protected for pilots, and we use anonymized data only. Your customers' privacy is never compromised."
            />
            <FAQItem 
              question="Can I use my existing data?"
              answer="Yes — many pilots start here."
              subAnswer="Upload old surveys or feedback (anonymized CSV). We’ll show you the hidden insights already sitting in your files — low-risk way to test the value."
            />
            <FAQItem 
              question="We're still early — is it ready for us?"
              answer="We're in focused pilots and co-creating with partners like you."
              subAnswer="Your feedback directly shapes the product. If you're open to testing and helping build something better, this is the perfect time to join."
            />
          </div>
        </div>
      </section>

      {/* Footer / Pilots */}
      <section id="pilots" className="py-32 md:py-48 px-6 text-center bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tight leading-none text-slate-950">
            Fix your churn problem.
          </h2>
          <div className="flex flex-col items-center gap-12">
            <button className="bg-indigo-600 text-white px-10 md:px-16 py-6 md:py-8 rounded-[2rem] text-2xl md:text-3xl font-black hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-200">
              Book Pilot Call
            </button>
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2"><Shield size={14}/> GDPR COMPLIANT</span>
              <span className="flex items-center gap-2"><Lock size={14}/> SOC2 TYPE II</span>
              <span className="flex items-center gap-2"><Globe size={14}/> GLOBAL VOICE</span>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center text-white font-bold text-sm">Q</div>
               <span className="text-lg font-black tracking-tighter">QuickChat<span className="text-indigo-600">.</span></span>
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">© 2026 QuickChat AI Inc. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}