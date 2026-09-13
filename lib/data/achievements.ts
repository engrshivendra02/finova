import { Achievement } from '@/types';

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    code: 'first_lesson',
    title: '🌱 First Step',
    description: 'Completed your very first finance lesson on Finova.',
    icon: '🌱',
    category: 'learning'
  },
  {
    id: 'ach-2',
    code: 'streak_7',
    title: '🔥 7-Day Habit',
    description: 'Maintained an active 7-day learning streak.',
    icon: '🔥',
    category: 'streak'
  },
  {
    id: 'ach-3',
    code: 'lessons_10',
    title: '📚 Knowledge Seeker',
    description: 'Completed 10 lessons across your enrolled courses.',
    icon: '📚',
    category: 'learning'
  },
  {
    id: 'ach-4',
    code: 'course_completed',
    title: '🏆 Graduate',
    description: 'Completed 100% of all lessons in an enrolled course.',
    icon: '🏆',
    category: 'mastery'
  },
  {
    id: 'ach-5',
    code: 'finance_beginner',
    title: '💰 Finance Beginner',
    description: 'Passed your first interactive finance quiz with a score of 70% or higher.',
    icon: '💰',
    category: 'quiz'
  },
  {
    id: 'ach-6',
    code: 'quiz_master',
    title: '🧠 Quiz Master',
    description: 'Achieved a perfect 100% score on any course quiz.',
    icon: '🧠',
    category: 'quiz'
  }
];
