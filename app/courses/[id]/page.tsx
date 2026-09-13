'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  BookOpen, 
  Clock, 
  Star, 
  CheckCircle2, 
  PlayCircle, 
  Award, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';
import { 
  getStoredCourseById, 
  getUserEnrollments, 
  enrollInCourse 
} from '@/lib/storage';
import { useAuth } from '@/lib/auth-context';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';
import { fireSuccessConfetti } from '@/components/Confetti';

interface CourseDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const resolvedParams = use(params);
  const courseIdOrSlug = resolvedParams.id;
  const router = useRouter();
  const { user, refreshProfile } = useAuth();

  const [course, setCourse] = useState(() => getStoredCourseById(courseIdOrSlug));
  const [enrollment, setEnrollment] = useState(() => {
    if (!user || !course) return null;
    const all = getUserEnrollments(user.id);
    return all.find(e => e.course_id === course.id) || null;
  });

  useEffect(() => {
    const c = getStoredCourseById(courseIdOrSlug);
    setCourse(c);
    if (user && c) {
      const all = getUserEnrollments(user.id);
      setEnrollment(all.find(e => e.course_id === c.id) || null);
    }
  }, [courseIdOrSlug, user]);

  if (!course) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Course Not Found</h2>
        <p className="text-sm text-slate-500 mt-2">The course you are looking for does not exist or has been moved.</p>
        <Link href="/courses" className="mt-6 inline-block px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  const isEnrolled = Boolean(enrollment);
  const completedLessonIds = enrollment?.completed_lesson_ids || [];
  const progressPercent = enrollment?.progress_percent || 0;

  // Find first uncompleted lesson, or the first lesson
  let firstUncompletedLesson = course.modules[0]?.lessons[0];
  for (const mod of course.modules) {
    for (const les of mod.lessons) {
      if (!completedLessonIds.includes(les.id)) {
        firstUncompletedLesson = les;
        break;
      }
    }
    if (firstUncompletedLesson && !completedLessonIds.includes(firstUncompletedLesson.id)) break;
  }

  const handleEnroll = () => {
    if (!user) {
      router.push(`/login?redirect=/courses/${course.slug}`);
      return;
    }
    const newEnrollment = enrollInCourse(user.id, course.id);
    setEnrollment(newEnrollment);
    refreshProfile();
    fireSuccessConfetti();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back navigation */}
      <div>
        <Link
          href="/courses"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-600 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Course Catalog
        </Link>
      </div>

      {/* Hero Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
              {course.category}
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
              {course.level} Level
            </span>
            {course.badge && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-900 text-white">
                {course.badge}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {course.title}
          </h1>

          <p className="text-base text-slate-600 font-medium leading-relaxed">
            {course.tagline}
          </p>

          <p className="text-sm text-slate-500 leading-relaxed">
            {course.description}
          </p>

          {/* Instructor & Meta */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-500">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-9 h-9 rounded-full object-cover border border-slate-200"
              />
              <div>
                <p className="font-bold text-slate-800">{course.instructor.name}</p>
                <p className="text-[11px] text-slate-600">{course.instructor.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 font-bold text-amber-500">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="text-slate-800">{course.rating}</span>
              <span className="text-slate-600 font-normal">({course.review_count} ratings)</span>
            </div>

            <div className="flex items-center gap-1 font-semibold text-slate-700">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{course.duration}</span>
            </div>

            <div className="flex items-center gap-1 font-semibold text-slate-700">
              <BookOpen className="w-4 h-4 text-slate-400" />
              <span>{course.total_lessons} Lessons</span>
            </div>
          </div>
        </div>

        {/* Action Card */}
        <div className="lg:col-span-4">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5">
            <div className="relative h-44 rounded-xl overflow-hidden bg-slate-200 shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 text-emerald-600 flex items-center justify-center shadow-lg">
                  <PlayCircle className="w-6 h-6 ml-0.5" />
                </div>
              </div>
            </div>

            {isEnrolled ? (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Your Learning Progress</span>
                    <span className="text-emerald-600 font-bold">{progressPercent}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-600">
                    {completedLessonIds.length} of {course.total_lessons} lessons completed
                  </p>
                </div>

                {firstUncompletedLesson ? (
                  <Link
                    href={`/courses/${course.slug}/lesson/${firstUncompletedLesson.slug}`}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition"
                  >
                    Resume Course
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link
                    href={`/courses/${course.slug}/lesson/${course.modules[0]?.lessons[0]?.slug}`}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    Review Course Lessons
                  </Link>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-slate-900">100% Free</span>
                  <span className="text-xs text-emerald-600 font-bold">Open Education Access</span>
                </div>

                <button
                  onClick={handleEnroll}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition transform active:scale-95"
                >
                  Enroll Free & Start Learning
                  <ArrowRight className="w-4 h-4" />
                </button>

                <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Full lifetime access to all lessons & modules
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Interactive quiz evaluations & certification badges
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Automatic progress tracking saved in real time
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Curriculum Syllabus Tree */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Course Curriculum</h2>
          <p className="text-xs text-slate-500 mt-1">
            {course.modules.length} Modules • {course.total_lessons} Detailed Lessons
          </p>
        </div>

        <div className="space-y-6">
          {course.modules.map(module => (
            <div
              key={module.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
            >
              <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-200/80 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{module.title}</h3>
                  {module.description && (
                    <p className="text-xs text-slate-500 mt-0.5">{module.description}</p>
                  )}
                </div>
                <span className="text-xs text-slate-500 font-semibold">
                  {module.lessons.length} lessons
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {module.lessons.map(lesson => {
                  const isCompleted = completedLessonIds.includes(lesson.id);

                  return (
                    <Link
                      key={lesson.id}
                      href={`/courses/${course.slug}/lesson/${lesson.slug}`}
                      className="p-4 sm:px-6 flex items-center justify-between hover:bg-emerald-50/40 transition group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isCompleted
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-slate-100 text-slate-400 group-hover:text-emerald-600'
                        }`}>
                          {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : lesson.order}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-800 transition">
                            {lesson.title}
                          </p>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3" /> {lesson.duration}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {lesson.quiz_id && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 hidden sm:inline">
                            Quiz Included
                          </span>
                        )}
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor Bio & Guarantee */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900">About the Instructor</h3>
        <div className="flex items-start gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-16 h-16 rounded-2xl object-cover border border-slate-200"
          />
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900">{course.instructor.name}</h4>
            <p className="text-xs text-emerald-600 font-semibold">{course.instructor.role}</p>
            <p className="text-xs text-slate-600 leading-relaxed mt-1">{course.instructor.bio}</p>
          </div>
        </div>
      </div>

      <FinancialDisclaimer />
    </div>
  );
}
