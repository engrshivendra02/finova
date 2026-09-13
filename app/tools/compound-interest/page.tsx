import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CompoundInterestCalculator from '@/components/calculators/CompoundInterestCalculator';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export default function CompoundInterestToolPage() {
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

      <CompoundInterestCalculator />

      {/* Guide */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 text-slate-700 text-sm leading-relaxed">
        <h3 className="text-base font-bold text-slate-900">Why Compound Frequency Matters</h3>
        <p>
          The more frequently interest is compounded (e.g. monthly vs annually), the faster your wealth accumulates because you begin earning returns on previously accumulated returns earlier.
        </p>
        <div className="p-4 bg-purple-50/60 border border-purple-200 rounded-xl text-xs space-y-1">
          <p className="font-bold text-purple-900">The Compounding Formula:</p>
          <p className="font-mono text-slate-800">
            A = P (1 + r/n)^(nt)
          </p>
          <p className="text-slate-500 pt-1">
            Where <strong>P</strong> is the principal balance, <strong>r</strong> is the annual interest rate, <strong>n</strong> is the compounding frequency per year, and <strong>t</strong> is time in years.
          </p>
        </div>
      </div>

      <FinancialDisclaimer />
    </div>
  );
}
