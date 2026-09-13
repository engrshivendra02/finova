'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart2, 
  Building2, 
  ShieldCheck, 
  Zap, 
  DollarSign, 
  Scale, 
  Activity,
  PieChart,
  ArrowRight,
  Info
} from 'lucide-react';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export default function MarketEducationPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'exchanges' | 'indices' | 'valuation'>('all');

  const concepts = [
    {
      id: 'stock-market',
      title: 'The Stock Market',
      category: 'exchanges',
      icon: TrendingUp,
      headline: 'The engine of commercial capital formation',
      explanation: 'The stock market is an organized, regulated electronic network where shares of publicly held companies are issued, bought, and sold. It bridges companies needing expansion capital with public investors seeking to participate in economic profit growth.',
      takeaway: 'Investing in the broad stock market allows your net worth to compound in tandem with national corporate GDP growth.'
    },
    {
      id: 'nse',
      title: 'NSE (National Stock Exchange)',
      category: 'exchanges',
      icon: Building2,
      headline: 'India’s largest electronic financial exchange',
      explanation: 'Established in 1992 in Mumbai, the National Stock Exchange introduced modern electronic screen-based trading to India. It is one of the world’s largest derivatives and equity exchanges by transaction volume.',
      takeaway: 'Home of the flagship benchmark index, the Nifty 50.'
    },
    {
      id: 'bse',
      title: 'BSE (Bombay Stock Exchange)',
      category: 'exchanges',
      icon: Building2,
      headline: 'Asia’s oldest stock exchange, founded in 1875',
      explanation: 'Located on Dalal Street in Mumbai, the BSE is Asia’s very first stock exchange. Over 5,000 companies are listed on the BSE, providing unmatched historical depth and capitalization.',
      takeaway: 'Home of the premier 30-stock benchmark index, the S&P BSE Sensex.'
    },
    {
      id: 'nifty',
      title: 'Nifty 50 Index',
      category: 'indices',
      icon: BarChart2,
      headline: 'The barometer of the Indian corporate economy',
      explanation: 'The Nifty 50 is a diversified index of 50 of the largest and most liquid Indian companies across 13 economic sectors (banking, IT, energy, consumer goods, pharmaceuticals). It accounts for roughly 65% of the total free-float market cap on the NSE.',
      takeaway: 'When financial commentators say "the Indian market rose 1% today", they almost always refer to the Nifty 50.'
    },
    {
      id: 'sensex',
      title: 'BSE Sensex (Sensitive Index)',
      category: 'indices',
      icon: BarChart2,
      headline: '30 financially sound, bellwether blue-chip companies',
      explanation: 'Launched in 1986 with a base year of 1978-79 (base value 100), the Sensex tracks 30 prominent, large-cap, established companies listed on the BSE. It is calculated using a free-float market capitalization methodology.',
      takeaway: 'A historic benchmark measuring Indian corporate resilience across 4+ decades.'
    },
    {
      id: 'ipo',
      title: 'Initial Public Offering (IPO)',
      category: 'exchanges',
      icon: Zap,
      headline: 'When private startups enter the public exchange',
      explanation: 'An IPO is the process where a private company sells newly issued or existing shares to the public for the first time. The company raises expansion capital, and early founders/venture capitalists gain public liquidity.',
      takeaway: 'Evaluate underlying prospectus cash flows and valuations, not just listing day media hype.'
    },
    {
      id: 'bull-market',
      title: 'Bull Market',
      category: 'market-cycles',
      icon: TrendingUp,
      headline: 'Sustained economic optimism & rising equity valuations',
      explanation: 'A bull market is characterized by sustained investor confidence, growing corporate earnings, high employment, and rising asset prices (typically a 20%+ rally from prior cyclical troughs).',
      takeaway: 'Bull markets reward systematic accumulators, but can lead to overvaluation bubbles if fundamentals decouple.'
    },
    {
      id: 'bear-market',
      title: 'Bear Market',
      category: 'market-cycles',
      icon: TrendingDown,
      headline: '20%+ declines accompanied by pessimism and recessionary fears',
      explanation: 'A bear market is formally recognized when a major index declines 20% or more from its all-time high. Typically triggered by recessions, rising interest rates, inflation spikes, or geopolitical crises.',
      takeaway: 'Bear markets are historically the greatest wealth generation windows for patient, cashflow-positive investors.'
    },
    {
      id: 'market-cap',
      title: 'Market Capitalization',
      category: 'valuation',
      icon: PieChart,
      headline: 'Total market dollar value of a company’s shares',
      explanation: 'Market Cap = Current Share Price × Total Outstanding Shares. Categorized into Large Cap (stable blue-chips > ₹50,000 Cr / $10B), Mid Cap (growing challengers), and Small Cap (high-volatility, early-stage enterprises).',
      takeaway: 'Never assume a stock is cheap just because its share price is ₹20 vs ₹2,000; check its total Market Cap!'
    },
    {
      id: 'pe-ratio',
      title: 'Price-to-Earnings (P/E) Ratio',
      category: 'valuation',
      icon: Scale,
      headline: 'How much you are paying for every ₹1 of profit',
      explanation: 'P/E Ratio = Stock Price / Earnings Per Share (EPS). A P/E of 25 means investors pay ₹25 for every ₹1 of annual profit. Compare against industry peers and historical 10-year medians.',
      takeaway: 'High P/E reflects steep growth expectations; low P/E can signal an undervalued bargain or a dying value trap.'
    },
    {
      id: 'dividend',
      title: 'Dividends & Dividend Yield',
      category: 'valuation',
      icon: DollarSign,
      headline: 'Cash profits distributed directly back to shareholders',
      explanation: 'When mature companies generate excess free cash flow beyond what they can reinvest in business expansion, boards declare regular cash dividends. Dividend Yield = Annual Dividend per Share / Stock Price.',
      takeaway: 'Dividends provide passive income and protect downside during turbulent market environments.'
    },
    {
      id: 'volatility',
      title: 'Market Volatility',
      category: 'market-cycles',
      icon: Activity,
      headline: 'The rate and magnitude of price fluctuations',
      explanation: 'Volatility measures how rapidly and dramatically asset prices swing over time. Often measured by the Volatility Index (VIX). High volatility implies high uncertainty, while low volatility implies stability.',
      takeaway: 'Volatility is not risk; permanent loss of capital is risk. Volatility is the price of admission for inflation-beating equity returns.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
          <TrendingUp className="w-4 h-4" /> Market Architecture Decoded
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Stock Market Education & Concepts
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          Master how modern capital markets function: from premier exchanges (NSE, BSE) and benchmark indices (Sensex, Nifty) to valuation multiples (P/E ratio, Market Cap) and market psychology.
        </p>
      </div>

      {/* Grid of Concept Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concepts.map(item => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-lg hover:border-emerald-200 transition-all duration-200 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">{item.headline}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.explanation}
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-0.5 mt-2">
                <span className="font-bold text-slate-900">Key Insight:</span>
                <p className="text-slate-600 leading-relaxed">{item.takeaway}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mandatory Regulatory Educational Disclaimer */}
      <FinancialDisclaimer />
    </div>
  );
}
