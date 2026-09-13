import { CommunityPost } from '@/types';

export const INITIAL_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    user_id: 'user-sample-1',
    author_name: 'Pooja Nair',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    author_badge: 'Level 3 Learner',
    category: 'Beginner Questions',
    title: 'Just graduated college! How should I split my first ₹45,000 monthly salary?',
    content: `Hi everyone! I just landed my first software engineering job. My take-home salary after tax is roughly ₹45,000/month. 

My rent + utilities come to about ₹14,000. Food and groceries around ₹8,000. I have no loans. Should I follow the 50/30/20 rule strictly, or should I be more aggressive with savings while I'm young? Also, where should my emergency fund sit? Any advice is appreciated!`,
    likes: 24,
    liked_by: [],
    created_at: '2025-02-15T10:30:00Z',
    comments: [
      {
        id: 'comm-1-1',
        post_id: 'post-1',
        user_id: 'user-sample-2',
        author_name: 'Aditi Sharma (Finova Instructor)',
        author_avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
        content: `Congratulations on the new job Pooja! Your fixed living costs are currently under 50% (₹22,000 / ₹45,000 = ~49%), which puts you in a fantastic position. Before starting aggressive equity SIPs, build a ₹70,000 emergency fund (3 months of expenses) in a high-yield savings account. Once that is locked, you can easily invest ₹12,000-₹15,000 monthly into a broad Nifty 50 or S&P 500 index fund!`,
        created_at: '2025-02-15T11:45:00Z',
        likes: 18
      },
      {
        id: 'comm-1-2',
        post_id: 'post-1',
        user_id: 'user-sample-3',
        author_name: 'Rajesh K.',
        author_avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
        content: `Whatever you do, don't fall for the trap of buying an expensive car or upgrading your phone on 24-month EMIs right away! Keeping lifestyle inflation low in your first 2-3 years will give you massive financial leverage.`,
        created_at: '2025-02-15T14:10:00Z',
        likes: 9
      }
    ]
  },
  {
    id: 'post-2',
    user_id: 'user-sample-4',
    author_name: 'Arjun Mehta',
    author_avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    author_badge: 'Top Contributor',
    category: 'Mutual Funds',
    title: 'Direct Plans vs Regular Plans in Mutual Funds: A ₹14 Lakh Mistake',
    content: `Ran the math on our Finova SIP calculator yesterday comparing a Direct Plan (0.2% Expense Ratio) versus a Regular Plan (1.2% Expense Ratio via bank distributor).

On a ₹10,000/month SIP compounding at 12% over 25 years:
- Direct Plan terminal value: ~₹1.89 Crores
- Regular Plan terminal value: ~₹1.53 Crores

That 1% difference in commission handed to the distributor literally costs you ~₹36 Lakhs in lost compounding! Always buy 'Direct - Growth' plans directly through official AMC portals or zero-commission discount brokers.`,
    likes: 42,
    liked_by: [],
    created_at: '2025-02-18T08:15:00Z',
    comments: [
      {
        id: 'comm-2-1',
        post_id: 'post-2',
        user_id: 'user-sample-5',
        author_name: 'Simran Gujral',
        author_avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
        content: `This is the single most important lesson everyone needs to learn early. My bank relationship manager tried to push regular funds on me claiming 'we provide personalized guidance'. The guidance was just selling me high-commission NFOs!`,
        created_at: '2025-02-18T09:20:00Z',
        likes: 14
      }
    ]
  },
  {
    id: 'post-3',
    user_id: 'user-sample-6',
    author_name: 'Kunal Sen',
    author_avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    category: 'Stocks',
    title: 'How do you handle the psychology of market corrections when you are down 15%?',
    content: `This is my first year investing in equities. Last month the broader index pulled back about 7%, and my midcap portfolio dipped almost 15%. Intellectually I know market corrections are normal, but emotionally seeing your portfolio in the red every morning makes you want to stop SIPs or sell to avoid further drops.

How do experienced investors cope with market downturns without losing sleep?`,
    likes: 31,
    liked_by: [],
    created_at: '2025-02-20T16:00:00Z',
    comments: [
      {
        id: 'comm-3-1',
        post_id: 'post-3',
        user_id: 'user-sample-7',
        author_name: 'Vikram Sengupta (Finova Instructor)',
        author_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        content: `Kunal, remember the supermarket analogy: If the grocery store has a 20% discount on the food items you buy every week, do you run away in fear, or do you stock your cart? Market downturns during your wealth accumulation years are discounts. Delete the brokerage app from your phone's home screen and automate your investments. Don't look at portfolio daily valuations!`,
        created_at: '2025-02-20T17:30:00Z',
        likes: 27
      }
    ]
  },
  {
    id: 'post-4',
    user_id: 'user-sample-8',
    author_name: 'Neha Chawla',
    author_avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    category: 'Personal Finance',
    title: 'Why Term Insurance + Pure Health Insurance beats ULIPs and Endowment plans',
    content: `Sharing a quick breakdown for anyone being pitched insurance products by relatives or bank agents:

Never mix investment and insurance. Products like ULIPs (Unit Linked Insurance Plans) and traditional money-back endowment policies give you pathetic insurance coverage (e.g. ₹5 Lakh cover for ₹50k annual premium) and mediocre 4-6% returns after heavy upfront fees.

The right way:
1. Buy a pure Term Life Insurance plan giving you ₹1-2 Crore cover for ~₹800/month.
2. Buy a standalone comprehensive Health Insurance policy.
3. Invest the rest into low-cost equity index funds.`,
    likes: 56,
    liked_by: [],
    created_at: '2025-02-22T12:00:00Z',
    comments: []
  },
  {
    id: 'post-5',
    user_id: 'user-sample-9',
    author_name: 'Tanmay Bansal',
    author_avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    category: 'Investing',
    title: 'Simple 3-Fund Portfolio: The Boglehead approach for beginners',
    content: `For anyone overwhelmed by picking from 2,000 mutual funds and 5,000 stocks, look up the Boglehead 3-Fund Portfolio:

1. 70% Broad Total Market / Large Cap Index Fund (e.g. S&P 500 or Nifty 50)
2. 15% International / Global Equity Fund
3. 15% High-Quality Short Duration Debt / Government Bond Fund

You only need to rebalance once a year. Takes 15 minutes of effort per year and statistically beats almost all professional stock pickers over a 20-year horizon.`,
    likes: 38,
    liked_by: [],
    created_at: '2025-02-24T09:40:00Z',
    comments: []
  },
  {
    id: 'post-6',
    user_id: 'user-sample-10',
    author_name: 'Divya Rastogi',
    author_avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    category: 'Careers',
    title: 'Transitioning from Engineering to Financial Analyst / Wealth Advisory',
    content: `Hey Finova community! I've been a software developer for 4 years, but I've fallen in love with portfolio theory, financial modeling, and personal finance education. 

Has anyone here successfully made the jump from STEM/tech into financial advisory, CFA charter, or fintech product management? Which certifications actually move the needle?`,
    likes: 19,
    liked_by: [],
    created_at: '2025-02-26T14:15:00Z',
    comments: []
  },
  {
    id: 'post-7',
    user_id: 'user-sample-11',
    author_name: 'Harsh Vardhan',
    author_avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    category: 'Beginner Questions',
    title: 'Credit Card Myth: Does having multiple cards hurt your credit score?',
    content: `I often hear people say 'Never open more than one credit card, it will ruin your score'. In reality, having 3 credit cards with zero late payments actually INCREASED my credit score from 710 to 805 because my total credit limit went up to ₹8 Lakhs, making my monthly ₹30,000 spending represent less than 4% credit utilization!

Key is discipline: Always pay 100% of the bill on time, never treat credit cards as free money.`,
    likes: 29,
    liked_by: [],
    created_at: '2025-02-28T11:20:00Z',
    comments: []
  },
  {
    id: 'post-8',
    user_id: 'user-sample-12',
    author_name: 'Zoya Khan',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    category: 'Stocks',
    title: 'P/E Ratio alone is not enough: Why looking at ROCE and Debt is essential',
    content: `When I started investing, I filtered stocks solely by low P/E ratios thinking anything under 10 was a bargain. I quickly learned about 'value traps'—struggling cyclical companies whose earnings were about to collapse.

Always check:
1. Return on Capital Employed (ROCE) > 15%
2. Debt-to-Equity < 0.5 (or negligible interest burden)
3. Positive operating cash flow converting from net profit.`,
    likes: 47,
    liked_by: [],
    created_at: '2025-03-01T15:30:00Z',
    comments: []
  },
  {
    id: 'post-9',
    user_id: 'user-sample-13',
    author_name: 'Farhan Siddiqui',
    author_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    category: 'Personal Finance',
    title: 'How I saved my first ₹5 Lakhs by age 24: My realistic blueprint',
    content: `Sharing my journey without any clickbait or crypto luck:
1. Stayed with flatmates to keep rent capped at 25% of income.
2. Cooked lunches 4 days a week instead of ordering via food apps.
3. Automated a ₹15,000 monthly SIP on the exact day my salary hit the account.
4. Picked up freelance graphic design projects on weekends to earn an extra ₹10k/mo.

It took 26 months of consistent execution. You don't need a ₹1 Crore salary to build your foundational savings!`,
    likes: 64,
    liked_by: [],
    created_at: '2025-03-03T18:00:00Z',
    comments: []
  },
  {
    id: 'post-10',
    user_id: 'user-sample-14',
    author_name: 'Ananya Roy',
    author_avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    category: 'Investing',
    title: 'The Rule of 72: A mental math trick every investor should know',
    content: `If you want to know how quickly your investments will double at a given rate of return, divide 72 by the annual interest rate:

- At 6% (Fixed Deposit): 72 / 6 = 12 years to double
- At 9% (Balanced Fund): 72 / 9 = 8 years to double
- At 12% (Broad Equity Index): 72 / 12 = 6 years to double
- At 15% (High Growth): 72 / 15 = 4.8 years to double

Shows why earning 12% vs 6% isn't just double the money—it literally doubles your wealth twice as fast!`,
    likes: 51,
    liked_by: [],
    created_at: '2025-03-05T09:10:00Z',
    comments: []
  }
];
