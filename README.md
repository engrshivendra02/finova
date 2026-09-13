# Finova — Online Finance Education Platform
> **"Learn Money. Build Wealth. Master Your Future."**

Finova is a modern, production-grade, interactive online finance education platform designed for students, beginners, and young professionals. It provides structured, jargon-free curricula on personal finance, stock markets, mutual funds, budgeting, taxation, and wealth planning, backed by working financial calculators, interactive quizzes, community discussions, and an administrative control suite.

---

## 🌟 Key Features

### 1. 🎓 Comprehensive Curriculum Marketplace (`/courses`, `/courses/[id]`)
- **11 Curated Masterclasses** across 10 essential financial disciplines (Personal Finance, Stock Market, Mutual Funds, Investing, Budgeting, Taxation, Financial Planning, Crypto, Banking, Wealth Building).
- Multi-module syllabus trees with estimated durations, difficulty ratings, and lesson counts.
- Seamless one-click enrollment with progress tracking.

### 2. 📖 Interactive Lesson Player (`/courses/[id]/lesson/[lessonId]`)
- Collapsible syllabus drawer showing module progress and completion checks.
- Media header and structured, jargon-free lesson explanations.
- Real-world case study scenario breakdowns with solutions and actionable takeaways.
- "Mark as Complete" button with instant progress calculation and confetti celebrations.
- Course Assessment Quiz embedded directly into lesson modules.

### 3. 🧮 5 Fully Functional Financial Engines (`/tools`)
All calculators compute exact mathematical results using client-side TypeScript engines:
- **SIP Calculator (`/tools/sip`)**: Models future wealth compounding with dynamic investment amounts, returns, duration, and invested vs returns visual breakdown.
- **Loan EMI Calculator (`/tools/emi`)**: Computes exact monthly payments, total interest outflow, and principal-to-interest amortization split for home, car, and personal loans.
- **Compound Interest Tool (`/tools/compound-interest`)**: Supports Annually, Semi-Annually, Quarterly, and Monthly compounding with optional monthly contributions and comparison against simple interest.
- **50/30/20 Budget Planner (`/tools/budget`)**: Audits income against Needs (50%), Wants (30%), and Savings (20%) with real-time financial health diagnostics.
- **Personal Net Worth Calculator (`/tools/net-worth`)**: Calculates Total Assets minus Total Liabilities with solvency ratios.

### 4. 🧠 Interactive Assessment Quizzes
- Over 30 questions across courses with 4 multiple-choice options.
- Immediate visual feedback on answer selection with clear plain-English explanations.
- Automatic scoring, percentage tracking, passing threshold evaluations, and confetti victory effects.

### 5. 📚 Finance Learning Hub (`/learn`, `/learn/[slug]`)
- 20 in-depth educational guides covering fundamental financial concepts (Stocks, SIPs, Index Funds, Inflation, Credit Scores, 4% FIRE rule, etc.).
- Categorized search, estimated reading times, author profiles, and related reading recommendations.

### 6. 📖 Financial Glossary (`/glossary`)
- 52 comprehensive financial definitions.
- Alphabetical A–Z quick jump bar, category filters, and live search.
- Practical real-world examples and related term links for every concept.

### 7. 📈 Stock Market Fundamentals (`/market`)
- Dedicated market primer explaining the National Stock Exchange (NSE), Bombay Stock Exchange (BSE), Nifty 50, Sensex, IPOs, Bull/Bear markets, P/E ratio, Market Cap, and Volatility.
- Prominent educational disclaimer adhering to financial regulatory guidelines.

### 8. 💬 Peer Community Forum (`/community`)
- Interactive discussion feed categorized by topics (Beginner Questions, Investing, Stocks, Mutual Funds, Personal Finance, Careers).
- Create discussion threads, upvote posts, write replies, and report content.

### 9. 📊 Student Dashboard & Profile (`/dashboard`, `/profile`)
- Personalized greeting, learning streaks, total points, and progress bars.
- "Continue Learning" section with active course resume shortcuts.
- Achievement badges (🌱 First Step, 🔥 7-Day Habit, 📚 Knowledge Seeker, 🏆 Graduate, 💰 Finance Beginner, 🧠 Quiz Master).
- Editable student profile (Name, Learning Goals, Bio).

### 10. 🛡️ Admin Dashboard (`/admin`)
- Platform-wide statistics: total users, active learners, course count, lessons completed, quiz attempts.
- Course Management: Add new courses, edit course metadata, delete courses.
- Community Moderation: Review reported posts and delete inappropriate content.

---

## ⚡ Demo Login Credentials

Finova supports **One-Click Instant Demo Logins** on the login page (`/login`) for immediate testing:

| Role | Email | Full Name | Access Level |
| :--- | :--- | :--- | :--- |
| **Demo Student** | `student@finova.edu` | Alex Rivera | Student Dashboard, Enrollments, Quizzes, Badges |
| **Demo Admin** | `admin@finova.edu` | Dr. Sarah Mitchell | Full Admin Console, Course CRUD, Community Moderation |

*You can also create a new student account instantly using the `/signup` form.*

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: v18.18.0 or higher (v20+ recommended)
- **npm**: v9+ or `pnpm` / `yarn`

### Installation
1. Clone or navigate to the project directory:
   ```bash
   cd finova
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Next.js development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 💾 Dual-Mode Data Layer & Supabase Setup

Finova features a **dual-mode repository architecture**:
1. **Out-of-the-Box Mode (Default)**: Automatically runs with browser LocalStorage persistence. All enrollments, lesson progress, streak counters, quiz attempts, custom community posts, comments, profile updates, and Admin CRUD operations are saved in real-time and persist across page refreshes.
2. **Supabase Postgres Mode (Optional)**: If you wish to connect a live PostgreSQL database:
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Set your Supabase credentials:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     ```
   - Open your Supabase SQL Editor and execute the complete schema migration provided in:
     `supabase/schema.sql`

---

## 📁 Project Directory Structure

```
finova/
├── app/
│   ├── about/page.tsx               # About Finova & Faculty
│   ├── admin/page.tsx               # Admin Console (CRUD, Moderation, Metrics)
│   ├── community/page.tsx           # Discussion Forum
│   ├── contact/page.tsx             # Academic Inquiries & Support
│   ├── courses/
│   │   ├── page.tsx                 # Course Marketplace Catalog
│   │   ├── [id]/
│   │   │   ├── page.tsx             # Course Detail & Syllabus Tree
│   │   │   └── lesson/[lessonId]/   # Interactive Lesson Player
│   ├── dashboard/page.tsx           # Personalized Student Dashboard
│   ├── glossary/page.tsx            # A-Z Financial Glossary
│   ├── learn/
│   │   ├── page.tsx                 # Learning Hub Articles Catalog
│   │   └── [slug]/page.tsx          # Full Educational Guide View
│   ├── login/page.tsx               # Auth Portal with Demo Logins
│   ├── market/page.tsx              # Stock Market Fundamentals
│   ├── profile/page.tsx             # Student Profile & Badges
│   ├── signup/page.tsx              # Student Registration
│   ├── tools/
│   │   ├── page.tsx                 # Financial Tools Directory Hub
│   │   ├── budget/page.tsx          # 50/30/20 Budget Calculator
│   │   ├── compound-interest/page.tsx# Compound Interest Tool
│   │   ├── emi/page.tsx             # Loan EMI Calculator
│   │   ├── net-worth/page.tsx       # Net Worth Calculator
│   │   └── sip/page.tsx             # SIP Growth Calculator
│   ├── globals.css                  # Global Fintech Styling
│   ├── layout.tsx                   # Root Layout with AuthProvider, Navbar & Footer
│   └── page.tsx                     # Landing Page (Hero, Trust, Preview, Roadmap)
├── components/
│   ├── calculators/                 # Modular Financial Calculators
│   │   ├── BudgetCalculator.tsx
│   │   ├── CompoundInterestCalculator.tsx
│   │   ├── EmiCalculator.tsx
│   │   ├── NetWorthCalculator.tsx
│   │   └── SipCalculator.tsx
│   ├── Confetti.tsx                 # Canvas-confetti celebration triggers
│   ├── FinancialDisclaimer.tsx      # Reusable educational disclaimer
│   ├── Footer.tsx                   # Fintech Footer
│   ├── Navbar.tsx                   # Responsive Header & Search modal trigger
│   ├── QuizPlayer.tsx               # Interactive Quiz engine
│   └── SearchModal.tsx              # Global Search Dialog (Ctrl+K)
├── lib/
│   ├── auth-context.tsx             # React AuthContext
│   ├── data/
│   │   ├── achievements.ts          # Achievement Badges
│   │   ├── articles.ts              # 20 Educational Articles
│   │   ├── community.ts             # 10 Community Threads
│   │   ├── courses.ts               # 11 Curated Masterclasses (50+ lessons)
│   │   ├── glossary.ts              # 52 Financial Terms (A-Z)
│   │   └── quizzes.ts               # 30+ Quiz Questions
│   ├── storage.ts                   # LocalStorage repository & sync service
│   └── supabase.ts                  # Supabase Client integration
├── supabase/
│   └── schema.sql                   # Full PostgreSQL DDL, RLS, Indexes & Tables
├── types/
│   └── index.ts                     # TypeScript Type Definitions
├── .env.example
├── package.json
└── README.md
```
