"use client";

import React, { useState } from 'react';
import {
  Upload, FileText, BarChart3, MessageSquare, Sparkles, 
  ArrowRight, Clock, CheckCircle2, TrendingUp, Zap,
  Database, Brain, Target, Users
} from 'lucide-react';

const DashboardHome = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-extrabold text-white">
                QuickChat<span className="text-lime-400">.</span>
              </h1>
              <span className="px-3 py-1 bg-lime-400/10 text-lime-400 text-xs font-bold rounded-full border border-lime-400/20">
                BETA
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-slate-400 hover:text-white text-sm font-medium transition">
                Docs
              </button>
              <button className="text-slate-400 hover:text-white text-sm font-medium transition">
                Support
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                D
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-3">
            Welcome back, Damien
          </h2>
          <p className="text-slate-400 text-lg">
            Transform your feedback data into strategic insights in minutes.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={<Database className="w-5 h-5" />}
            label="Total Reports"
            value="12"
            change="+3 this week"
            trend="up"
          />
          <StatCard
            icon={<Users className="w-5 h-5" />}
            label="Responses Analyzed"
            value="4.2K"
            change="+847 this month"
            trend="up"
          />
          <StatCard
            icon={<Brain className="w-5 h-5" />}
            label="AI Credits"
            value="2,450"
            change="750 used"
            trend="neutral"
          />
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            label="Avg Response Rate"
            value="34%"
            change="+8% vs industry"
            trend="up"
          />
        </div>

        {/* Main Actions - HERO CARDS */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Start Analyzing</h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            
            {/* Upload Data Card */}
            <ActionCard
              title="Upload Your Data"
              description="Import CSV from Qualtrics, SurveyMonkey, or any survey tool. We'll handle the rest."
              icon={<Upload className="w-8 h-8" />}
              accentColor="lime"
              href="https://video-coach-git-dbcreation-damiens-projects-f3b57a53.vercel.app/test-upload.html"
              features={[
                "Automatic column detection",
                "AI-powered clustering",
                "Multi-format support"
              ]}
              badge="Most Popular"
              isHovered={hoveredCard === 'upload'}
              onHover={() => setHoveredCard('upload')}
              onLeave={() => setHoveredCard(null)}
            />

            {/* View Reports Card */}
            <ActionCard
              title="View Reports"
              description="Access your analyzed reports with strategic insights, themes, and recommended actions."
              icon={<FileText className="w-8 h-8" />}
              accentColor="blue"
              href="/reports"
              features={[
                "Executive summaries",
                "Actionable insights",
                "Export to PDF"
              ]}
              isHovered={hoveredCard === 'reports'}
              onHover={() => setHoveredCard('reports')}
              onLeave={() => setHoveredCard(null)}
            />

          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Advanced Tools</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Chat with Data"
              description="Ask questions about your reports using natural language"
              href="/chat"
              badge="NEW"
            />

            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Trend Analysis"
              description="Track changes over time across multiple reports"
              href="/trends"
              badge="BETA"
            />

            <FeatureCard
              icon={<Sparkles className="w-6 h-6" />}
              title="AI Recommendations"
              description="Get personalized action plans based on your data"
              href="/recommendations"
              badge="PRO"
            />

          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Recent Activity</h3>
            <button className="text-lime-400 text-sm font-semibold hover:text-lime-300 transition flex items-center">
              View all <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="space-y-4">
            <ActivityItem
              icon={<CheckCircle2 className="w-5 h-5 text-lime-400" />}
              title="Report generated: Employee Satisfaction Q4"
              time="2 hours ago"
              status="completed"
            />
            <ActivityItem
              icon={<Clock className="w-5 h-5 text-yellow-400" />}
              title="Processing: Customer Churn Analysis"
              time="5 hours ago"
              status="processing"
            />
            <ActivityItem
              icon={<CheckCircle2 className="w-5 h-5 text-lime-400" />}
              title="CSV uploaded: feedback_dec_2025.csv"
              time="Yesterday"
              status="completed"
            />
          </div>
        </div>

      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-lime-400 hover:bg-lime-300 rounded-full shadow-2xl flex items-center justify-center transition transform hover:scale-110 group">
        <Zap className="w-7 h-7 text-slate-900 group-hover:rotate-12 transition" />
      </button>

    </div>
  );
};

// --- Reusable Components ---

const StatCard = ({ icon, label, value, change, trend }) => (
  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition">
    <div className="flex items-center justify-between mb-4">
      <div className="text-slate-400">{icon}</div>
      <span className={`text-xs font-bold ${
        trend === 'up' ? 'text-lime-400' : 
        trend === 'down' ? 'text-red-400' : 
        'text-slate-500'
      }`}>
        {change}
      </span>
    </div>
    <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
    <div className="text-sm text-slate-400">{label}</div>
  </div>
);

const ActionCard = ({ 
  title, 
  description, 
  icon, 
  accentColor, 
  href, 
  features, 
  badge,
  isHovered,
  onHover,
  onLeave
}) => {
  const colorClasses = {
    lime: {
      border: 'border-lime-500/50',
      bg: 'bg-lime-400/10',
      text: 'text-lime-400',
      shadow: 'shadow-lime-500/20',
      button: 'bg-lime-400 hover:bg-lime-300 text-slate-900'
    },
    blue: {
      border: 'border-blue-500/50',
      bg: 'bg-blue-400/10',
      text: 'text-blue-400',
      shadow: 'shadow-blue-500/20',
      button: 'bg-blue-500 hover:bg-blue-400 text-white'
    }
  };

  const colors = colorClasses[accentColor];

  return (
    <div 
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative bg-slate-900/50 border-2 rounded-2xl p-8 transition-all duration-300 ${
        isHovered 
          ? `${colors.border} ${colors.shadow} shadow-2xl transform scale-[1.02]` 
          : 'border-slate-800'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 -right-3">
          <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-xs font-bold rounded-full border ${colors.border}`}>
            {badge}
          </span>
        </div>
      )}

      {/* Icon */}
      <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 ${colors.text}`}>
        {icon}
      </div>

      {/* Content */}
      <h4 className="text-2xl font-bold text-white mb-3">{title}</h4>
      <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-slate-300">
            <CheckCircle2 className={`w-4 h-4 mr-2 ${colors.text}`} />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href={href}
        className={`block w-full py-4 rounded-xl font-bold text-center transition transform hover:scale-[1.02] ${colors.button}`}
      >
        Get Started <ArrowRight className="w-5 h-5 inline ml-2" />
      </a>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, href, badge }) => (
  <a
    href={href}
    className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-lime-500/50 transition-all hover:shadow-xl hover:shadow-lime-500/10"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-lime-400 transition">
        {icon}
      </div>
      {badge && (
        <span className="px-2 py-1 bg-lime-400/10 text-lime-400 text-xs font-bold rounded border border-lime-400/20">
          {badge}
        </span>
      )}
    </div>
    
    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-lime-400 transition">
      {title}
    </h4>
    <p className="text-sm text-slate-400 leading-relaxed">
      {description}
    </p>

    <div className="mt-4 flex items-center text-lime-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
      Launch <ArrowRight className="w-4 h-4 ml-1" />
    </div>
  </a>
);

const ActivityItem = ({ icon, title, time, status }) => (
  <div className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
    <div className="flex-shrink-0 mt-0.5">{icon}</div>
    <div className="flex-1 min-w-0">
      <p className="text-white font-medium">{title}</p>
      <p className="text-sm text-slate-400 mt-1">{time}</p>
    </div>
    <div>
      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
        status === 'completed' 
          ? 'bg-lime-400/10 text-lime-400 border border-lime-400/20' 
          : 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20'
      }`}>
        {status === 'completed' ? 'Done' : 'Processing'}
      </span>
    </div>
  </div>
);

export default DashboardHome;
