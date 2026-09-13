'use client';

import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowRight, Percent, Calendar } from 'lucide-react';

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<number>(100000);
  const [rate, setRate] = useState<number>(10);
  const [years, setYears] = useState<number>(10);
  const [frequency, setFrequency] = useState<number>(12); // monthly
  const [monthlyContribution, setMonthlyContribution] = useState<number>(2000);

  const stats = useMemo(() => {
    const P = principal;
    const r = rate / 100;
    const t = years;
    const n = frequency;
    const PMT = monthlyContribution;

    // Compound on principal: P * (1 + r/n)^(n*t)
    const futurePrincipal = P * Math.pow(1 + r / n, n * t);

    // Future value of series: PMT * [((1 + r/12)^(12*t) - 1) / (r/12)] * (1 + r/12)
    let futureSeries = 0;
    const totalContributedSeries = PMT * 12 * t;
    if (r > 0) {
      const i = r / 12;
      futureSeries = PMT * ((Math.pow(1 + i, 12 * t) - 1) / i) * (1 + i);
    } else {
      futureSeries = totalContributedSeries;
    }

    const totalInvested = P + totalContributedSeries;
    const futureValue = futurePrincipal + futureSeries;
    const totalCompoundInterest = Math.max(0, futureValue - totalInvested);

    // Simple interest equivalent for comparison
    const simpleInterest = P * r * t + (totalContributedSeries * r * t) / 2;
    const compoundingAdvantage = Math.max(0, totalCompoundInterest - simpleInterest);

    return {
      futureValue: Math.round(futureValue),
      totalInvested: Math.round(totalInvested),
      totalCompoundInterest: Math.round(totalCompoundInterest),
      compoundingAdvantage: Math.round(compoundingAdvantage),
      multiplier: (futureValue / (totalInvested || 1)).toFixed(1),
    };
  }, [principal, rate, years, frequency, monthlyContribution]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val).replace('INR', '₹');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:p-8">
      <div className="border-b border-slate-100 pb-4 mb-6">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          Compound Interest Calculator
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          See the exponential snowball effect when your earnings generate earnings of their own.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-5">
          {/* Initial Principal */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700">Initial Principal Amount</label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 font-bold text-slate-900">
                <span>₹</span>
                <input
                  type="number"
                  min="0"
                  max="10000000"
                  step="5000"
                  value={principal}
                  onChange={e => setPrincipal(Math.max(0, Number(e.target.value)))}
                  className="w-28 text-right bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="2000000"
              step="10000"
              value={principal}
              onChange={e => setPrincipal(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          {/* Monthly Addition */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700">Monthly Contribution (Optional)</label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 font-bold text-slate-900">
                <span>₹</span>
                <input
                  type="number"
                  min="0"
                  max="200000"
                  step="500"
                  value={monthlyContribution}
                  onChange={e => setMonthlyContribution(Math.max(0, Number(e.target.value)))}
                  className="w-24 text-right bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="50000"
              step="500"
              value={monthlyContribution}
              onChange={e => setMonthlyContribution(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          {/* Rate & Time row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                <Percent className="w-3.5 h-3.5 text-slate-400" />
                Annual Interest Rate
              </label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                <input
                  type="number"
                  min="1"
                  max="30"
                  step="0.5"
                  value={rate}
                  onChange={e => setRate(Math.max(0.1, Number(e.target.value)))}
                  className="w-full text-slate-900 font-bold focus:outline-none bg-transparent"
                />
                <span className="text-slate-500 font-bold text-sm">%</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Time Horizon (Years)
              </label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={years}
                  onChange={e => setYears(Math.max(1, Number(e.target.value)))}
                  className="w-full text-slate-900 font-bold focus:outline-none bg-transparent"
                />
                <span className="text-slate-500 font-bold text-sm">Yrs</span>
              </div>
            </div>
          </div>

          {/* Compounding Frequency */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">Compounding Frequency</label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: 'Annually', value: 1 },
                { label: 'Semi-Annual', value: 2 },
                { label: 'Quarterly', value: 4 },
                { label: 'Monthly', value: 12 },
              ].map(freq => (
                <button
                  key={freq.value}
                  type="button"
                  onClick={() => setFrequency(freq.value)}
                  className={`py-2 text-xs font-semibold rounded-lg border transition ${
                    frequency === freq.value
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {freq.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Total Accumulated Value</span>
              <div className="text-3xl font-extrabold text-white mt-1">
                {formatCurrency(stats.futureValue)}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Grows to <strong className="text-purple-300">{stats.multiplier}x</strong> your total invested principal
              </p>
            </div>

            <div className="space-y-3 py-4 border-y border-slate-800 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Principal Invested</span>
                <span className="font-bold text-slate-200">{formatCurrency(stats.totalInvested)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-400">Total Compound Interest</span>
                <span className="font-bold text-purple-400">+{formatCurrency(stats.totalCompoundInterest)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-800 text-xs">
                <span className="text-emerald-400">Compounding Bonus vs Simple</span>
                <span className="font-bold text-emerald-400">+{formatCurrency(stats.compoundingAdvantage)}</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
              💡 <strong>Snowball effect:</strong> Over {years} years, the compound interest alone generated {formatCurrency(stats.totalCompoundInterest)}, proving why time is your greatest financial asset.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
