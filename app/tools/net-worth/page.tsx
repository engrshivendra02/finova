import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import NetWorthCalculator from '@/components/calculators/NetWorthCalculator';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export default function NetWorthToolPage() {
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

      <NetWorthCalculator />

      {/* Guide */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 text-slate-700 text-sm leading-relaxed">
        <h3 className="text-base font-bold text-slate-900">Why Net Worth is the Ultimate Wealth Metric</h3>
        <p>
          Your gross salary only reveals how much capital flows through your hands; your <strong>Net Worth</strong> measures how much capital stays with you and works on your behalf.
        </p>
        <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl text-xs sm:text-sm font-mono text-teal-950 font-bold text-center">
          Net Worth = Total Assets (What You Own) − Total Liabilities (What You Owe)
        </div>
        <p>
          Tracking your net worth on a quarterly basis keeps you focused on asset accumulation and debt elimination rather than temporary consumer spending.
        </p>
      </div>

      <FinancialDisclaimer />
    </div>
  );
}
