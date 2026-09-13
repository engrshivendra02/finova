'use client';

import React, { useState, useMemo } from 'react';
import { PieChart, CheckCircle2, AlertTriangle, ShieldAlert, Sparkles } from 'lucide-react';

export default function BudgetCalculator() {
  const [income, setIncome] = useState<number>(60000);
  const [rent, setRent] = useState<number>(18000);
  const [food, setFood] = useState<number>(10000);
  const [transport, setTransport] = useState<number>(4000);
  const [education, setEducation] = useState<number>(3000);
  const [entertainment, setEntertainment] = useState<number>(6000);
  const [otherExpenses, setOtherExpenses] = useState<number>(4000);

  const budget = useMemo(() => {
    // Needs: Rent + Food + Transport + Education
    const needsTotal = rent + food + transport + education;
    // Wants: Entertainment + Other
    const wantsTotal = entertainment + otherExpenses;
    const totalExpenses = needsTotal + wantsTotal;
    const savings = Math.max(0, income - totalExpenses);

    const safeIncome = income > 0 ? income : 1;
    const needsPercent = Math.round((needsTotal / safeIncome) * 100);
    const wantsPercent = Math.round((wantsTotal / safeIncome) * 100);
    const savingsPercent = Math.round((savings / safeIncome) * 100);

    let status: 'optimal' | 'warning' | 'critical' = 'optimal';
    let feedback = 'Your budget is well-balanced according to the 50/30/20 standard!';

    if (savingsPercent < 15) {
      status = 'critical';
      feedback = 'Savings are below 15%! Look for immediate ways to trim discretionary wants or negotiate rent.';
    } else if (needsPercent > 60) {
      status = 'warning';
      feedback = 'Needs exceed 60% of income. Consider reducing fixed expenses or finding supplementary income.';
    } else if (wantsPercent > 35) {
      status = 'warning';
      feedback = 'Discretionary wants are eating up over 35% of your income. Apply the 72-hour rule before purchasing.';
    }

    return {
      needsTotal,
      wantsTotal,
      totalExpenses,
      savings,
      needsPercent,
      wantsPercent,
      savingsPercent,
      status,
      feedback,
    };
  }, [income, rent, food, transport, education, entertainment, otherExpenses]);

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
          <PieChart className="w-5 h-5 text-emerald-600" />
          50/30/20 Smart Budget Calculator
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Audit your cashflow against the gold-standard 50% Needs, 30% Wants, and 20% Savings framework.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Controls */}
        <div className="lg:col-span-7 space-y-4">
          {/* Monthly Income */}
          <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1.5">
            <label className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
              Monthly Take-Home Pay (After Taxes)
            </label>
            <div className="flex items-center bg-white border border-emerald-300 rounded-lg px-3 py-2">
              <span className="font-bold text-emerald-700 mr-1">₹</span>
              <input
                type="number"
                min="5000"
                step="1000"
                value={income}
                onChange={e => setIncome(Math.max(0, Number(e.target.value)))}
                className="w-full text-slate-900 font-bold focus:outline-none"
              />
            </div>
          </div>

          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2">
            Essential Needs (Target: ~50%)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Rent / Mortgage</label>
              <input
                type="number"
                value={rent}
                onChange={e => setRent(Math.max(0, Number(e.target.value)))}
                className="w-full p-2 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-emerald-500 bg-slate-50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Food & Groceries</label>
              <input
                type="number"
                value={food}
                onChange={e => setFood(Math.max(0, Number(e.target.value)))}
                className="w-full p-2 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-emerald-500 bg-slate-50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Transit & Fuel</label>
              <input
                type="number"
                value={transport}
                onChange={e => setTransport(Math.max(0, Number(e.target.value)))}
                className="w-full p-2 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-emerald-500 bg-slate-50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Education / Health</label>
              <input
                type="number"
                value={education}
                onChange={e => setEducation(Math.max(0, Number(e.target.value)))}
                className="w-full p-2 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-emerald-500 bg-slate-50"
              />
            </div>
          </div>

          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2">
            Discretionary Wants (Target: ~30%)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Dining & Entertainment</label>
              <input
                type="number"
                value={entertainment}
                onChange={e => setEntertainment(Math.max(0, Number(e.target.value)))}
                className="w-full p-2 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-emerald-500 bg-slate-50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Other Discretionary</label>
              <input
                type="number"
                value={otherExpenses}
                onChange={e => setOtherExpenses(Math.max(0, Number(e.target.value)))}
                className="w-full p-2 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-emerald-500 bg-slate-50"
              />
            </div>
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Monthly Net Savings</span>
              <div className="text-3xl font-extrabold text-white mt-1">
                {formatCurrency(budget.savings)}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Savings Rate: <strong className="text-emerald-400 font-bold">{budget.savingsPercent}%</strong> (Target: 20%+)
              </p>
            </div>

            {/* Framework Comparison Bars */}
            <div className="space-y-4 py-3 border-y border-slate-800 text-xs">
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span className="text-slate-300">Needs ({formatCurrency(budget.needsTotal)})</span>
                  <span className={budget.needsPercent > 55 ? 'text-amber-400 font-bold' : 'text-emerald-400'}>
                    {budget.needsPercent}% (Benchmark: 50%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${budget.needsPercent > 55 ? 'bg-amber-400' : 'bg-emerald-500'}`}
                    style={{ width: `${Math.min(100, budget.needsPercent)}%` }} 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span className="text-slate-300">Wants ({formatCurrency(budget.wantsTotal)})</span>
                  <span className={budget.wantsPercent > 35 ? 'text-rose-400 font-bold' : 'text-blue-400'}>
                    {budget.wantsPercent}% (Benchmark: 30%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${budget.wantsPercent > 35 ? 'bg-rose-400' : 'bg-blue-500'}`}
                    style={{ width: `${Math.min(100, budget.wantsPercent)}%` }} 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span className="text-slate-300">Savings & Investments ({formatCurrency(budget.savings)})</span>
                  <span className={budget.savingsPercent >= 20 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                    {budget.savingsPercent}% (Benchmark: 20%)
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${budget.savingsPercent >= 20 ? 'bg-emerald-400' : 'bg-rose-500'}`}
                    style={{ width: `${Math.min(100, budget.savingsPercent)}%` }} 
                  />
                </div>
              </div>
            </div>

            {/* Health Feedback */}
            <div className={`p-3.5 rounded-xl border text-xs flex items-start gap-2.5 ${
              budget.status === 'optimal'
                ? 'bg-emerald-950/60 border-emerald-800 text-emerald-300'
                : budget.status === 'warning'
                ? 'bg-amber-950/60 border-amber-800 text-amber-300'
                : 'bg-rose-950/60 border-rose-800 text-rose-300'
            }`}>
              {budget.status === 'optimal' && <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />}
              {budget.status === 'warning' && <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />}
              {budget.status === 'critical' && <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />}
              <p className="leading-relaxed">{budget.feedback}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
