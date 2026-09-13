import React from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  ShieldCheck, 
  GraduationCap, 
  Users, 
  Heart, 
  Award,
  ArrowRight
} from 'lucide-react';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Hero */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
          <span>Our Academic Literacy Mission</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Democratizing Financial Freedom for Everyone.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Finova was founded with a singular, unapologetic conviction: foundational financial education should be free, accessible, practical, and devoid of toxic Wall Street jargon.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            01
          </div>
          <h3 className="text-base font-bold text-slate-900">Zero Upsells or Secret Paywalls</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Unlike commercial courses designed to sell expensive options trading rooms or shady crypto tokens, Finova provides open, peer-reviewed financial curriculum.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
            02
          </div>
          <h3 className="text-base font-bold text-slate-900">Practical & Math-First</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            We don’t believe in vague inspirational slogans. We teach real compound mathematics, tax formulas, and provide interactive tools you can use immediately.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
            03
          </div>
          <h3 className="text-base font-bold text-slate-900">Psychology Over Timing</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Over 90% of financial success is behavioral discipline: automating savings, resisting lifestyle inflation, and ignoring market noise during cyclical pullbacks.
          </p>
        </div>
      </div>

      {/* Leadership & Faculty */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900">Academic Advisory Board</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
              alt="Aditi Sharma"
              className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-slate-200"
            />
            <h4 className="text-sm font-bold text-slate-900">Aditi Sharma, CFA</h4>
            <p className="text-xs text-emerald-600 font-semibold">Head of Curriculum</p>
            <p className="text-[11px] text-slate-500">Former wealth manager dedicated to student financial empowerment.</p>
          </div>

          <div className="space-y-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
              alt="Vikram Sengupta"
              className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-slate-200"
            />
            <h4 className="text-sm font-bold text-slate-900">Vikram Sengupta</h4>
            <p className="text-xs text-blue-600 font-semibold">Equity Strategist</p>
            <p className="text-[11px] text-slate-500">15+ years evaluating Asian equity markets and institutional portfolios.</p>
          </div>

          <div className="space-y-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
              alt="Maya Varma"
              className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-slate-200"
            />
            <h4 className="text-sm font-bold text-slate-900">Maya Varma</h4>
            <p className="text-xs text-purple-600 font-semibold">Behavioral Finance</p>
            <p className="text-[11px] text-slate-500">Specializes in household budget automation and spending habits.</p>
          </div>
        </div>
      </div>

      <FinancialDisclaimer />
    </div>
  );
}
