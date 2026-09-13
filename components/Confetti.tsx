'use client';

import confetti from 'canvas-confetti';

export function fireSuccessConfetti() {
  if (typeof window === 'undefined') return;

  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#059669', '#34D399', '#3B82F6', '#F59E0B']
    });
  } catch (e) {
    console.warn('Confetti animation error:', e);
  }
}

export function fireVictoryCelebration() {
  if (typeof window === 'undefined') return;

  try {
    const end = Date.now() + 1.5 * 1000;
    const colors = ['#10B981', '#6366F1', '#EC4899', '#F59E0B'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch (e) {
    console.warn('Confetti error:', e);
  }
}
