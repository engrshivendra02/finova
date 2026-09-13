'use client';

import React, { useState } from 'react';
import { Quiz, QuizQuestion, QuizAttempt } from '@/types';
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import { fireSuccessConfetti, fireVictoryCelebration } from './Confetti';
import { useAuth } from '@/lib/auth-context';
import { saveQuizAttempt } from '@/lib/storage';

interface QuizPlayerProps {
  quiz: Quiz;
  onFinish?: (attempt: QuizAttempt) => void;
  onRetry?: () => void;
}

export default function QuizPlayer({ quiz, onFinish, onRetry }: QuizPlayerProps) {
  const { user, refreshProfile } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [attemptResult, setAttemptResult] = useState<QuizAttempt | null>(null);

  const currentQuestion: QuizQuestion = quiz.questions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion?.correct_answer;

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(index);
    setIsAnswerSubmitted(true);

    const updatedAnswers = { ...answers, [currentIndex]: index };
    setAnswers(updatedAnswers);

    if (index === currentQuestion.correct_answer) {
      fireSuccessConfetti();
    }
  };

  const handleNext = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      // Complete quiz
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    let score = 0;
    quiz.questions.forEach((q, idx) => {
      if (answers[idx] === q.correct_answer) {
        score += 1;
      }
    });

    const total = quiz.questions.length;
    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= quiz.passing_score;

    const attempt: QuizAttempt = {
      id: `attempt-${Date.now()}`,
      user_id: user?.id || 'guest-user',
      quiz_id: quiz.id,
      course_id: quiz.course_id,
      score,
      total,
      percentage,
      passed,
      selected_answers: Object.fromEntries(
        Object.entries(answers).map(([k, v]) => [quiz.questions[Number(k)]?.id || k, v])
      ),
      completed_at: new Date().toISOString(),
    };

    saveQuizAttempt(attempt);
    refreshProfile();
    setAttemptResult(attempt);
    setIsFinished(true);

    if (passed) {
      fireVictoryCelebration();
    }

    if (onFinish) {
      onFinish(attempt);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setAnswers({});
    setIsFinished(false);
    setAttemptResult(null);
    if (onRetry) onRetry();
  };

  if (isFinished && attemptResult) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center max-w-xl mx-auto shadow-md animate-in fade-in zoom-in-95 duration-200">
        <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4 ${
          attemptResult.passed 
            ? 'bg-emerald-100 text-emerald-600' 
            : 'bg-amber-100 text-amber-600'
        }`}>
          {attemptResult.passed ? <Award className="w-8 h-8" /> : <RotateCcw className="w-8 h-8" />}
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          {attemptResult.passed ? 'Quiz Passed! Congratulations! 🎉' : 'Keep Practicing!'}
        </h3>
        <p className="text-sm text-slate-500 mt-1 mb-6">
          {attemptResult.passed 
            ? `You scored ${attemptResult.score} out of ${attemptResult.total} questions correctly and unlocked 50 Finova points.`
            : `You scored ${attemptResult.score} out of ${attemptResult.total} (${attemptResult.percentage}%). Review the lessons and try again.`}
        </p>

        {/* Score Ring / Bar */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-6">
          <div className="text-4xl font-extrabold text-slate-900 mb-1">
            {attemptResult.percentage}%
          </div>
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
            attemptResult.passed
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-rose-100 text-rose-800'
          }`}>
            {attemptResult.passed ? 'Pass Status: Mastered' : 'Needs Review (<70%)'}
          </span>
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-200 text-xs">
            <div>
              <span className="text-slate-400">Correct Answers</span>
              <p className="text-emerald-600 font-bold text-base">{attemptResult.score}</p>
            </div>
            <div>
              <span className="text-slate-400">Incorrect Answers</span>
              <p className="text-rose-600 font-bold text-base">{attemptResult.total - attemptResult.score}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Retry Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
            Interactive Quiz • {quiz.title}
          </span>
          <h4 className="text-sm font-semibold text-slate-700 mt-0.5">
            Question {currentIndex + 1} of {quiz.questions.length}
          </h4>
        </div>
        <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-emerald-500 h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / quiz.questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Prompt */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 leading-snug">
          {currentQuestion.question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, idx) => {
          let optionStyles = 'border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 text-slate-700';

          if (isAnswerSubmitted) {
            if (idx === currentQuestion.correct_answer) {
              optionStyles = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500';
            } else if (idx === selectedAnswer && !isCorrect) {
              optionStyles = 'border-rose-500 bg-rose-50 text-rose-950 font-semibold ring-1 ring-rose-500';
            } else {
              optionStyles = 'border-slate-200 opacity-60 text-slate-400';
            }
          }

          const optionLabels = ['A', 'B', 'C', 'D'];

          return (
            <button
              key={idx}
              type="button"
              disabled={isAnswerSubmitted}
              onClick={() => handleSelectOption(idx)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 ${optionStyles}`}
            >
              <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                isAnswerSubmitted && idx === currentQuestion.correct_answer
                  ? 'bg-emerald-600 text-white'
                  : isAnswerSubmitted && idx === selectedAnswer && !isCorrect
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                {optionLabels[idx]}
              </span>
              <span className="text-sm leading-relaxed flex-1">{option}</span>
              {isAnswerSubmitted && idx === currentQuestion.correct_answer && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              )}
              {isAnswerSubmitted && idx === selectedAnswer && !isCorrect && (
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Box (Reveals after selection) */}
      {isAnswerSubmitted && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
            isCorrect 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
              : 'bg-amber-50 border-amber-200 text-amber-900'
          }`}>
            <div className="flex items-center gap-1.5 font-bold mb-1">
              {isCorrect ? (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Correct Answer! Well done.</span>
                </>
              ) : (
                <>
                  <HelpCircle className="w-4 h-4 text-amber-600" />
                  <span>Explanation:</span>
                </>
              )}
            </div>
            <p className="mt-1">{currentQuestion.explanation}</p>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleNext}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md shadow-emerald-600/20 flex items-center gap-2 transition"
            >
              {currentIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
