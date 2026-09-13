'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Check, 
  BookOpen, 
  Tag, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { INITIAL_ARTICLES } from '@/lib/data/articles';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const [copied, setCopied] = useState(false);

  const article = INITIAL_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h2 className="text-xl font-bold text-slate-800">Article Not Found</h2>
        <p className="text-sm text-slate-500 mt-2">The article you requested could not be located.</p>
        <Link href="/learn" className="mt-4 inline-block px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold">
          ← Back to Learning Hub
        </Link>
      </div>
    );
  }

  const relatedArticles = INITIAL_ARTICLES.filter(
    a => article.related_slugs?.includes(a.slug) || (a.category === article.category && a.id !== article.id)
  ).slice(0, 3);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back Navigation & Share */}
      <div className="flex items-center justify-between">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-600 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Learning Hub
        </Link>

        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
          {copied ? 'Link Copied!' : 'Share Article'}
        </button>
      </div>

      {/* Article Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.reading_time}
            </span>
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {article.published_at}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover border border-slate-200"
            />
            <div>
              <p className="text-xs font-bold text-slate-900">{article.author.name}</p>
              <p className="text-[11px] text-emerald-600 font-medium">{article.author.role}</p>
            </div>
          </div>
        </div>

        {/* Executive Summary Quote Callout */}
        <div className="p-4 bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-xl text-sm font-medium text-emerald-950 italic leading-relaxed">
          &quot;{article.summary}&quot;
        </div>

        {/* Key Takeaways Box */}
        {article.key_points && article.key_points.length > 0 && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2.5">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Core Takeaways:
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              {article.key_points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Rich Article Body */}
        <div className="prose prose-slate max-w-none text-slate-800 text-sm sm:text-base leading-relaxed space-y-4 pt-4 border-t border-slate-100">
          {article.content.split('\n\n').map((paragraph: string, idx: number) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-lg font-bold text-slate-900 pt-4 pb-1">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
                  {paragraph.split('\n').map((li, i) => (
                    <li key={i}>{li.replace(/^[-*0-9.]\s+/, '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" /> Topics:
          </span>
          {article.tags.map(tag => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-bold text-slate-900">Recommended Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map(rel => (
              <Link
                key={rel.id}
                href={`/learn/${rel.slug}`}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition space-y-2 group"
              >
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">
                  {rel.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {rel.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <FinancialDisclaimer />
    </div>
  );
}
