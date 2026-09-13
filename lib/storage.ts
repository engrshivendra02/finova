import { 
  User, 
  Profile, 
  Course, 
  Enrollment, 
  QuizAttempt, 
  CommunityPost, 
  Comment, 
  UserStats 
} from '@/types';
import { INITIAL_COURSES } from './data/courses';
import { INITIAL_COMMUNITY_POSTS } from './data/community';
import { INITIAL_ACHIEVEMENTS } from './data/achievements';

const STORAGE_KEYS = {
  CURRENT_USER: 'finova_current_user',
  USERS: 'finova_users',
  PROFILES: 'finova_profiles',
  COURSES: 'finova_courses',
  ENROLLMENTS: 'finova_enrollments',
  LESSON_PROGRESS: 'finova_lesson_progress',
  QUIZ_ATTEMPTS: 'finova_quiz_attempts',
  COMMUNITY_POSTS: 'finova_community_posts',
  USER_ACHIEVEMENTS: 'finova_user_achievements',
};

export const DEMO_STUDENT: User = {
  id: 'demo-student-1',
  email: 'student@finova.edu',
  full_name: 'Alex Rivera',
  avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  role: 'student',
  created_at: '2025-01-01T00:00:00Z',
};

export const DEMO_ADMIN: User = {
  id: 'demo-admin-1',
  email: 'admin@finova.edu',
  full_name: 'Dr. Sarah Mitchell',
  avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  role: 'admin',
  created_at: '2025-01-01T00:00:00Z',
};

// Safe browser local storage wrapper
export const storage = {
  get: <T>(key: string, fallback: T): T => {
    if (typeof window === 'undefined') return fallback;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch (e) {
      console.error(`Error reading ${key} from storage:`, e);
      return fallback;
    }
  },
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error writing ${key} to storage:`, e);
    }
  },
};

// INITIALIZER: ensure initial state exists
export function initializeStorage() {
  if (typeof window === 'undefined') return;

  // Initialize Courses if not present
  if (!localStorage.getItem(STORAGE_KEYS.COURSES)) {
    storage.set(STORAGE_KEYS.COURSES, INITIAL_COURSES);
  }

  // Initialize Community Posts if not present
  if (!localStorage.getItem(STORAGE_KEYS.COMMUNITY_POSTS)) {
    storage.set(STORAGE_KEYS.COMMUNITY_POSTS, INITIAL_COMMUNITY_POSTS);
  }

  // Initialize Default Users
  const users = storage.get<User[]>(STORAGE_KEYS.USERS, []);
  if (users.length === 0) {
    storage.set(STORAGE_KEYS.USERS, [DEMO_STUDENT, DEMO_ADMIN]);
  }

  // Initialize Profiles
  const profiles = storage.get<Record<string, Profile>>(STORAGE_KEYS.PROFILES, {});
  if (!profiles[DEMO_STUDENT.id]) {
    profiles[DEMO_STUDENT.id] = {
      id: 'profile-student-1',
      user_id: DEMO_STUDENT.id,
      full_name: DEMO_STUDENT.full_name,
      email: DEMO_STUDENT.email,
      avatar_url: DEMO_STUDENT.avatar_url || '',
      learning_goal: 'Achieve financial freedom through smart index investing and budgeting',
      learning_streak: 5,
      points: 380,
      bio: 'Junior Developer passionate about learning personal finance and building an emergency fund.',
      preferred_topics: ['Personal Finance', 'Stock Market', 'Mutual Funds']
    };
  }
  if (!profiles[DEMO_ADMIN.id]) {
    profiles[DEMO_ADMIN.id] = {
      id: 'profile-admin-1',
      user_id: DEMO_ADMIN.id,
      full_name: DEMO_ADMIN.full_name,
      email: DEMO_ADMIN.email,
      avatar_url: DEMO_ADMIN.avatar_url || '',
      learning_goal: 'Expand global financial literacy and empower students worldwide',
      learning_streak: 28,
      points: 2450,
      bio: 'Finova Academic Dean & Senior Finance Educator.',
      preferred_topics: ['Investing', 'Wealth Building', 'Financial Planning']
    };
  }
  storage.set(STORAGE_KEYS.PROFILES, profiles);

  // Initialize default seed enrollments for Demo Student
  const enrollments = storage.get<Enrollment[]>(STORAGE_KEYS.ENROLLMENTS, []);
  if (enrollments.length === 0) {
    storage.set(STORAGE_KEYS.ENROLLMENTS, [
      {
        id: 'enr-1',
        user_id: DEMO_STUDENT.id,
        course_id: 'course-1',
        enrolled_at: '2025-01-15T00:00:00Z',
        progress_percent: 43,
        completed_lesson_ids: ['les-1-1', 'les-1-2', 'les-1-3']
      },
      {
        id: 'enr-2',
        user_id: DEMO_STUDENT.id,
        course_id: 'course-2',
        enrolled_at: '2025-01-20T00:00:00Z',
        progress_percent: 33,
        completed_lesson_ids: ['les-2-1', 'les-2-2']
      }
    ]);
  }
}

// -------------------------------------------------------------
// COURSE API
// -------------------------------------------------------------
export function getStoredCourses(): Course[] {
  return storage.get<Course[]>(STORAGE_KEYS.COURSES, INITIAL_COURSES);
}

export function getStoredCourseById(idOrSlug: string): Course | undefined {
  const courses = getStoredCourses();
  return courses.find(c => c.id === idOrSlug || c.slug === idOrSlug);
}

export function addOrUpdateCourse(course: Course): void {
  const courses = getStoredCourses();
  const index = courses.findIndex(c => c.id === course.id);
  if (index >= 0) {
    courses[index] = course;
  } else {
    courses.unshift(course);
  }
  storage.set(STORAGE_KEYS.COURSES, courses);
}

export function deleteStoredCourse(courseId: string): void {
  const courses = getStoredCourses();
  const updated = courses.filter(c => c.id !== courseId);
  storage.set(STORAGE_KEYS.COURSES, updated);
}

// -------------------------------------------------------------
// ENROLLMENT & LESSON PROGRESS
// -------------------------------------------------------------
export function getUserEnrollments(userId: string): Enrollment[] {
  const all = storage.get<Enrollment[]>(STORAGE_KEYS.ENROLLMENTS, []);
  return all.filter(e => e.user_id === userId);
}

export function isUserEnrolled(userId: string, courseId: string): boolean {
  const enrollments = getUserEnrollments(userId);
  return enrollments.some(e => e.course_id === courseId);
}

export function enrollInCourse(userId: string, courseId: string): Enrollment {
  const all = storage.get<Enrollment[]>(STORAGE_KEYS.ENROLLMENTS, []);
  const existing = all.find(e => e.user_id === userId && e.course_id === courseId);
  if (existing) return existing;

  const newEnrollment: Enrollment = {
    id: `enr-${Date.now()}`,
    user_id: userId,
    course_id: courseId,
    enrolled_at: new Date().toISOString(),
    progress_percent: 0,
    completed_lesson_ids: []
  };
  all.push(newEnrollment);
  storage.set(STORAGE_KEYS.ENROLLMENTS, all);
  return newEnrollment;
}

export function markLessonComplete(userId: string, courseId: string, lessonId: string): Enrollment {
  let all = storage.get<Enrollment[]>(STORAGE_KEYS.ENROLLMENTS, []);
  let enrollment = all.find(e => e.user_id === userId && e.course_id === courseId);

  if (!enrollment) {
    enrollment = enrollInCourse(userId, courseId);
    all = storage.get<Enrollment[]>(STORAGE_KEYS.ENROLLMENTS, []);
  }

  if (!enrollment.completed_lesson_ids.includes(lessonId)) {
    enrollment.completed_lesson_ids.push(lessonId);
  }

  // Calculate percentage
  const course = getStoredCourseById(courseId);
  if (course) {
    let totalLessonsCount = 0;
    course.modules.forEach(m => {
      totalLessonsCount += m.lessons.length;
    });
    if (totalLessonsCount > 0) {
      enrollment.progress_percent = Math.min(
        100,
        Math.round((enrollment.completed_lesson_ids.length / totalLessonsCount) * 100)
      );
    }
  }

  if (enrollment.progress_percent === 100 && !enrollment.completed_at) {
    enrollment.completed_at = new Date().toISOString();
  }

  // Save back
  const index = all.findIndex(e => e.id === enrollment?.id);
  if (index >= 0 && enrollment) {
    all[index] = enrollment;
    storage.set(STORAGE_KEYS.ENROLLMENTS, all);
  }

  // Award points to profile
  addPointsToProfile(userId, 25);

  return enrollment;
}

// -------------------------------------------------------------
// PROFILE & STATS
// -------------------------------------------------------------
export function getUserProfile(userId: string): Profile | null {
  const profiles = storage.get<Record<string, Profile>>(STORAGE_KEYS.PROFILES, {});
  return profiles[userId] || null;
}

export function updateUserProfile(userId: string, updates: Partial<Profile>): Profile {
  const profiles = storage.get<Record<string, Profile>>(STORAGE_KEYS.PROFILES, {});
  const existing = profiles[userId] || {
    id: `prof-${userId}`,
    user_id: userId,
    full_name: 'Finova Student',
    email: '',
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    learning_goal: 'Learn personal finance',
    learning_streak: 1,
    points: 100,
    preferred_topics: ['Personal Finance']
  };

  const updated: Profile = {
    ...existing,
    ...updates,
    user_id: userId,
  };

  profiles[userId] = updated;
  storage.set(STORAGE_KEYS.PROFILES, profiles);
  return updated;
}

export function addPointsToProfile(userId: string, pointsToAdd: number) {
  const profile = getUserProfile(userId);
  if (profile) {
    updateUserProfile(userId, { points: (profile.points || 0) + pointsToAdd });
  }
}

export function getUserStats(userId: string): UserStats {
  const enrollments = getUserEnrollments(userId);
  const quizAttempts = getUserQuizAttempts(userId);
  const profile = getUserProfile(userId);

  let totalCompletedLessons = 0;
  let totalProgressSum = 0;

  enrollments.forEach(e => {
    totalCompletedLessons += e.completed_lesson_ids.length;
    totalProgressSum += e.progress_percent;
  });

  const overallProgress = enrollments.length > 0 
    ? Math.round(totalProgressSum / enrollments.length) 
    : 0;

  const avgQuiz = quizAttempts.length > 0
    ? Math.round(quizAttempts.reduce((acc, q) => acc + q.percentage, 0) / quizAttempts.length)
    : 85;

  return {
    courses_enrolled: enrollments.length,
    lessons_completed: totalCompletedLessons,
    learning_streak: profile?.learning_streak || 1,
    average_quiz_score: avgQuiz,
    overall_progress: overallProgress,
    points: profile?.points || 150
  };
}

// -------------------------------------------------------------
// QUIZ ATTEMPTS
// -------------------------------------------------------------
export function saveQuizAttempt(attempt: QuizAttempt): void {
  const all = storage.get<QuizAttempt[]>(STORAGE_KEYS.QUIZ_ATTEMPTS, []);
  all.unshift(attempt);
  storage.set(STORAGE_KEYS.QUIZ_ATTEMPTS, all);

  if (attempt.passed) {
    addPointsToProfile(attempt.user_id, attempt.score * 10);
  }
}

export function getUserQuizAttempts(userId: string): QuizAttempt[] {
  const all = storage.get<QuizAttempt[]>(STORAGE_KEYS.QUIZ_ATTEMPTS, []);
  return all.filter(q => q.user_id === userId);
}

// -------------------------------------------------------------
// COMMUNITY
// -------------------------------------------------------------
export function getCommunityPosts(): CommunityPost[] {
  return storage.get<CommunityPost[]>(STORAGE_KEYS.COMMUNITY_POSTS, INITIAL_COMMUNITY_POSTS);
}

export function createCommunityPost(postData: Omit<CommunityPost, 'id' | 'likes' | 'liked_by' | 'comments' | 'created_at'>): CommunityPost {
  const posts = getCommunityPosts();
  const newPost: CommunityPost = {
    ...postData,
    id: `post-${Date.now()}`,
    likes: 0,
    liked_by: [],
    comments: [],
    created_at: new Date().toISOString(),
  };
  posts.unshift(newPost);
  storage.set(STORAGE_KEYS.COMMUNITY_POSTS, posts);
  addPointsToProfile(postData.user_id, 20);
  return newPost;
}

export function toggleLikePost(postId: string, userId: string): CommunityPost | null {
  const posts = getCommunityPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return null;

  if (post.liked_by.includes(userId)) {
    post.liked_by = post.liked_by.filter(id => id !== userId);
    post.likes = Math.max(0, post.likes - 1);
  } else {
    post.liked_by.push(userId);
    post.likes += 1;
  }

  storage.set(STORAGE_KEYS.COMMUNITY_POSTS, posts);
  return post;
}

export function addCommentToPost(postId: string, commentData: Omit<Comment, 'id' | 'created_at' | 'likes'>): Comment | null {
  const posts = getCommunityPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return null;

  const newComment: Comment = {
    ...commentData,
    id: `comm-${Date.now()}`,
    created_at: new Date().toISOString(),
    likes: 0
  };

  post.comments.push(newComment);
  storage.set(STORAGE_KEYS.COMMUNITY_POSTS, posts);
  addPointsToProfile(commentData.user_id, 10);
  return newComment;
}

export function reportCommunityPost(postId: string): void {
  const posts = getCommunityPosts();
  const post = posts.find(p => p.id === postId);
  if (post) {
    post.reported = true;
    storage.set(STORAGE_KEYS.COMMUNITY_POSTS, posts);
  }
}

export function deleteCommunityPost(postId: string): void {
  const posts = getCommunityPosts();
  const updated = posts.filter(p => p.id !== postId);
  storage.set(STORAGE_KEYS.COMMUNITY_POSTS, updated);
}
