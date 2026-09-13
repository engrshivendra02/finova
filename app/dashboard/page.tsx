'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  BookOpen, 
  CheckCircle2, 
  Flame, 
  Award, 
  TrendingUp, 
  Clock, 
  ArrowRight, 
  PlayCircle, 
  Sparkles, 
  Compass, 
  Layers,
  ChevronRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import { 
  getStoredCourses, 
  getUserEnrollments, 
  getUserStats, 
  getUserQuizAttempts 
} from '@/lib/storage';
import { INITIAL_ACHIEVEMENTS } from '@/lib/data/achievements';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, isLoading } = useAuth();

  const [enrollments, setEnrollments] = useState(() => user ? getUserEnrollments(user.id) : []);
  const [stats, setStats] = useState(() => user ? getUserStats(user.id) : null);
  const courses = useMemo(() => getStoredCourses(), []);
  const quizAttempts = useMemo(() => user ? getUserQuizAttempts(user.id) : [], [user]);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login?redirect=/dashboard');
    } else if (user) {
      setEnrollments(getUserEnrollments(user.id));
      setStats(getUserStats(user.id));
    }
  }, [user, isLoading, router]);

  // Enrolled courses list
  const activeEnrolledCourses = useMemo(() => {
    return enrollments.map(enr => {
      const course = courses.find(c => c.id === enr.course_id);
      return {
        enrollment: enr,
        course,
      };
    }).filter(item => item.course !== undefined);
  }, [enrollments, courses]);

  // Recommended courses (courses user has not enrolled in yet)
  const enrolledCourseIds = useMemo(() => enrollments.map(e => e.course_id), [enrollments]);
  const recommendedCourses = useMemo(() => {
    return courses.filter(c => !enrolledCourseIds.includes(c.id)).slice(0, 3);
  }, [courses, enrolledCourseIds]);

  // Unlocked achievements evaluation
  const achievements = useMemo(() => {
    const totalLessons = stats?.lessons_completed || 0;
    const streak = stats?.learning_streak || 1;
    const hasCompletedCourse = enrollments.some(e => e.progress_percent === 100);
    const hasPassedQuiz = quizAttempts.some(q => q.passed);
    const hasPerfectQuiz = quizAttempts.some(q => q.percentage === 100);

    return INITIAL_ACHIEVEMENTS.map(ach => {
      let isUnlocked = false;
      if (ach.code === 'first_lesson' && totalLessons >= 1) isUnlocked = true;
      if (ach.code === 'streak_7' && streak >= 7) isUnlocked = true;
      if (ach.code === 'lessons_10' && totalLessons >= 10) isUnlocked = true;
      if (ach.code === 'course_completed' && hasCompletedCourse) isUnlocked = true;
      if (ach.code === 'finance_beginner' && (hasPassedQuiz || totalLessons >= 2)) isUnlocked = true;
      if (ach.code === 'quiz_master' && hasPerfectQuiz) isUnlocked = true;

      return {
        ...ach,
        unlocked: isUnlocked,
      };
    });
  }, [stats, enrollments, quizAttempts]);

  if (isLoading || !user) {
    return (
      <div className="max-w-7xl mx-auto py-24 px-4 text-center">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-xs text-slate-500 font-medium">Loading your personalized dashboard...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 1. WELCOME BANNER */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
            <Flame className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
            <span>{profile?.learning_streak || 1}-Day Learning Streak! Keep it going.</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Welcome back, {user.full_name.split(' ')[0]} 👋
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {profile?.learning_goal || 'Mastering personal finance, investing, and wealth building.'}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60 text-center min-w-[110px]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Finova Points</span>
            <span className="text-2xl font-extrabold text-emerald-400 mt-0.5 block">
              {profile?.points || 150} pts
            </span>
          </div>
          <Link
            href="/courses"
            className="px-5 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-2xl shadow-lg shadow-emerald-600/25 transition flex items-center gap-1.5"
          >
            Explore Courses <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 2. CORE LEARNING METRICS STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        {[
          {
            label: 'Courses Enrolled',
            value: stats?.courses_enrolled || 0,
            icon: BookOpen,
            color: 'emerald'
          },
          {
            label: 'Lessons Completed',
            value: stats?.lessons_completed || 0,
            icon: CheckCircle2,
            color: 'blue'
          },
          {
            label: 'Learning Streak',
            value: `${stats?.learning_streak || 1} Days`,
            icon: Flame,
            color: 'amber'
          },
          {
            label: 'Average Quiz Score',
            value: `${stats?.average_quiz_score || 85}%`,
            icon: Award,
            color: 'purple'
          },
          {
            label: 'Overall Progress',
            value: `${stats?.overall_progress || 0}%`,
            icon: TrendingUp,
            color: 'teal'
          }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-emerald-200 transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{stat.label}</span>
                <Icon className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. CONTINUE LEARNING SECTION */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-emerald-600" />
            Continue Learning
          </h2>
          <Link href="/courses" className="text-xs font-semibold text-emerald-600 hover:underline">
            View All Courses →
          </Link>
        </div>

        {activeEnrolledCourses.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 text-slate-500 space-y-3">
            <BookOpen className="w-10 h-10 mx-auto text-slate-300" />
            <p className="text-sm font-semibold text-slate-700">You haven&apos;t enrolled in any courses yet</p>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Start with &quot;Personal Finance 101&quot; or &quot;Stock Market for Beginners&quot; to begin building your streak!
            </p>
            <Link
              href="/courses"
              className="inline-block px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-emerald-700 transition"
            >
              Browse Course Catalog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeEnrolledCourses.map(({ enrollment, course }) => {
              if (!course) return null;
              return (
                <div
                  key={enrollment.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-200 hover:shadow-md transition space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        {course.category}
                      </span>
                      <span className="font-bold text-slate-700">
                        {enrollment.progress_percent}% Complete
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      <Link href={`/courses/${course.slug}`} className="hover:text-emerald-700 transition">
                        {course.title}
                      </Link>
                    </h3>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                        style={{ width: `${enrollment.progress_percent}%` }}
                      />
                    </div>

                    <p className="text-xs text-slate-500">
                      {enrollment.completed_lesson_ids.length} of {course.total_lessons} lessons completed
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {course.duration}
                    </span>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition"
                    >
                      Resume Lesson <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. RECENT ACTIVITY & ACHIEVEMENTS DUAL GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Recent Activity Log
          </h3>

          <div className="divide-y divide-slate-100 text-xs">
            <div className="py-3 flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-800">Completed &quot;The 50/30/20 Budgeting Rule&quot;</p>
                <p className="text-slate-600">Personal Finance 101 • Earned +25 pts</p>
              </div>
              <span className="text-[11px] text-slate-600">Today</span>
            </div>

            <div className="py-3 flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-800">Passed Assessment Quiz (Score: 100%)</p>
                <p className="text-slate-600">Personal Finance Fundamentals • Earned +50 pts</p>
              </div>
              <span className="text-[11px] text-slate-600">Yesterday</span>
            </div>

            <div className="py-3 flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-800">Started Course &quot;Stock Market for Beginners&quot;</p>
                <p className="text-slate-600">Module 1: Foundations of the Stock Market</p>
              </div>
              <span className="text-[11px] text-slate-600">2 days ago</span>
            </div>
          </div>
        </div>

        {/* Badges & Achievements */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              Milestone Badges
            </h3>
            <span className="text-xs font-bold text-slate-400">
              {achievements.filter(a => a.unlocked).length} / {achievements.length} Unlocked
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {achievements.map(ach => (
              <div
                key={ach.id}
                className={`p-3 rounded-xl border transition flex flex-col justify-between ${
                  ach.unlocked
                    ? 'bg-amber-50/50 border-amber-200'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}
              >
                <div>
                  <span className="text-2xl mb-1 block">{ach.icon}</span>
                  <h4 className="text-xs font-bold text-slate-900">{ach.title}</h4>
                  <p className="text-[11px] text-slate-600 line-clamp-2 mt-0.5">
                    {ach.description}
                  </p>
                </div>
                <span className={`text-[10px] font-bold mt-2 inline-block ${
                  ach.unlocked ? 'text-amber-700' : 'text-slate-400'
                }`}>
                  {ach.unlocked ? 'Unlocked ✓' : 'Locked'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. RECOMMENDED COURSES */}
      {recommendedCourses.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-teal-600" />
            Recommended for Your Learning Path
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedCourses.map(course => (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-emerald-200 hover:shadow-md transition space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wide">
                    {course.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {course.duration}
                  </span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    Enroll Free <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <FinancialDisclaimer />
    </div>
  );
}
