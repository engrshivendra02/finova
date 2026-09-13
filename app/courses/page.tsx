'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  BookOpen, 
  Clock, 
  Star, 
  Filter, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { CourseCategory, CourseLevel } from '@/types';
import { getStoredCourses, getUserEnrollments } from '@/lib/storage';
import { useAuth } from '@/lib/auth-context';

const CATEGORIES: ('All' | CourseCategory)[] = [
  'All',
  'Personal Finance',
  'Stock Market',
  'Mutual Funds',
  'Investing',
  'Budgeting',
  'Taxation',
  'Financial Planning',
  'Cryptocurrency',
  'Banking',
  'Wealth Building',
];

export default function CoursesPage() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | CourseCategory>('All');
  const [selectedLevel, setSelectedLevel] = useState<'All' | CourseLevel>('All');

  const courses = useMemo(() => getStoredCourses(), []);
  const enrollments = useMemo(() => user ? getUserEnrollments(user.id) : [], [user]);

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [courses, searchQuery, selectedCategory, selectedLevel]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> Comprehensive Course Library
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Financial Education Masterclasses
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            From your first budget to retirement modeling: structured curricula, real-world calculations, and interactive quizzes designed for real wealth building.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, keyword, or asset class (e.g. SIP, Index Fund, Taxes)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={selectedLevel}
              onChange={e => setSelectedLevel(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold px-3 py-2.5 text-slate-700 focus:outline-none"
            >
              <option value="All">All Experience Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
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

      {/* Course Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Showing {filteredCourses.length} courses</span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-emerald-600 hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 text-slate-500">
            <BookOpen className="w-12 h-12 mx-auto text-slate-300 mb-3" />
            <h3 className="text-base font-bold text-slate-700">No courses match your filter criteria</h3>
            <p className="text-xs text-slate-400 mt-1">Try clearing your search query or selecting &quot;All&quot; categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => {
              const enrollment = enrollments.find(e => e.course_id === course.id);
              const isEnrolled = Boolean(enrollment);
              const progress = enrollment?.progress_percent || 0;

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-200 transition-all duration-200 flex flex-col justify-between"
                >
                  {/* Image Header */}
                  <div>
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {course.badge && (
                        <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900/90 text-white">
                          {course.badge}
                        </span>
                      )}
                      <span className="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-white/95 text-slate-800 shadow-xs">
                        {course.level}
                      </span>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-emerald-600 uppercase tracking-wide">
                          {course.category}
                        </span>
                        <span className="flex items-center gap-1 font-bold text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          {course.rating} ({course.review_count})
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 line-clamp-2 leading-snug">
                        <Link href={`/courses/${course.slug}`} className="hover:text-emerald-600 transition">
                          {course.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                          {course.total_lessons} Lessons
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-5 pt-0 border-t border-slate-100 mt-2 space-y-3">
                    {isEnrolled && (
                      <div className="space-y-1 pt-3">
                        <div className="flex justify-between text-[11px] font-semibold text-slate-600">
                          <span>Progress</span>
                          <span className="text-emerald-600 font-bold">{progress}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <div className="pt-2 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={course.instructor.avatar}
                          alt={course.instructor.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="text-xs text-slate-600 font-medium truncate max-w-[110px]">
                          {course.instructor.name}
                        </span>
                      </div>

                      <Link
                        href={`/courses/${course.slug}`}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                          isEnrolled
                            ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                            : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs'
                        }`}
                      >
                        {isEnrolled ? 'Continue' : 'View Course'}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
