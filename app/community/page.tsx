'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  Users, 
  MessageSquare, 
  ThumbsUp, 
  Flag, 
  PlusCircle, 
  Trash2, 
  Search, 
  Send, 
  X, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { CommunityPost } from '@/types';
import { 
  getCommunityPosts, 
  createCommunityPost, 
  toggleLikePost, 
  addCommentToPost, 
  reportCommunityPost, 
  deleteCommunityPost 
} from '@/lib/storage';
import { useAuth } from '@/lib/auth-context';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

const CATEGORIES = [
  'All',
  'Beginner Questions',
  'Investing',
  'Stocks',
  'Mutual Funds',
  'Personal Finance',
  'Careers'
] as const;

export default function CommunityPage() {
  const { user, profile, isAdmin, refreshProfile } = useAuth();
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // New Post Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postCategory, setPostCategory] = useState<CommunityPost['category']>('Beginner Questions');
  const [postContent, setPostContent] = useState('');

  // Comment input per post
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setPosts(getCommunityPosts());
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle.trim() || !postContent.trim()) return;

    const authorName = user?.full_name || 'Anonymous Student';
    const authorAvatar = user?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
    const userId = user?.id || 'guest-user';

    createCommunityPost({
      user_id: userId,
      author_name: authorName,
      author_avatar: authorAvatar,
      author_badge: user?.role === 'admin' ? 'Finova Admin' : 'Active Learner',
      category: postCategory,
      title: postTitle,
      content: postContent,
    });

    setPosts(getCommunityPosts());
    setPostTitle('');
    setPostContent('');
    setIsModalOpen(false);
    refreshProfile();
    showToast('Discussion post published successfully (+20 points)!');
  };

  const handleLike = (postId: string) => {
    const userId = user?.id || 'guest-user';
    toggleLikePost(postId, userId);
    setPosts(getCommunityPosts());
  };

  const handleAddComment = (postId: string) => {
    if (!commentText.trim()) return;

    addCommentToPost(postId, {
      post_id: postId,
      user_id: user?.id || 'guest-user',
      author_name: user?.full_name || 'Anonymous Student',
      author_avatar: user?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      content: commentText.trim(),
    });

    setPosts(getCommunityPosts());
    setCommentText('');
    refreshProfile();
    showToast('Comment submitted (+10 points)!');
  };

  const handleReport = (postId: string) => {
    reportCommunityPost(postId);
    setPosts(getCommunityPosts());
    showToast('Post reported to moderators for review.');
  };

  const handleDelete = (postId: string) => {
    deleteCommunityPost(postId);
    setPosts(getCommunityPosts());
    showToast('Post removed.');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-2xl border border-slate-700 text-xs font-semibold flex items-center gap-2 animate-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {toastMessage}
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <Users className="w-4 h-4" /> Peer Learning Community
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Finova Community Discussions
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Ask questions, debate investment strategies, share personal budgeting wins, and learn alongside thousands of ambitious students and professionals.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/25 flex items-center gap-2 transition shrink-0 self-start md:self-auto"
        >
          <PlusCircle className="w-4 h-4" /> Ask Question / New Post
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions and community threads..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800"
          />
        </div>

        {/* Categories Bar */}
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

      {/* Discussions Feed */}
      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 text-slate-500">
            <MessageSquare className="w-12 h-12 mx-auto text-slate-300 mb-3" />
            <h3 className="text-base font-bold text-slate-700">No discussions found</h3>
            <p className="text-xs text-slate-400 mt-1">Be the first to start a conversation in this category!</p>
          </div>
        ) : (
          filteredPosts.map(post => {
            const isLiked = user && post.liked_by?.includes(user.id);
            const isCommentsOpen = activeCommentPostId === post.id;

            return (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 hover:border-slate-300 transition"
              >
                {/* Author row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.author_avatar}
                      alt={post.author_name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">{post.author_name}</span>
                        {post.author_badge && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {post.author_badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600">
                        {new Date(post.created_at).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Post Body */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{post.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {post.content}
                  </p>
                </div>

                {/* Actions Toolbar */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-1.5 font-semibold transition ${
                        isLiked ? 'text-emerald-600 font-bold' : 'hover:text-emerald-600'
                      }`}
                    >
                      <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-emerald-600 text-emerald-600' : ''}`} />
                      <span>{post.likes} Likes</span>
                    </button>

                    <button
                      onClick={() => setActiveCommentPostId(isCommentsOpen ? null : post.id)}
                      className="flex items-center gap-1.5 hover:text-emerald-600 font-semibold transition"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.comments?.length || 0} Replies</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleReport(post.id)}
                      className="text-slate-400 hover:text-amber-600 p-1 rounded"
                      title="Report inappropriate content"
                    >
                      <Flag className="w-3.5 h-3.5" />
                    </button>

                    {isAdmin && (
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 rounded"
                        title="Admin delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Comments Accordion */}
                {isCommentsOpen && (
                  <div className="pt-4 border-t border-slate-100 space-y-4 animate-in fade-in duration-150">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Discussion Replies ({post.comments?.length || 0})
                    </h4>

                    {/* Existing Comments */}
                    <div className="space-y-3">
                      {post.comments && post.comments.length > 0 ? (
                        post.comments.map(c => (
                          <div key={c.id} className="p-3 bg-slate-50 rounded-xl space-y-1.5 border border-slate-100">
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2 font-bold text-slate-800">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={c.author_avatar}
                                  alt={c.author_name}
                                  className="w-5 h-5 rounded-full object-cover"
                                />
                                <span>{c.author_name}</span>
                              </div>
                              <span className="text-[10px] text-slate-600">
                                {new Date(c.created_at).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed pl-7">
                              {c.content}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-slate-400 italic">No replies yet. Be the first to answer!</p>
                      )}
                    </div>

                    {/* Add Comment Input */}
                    <div className="flex gap-2 pt-2">
                      <input
                        type="text"
                        placeholder="Write a helpful response..."
                        value={commentText}
                        onChange={e => setCommentText(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            handleAddComment(post.id);
                          }
                        }}
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-emerald-500"
                      />
                      <button
                        onClick={() => handleAddComment(post.id)}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
                      >
                        <Send className="w-3 h-3" /> Reply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* New Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                Start a New Discussion
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Topic Category</label>
                <select
                  value={postCategory}
                  onChange={e => setPostCategory(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none"
                >
                  <option value="Beginner Questions">Beginner Questions</option>
                  <option value="Investing">Investing</option>
                  <option value="Stocks">Stocks</option>
                  <option value="Mutual Funds">Mutual Funds</option>
                  <option value="Personal Finance">Personal Finance</option>
                  <option value="Careers">Careers</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Discussion Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. How do I choose between an active vs passive index fund?"
                  value={postTitle}
                  onChange={e => setPostTitle(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Your Question or Insights</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details, numbers, or context so fellow community members can give you thoughtful insights..."
                  value={postContent}
                  onChange={e => setPostContent(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md shadow-emerald-600/20 transition"
                >
                  Publish Discussion (+20 pts)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <FinancialDisclaimer />
    </div>
  );
}
