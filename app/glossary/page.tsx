'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Bookmark, 
  Search, 
  Filter, 
  ArrowRight, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { INITIAL_GLOSSARY } from '@/lib/data/glossary';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const set = new Set(INITIAL_GLOSSARY.map(t => t.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredTerms = useMemo(() => {
    return INITIAL_GLOSSARY.filter(item => {
      const matchesSearch = 
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.example.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLetter = selectedLetter === 'All' || item.letter.toUpperCase() === selectedLetter;
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesLetter && matchesCategory;
    });
  }, [searchQuery, selectedLetter, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
          <Bookmark className="w-4 h-4" /> Financial Lexicon
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Financial Terms Glossary
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          Demystify Wall Street jargon. Clear, concise, beginner-friendly definitions with real-world practical examples for over 50 essential finance terms.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search terms or definitions (e.g. P/E ratio, NAV, Bull market, Amortization)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold px-3 py-2.5 text-slate-700 focus:outline-none"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Alphabet Jump Bar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 pt-1 scrollbar-none border-t border-slate-100">
          <button
            onClick={() => setSelectedLetter('All')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition shrink-0 ${
              selectedLetter === 'All'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            All
          </button>
          {ALPHABET.map(letter => {
            const hasTerms = INITIAL_GLOSSARY.some(t => t.letter.toUpperCase() === letter);
            return (
              <button
                key={letter}
                disabled={!hasTerms}
                onClick={() => setSelectedLetter(letter)}
                className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition ${
                  selectedLetter === letter
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : hasTerms
                    ? 'hover:bg-slate-100 text-slate-700'
                    : 'text-slate-300 cursor-not-allowed'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Showing {filteredTerms.length} financial definitions</span>
          {(selectedLetter !== 'All' || selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedLetter('All');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-emerald-600 hover:underline font-semibold"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {filteredTerms.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 text-slate-500">
            <Bookmark className="w-12 h-12 mx-auto text-slate-300 mb-3" />
            <h3 className="text-base font-bold text-slate-700">No definitions found</h3>
            <p className="text-xs text-slate-400 mt-1">Try another search term or letter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTerms.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-200 hover:shadow-md transition space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center">
                      {item.letter}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{item.term}</h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.definition}
                  </p>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-slate-100">
                  {/* Practical Example Box */}
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-slate-800 flex items-center gap-1">
                      💡 Real-World Example:
                    </span>
                    <p className="text-slate-600 italic leading-relaxed">
                      &quot;{item.example}&quot;
                    </p>
                  </div>

                  {/* Related Terms */}
                  {item.related_terms && item.related_terms.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px]">
                      <span className="text-slate-400">Related:</span>
                      {item.related_terms.map(rel => (
                        <button
                          key={rel}
                          onClick={() => setSearchQuery(rel)}
                          className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 font-medium transition"
                        >
                          {rel}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <FinancialDisclaimer />
    </div>
  );
}
