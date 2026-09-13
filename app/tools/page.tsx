import React from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  Calculator, 
  PieChart, 
  Landmark, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export default function ToolsHubPage() {
  const tools = [
    {
      title: 'SIP Calculator',
      slug: 'sip',
      icon: TrendingUp,
      color: 'emerald',
      tagline: 'Model Systematic Investment Compounding',
      description: 'Calculate how small, disciplined monthly mutual fund contributions snowball into multi-million dollar portfolios through compound growth and rupee/dollar-cost averaging.',
      stats: 'Supports up to 40-year projections with dynamic asset returns.'
    },
    {
      title: 'Loan EMI Calculator',
      slug: 'emi',
      icon: Calculator,
      color: 'blue',
      tagline: 'Mortgage, Car & Personal Loan Outflow',
      description: 'Accurately compute your monthly equated instalments, total interest payable, and amortization distribution across loan tenures from 1 to 30 years.',
      stats: 'Real-time principal vs interest ratio analysis.'
    },
    {
      title: 'Compound Interest Calculator',
      slug: 'compound-interest',
      icon: Sparkles,
      color: 'purple',
      tagline: 'Annual, Quarterly & Monthly Compounding',
      description: 'Explore the exponential mathematics of compound interest with optional recurring deposits, and visualize the compounding premium over simple linear interest.',
      stats: 'Custom compounding frequencies with multiplier comparisons.'
    },
    {
      title: '50/30/20 Budget Planner',
      slug: 'budget',
      icon: PieChart,
      color: 'teal',
      tagline: 'Needs, Wants & Savings Optimization',
      description: 'Audit your monthly take-home paycheck against the legendary 50% Needs, 30% Wants, and 20% Savings framework with real-time financial health diagnostic alerts.',
      stats: 'Actionable feedback to stop cashflow leaks.'
    },
    {
      title: 'Net Worth Calculator',
      slug: 'net-worth',
      icon: Landmark,
      color: 'indigo',
      tagline: 'Assets vs Liabilities Scorecard',
      description: 'Audit your total personal balance sheet by aggregating liquid cash, real estate, equities, and retirement assets against debts, mortgages, and credit balances.',
      stats: 'Computes overall solvency and debt-to-asset safety ratio.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <Calculator className="w-4 h-4" /> Financial Decision Engines
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Interactive Financial Calculators
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Eliminate financial guesswork. Our client-side calculators execute accurate financial formulas to help you plan investments, manage loan liabilities, and structure your budget.
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(tool => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.slug}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-xl hover:border-emerald-200 transition-all duration-200 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {tool.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">{tool.title}</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400">
                  {tool.stats}
                </span>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="px-4 py-2 bg-slate-900 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-xs"
                >
                  Open Tool <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <FinancialDisclaimer />
    </div>
  );
}
