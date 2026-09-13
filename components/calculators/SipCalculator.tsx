'use client';

import React, { useState, useMemo } from 'react';
import { TrendingUp, DollarSign, Calendar, Percent, ShieldCheck } from 'lucide-react';

interface SipCalculatorProps {
  compact?: boolean;
}

export default function SipCalculator({ compact = false }: SipCalculatorProps) {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [durationYears, setDurationYears] = useState<number>(15);

  const calculations = useMemo(() => {
    const P = monthlyInvestment;
    const i = expectedReturn / 12 / 100;
    const n = durationYears * 12;

    const investedAmount = P * n;
    // SIP Future Value formula: P * [((1 + i)^n - 1) / i] * (1 + i)
    let totalValue = 0;
    if (i > 0) {
      totalValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    } else {
      totalValue = investedAmount;
    }
    const estimatedReturns = Math.max(0, totalValue - investedAmount);

    const investedPercentage = totalValue > 0 ? (investedAmount / totalValue) * 100 : 50;
    const returnsPercentage = 100 - investedPercentage;

    return {
      investedAmount: Math.round(investedAmount),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(totalValue),
      investedPercentage: Math.round(investedPercentage),
      returnsPercentage: Math.round(returnsPercentage),
    };
  }, [monthlyInvestment, expectedReturn, durationYears]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val).replace('INR', '₹');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 lg:p-8">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            Systematic Investment Plan (SIP) Calculator
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Calculate how recurring monthly investments compound exponentially over time.
          </p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5" /> Compound Engine
        </span>
      </div>

      <div className={`grid grid-cols-1 ${compact ? 'gap-6' : 'lg:grid-cols-12 gap-8'}`}>
        {/* Controls Column */}
        <div className={compact ? 'space-y-5' : 'lg:col-span-7 space-y-6'}>
          {/* Monthly Investment */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                Monthly Investment
              </label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 font-bold text-slate-900 text-sm">
                <span>₹</span>
                <input
                  type="number"
                  min="500"
                  max="500000"
                  step="500"
                  value={monthlyInvestment}
                  onChange={e => setMonthlyInvestment(Math.max(0, Number(e.target.value)))}
                  className="w-24 text-right bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={monthlyInvestment}
              onChange={e => setMonthlyInvestment(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>₹500</span>
              <span>₹25,000</span>
              <span>₹50,000</span>
              <span>₹1,00,000</span>
            </div>
          </div>

          {/* Expected Return Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Percent className="w-4 h-4 text-blue-600" />
                Expected Annual Return (p.a.)
              </label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 font-bold text-slate-900 text-sm">
                <input
                  type="number"
                  min="1"
                  max="30"
                  step="0.5"
                  value={expectedReturn}
                  onChange={e => setExpectedReturn(Math.max(1, Math.min(30, Number(e.target.value))))}
                  className="w-14 text-right bg-transparent focus:outline-none"
                />
                <span className="ml-1 text-slate-500">%</span>
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="25"
              step="0.5"
              value={expectedReturn}
              onChange={e => setExpectedReturn(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>1% (Debt/Liquid)</span>
              <span>12% (Nifty/S&P Index)</span>
              <span>15% (Midcap)</span>
              <span>25%</span>
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-purple-600" />
                Time Horizon
              </label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 font-bold text-slate-900 text-sm">
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={durationYears}
                  onChange={e => setDurationYears(Math.max(1, Math.min(40, Number(e.target.value))))}
                  className="w-12 text-right bg-transparent focus:outline-none"
                />
                <span className="ml-1 text-slate-500">Yr</span>
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="35"
              step="1"
              value={durationYears}
              onChange={e => setDurationYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>1 Yr</span>
              <span>10 Yrs</span>
              <span>20 Yrs</span>
              <span>35 Yrs</span>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className={compact ? 'mt-4' : 'lg:col-span-5'}>
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                Expected Wealth Value
              </span>
              <div className="text-3xl font-extrabold text-white mt-1 tracking-tight">
                {formatCurrency(calculations.totalValue)}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                At {expectedReturn}% over {durationYears} years ({durationYears * 12} instalments)
              </p>
            </div>

            {/* Split Metrics */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-slate-700/60">
              <div className="space-y-0.5">
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" />
                  Invested Amount
                </span>
                <p className="text-sm font-bold text-slate-200">
                  {formatCurrency(calculations.investedAmount)}
                </p>
                <span className="text-[10px] text-slate-500 font-mono">
                  {calculations.investedPercentage}% of total
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Estimated Gain
                </span>
                <p className="text-sm font-bold text-emerald-400">
                  +{formatCurrency(calculations.estimatedReturns)}
                </p>
                <span className="text-[10px] text-emerald-500/80 font-mono">
                  {calculations.returnsPercentage}% from compounding
                </span>
              </div>
            </div>

            {/* Visual Proportion Bar */}
            <div className="space-y-1.5">
              <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden flex">
                <div
                  className="bg-slate-400 h-full transition-all duration-300"
                  style={{ width: `${calculations.investedPercentage}%` }}
                  title={`Invested: ${calculations.investedPercentage}%`}
                />
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${calculations.returnsPercentage}%` }}
                  title={`Returns: ${calculations.returnsPercentage}%`}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Principal ({calculations.investedPercentage}%)</span>
                <span className="text-emerald-400 font-semibold">Wealth Gain ({calculations.returnsPercentage}%)</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 bg-slate-800/80 p-3 rounded-xl border border-slate-700/50">
              💡 <strong>Power of Compounding:</strong> Your money multiplied by{' '}
              <span className="text-emerald-400 font-bold">
                {(calculations.totalValue / (calculations.investedAmount || 1)).toFixed(1)}x
              </span>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
