import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import EmiCalculator from '@/components/calculators/EmiCalculator';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export default function EmiToolPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-600 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Financial Tools
        </Link>
      </div>

      <EmiCalculator />

      {/* Educational Guide */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 text-slate-700 text-sm leading-relaxed">
        <h3 className="text-base font-bold text-slate-900">Understanding Equated Monthly Instalments (EMI)</h3>
        <p>
          An EMI is a fixed payment amount made by a borrower to a lender at a specified calendar date each month. EMIs are applied to both interest and principal each month so that over a specified number of years, the loan is paid off in full.
        </p>
        <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl text-xs space-y-1">
          <p className="font-bold text-blue-900">Mathematical Formula:</p>
          <p className="font-mono text-slate-800">
            EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
          </p>
          <p className="text-slate-500 pt-1">
            Where <strong>P</strong> is Principal loan amount, <strong>R</strong> is the monthly interest rate (annual rate / 12 / 100), and <strong>N</strong> is total number of monthly installments.
          </p>
        </div>
      </div>

      <FinancialDisclaimer />
    </div>
  );
}
