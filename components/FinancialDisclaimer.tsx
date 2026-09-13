import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FinancialDisclaimerProps {
  className?: string;
  variant?: 'banner' | 'card' | 'inline';
}

export default function FinancialDisclaimer({ className = '', variant = 'card' }: FinancialDisclaimerProps) {
  if (variant === 'banner') {
    return (
      <div className={`bg-amber-50 border-b border-amber-200 py-2.5 px-4 text-xs text-amber-900 ${className}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center font-medium">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Educational Disclaimer:</strong> Finova provides structured educational information only. Content does not constitute personalized financial, investment, tax, or legal advice.
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`flex items-start gap-2 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 ${className}`}>
        <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <p>
          <strong>Disclaimer:</strong> Finova provides educational information only. It does not constitute financial, investment, tax, or legal advice. Always conduct your own research or consult an authorized financial advisor.
        </p>
      </div>
    );
  }

  return (
    <div className={`p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 text-xs text-slate-600 shadow-sm ${className}`}>
      <div className="flex items-start gap-3">
        <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0 mt-0.5">
          <AlertCircle className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1 text-sm">Finova Educational Notice</h4>
          <p className="leading-relaxed">
            All content, calculations, models, and interactive simulations provided on Finova are strictly for educational and self-learning purposes. They do not constitute financial, investment, tax, or legal advice. Finova does not endorse specific securities or guarantee investment returns. Consult a registered investment advisor (RIA) for personalized financial planning.
          </p>
        </div>
      </div>
    </div>
  );
}
