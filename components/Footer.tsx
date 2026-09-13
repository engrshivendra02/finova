import React from 'react';
import Link from 'next/link';
import { TrendingUp, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';
import FinancialDisclaimer from './FinancialDisclaimer';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <TrendingUp className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white flex items-center">
                FINOVA<span className="text-emerald-400 text-3xl leading-none">.</span>
              </span>
            </Link>
            <p className="text-sm text-emerald-400 font-semibold tracking-wide">
              &quot;Learn Money. Build Wealth. Master Your Future.&quot;
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering students, beginners, and young professionals with structured, jargon-free financial education, working financial tools, interactive quizzes, and real-world wealth literacy.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Free Open Education
              </span>
            </div>
          </div>

          {/* Col 1: Learning & Courses */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Education</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/courses" className="hover:text-emerald-400 transition flex items-center gap-1">
                  All Courses <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-emerald-400 transition">
                  Learning Hub Articles
                </Link>
              </li>
              <li>
                <Link href="/market" className="hover:text-emerald-400 transition">
                  Stock Market Basics
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="hover:text-emerald-400 transition">
                  A-Z Financial Glossary
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-emerald-400 transition">
                  Community Discussions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Financial Calculators */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Financial Tools</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/tools/sip" className="hover:text-emerald-400 transition">
                  SIP Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/emi" className="hover:text-emerald-400 transition">
                  Loan EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/compound-interest" className="hover:text-emerald-400 transition">
                  Compound Interest Tool
                </Link>
              </li>
              <li>
                <Link href="/tools/budget" className="hover:text-emerald-400 transition">
                  50/30/20 Budget Planner
                </Link>
              </li>
              <li>
                <Link href="/tools/net-worth" className="hover:text-emerald-400 transition">
                  Net Worth Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company & Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  About Finova
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-emerald-400 transition">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-emerald-400 transition text-slate-500 hover:text-purple-400">
                  Admin Console
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Card */}
        <div className="my-8">
          <FinancialDisclaimer />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-4">
          <p>© {new Date().getFullYear()} Finova Inc. All rights reserved. Building a financially literate generation.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400 transition">About</Link>
            <Link href="/contact" className="hover:text-slate-400 transition">Contact</Link>
            <Link href="/glossary" className="hover:text-slate-400 transition">Glossary</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
