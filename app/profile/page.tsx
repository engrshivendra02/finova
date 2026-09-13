'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  User as UserIcon, 
  Award, 
  Flame, 
  BookOpen, 
  CheckCircle2, 
  Save, 
  LogOut, 
  TrendingUp,
  ShieldCheck,
  Star
} from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import { getUserStats } from '@/lib/storage';
import { INITIAL_ACHIEVEMENTS } from '@/lib/data/achievements';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export default function ProfilePage() {
  const router = useRouter();
  const { user, profile, updateUserBio, logout, isLoading } = useAuth();

  const [name, setName] = useState(user?.full_name || '');
  const [learningGoal, setLearningGoal] = useState(profile?.learning_goal || '');
  const [bio, setBio] = useState(profile?.bio || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login?redirect=/profile');
    } else if (user) {
      setName(user.full_name);
      setLearningGoal(profile?.learning_goal || '');
      setBio(profile?.bio || '');
    }
  }, [user, profile, isLoading, router]);

  const stats = user ? getUserStats(user.id) : null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserBio(bio, learningGoal, name);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  if (isLoading || !user) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <p className="text-xs text-slate-500">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Profile Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-3xl overflow-hidden bg-emerald-100 border-2 border-emerald-300 shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={user.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
              alt={user.full_name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-slate-900 text-emerald-400 shadow-md text-xs">
            <Flame className="w-4 h-4 fill-emerald-400" />
          </span>
        </div>

        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">{user.full_name}</h1>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wide">
              {user.role}
            </span>
          </div>
          <p className="text-xs text-slate-500">{user.email}</p>
          <p className="text-xs text-slate-600 max-w-lg leading-relaxed pt-1">
            {profile?.bio || 'Passionate student mastering foundational personal finance, budgeting, and long-term equity investing.'}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-3 text-xs text-slate-600 font-semibold">
            <span className="flex items-center gap-1 text-emerald-600">
              <TrendingUp className="w-4 h-4" /> {stats?.points || 150} Total Points
            </span>
            <span className="flex items-center gap-1 text-amber-500">
              <Flame className="w-4 h-4 fill-amber-400" /> {stats?.learning_streak || 1}-Day Streak
            </span>
            <span className="flex items-center gap-1 text-blue-600">
              <CheckCircle2 className="w-4 h-4" /> {stats?.lessons_completed || 0} Lessons Mastered
            </span>
          </div>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2 border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-bold rounded-xl transition flex items-center gap-1.5 shrink-0 self-center sm:self-start"
        >
          <LogOut className="w-3.5 h-3.5" /> Sign Out
        </button>
      </div>

      {/* Edit Profile Form */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-lg font-bold text-slate-900">Edit Profile & Goals</h2>
          {savedSuccess && (
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 animate-in fade-in">
              ✓ Changes saved successfully!
            </span>
          )}
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-xs sm:text-sm">
          <div className="space-y-1">
            <label className="font-semibold text-slate-700">Display Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-slate-700">Current Financial Goal</label>
            <input
              type="text"
              value={learningGoal}
              onChange={e => setLearningGoal(e.target.value)}
              placeholder="e.g. Build a 6-month emergency fund and start a ₹10,000 index SIP"
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-slate-700">Short Bio</label>
            <textarea
              rows={3}
              value={bio}
              onChange={e => setBio(e.target.value)}
              placeholder="Tell fellow learners about your background or career ambitions..."
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-emerald-500 resize-none"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md shadow-emerald-600/20 text-xs flex items-center gap-1.5 transition"
            >
              <Save className="w-3.5 h-3.5" /> Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Badges & Achievements Gallery */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Finova Achievements
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Earn badges as you complete lessons & pass quizzes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          {INITIAL_ACHIEVEMENTS.map(ach => {
            const isUnlocked = (stats?.lessons_completed || 0) >= 1; // Unlocked demonstration
            return (
              <div
                key={ach.id}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-1.5"
              >
                <span className="text-2xl">{ach.icon}</span>
                <h4 className="text-xs font-bold text-slate-900">{ach.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <FinancialDisclaimer />
    </div>
  );
}
