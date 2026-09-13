'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen, FileText, Bookmark, X, ArrowRight, Sparkles } from 'lucide-react';
import { getStoredCourses } from '@/lib/storage';
import { INITIAL_ARTICLES } from '@/lib/data/articles';
import { INITIAL_GLOSSARY } from '@/lib/data/glossary';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset query on close
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  const courses = useMemo(() => getStoredCourses(), []);
  const articles = INITIAL_ARTICLES;
  const glossary = INITIAL_GLOSSARY;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return { courses: [], articles: [], glossary: [] };
    }

    const matchedCourses = courses.filter(
      c => c.title.toLowerCase().includes(q) || 
           c.category.toLowerCase().includes(q) || 
           c.description.toLowerCase().includes(q)
    ).slice(0, 4);

    const matchedArticles = articles.filter(
      a => a.title.toLowerCase().includes(q) || 
           a.summary.toLowerCase().includes(q) || 
           a.category.toLowerCase().includes(q) ||
           a.tags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 4);

    const matchedGlossary = glossary.filter(
      g => g.term.toLowerCase().includes(q) || 
           g.definition.toLowerCase().includes(q) ||
           g.category.toLowerCase().includes(q)
    ).slice(0, 4);

    return {
      courses: matchedCourses,
      articles: matchedArticles,
      glossary: matchedGlossary,
    };
  }, [query, courses, articles, glossary]);

  if (!isOpen) return null;

  const totalMatches = results.courses.length + results.articles.length + results.glossary.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-emerald-600 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search courses, lessons, articles, or financial terms... (e.g. SIP, P/E ratio, 50/30/20)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full text-slate-800 text-base placeholder:text-slate-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md transition"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-500">
              <Sparkles className="w-8 h-8 mx-auto text-emerald-500 mb-2 opacity-80" />
              <p className="text-sm font-medium text-slate-700">Type to search Finova’s financial knowledge base</p>
              <p className="text-xs text-slate-400 mt-1">Try &quot;Index Funds&quot;, &quot;Emergency Fund&quot;, &quot;Taxes&quot;, or &quot;Budgeting&quot;</p>
              
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                {['SIP', 'Compound Interest', 'Stock Market', 'P/E Ratio', 'FIRE', 'Credit Score'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalMatches === 0 ? (
            <div className="py-10 text-center text-slate-500">
              <p className="text-sm font-medium text-slate-700">No matching results found for &quot;{query}&quot;</p>
              <p className="text-xs text-slate-400 mt-1">Check spelling or try broader financial keywords.</p>
            </div>
          ) : (
            <>
              {/* Courses Results */}
              {results.courses.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Courses ({results.courses.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.courses.map(course => (
                      <Link
                        key={course.id}
                        href={`/courses/${course.slug}`}
                        onClick={onClose}
                        className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50/70 border border-transparent hover:border-emerald-100 transition"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs px-2 py-0.5 rounded-md font-medium bg-emerald-100 text-emerald-800">
                            {course.category}
                          </span>
                          <span className="text-sm font-medium text-slate-800 group-hover:text-emerald-900">
                            {course.title}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles Results */}
              {results.articles.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>Learning Hub Articles ({results.articles.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.articles.map(article => (
                      <Link
                        key={article.id}
                        href={`/learn/${article.slug}`}
                        onClick={onClose}
                        className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-100 transition"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 rounded-md font-medium bg-blue-100 text-blue-800">
                              {article.category}
                            </span>
                            <span className="text-sm font-medium text-slate-800 group-hover:text-blue-900">
                              {article.title}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 pl-0.5">{article.summary}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Glossary Results */}
              {results.glossary.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <Bookmark className="w-3.5 h-3.5 text-purple-600" />
                    <span>Glossary Definitions ({results.glossary.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.glossary.map(term => (
                      <Link
                        key={term.id}
                        href={`/glossary?q=${encodeURIComponent(term.term)}`}
                        onClick={onClose}
                        className="group flex items-start justify-between p-2.5 rounded-xl hover:bg-purple-50/70 border border-transparent hover:border-purple-100 transition"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 rounded-md font-medium bg-purple-100 text-purple-800">
                              {term.term}
                            </span>
                            <span className="text-xs text-slate-400">({term.category})</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 line-clamp-1">{term.definition}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-purple-600 transition shrink-0 ml-2 mt-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Tip: Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-700 font-mono">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-700 font-mono">K</kbd> anywhere to search</span>
          <Link href="/glossary" onClick={onClose} className="hover:text-emerald-600 font-medium">View Full Glossary →</Link>
        </div>
      </div>
    </div>
  );
}
