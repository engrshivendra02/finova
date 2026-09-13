'use client';

import React, { useState, useMemo } from 'react';
import { Landmark, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function NetWorthCalculator() {
  // Assets
  const [cash, setCash] = useState<number>(50000);
  const [bankSavings, setBankSavings] = useState<number>(200000);
  const [investments, setInvestments] = useState<number>(550000);
  const [property, setProperty] = useState<number>(1500000);
  const [otherAssets, setOtherAssets] = useState<number>(100000);

  // Liabilities
  const [homeLoan, setHomeLoan] = useState<number>(800000);
  const [vehicleLoan, setVehicleLoan] = useState<number>(150000);
  const [creditCardDebt, setCreditCardDebt] = useState<number>(20000);
  const [otherDebt, setOtherDebt] = useState<number>(0);

  const stats = useMemo(() => {
    const totalAssets = cash + bankSavings + investments + property + otherAssets;
    const totalLiabilities = homeLoan + vehicleLoan + creditCardDebt + otherDebt;
    const netWorth = totalAssets - totalLiabilities;
    const debtToAssetRatio = totalAssets > 0 ? Math.round((totalLiabilities / totalAssets) * 100) : 0;

    return {
      totalAssets,
      totalLiabilities,
      netWorth,
      debtToAssetRatio,
    };
  }, [cash, bankSavings, investments, property, otherAssets, homeLoan, vehicleLoan, creditCardDebt, otherDebt]);

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
          <Landmark className="w-5 h-5 text-teal-600" />
          Personal Net Worth Calculator
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Measure your true financial health: Everything you own (Assets) minus everything you owe (Liabilities).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Assets & Liabilities input columns */}
        <div className="lg:col-span-7 space-y-6">
          {/* ASSETS */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                Assets (What You Own)
              </h4>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Total: {formatCurrency(stats.totalAssets)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <label className="text-slate-600 font-medium">Cash in Hand</label>
                <input
                  type="number"
                  value={cash}
                  onChange={e => setCash(Math.max(0, Number(e.target.value)))}
                  className="w-full p-2 border border-slate-200 rounded-lg font-semibold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-600 font-medium">Bank Savings & FDs</label>
                <input
                  type="number"
                  value={bankSavings}
                  onChange={e => setBankSavings(Math.max(0, Number(e.target.value)))}
                  className="w-full p-2 border border-slate-200 rounded-lg font-semibold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-600 font-medium">Equities, Mutual Funds & ETFs</label>
                <input
                  type="number"
                  value={investments}
                  onChange={e => setInvestments(Math.max(0, Number(e.target.value)))}
                  className="w-full p-2 border border-slate-200 rounded-lg font-semibold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-600 font-medium">Real Estate & Property</label>
                <input
                  type="number"
                  value={property}
                  onChange={e => setProperty(Math.max(0, Number(e.target.value)))}
                  className="w-full p-2 border border-slate-200 rounded-lg font-semibold bg-slate-50"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="text-slate-600 font-medium">Gold, PF & Other Valuables</label>
                <input
                  type="number"
                  value={otherAssets}
                  onChange={e => setOtherAssets(Math.max(0, Number(e.target.value)))}
                  className="w-full p-2 border border-slate-200 rounded-lg font-semibold bg-slate-50"
                />
              </div>
            </div>
          </div>

          {/* LIABILITIES */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                Liabilities (What You Owe)
              </h4>
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                Total: {formatCurrency(stats.totalLiabilities)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <label className="text-slate-600 font-medium">Home Loan / Mortgage</label>
                <input
                  type="number"
                  value={homeLoan}
                  onChange={e => setHomeLoan(Math.max(0, Number(e.target.value)))}
                  className="w-full p-2 border border-slate-200 rounded-lg font-semibold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-600 font-medium">Car / Vehicle Loan</label>
                <input
                  type="number"
                  value={vehicleLoan}
                  onChange={e => setVehicleLoan(Math.max(0, Number(e.target.value)))}
                  className="w-full p-2 border border-slate-200 rounded-lg font-semibold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-600 font-medium">Credit Card Balance</label>
                <input
                  type="number"
                  value={creditCardDebt}
                  onChange={e => setCreditCardDebt(Math.max(0, Number(e.target.value)))}
                  className="w-full p-2 border border-slate-200 rounded-lg font-semibold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-600 font-medium">Personal Loans & Other Debt</label>
                <input
                  type="number"
                  value={otherDebt}
                  onChange={e => setOtherDebt(Math.max(0, Number(e.target.value)))}
                  className="w-full p-2 border border-slate-200 rounded-lg font-semibold bg-slate-50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Output Card */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Total Net Worth</span>
              <div className={`text-3xl font-extrabold mt-1 ${stats.netWorth >= 0 ? 'text-white' : 'text-rose-400'}`}>
                {formatCurrency(stats.netWorth)}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Assets minus Liabilities as of today
              </p>
            </div>

            <div className="space-y-3 py-4 border-y border-slate-800 text-sm">
              <div className="flex justify-between">
                <span className="text-emerald-400">Total Assets</span>
                <span className="font-bold text-emerald-400">+{formatCurrency(stats.totalAssets)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-rose-400">Total Liabilities</span>
                <span className="font-bold text-rose-400">-{formatCurrency(stats.totalLiabilities)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-800 text-xs">
                <span className="text-slate-300">Debt-to-Asset Ratio</span>
                <span className={`font-bold ${stats.debtToAssetRatio < 40 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {stats.debtToAssetRatio}%
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 flex items-start gap-2">
              {stats.netWorth > 0 ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p>
                    <strong>Positive Net Worth:</strong> Your asset base exceeds outstanding debts. Focus on accelerating equity investments and eliminating high-interest liabilities.
                  </p>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <p>
                    <strong>Negative Net Worth:</strong> Debts currently exceed assets. Prioritize paying down consumer debt using the Debt Avalanche method before making speculative bets.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
