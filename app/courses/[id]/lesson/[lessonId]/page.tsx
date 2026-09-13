'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  HelpCircle, 
  Sparkles, 
  Award, 
  ArrowLeft,
  Menu,
  X,
  Share2,
  Bookmark
} from 'lucide-react';
import { 
  getStoredCourseById, 
  getUserEnrollments, 
  markLessonComplete 
} from '@/lib/storage';
import { Lesson, Module } from '@/types';
import { INITIAL_QUIZZES } from '@/lib/data/quizzes';
import { useAuth } from '@/lib/auth-context';
import QuizPlayer from '@/components/QuizPlayer';
import { fireSuccessConfetti } from '@/components/Confetti';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

interface LessonPageProps {
  params: Promise<{ id: string; lessonId: string }>;
}

export default function LessonPage({ params }: LessonPageProps) {
  const resolvedParams = use(params);
  const { id: courseIdOrSlug, lessonId: lessonIdOrSlug } = resolvedParams;
  const router = useRouter();
  const { user, refreshProfile } = useAuth();

  const [course, setCourse] = useState(() => getStoredCourseById(courseIdOrSlug));
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    const c = getStoredCourseById(courseIdOrSlug);
    setCourse(c);

    if (user && c) {
      const enrollments = getUserEnrollments(user.id);
      const enr = enrollments.find(e => e.course_id === c.id);
      if (enr) {
        setCompletedLessonIds(enr.completed_lesson_ids);
      }
    }
  }, [courseIdOrSlug, user]);

  if (!course) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h2 className="text-xl font-bold text-slate-800">Course Not Found</h2>
        <Link href="/courses" className="mt-4 inline-block px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold">
          ← Back to Catalog
        </Link>
      </div>
    );
  }

  // Find the target lesson
  let currentLesson: Lesson | null = null;
  let currentModule: Module | null = null;
  const allLessons: { lesson: Lesson; module: Module }[] = [];

  course.modules.forEach(mod => {
    mod.lessons.forEach(les => {
      allLessons.push({ lesson: les, module: mod });
      if (les.id === lessonIdOrSlug || les.slug === lessonIdOrSlug) {
        currentLesson = les;
        currentModule = mod;
      }
    });
  });

  // Fallback to first lesson if not found
  if (!currentLesson && allLessons.length > 0) {
    currentLesson = allLessons[0].lesson;
    currentModule = allLessons[0].module;
  }

  if (!currentLesson) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h2 className="text-xl font-bold text-slate-800">Lesson Not Found</h2>
      </div>
    );
  }

  const activeLesson = currentLesson;
  const activeModule = currentModule;

  const currentIndex = allLessons.findIndex(item => item.lesson.id === activeLesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1].lesson : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1].lesson : null;

  const isCompleted = completedLessonIds.includes(activeLesson.id);

  // Associated quiz (if any)
  const quiz = activeLesson.quiz_id 
    ? INITIAL_QUIZZES.find(q => q.id === activeLesson.quiz_id)
    : INITIAL_QUIZZES.find(q => q.course_id === course.id);

  const handleMarkComplete = () => {
    if (!user) {
      router.push(`/login?redirect=/courses/${course.slug}/lesson/${activeLesson.slug}`);
      return;
    }

    const updatedEnrollment = markLessonComplete(user.id, course.id, activeLesson.id);
    setCompletedLessonIds(updatedEnrollment.completed_lesson_ids);
    refreshProfile();
    fireSuccessConfetti();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top sticky navigation */}
      <div className="sticky top-18 z-30 bg-white border-b border-slate-200 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href={`/courses/${course.slug}`}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition"
            title="Back to Course Overview"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
              {course.title}
            </span>
            <h1 className="text-xs sm:text-sm font-bold text-slate-900 truncate max-w-md">
              {activeLesson.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isCompleted ? (
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Completed
            </span>
          ) : (
            <button
              onClick={handleMarkComplete}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mark as</span> Complete
            </button>
          )}

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 lg:hidden"
            title="Toggle Curriculum Sidebar"
          >
            {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Learning Workspace */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Lesson Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Media Header / Video Placeholder */}
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 shadow-md flex items-center justify-center text-white border border-slate-800">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative text-center space-y-3 p-6 max-w-md">
              <div className="w-16 h-16 rounded-2xl bg-emerald-600/90 text-white mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20 backdrop-blur-xs">
                <Play className="w-8 h-8 ml-1 fill-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold">Interactive Learning Masterclass</h3>
              <p className="text-xs text-slate-300">
                Visual Concept Deck • Duration: {activeLesson.duration}
              </p>
            </div>
          </div>

          {/* Lesson Text Content */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                {activeModule?.title}
              </span>
              <span className="text-xs text-slate-600 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> {activeLesson.duration}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {activeLesson.title}
            </h2>

            {/* Markdown Body Text */}
            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
              {activeLesson.content.split('\n\n').map((paragraph: string, idx: number) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-lg font-bold text-slate-900 pt-4 pb-1">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-1.5 text-sm">
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

            {/* Practical Real-World Example Box */}
            {activeLesson.practical_example && (
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Real-World Scenario: {activeLesson.practical_example.title}</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 space-y-2">
                  <p>
                    <strong className="text-slate-900">Scenario:</strong> {activeLesson.practical_example.scenario}
                  </p>
                  <p>
                    <strong className="text-slate-900">Practical Solution:</strong> {activeLesson.practical_example.solution}
                  </p>
                  <p className="font-semibold text-emerald-800 pt-1">
                    🎯 <strong>Takeaway:</strong> {activeLesson.practical_example.takeaway}
                  </p>
                </div>
              </div>
            )}

            {/* Key Takeaways */}
            {activeLesson.takeaways && activeLesson.takeaways.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-600" />
                  Key Takeaways
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {activeLesson.takeaways.map((takeaway: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Complete & Next Action Bar */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleMarkComplete}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs shadow-xs transition flex items-center justify-center gap-2 ${
                  isCompleted
                    ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                {isCompleted ? 'Completed ✓' : 'Mark Lesson Complete (+25 pts)'}
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {prevLesson && (
                  <Link
                    href={`/courses/${course.slug}/lesson/${prevLesson.slug}`}
                    className="flex-1 sm:flex-initial px-4 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-1 transition"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </Link>
                )}

                {nextLesson && (
                  <Link
                    href={`/courses/${course.slug}/lesson/${nextLesson.slug}`}
                    className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold flex items-center justify-center gap-1 shadow-xs transition"
                  >
                    Next Lesson <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Quiz Trigger / Inline Quiz Section */}
          {quiz && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-600" />
                  Course Assessment Quiz
                </h3>
                <button
                  onClick={() => setShowQuiz(!showQuiz)}
                  className="text-xs font-bold text-purple-600 hover:text-purple-700 underline"
                >
                  {showQuiz ? 'Hide Quiz' : 'Take Interactive Quiz →'}
                </button>
              </div>

              {showQuiz && (
                <div className="animate-in fade-in duration-200">
                  <QuizPlayer quiz={quiz} />
                </div>
              )}
            </div>
          )}

          <FinancialDisclaimer />
        </div>

        {/* Right Syllabus Sidebar */}
        <aside className={`lg:col-span-4 ${
          isSidebarOpen 
            ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto block' 
            : 'hidden lg:block'
        }`}>
          {isSidebarOpen && (
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-4 lg:hidden">
              <h3 className="font-bold text-slate-900 text-sm">Course Outline</h3>
              <button onClick={() => setIsSidebarOpen(false)} className="p-1 text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-4 sticky top-36 shadow-xs max-h-[calc(100vh-160px)] overflow-y-auto">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">Course Syllabus</h3>
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>{completedLessonIds.length} of {allLessons.length} completed</span>
                <span className="text-emerald-600 font-bold">
                  {allLessons.length > 0 ? Math.round((completedLessonIds.length / allLessons.length) * 100) : 0}%
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {course.modules.map(mod => (
                <div key={mod.id} className="space-y-1">
                  <h4 className="text-[11px] font-bold text-slate-600 uppercase tracking-wider px-2 py-1">
                    {mod.title}
                  </h4>
                  <div className="space-y-0.5">
                    {mod.lessons.map(les => {
                      const isCurrent = les.id === activeLesson.id;
                      const isDone = completedLessonIds.includes(les.id);

                      return (
                        <Link
                          key={les.id}
                          href={`/courses/${course.slug}/lesson/${les.slug}`}
                          onClick={() => setIsSidebarOpen(false)}
                          className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-medium transition ${
                            isCurrent
                              ? 'bg-emerald-50 text-emerald-900 font-bold border border-emerald-200'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                              isDone
                                ? 'text-emerald-600'
                                : 'text-slate-300'
                            }`}>
                              {isDone ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : '○'}
                            </span>
                            <span className="truncate">{les.title}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 shrink-0 ml-1">
                            {les.duration}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
