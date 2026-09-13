'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  Plus, 
  Trash2, 
  Edit3, 
  Eye, 
  Flag, 
  AlertTriangle,
  Sparkles,
  TrendingUp,
  X
} from 'lucide-react';
import { Course, CourseCategory, CourseLevel, CommunityPost } from '@/types';
import { 
  getStoredCourses, 
  addOrUpdateCourse, 
  deleteStoredCourse, 
  getCommunityPosts, 
  deleteCommunityPost 
} from '@/lib/storage';
import { useAuth } from '@/lib/auth-context';

export default function AdminPage() {
  const { user, isAdmin, loginAsDemoAdmin } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>([]);
  const [activeTab, setActiveTab] = useState<'courses' | 'community' | 'users'>('courses');

  // New Course Modal
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [category, setCategory] = useState<CourseCategory>('Personal Finance');
  const [level, setLevel] = useState<CourseLevel>('Beginner');
  const [duration, setDuration] = useState('3.0 Hours');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80');

  useEffect(() => {
    setCourses(getStoredCourses());
    setCommunityPosts(getCommunityPosts());
  }, []);

  const handleOpenAdd = () => {
    setEditingCourseId(null);
    setTitle('');
    setTagline('');
    setCategory('Personal Finance');
    setLevel('Beginner');
    setDuration('3.0 Hours');
    setImage('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80');
    setIsCourseModalOpen(true);
  };

  const handleOpenEdit = (c: Course) => {
    setEditingCourseId(c.id);
    setTitle(c.title);
    setTagline(c.tagline);
    setCategory(c.category);
    setLevel(c.level);
    setDuration(c.duration);
    setImage(c.image);
    setIsCourseModalOpen(true);
  };

  const handleSaveCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    if (editingCourseId) {
      const existing = courses.find(c => c.id === editingCourseId);
      if (existing) {
        const updated: Course = {
          ...existing,
          title,
          tagline,
          category,
          level,
          duration,
          image,
        };
        addOrUpdateCourse(updated);
      }
    } else {
      const newCourse: Course = {
        id: `course-${Date.now()}`,
        slug,
        title,
        tagline: tagline || 'Practical financial knowledge for lasting wealth building.',
        description: tagline || 'Step-by-step masterclass on foundational wealth concepts.',
        category,
        level,
        duration,
        total_lessons: 3,
        rating: 4.9,
        review_count: 12,
        image,
        badge: 'New',
        instructor: {
          name: user?.full_name || 'Finova Instructor',
          role: 'Academic Educator',
          avatar: user?.avatar_url || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
        },
        modules: [
          {
            id: `mod-${Date.now()}`,
            course_id: `course-${Date.now()}`,
            title: 'Module 1: Foundations',
            order: 1,
            lessons: [
              {
                id: `les-${Date.now()}-1`,
                module_id: `mod-${Date.now()}`,
                course_id: `course-${Date.now()}`,
                title: 'Introduction & Core Concepts',
                slug: 'introduction-and-core-concepts',
                duration: '10 min',
                order: 1,
                content: 'Welcome to this masterclass! In this introductory lesson, we examine the bedrock framework required to master this financial domain.',
                takeaways: ['Understand your starting point', 'Eliminate bad habits early', 'Automate your investments']
              }
            ]
          }
        ],
        created_at: new Date().toISOString(),
      };
      addOrUpdateCourse(newCourse);
    }

    setCourses(getStoredCourses());
    setIsCourseModalOpen(false);
  };

  const handleDeleteCourse = (id: string) => {
    if (confirm('Are you sure you want to delete this course from the catalog?')) {
      deleteStoredCourse(id);
      setCourses(getStoredCourses());
    }
  };

  const handleDeletePost = (id: string) => {
    deleteCommunityPost(id);
    setCommunityPosts(getCommunityPosts());
  };

  if (!isAdmin) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 mx-auto flex items-center justify-center">
          <Shield className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Administrator Access Required</h2>
        <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
          The Admin Dashboard is restricted to platform administrators to manage courses, moderate discussions, and view analytics.
        </p>
        <div className="pt-2">
          <button
            onClick={loginAsDemoAdmin}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-600/20 transition inline-flex items-center gap-2"
          >
            <Shield className="w-4 h-4" /> Sign In as Demo Administrator
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> Platform Control Center
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Finova Admin Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Logged in as <strong className="text-white">{user?.full_name}</strong> (Administrator)
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-purple-600/25 flex items-center gap-2 transition self-start md:self-auto"
        >
          <Plus className="w-4 h-4" /> Add New Course
        </button>
      </div>

      {/* Platform Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        {[
          { label: 'Total Enrolled Users', value: '45,210', icon: Users, color: 'blue' },
          { label: 'Daily Active Learners', value: '3,840', icon: TrendingUp, color: 'emerald' },
          { label: 'Published Courses', value: courses.length, icon: BookOpen, color: 'purple' },
          { label: 'Lessons Completed', value: '184,500', icon: CheckCircle2, color: 'teal' },
          { label: 'Quiz Submissions', value: '72,120', icon: Award, color: 'amber' },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{item.label}</span>
                <Icon className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {item.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* Admin Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        {[
          { id: 'courses', label: `Courses Management (${courses.length})` },
          { id: 'community', label: `Community Moderation (${communityPosts.length})` },
          { id: 'users', label: 'Platform Users' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === tab.id
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: COURSES MANAGEMENT */}
      {activeTab === 'courses' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 sm:px-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Live Course Catalog</h3>
            <span className="text-xs text-slate-500">Edit content or manage modules</span>
          </div>

          <div className="divide-y divide-slate-100">
            {courses.map(course => (
              <div
                key={course.id}
                className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-12 rounded-xl object-cover border border-slate-200"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800">
                        {course.category}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400">
                        {course.level}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mt-0.5">{course.title}</h4>
                    <p className="text-xs text-slate-500">{course.total_lessons} Lessons • {course.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg text-xs font-semibold flex items-center gap-1"
                    title="Preview Public Course Page"
                  >
                    <Eye className="w-3.5 h-3.5" /> Preview
                  </Link>

                  <button
                    onClick={() => handleOpenEdit(course)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg text-xs font-semibold flex items-center gap-1"
                    title="Edit Course"
                  >
                    <Edit3 className="w-3.5 h-3.5" /> Edit
                  </button>

                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg text-xs font-semibold flex items-center gap-1"
                    title="Delete Course"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: COMMUNITY MODERATION */}
      {activeTab === 'community' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 sm:px-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Community Posts Moderation</h3>
            <span className="text-xs text-slate-500">Monitor reported or inappropriate discussions</span>
          </div>

          <div className="divide-y divide-slate-100">
            {communityPosts.map(post => (
              <div
                key={post.id}
                className="p-4 sm:px-6 flex items-start justify-between gap-4 hover:bg-slate-50 transition"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">{post.author_name}</span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    {post.reported && (
                      <span className="text-[10px] font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded flex items-center gap-1">
                        <Flag className="w-3 h-3" /> Reported by users
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{post.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{post.content}</p>
                </div>

                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="px-3 py-1.5 border border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold flex items-center gap-1 shrink-0"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Remove Post
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: PLATFORM USERS */}
      {activeTab === 'users' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 sm:px-6 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Registered Accounts</h3>
          </div>
          <div className="divide-y divide-slate-100 text-xs">
            <div className="p-4 sm:px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center">
                  SM
                </div>
                <div>
                  <p className="font-bold text-slate-900">Dr. Sarah Mitchell (Admin)</p>
                  <p className="text-slate-400">admin@finova.edu</p>
                </div>
              </div>
              <span className="font-bold px-2.5 py-0.5 rounded bg-purple-100 text-purple-800">
                Administrator
              </span>
            </div>
            <div className="p-4 sm:px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">
                  AR
                </div>
                <div>
                  <p className="font-bold text-slate-900">Alex Rivera (Student)</p>
                  <p className="text-slate-400">student@finova.edu</p>
                </div>
              </div>
              <span className="font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                Student
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Course Create / Edit Modal */}
      {isCourseModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                {editingCourseId ? 'Edit Course Details' : 'Create New Course'}
              </h3>
              <button
                onClick={() => setIsCourseModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCourse} className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Course Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Masterclass in Technical Analysis"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Tagline / Brief Summary</label>
                <input
                  type="text"
                  required
                  placeholder="One sentence overview of the course outcomes"
                  value={tagline}
                  onChange={e => setTagline(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Category</label>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none"
                  >
                    <option value="Personal Finance">Personal Finance</option>
                    <option value="Stock Market">Stock Market</option>
                    <option value="Mutual Funds">Mutual Funds</option>
                    <option value="Investing">Investing</option>
                    <option value="Budgeting">Budgeting</option>
                    <option value="Taxation">Taxation</option>
                    <option value="Financial Planning">Financial Planning</option>
                    <option value="Cryptocurrency">Cryptocurrency</option>
                    <option value="Banking">Banking</option>
                    <option value="Wealth Building">Wealth Building</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Level</label>
                  <select
                    value={level}
                    onChange={e => setLevel(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Estimated Duration</label>
                <input
                  type="text"
                  placeholder="e.g. 3.5 Hours"
                  value={duration}
                  onChange={e => setDuration(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Cover Image URL</label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/..."
                  value={image}
                  onChange={e => setImage(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCourseModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-md shadow-purple-600/20 transition"
                >
                  {editingCourseId ? 'Save Updates' : 'Publish Course'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
