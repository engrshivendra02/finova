'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, Percent, Calendar, IndianRupee } from 'lucide-react';

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(1000000); // 10 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(10); // 10 years

  const results = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    if (P <= 0 || r <= 0 || n <= 0) {
      return {
        monthlyEmi: 0,
        totalInterest: 0,
        totalPayment: 0,
        principalPercent: 100,
        interestPercent: 0,
      };
    }

    // EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = Math.max(0, totalPayment - P);

    const principalPercent = (P / totalPayment) * 100;
    const interestPercent = 100 - principalPercent;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
      principalPercent: Math.round(principalPercent),
      interestPercent: Math.round(interestPercent),
    };
  }, [loanAmount, interestRate, tenureYears]);

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
          <Calculator className="w-5 h-5 text-blue-600" />
          Loan EMI Calculator
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Calculate your exact monthly Equated Monthly Instalment (EMI), total interest outflow, and repayment breakdown.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Loan Amount */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700">Loan Amount</label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 font-bold text-slate-900">
                <span>₹</span>
                <input
                  type="number"
                  min="10000"
                  max="10000000"
                  step="25000"
                  value={loanAmount}
                  onChange={e => setLoanAmount(Math.max(0, Number(e.target.value)))}
                  className="w-32 text-right bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <input
              type="range"
              min="50000"
              max="10000000"
              step="50000"
              value={loanAmount}
              onChange={e => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>₹50,000</span>
              <span>₹25 Lakhs</span>
              <span>₹50 Lakhs</span>
              <span>₹1 Crore</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700">Interest Rate (% p.a.)</label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 font-bold text-slate-900">
                <input
                  type="number"
                  min="1"
                  max="25"
                  step="0.1"
                  value={interestRate}
                  onChange={e => setInterestRate(Math.max(0.1, Number(e.target.value)))}
                  className="w-16 text-right bg-transparent focus:outline-none"
                />
                <span className="ml-1 text-slate-500">%</span>
              </div>
            </div>
            <input
              type="range"
              min="4"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={e => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>4%</span>
              <span>8.5% (Home Loan)</span>
              <span>12% (Car Loan)</span>
              <span>20% (Personal)</span>
            </div>
          </div>

          {/* Tenure */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700">Loan Tenure</label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 font-bold text-slate-900">
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={tenureYears}
                  onChange={e => setTenureYears(Math.max(1, Math.min(30, Number(e.target.value))))}
                  className="w-12 text-right bg-transparent focus:outline-none"
                />
                <span className="ml-1 text-slate-500">Years</span>
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenureYears}
              onChange={e => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>1 Year</span>
              <span>10 Years</span>
              <span>20 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results Box */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Monthly EMI</span>
              <div className="text-3xl font-extrabold text-white mt-1">
                {formatCurrency(results.monthlyEmi)}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                For {tenureYears * 12} monthly installments
              </p>
            </div>

            <div className="space-y-3 py-4 border-y border-slate-800">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  Principal Loan Amount
                </span>
                <span className="font-bold text-slate-200">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-400 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  Total Interest Paid
                </span>
                <span className="font-bold text-blue-400">+{formatCurrency(results.totalInterest)}</span>
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-800 font-semibold">
                <span className="text-white">Total Amount Payable</span>
                <span className="text-white">{formatCurrency(results.totalPayment)}</span>
              </div>
            </div>

            {/* Split Bar */}
            <div className="space-y-1.5">
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden flex">
                <div
                  className="bg-slate-400 h-full"
                  style={{ width: `${results.principalPercent}%` }}
                  title={`Principal: ${results.principalPercent}%`}
                />
                <div
                  className="bg-blue-500 h-full"
                  style={{ width: `${results.interestPercent}%` }}
                  title={`Interest: ${results.interestPercent}%`}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Principal ({results.principalPercent}%)</span>
                <span className="text-blue-400 font-semibold">Interest ({results.interestPercent}%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
