import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SipCalculator from '@/components/calculators/SipCalculator';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export default function SipToolPage() {
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

      <SipCalculator />

      {/* Educational Guide */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 text-slate-700 text-sm leading-relaxed">
        <h3 className="text-base font-bold text-slate-900">How Does a SIP (Systematic Investment Plan) Work?</h3>
        <p>
          A Systematic Investment Plan allows you to invest a fixed amount regularly (monthly or quarterly) into equity mutual funds or index ETFs. By investing consistently across market cycles, you automatically benefit from <strong>Rupee/Dollar Cost Averaging</strong>—purchasing more units when the market dips and fewer units when prices rise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-1">Disciplined Investing</h4>
            <p className="text-slate-500">Automates savings directly on payday before you have the opportunity to spend.</p>
          </div>
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-1">Cost Averaging</h4>
            <p className="text-slate-500">Eliminates the emotional stress and mathematical failure of trying to time market bottoms.</p>
          </div>
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-1">Exponential Compounding</h4>
            <p className="text-slate-500">The returns earned in each period are reinvested to generate future compound gains.</p>
          </div>
        </div>
      </div>

      <FinancialDisclaimer />
    </div>
  );
}
