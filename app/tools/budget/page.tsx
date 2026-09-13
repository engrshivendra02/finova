import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BudgetCalculator from '@/components/calculators/BudgetCalculator';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export default function BudgetToolPage() {
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

      <BudgetCalculator />

      {/* Guide */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 text-slate-700 text-sm leading-relaxed">
        <h3 className="text-base font-bold text-slate-900">How to Master the 50/30/20 Rule</h3>
        <p>
          The 50/30/20 rule is an intuitive guideline for dividing your after-tax income into three straightforward categories:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1">
            <h4 className="font-bold text-emerald-900">50% Needs</h4>
            <p className="text-slate-600">Obligations you cannot avoid: rent, utilities, basic groceries, transit, minimum loan payments, and essential healthcare.</p>
          </div>
          <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-1">
            <h4 className="font-bold text-blue-900">30% Wants</h4>
            <p className="text-slate-600">Discretionary lifestyle choices: dining out, vacations, streaming subscriptions, fashion, hobbies, and gadgets.</p>
          </div>
          <div className="p-4 bg-purple-50/60 border border-purple-200 rounded-xl space-y-1">
            <h4 className="font-bold text-purple-900">20% Savings</h4>
            <p className="text-slate-600">Building future freedom: emergency fund deposits, retirement contributions, equity index SIPs, and extra debt principal payments.</p>
          </div>
        </div>
      </div>

      <FinancialDisclaimer />
    </div>
  );
}
