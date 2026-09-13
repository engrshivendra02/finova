export type UserRole = 'student' | 'admin';

export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: UserRole;
  created_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  avatar_url: string;
  learning_goal: string;
  learning_streak: number;
  last_active_date?: string;
  points: number;
  bio?: string;
  preferred_topics: string[];
}

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type CourseCategory =
  | 'Personal Finance'
  | 'Stock Market'
  | 'Mutual Funds'
  | 'Investing'
  | 'Budgeting'
  | 'Taxation'
  | 'Financial Planning'
  | 'Cryptocurrency'
  | 'Banking'
  | 'Wealth Building';

export interface Instructor {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface PracticalExample {
  title: string;
  scenario: string;
  solution: string;
  takeaway: string;
}

export interface Lesson {
  id: string;
  module_id: string;
  course_id: string;
  title: string;
  slug: string;
  duration: string; // e.g. "8 min"
  order: number;
  video_url?: string;
  content: string;
  takeaways: string[];
  practical_example?: PracticalExample;
  quiz_id?: string;
}

export interface Module {
  id: string;
  course_id: string;
  title: string;
  description?: string;
  order: number;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: CourseCategory;
  level: CourseLevel;
  duration: string; // e.g. "4.5 Hours"
  total_lessons: number;
  rating: number; // e.g. 4.9
  review_count: number;
  image: string;
  badge?: string;
  instructor: Instructor;
  modules: Module[];
  created_at: string;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  completed_at?: string;
  progress_percent: number;
  completed_lesson_ids: string[];
}

export interface LessonProgress {
  id: string;
  user_id: string;
  course_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at: string;
}

export interface QuizQuestion {
  id: string;
  quiz_id: string;
  question: string;
  options: string[];
  correct_answer: number; // 0-indexed
  explanation: string;
}

export interface Quiz {
  id: string;
  course_id?: string;
  lesson_id?: string;
  title: string;
  description: string;
  passing_score: number; // percentage, e.g. 70
  questions: QuizQuestion[];
}

export interface QuizAttempt {
  id: string;
  user_id: string;
  quiz_id: string;
  course_id?: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  selected_answers: Record<string, number>;
  completed_at: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  reading_time: string;
  author: Instructor;
  published_at: string;
  summary: string;
  content: string;
  key_points: string[];
  tags: string[];
  related_slugs: string[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  letter: string;
  category: CourseCategory;
  definition: string;
  example: string;
  related_terms?: string[];
}

export interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  author_name: string;
  author_avatar: string;
  content: string;
  created_at: string;
  likes: number;
}

export interface CommunityPost {
  id: string;
  user_id: string;
  author_name: string;
  author_avatar: string;
  author_badge?: string;
  category: 'Beginner Questions' | 'Investing' | 'Stocks' | 'Mutual Funds' | 'Personal Finance' | 'Careers';
  title: string;
  content: string;
  likes: number;
  liked_by: string[];
  comments: Comment[];
  created_at: string;
  reported?: boolean;
}

export interface Achievement {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: string;
  category: 'learning' | 'streak' | 'quiz' | 'mastery';
}

export interface UserAchievement {
  id: string;
  user_id: string;
  achievement_id: string;
  unlocked_at: string;
}

export interface UserStats {
  courses_enrolled: number;
  lessons_completed: number;
  learning_streak: number;
  average_quiz_score: number;
  overall_progress: number;
  points: number;
}
