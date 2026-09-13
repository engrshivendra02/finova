'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Star, 
  BarChart3, 
  GraduationCap,
  Percent,
  Clock,
  ChevronRight
} from 'lucide-react';
import SipCalculator from '@/components/calculators/SipCalculator';
import { getStoredCourses } from '@/lib/storage';

export default function HomePage() {
  const courses = useMemo(() => getStoredCourses().slice(0, 4), []);

  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-100/60 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>The #1 Free Financial Education Platform for Beginners</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Master Your Money.{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
                  Build Your Future.
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Learn personal finance, investing, stock markets, mutual funds, taxes, and wealth-building through simple, practical, and jargon-free interactive lessons.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href="/signup"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  Start Learning Free
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/courses"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm shadow-xs transition flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-slate-500" />
                  Explore 10+ Courses
                </Link>
              </div>

              {/* Social Proof */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1.5">
                    {[
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80',
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
                      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80',
                      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80',
                    ].map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        src={src}
                        alt="User"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-slate-800 ml-1">45,000+</span> students enrolled
                </div>
                <div className="flex items-center gap-1 text-amber-500 font-semibold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-slate-800">4.9 / 5</span> rating
                </div>
                <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Free & Open</span>
                </div>
              </div>
            </div>

            {/* Right Mockup / Fintech Visualization */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-200/80 space-y-5">
                {/* Floating Metric Pill */}
                <div className="absolute -top-3.5 -left-3 bg-slate-900 text-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-800">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Nifty 50 Compounding: +14.2%</span>
                </div>

                {/* Dashboard Card Preview */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Student Progress</span>
                    <h4 className="text-base font-bold text-slate-900">Personal Finance 101</h4>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    Active
                  </span>
                </div>

                {/* Mini Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Course Completion</span>
                    <span className="text-emerald-600 font-bold">75%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-3/4 rounded-full" />
                  </div>
                  <p className="text-[11px] text-slate-600">6 of 8 interactive lessons completed</p>
                </div>

                {/* Active Lesson Item */}
                <div className="p-3.5 bg-slate-50 border border-slate-200/70 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">The 50/30/20 Rule</p>
                      <p className="text-[11px] text-slate-600">Needs vs Wants Budgeting</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded-lg">
                    Done
                  </span>
                </div>

                {/* Quiz Badge Box */}
                <div className="p-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-between shadow-md">
                  <div>
                    <p className="text-xs font-semibold text-emerald-100">Latest Quiz Score</p>
                    <p className="text-lg font-extrabold">100% Mastered</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>

                <Link
                  href="/dashboard"
                  className="block text-center text-xs font-bold text-emerald-700 hover:text-emerald-800 py-1"
                >
                  View Interactive Student Dashboard →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="bg-white border-y border-slate-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-600 mb-8">
            Learn from structured, beginner-friendly financial education
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">50+</div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">Practical Lessons</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight">10+</div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">Curated Courses</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">30+</div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">Interactive Quizzes</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">100%</div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">Progress Tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED COURSES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
              Curriculum Marketplace
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Featured Finance Courses
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Step-by-step masterclasses built specifically for beginners, students, and first-time investors.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-xl transition"
          >
            Browse All 10+ Courses <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map(course => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-200 transition-all duration-200 flex flex-col"
            >
              <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {course.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900/90 text-white backdrop-blur-xs">
                    {course.badge}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/95 text-slate-800 shadow-xs">
                  {course.level}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wide">
                    {course.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition mt-1 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    {course.rating}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE CALCULATOR SECTION PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Interactive Financial Engines
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Test Your Compounding Potential In Real Time
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every financial calculator on Finova runs real mathematical formulas directly in your browser. Calculate SIPs, Loan EMIs, Budget allocations, and personal Net Worth instantly.
            </p>
          </div>

          <SipCalculator compact={false} />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800 text-xs text-slate-400">
            <span>Looking for more tools? We built 5 dedicated financial calculators.</span>
            <div className="flex flex-wrap gap-2">
              <Link href="/tools/emi" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition">
                Loan EMI Calculator →
              </Link>
              <Link href="/tools/budget" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition">
                50/30/20 Budget Tool →
              </Link>
              <Link href="/tools/net-worth" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition">
                Net Worth Calculator →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROADMAP: 4-STEP LEARNING BLUEPRINT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
            Structured Framework
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            How Finova Accelerates Your Wealth Journey
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Never wonder what to learn next. Follow our battle-tested 4-step roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Learn Concepts',
              desc: 'Understand foundational concepts like stocks, inflation, and cashflow in plain, jargon-free English.',
              color: 'emerald'
            },
            {
              step: '02',
              title: 'Test with Quizzes',
              desc: 'Reinforce your knowledge with interactive multiple-choice quizzes and real-time explanations.',
              color: 'blue'
            },
            {
              step: '03',
              title: 'Model & Calculate',
              desc: 'Use our SIP, EMI, and Budget calculators to model scenarios before putting real money on the line.',
              color: 'purple'
            },
            {
              step: '04',
              title: 'Build Long-Term Wealth',
              desc: 'Deploy low-cost index investing, establish emergency safety nets, and achieve true financial independence.',
              color: 'teal'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative space-y-3">
              <span className="text-2xl font-extrabold text-slate-900/20 font-mono">
                {item.step}
              </span>
              <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-500 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Take Control of Your Financial Destiny?
            </h2>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              Join thousands of students and young professionals building financial freedom. 100% free forever.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/signup"
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-emerald-800 font-bold text-sm rounded-xl shadow-lg transition transform active:scale-95"
              >
                Create Free Account
              </Link>
              <Link
                href="/courses"
                className="w-full sm:w-auto px-8 py-3.5 bg-emerald-800/40 hover:bg-emerald-800/60 border border-white/20 text-white font-bold text-sm rounded-xl transition"
              >
                Explore Syllabus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
