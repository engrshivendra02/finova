'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Search, 
  Clock, 
  ArrowRight, 
  Tag, 
  Filter,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { INITIAL_ARTICLES } from '@/lib/data/articles';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

const CATEGORIES = [
  'All',
  'Stock Market',
  'Mutual Funds',
  'Investing',
  'Personal Finance',
  'Banking',
  'Taxation',
  'Wealth Building'
];

export default function LearningHubPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = useMemo(() => {
    return INITIAL_ARTICLES.filter(article => {
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4" /> Finova Knowledge Hub
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Finance Learning Hub
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          Comprehensive, hype-free educational articles on personal finance, stock markets, index investing, tax laws, and wealth-building strategies written by experienced financial practitioners.
        </p>
      </div>

      {/* Search & Categories */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles by title, concept, or topic (e.g. SIP, Inflation, Index Fund, 4% Rule)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Showing {filteredArticles.length} articles</span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-emerald-600 hover:underline font-semibold"
            >
              Reset Category
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <Link
              key={article.id}
              href={`/learn/${article.slug}`}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-xl hover:border-emerald-200 transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {article.reading_time}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <div className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span className="text-slate-600 font-medium truncate max-w-[120px]">
                      {article.author.name}
                    </span>
                  </div>

                  <span className="text-emerald-600 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <FinancialDisclaimer />
    </div>
  );
}
