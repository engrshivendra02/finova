'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Profile, UserRole } from '@/types';
import { 
  storage, 
  initializeStorage, 
  DEMO_STUDENT, 
  DEMO_ADMIN, 
  getUserProfile, 
  updateUserProfile 
} from './storage';

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
  isAdmin: boolean;
  login: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password?: string, goal?: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  loginAsDemoStudent: () => void;
  loginAsDemoAdmin: () => void;
  updateUserBio: (bio: string, goal: string, name: string) => void;
  refreshProfile: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeStorage();
    const storedUser = storage.get<User | null>('finova_current_user', DEMO_STUDENT);
    setUser(storedUser);
    if (storedUser) {
      const p = getUserProfile(storedUser.id);
      setProfile(p);
    }
    setIsLoading(false);
  }, []);

  const refreshProfile = () => {
    if (user) {
      const p = getUserProfile(user.id);
      setProfile(p);
    }
  };

  const login = async (email: string, _password?: string) => {
    setIsLoading(true);
    // Check if email matches demo admin or student, or registered user
    const users = storage.get<User[]>('finova_users', [DEMO_STUDENT, DEMO_ADMIN]);
    const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (foundUser) {
      setUser(foundUser);
      storage.set('finova_current_user', foundUser);
      const p = getUserProfile(foundUser.id);
      setProfile(p);
      setIsLoading(false);
      return { success: true };
    }

    // If new email, create student account seamlessly
    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      full_name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      role: 'student',
      avatar_url: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80`,
      created_at: new Date().toISOString(),
    };

    users.push(newUser);
    storage.set('finova_users', users);
    storage.set('finova_current_user', newUser);
    setUser(newUser);

    const newProfile = updateUserProfile(newUser.id, {
      full_name: newUser.full_name,
      email: newUser.email,
      avatar_url: newUser.avatar_url,
      learning_goal: 'Learn finance from scratch',
      learning_streak: 1,
      points: 100,
      preferred_topics: ['Personal Finance', 'Budgeting']
    });
    setProfile(newProfile);

    setIsLoading(false);
    return { success: true };
  };

  const signup = async (name: string, email: string, _password?: string, goal?: string) => {
    setIsLoading(true);
    const users = storage.get<User[]>('finova_users', [DEMO_STUDENT, DEMO_ADMIN]);
    
    // Check if user already exists
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      setIsLoading(false);
      return { success: false, error: 'An account with this email already exists. Please login instead.' };
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      full_name: name,
      role: 'student',
      avatar_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      created_at: new Date().toISOString(),
    };

    users.push(newUser);
    storage.set('finova_users', users);
    storage.set('finova_current_user', newUser);
    setUser(newUser);

    const newProfile = updateUserProfile(newUser.id, {
      full_name: name,
      email,
      avatar_url: newUser.avatar_url,
      learning_goal: goal || 'Build wealth and master personal finance',
      learning_streak: 1,
      points: 150,
      preferred_topics: ['Personal Finance', 'Stock Market']
    });
    setProfile(newProfile);

    setIsLoading(false);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    setProfile(null);
    storage.set('finova_current_user', null);
  };

  const loginAsDemoStudent = () => {
    setUser(DEMO_STUDENT);
    storage.set('finova_current_user', DEMO_STUDENT);
    const p = getUserProfile(DEMO_STUDENT.id);
    setProfile(p);
  };

  const loginAsDemoAdmin = () => {
    setUser(DEMO_ADMIN);
    storage.set('finova_current_user', DEMO_ADMIN);
    const p = getUserProfile(DEMO_ADMIN.id);
    setProfile(p);
  };

  const updateUserBio = (bio: string, goal: string, name: string) => {
    if (!user) return;
    const updated = updateUserProfile(user.id, {
      bio,
      learning_goal: goal,
      full_name: name
    });
    setProfile(updated);
    setUser(prev => prev ? { ...prev, full_name: name } : null);
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isLoading,
        isAdmin,
        login,
        signup,
        logout,
        loginAsDemoStudent,
        loginAsDemoAdmin,
        updateUserBio,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
