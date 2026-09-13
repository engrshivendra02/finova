import { Course } from '@/types';

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-1',
    slug: 'personal-finance-101',
    title: 'Personal Finance 101: Master the Essentials',
    tagline: 'Take full control of your money, beat inflation, and build lasting peace of mind.',
    description: 'Learn the bedrock principles of personal finance: managing income, cutting wasteful expenses, mastering the 50/30/20 rule, building a 6-month emergency cushion, and setting actionable financial goals.',
    category: 'Personal Finance',
    level: 'Beginner',
    duration: '3.5 Hours',
    total_lessons: 7,
    rating: 4.9,
    review_count: 1420,
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
    badge: 'Bestseller',
    instructor: {
      name: 'Aditi Sharma, CFA',
      role: 'Head of Financial Literacy & Wealth Advisory',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      bio: 'Aditi has coached over 50,000 young professionals and students on foundational wealth architecture.'
    },
    created_at: '2025-01-10T00:00:00Z',
    modules: [
      {
        id: 'mod-1-1',
        course_id: 'course-1',
        title: 'Module 1: Understanding Money & Mindset',
        description: 'Deconstruct your relationship with money, active vs passive cashflow, and inflation.',
        order: 1,
        lessons: [
          {
            id: 'les-1-1',
            module_id: 'mod-1-1',
            course_id: 'course-1',
            title: 'What is Personal Finance & Why Does It Matter?',
            slug: 'what-is-personal-finance',
            duration: '10 min',
            order: 1,
            content: `Personal finance is the science and discipline of managing your financial resources throughout your lifetime. It encompasses budgeting, saving, investing, insurance, taxation, and retirement planning.

Many people assume wealth is purely a function of high income. In reality, wealth is determined primarily by your **savings rate** and **capital allocation efficiency**. Someone earning \$60,000 who saves 30% will reliably build more sustainable net worth than someone earning \$150,000 who spends 98% of their paycheck on lifestyle inflation.

### The 4 Pillars of Personal Finance:
1. **Cashflow Optimization:** Earning more than you burn every month.
2. **Capital Preservation:** Ensuring unexpected shocks (job loss, medical emergencies) do not wipe out your liquid net worth.
3. **Compound Growth:** Deploying surplus capital into appreciating, income-generating assets.
4. **Risk Mitigation:** Protecting your downside with appropriate health, term life, and property insurance.`,
            takeaways: [
              'Income is what you make; wealth is what you keep and grow.',
              'Inflation quietly erodes idle cash sitting in zero-yield checking accounts.',
              'Financial freedom begins with cashflow awareness and disciplined habits.'
            ],
            practical_example: {
              title: 'Rohan vs. Sneha: The Spending Paradox',
              scenario: 'Rohan earns \$10,000/mo and spends \$9,500 on luxury rents and cars. Sneha earns \$5,000/mo and spends \$3,500, investing the remaining \$1,500 monthly into diversified index funds.',
              solution: 'In 10 years at an 11% return, Sneha accumulates over \$325,000 while Rohan is one missed paycheck away from bankruptcy despite earning double.',
              takeaway: 'Your savings rate matters significantly more than raw gross salary in your early accumulation phase.'
            },
            quiz_id: 'quiz-1'
          },
          {
            id: 'les-1-2',
            module_id: 'mod-1-1',
            course_id: 'course-1',
            title: 'Income vs Expenses: Tracking Every Dollar',
            slug: 'income-vs-expenses',
            duration: '12 min',
            order: 2,
            content: `Tracking your income and expenses is not about deprivation; it is about intentionality. When you audit your bank statements for 90 days, you discover the 'invisible leaks'—zombie subscriptions, frequent food delivery fees, and impulse purchases.

### Types of Cashflow:
- **Active Income:** Wages, hourly labor, freelance gigs, business operations requiring your physical time.
- **Passive Income:** Dividends, interest income, capital gains, rental income, and royalties.
- **Fixed Expenses:** Rent, mortgage, utility base rates, debt minimums, essential insurance premiums.
- **Variable Expenses:** Dining out, entertainment, vacations, shopping, non-essential gadgets.`,
            takeaways: [
              'What gets measured gets managed.',
              'Categorize expenses into Fixed, Variable, and Discretionary buckets.',
              'Eliminate zombie recurring subscriptions at least once every quarter.'
            ],
            practical_example: {
              title: 'The Daily \$6 Latte & Subscription Audit',
              scenario: 'Marcus spent \$180/mo on artisan coffees and \$95/mo on 5 streaming services he rarely opened.',
              solution: 'By switching to home brewing and cancelling 3 idle services, Marcus redirected \$210/mo (\$2,520/yr) into a high-yield emergency fund.',
              takeaway: 'Small micro-expenses compound negatively just as investments compound positively.'
            }
          },
          {
            id: 'les-1-3',
            module_id: 'mod-1-1',
            course_id: 'course-1',
            title: 'Needs vs Wants: The Psychological Boundary',
            slug: 'needs-vs-wants',
            duration: '8 min',
            order: 3,
            content: `The easiest trap in modern consumer capitalism is rationalizing a **want** as a **need**. 

- **Needs:** Essential for physical survival, livelihood, and legal compliance (nutritious food, basic shelter, necessary work transport, basic clothing, prescription medicine).
- **Wants:** Upgrades, prestige items, sensory luxuries (organic wagyu beef, 3-bedroom penthouse for 1 person, sports car, designer sunglasses).

Applying the **72-Hour Rule**: Whenever you want to purchase a non-essential item exceeding \$100, force yourself to wait 72 hours. If the craving persists and fits your designated entertainment budget, buy it guilt-free. In 70% of instances, the dopamine spike subsides and you keep your money.`,
            takeaways: [
              'Distinguish core biological/occupational needs from lifestyle upgrades.',
              'Use the 72-hour delay rule to short-circuit impulse shopping dopamine triggers.',
              'Budgeting should include fun money so you never feel deprived.'
            ]
          }
        ]
      },
      {
        id: 'mod-1-2',
        course_id: 'course-1',
        title: 'Module 2: The 50/30/20 Framework & Cashflow Blueprint',
        description: 'Deploying the gold-standard budgeting system to automate savings.',
        order: 2,
        lessons: [
          {
            id: 'les-1-4',
            module_id: 'mod-1-2',
            course_id: 'course-1',
            title: 'The 50/30/20 Budgeting Rule Explained',
            slug: 'the-50-30-20-budgeting-rule',
            duration: '14 min',
            order: 4,
            content: `Popularized by financial experts, the 50/30/20 framework splits your **after-tax take-home pay** into three distinct pools:

1. **50% for Needs:** Housing, groceries, basic utilities, transport, minimum loan payments, essential insurance.
2. **30% for Wants:** Eating out, hobbies, vacations, shopping, entertainment, gadgets.
3. **20% for Savings & Debt Payoff:** High-interest debt elimination, emergency fund deposits, retirement contributions, equity investments.

If you live in a high cost-of-living metro area where rent consumes 40%, adjust the ratio to 60/20/20. The non-negotiable rule is protecting the minimum 20% savings pipeline!`,
            takeaways: [
              '50% goes to survival and baseline obligations.',
              '30% enables guilt-free lifestyle enjoyment.',
              '20% builds your future freedom and pays down principal debt.'
            ],
            practical_example: {
              title: 'Budgeting a \$4,000 Monthly Salary',
              scenario: 'Elena takes home \$4,000 net per month.',
              solution: 'Needs = \$2,000 (Rent \$1,300, Groceries \$400, Utilities/Transit \$300). Wants = \$1,200 (Dining, Trips, Gym). Savings = \$800 (Auto-transferred to index funds and emergency savings on payday).',
              takeaway: 'Pay yourself first: automate the 20% transfer on the exact day your salary clears.'
            }
          },
          {
            id: 'les-1-5',
            module_id: 'mod-1-2',
            course_id: 'course-1',
            title: 'Building a Bulletproof Emergency Fund',
            slug: 'building-an-emergency-fund',
            duration: '11 min',
            order: 5,
            content: `An emergency fund is not an investment designed to maximize returns; it is an **insurance policy against life**. It prevents you from liquidating long-term stock holdings during market downturns or borrowing high-interest credit card debt.

### How Much Do You Need?
- **Salaried with stable job, dual income household:** 3 to 6 months of mandatory living expenses.
- **Freelancers, single earners, commission-based jobs:** 6 to 9 months of mandatory expenses.
- **Entrepreneurs with volatile revenue:** 9 to 12 months of mandatory expenses.

Keep this capital in a High-Yield Savings Account (HYSA) or liquid money market fund with instant access and zero volatility.`,
            takeaways: [
              'Target 3 to 6 months of absolute living expenses, not total income.',
              'Never invest emergency funds in volatile stocks, crypto, or locked illiquid real estate.',
              'Keep it in an account separate from your daily checking account to prevent casual dipping.'
            ]
          }
        ]
      },
      {
        id: 'mod-1-3',
        course_id: 'course-1',
        title: 'Module 3: Debt Elimination & Actionable Goal Setting',
        description: 'Tackling credit card debt and mapping short, medium, and long-term milestones.',
        order: 3,
        lessons: [
          {
            id: 'les-1-6',
            module_id: 'mod-1-3',
            course_id: 'course-1',
            title: 'Debt Avalanche vs Debt Snowball',
            slug: 'debt-avalanche-vs-snowball',
            duration: '13 min',
            order: 6,
            content: `High-interest consumer debt (credit cards carrying 24% to 42% APR) is a mathematical emergency. There are two battle-tested strategies to eliminate it:

### 1. The Debt Avalanche (Mathematically Optimal):
- List debts by interest rate from highest to lowest.
- Pay minimums on all, throw every extra dollar at the highest interest rate.
- Saves the most total interest and gets you out of debt quickest.

### 2. The Debt Snowball (Psychologically Motivating):
- List debts by total balance from smallest to largest.
- Pay minimums on all, attack the smallest balance first.
- Provides immediate dopamine wins as accounts hit zero, building psychological momentum.`,
            takeaways: [
              'Use Avalanche to save maximum money; use Snowball if you need quick psychological wins.',
              'Never invest in 12% equity markets while carrying 30% credit card balances.',
              'Consolidate high-interest balances if a 0% balance transfer card is available.'
            ]
          },
          {
            id: 'les-1-7',
            module_id: 'mod-1-3',
            course_id: 'course-1',
            title: 'SMART Financial Goals: From Survival to Thriving',
            slug: 'smart-financial-goals',
            duration: '10 min',
            order: 7,
            content: `Vague goals like 'I want to be rich' fail. SMART goals succeed:
- **Specific:** 'Accumulate a \$15,000 emergency fund.'
- **Measurable:** 'Track monthly net balance via spreadsheet.'
- **Achievable:** 'Save \$625 per month from net income.'
- **Relevant:** 'Provides psychological safety to transition into freelancing.'
- **Time-bound:** 'Target completion within 24 months.'`,
            takeaways: [
              'Break 10-year aspirations down into quarterly measurable sprints.',
              'Tie each financial target to an underlying emotional motivation.',
              'Review progress quarterly and rebalance allocations as income increases.'
            ],
            quiz_id: 'quiz-1'
          }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    slug: 'stock-market-for-beginners',
    title: 'Stock Market for Beginners: From Zero to Investor',
    tagline: 'Demystify equities, exchanges, indices, and start owning productive businesses.',
    description: 'Learn how stock exchanges (NSE, BSE, NYSE) work, the difference between price and intrinsic value, how to read financial metrics (P/E ratio, Market Cap, EPS), and how to avoid beginner traps.',
    category: 'Stock Market',
    level: 'Beginner',
    duration: '4.2 Hours',
    total_lessons: 6,
    rating: 4.95,
    review_count: 2180,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular',
    instructor: {
      name: 'Vikram Sengupta',
      role: 'Former Institutional Equity Analyst & Author',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      bio: 'Vikram managed \$400M in equities across Asia-Pacific markets before founding an investor education lab.'
    },
    created_at: '2025-01-15T00:00:00Z',
    modules: [
      {
        id: 'mod-2-1',
        course_id: 'course-2',
        title: 'Module 1: Foundations of the Stock Market',
        order: 1,
        lessons: [
          {
            id: 'les-2-1',
            module_id: 'mod-2-1',
            course_id: 'course-2',
            title: 'What is a Stock & Why Do Companies Issue Shares?',
            slug: 'what-is-a-stock',
            duration: '11 min',
            order: 1,
            content: `When you purchase a share of common stock, you are not buying a lottery ticket or an abstract digital ticker symbol—you are buying a fractional ownership stake in a real, functioning enterprise.

### Why Companies Issue Shares:
To fund large-scale expansion (building factories, hiring engineers, developing drugs, expanding global footprint), companies need capital. They have two main routes:
1. **Debt Financing:** Taking bank loans or issuing bonds. This requires paying guaranteed regular interest regardless of profitability.
2. **Equity Financing (IPOs):** Selling fractional equity stakes to the public. The company gets permanent capital without fixed interest liability, and shareholders participate in future profits via price appreciation and cash dividends.`,
            takeaways: [
              'A share is legal fractional ownership of a living, cash-generating business.',
              'Stock prices follow long-term earnings growth, even if short-term sentiment fluctuates wildly.',
              'Shareholders benefit through capital gains and cash dividends.'
            ],
            practical_example: {
              title: 'The Bakery Expansion',
              scenario: 'Sarah owns a popular artisanal bakery generating \$100,000/yr profit. She wants \$500,000 to open 5 new branches.',
              solution: 'Instead of taking bank loans at 12%, Sarah sells 25% of her bakery into 10,000 shares at \$50 each. Investors become partners; when profits grow to \$400,000, each share value multiplies.',
              takeaway: 'Equity markets allow everyday citizens to share in the prosperity of growing commercial enterprises.'
            },
            quiz_id: 'quiz-2'
          },
          {
            id: 'les-2-2',
            module_id: 'mod-2-1',
            course_id: 'course-2',
            title: 'How Exchanges, Brokers & Depositories Operate',
            slug: 'how-exchanges-and-brokers-work',
            duration: '12 min',
            order: 2,
            content: `Trading equities involves a coordinated institutional ecosystem:

- **Stock Exchanges (e.g., NSE, BSE, NYSE, NASDAQ):** The central regulated marketplace matching buyers and sellers through electronic limit order books.
- **Stockbrokers (Discount & Full-service):** Regulated intermediaries that provide you the trading application, route your buy/sell orders to the exchange, and handle margin.
- **Depositories (e.g., NSDL, CDSL, DTCC):** The electronic vaults that hold your shares in dematerialized (Demat) form in your legal name, ensuring safety even if your broker goes bankrupt.
- **Regulators (e.g., SEBI, SEC):** Government watchdogs protecting investor interests, enforcing disclosure standards, and punishing fraud or insider trading.`,
            takeaways: [
              'Your shares are safely stored in national depositories, not inside your broker’s private account.',
              'Exchanges operate automated order books prioritizing price and timestamp.',
              'Market orders execute instantly at current market ask; limit orders execute only at your specified price.'
            ]
          }
        ]
      },
      {
        id: 'mod-2-2',
        course_id: 'course-2',
        title: 'Module 2: Key Financial Metrics Every Beginner Must Know',
        order: 2,
        lessons: [
          {
            id: 'les-2-3',
            module_id: 'mod-2-2',
            course_id: 'course-2',
            title: 'Market Capitalization: Large, Mid, and Small Caps',
            slug: 'market-capitalization-explained',
            duration: '9 min',
            order: 3,
            content: `Market Capitalization (Market Cap) represents the total equity value of a publicly traded company.

$$\\text{Market Cap} = \\text{Current Share Price} \\times \\text{Total Outstanding Shares}$$

### Capitalization Tiers:
- **Large-Cap (Blue Chip):** Mature market leaders with steady balance sheets, strong moats, and predictable cashflows. Lower volatility, steady dividends, moderate growth.
- **Mid-Cap:** Rapidly expanding enterprises with established customer bases seeking to capture national market share. Balanced risk-reward profile.
- **Small-Cap:** High-growth, earlier stage companies with high potential returns but significant business vulnerability during recessions.`,
            takeaways: [
              'Never judge a company as cheap or expensive simply by its share price (\$10 vs \$1,000); look at Market Cap.',
              'Allocate across large, mid, and small caps based on your personal risk capacity.',
              'Blue chips provide stability during bear markets.'
            ]
          },
          {
            id: 'les-2-4',
            module_id: 'mod-2-2',
            course_id: 'course-2',
            title: 'P/E Ratio, EPS & Dividend Yield Demystified',
            slug: 'pe-ratio-eps-dividend-yield',
            duration: '15 min',
            order: 4,
            content: `Fundamental valuation relies on core multiples:

### 1. Earnings Per Share (EPS):
$$\\text{EPS} = \\frac{\\text{Net Net Income} - \\text{Preferred Dividends}}{\\text{Total Outstanding Shares}}$$
It tells you how many dollars of clean profit each share generated over the trailing twelve months.

### 2. Price-to-Earnings (P/E) Ratio:
$$\\text{P/E} = \\frac{\\text{Share Price}}{\\text{EPS}}$$
If a stock trades at \$100 and earns \$5 per share, its P/E is 20. You are paying \$20 for every \$1 of current corporate earnings. Compare P/E against historical averages and direct industry competitors.

### 3. Dividend Yield:
$$\\text{Dividend Yield} = \\frac{\\text{Annual Cash Dividend Per Share}}{\\text{Share Price}} \\times 100\\%$$
Represents the annual direct cash payout percentage returned to shareholders.`,
            takeaways: [
              'A high P/E implies investors anticipate rapid future growth or the stock is overvalued.',
              'A low P/E may indicate a bargain or a deteriorating business facing structural disruption.',
              'Always pair P/E with debt levels, return on equity (ROE), and cash flow conversion.'
            ],
            quiz_id: 'quiz-2'
          }
        ]
      },
      {
        id: 'mod-2-3',
        course_id: 'course-2',
        title: 'Module 3: Avoiding Psychological Traps & Risk Management',
        order: 3,
        lessons: [
          {
            id: 'les-2-5',
            module_id: 'mod-2-3',
            course_id: 'course-2',
            title: 'Bull vs. Bear Markets & Surviving Market Corrections',
            slug: 'bull-vs-bear-markets',
            duration: '10 min',
            order: 5,
            content: `Financial markets move in cyclical waves:
- **Bull Market:** A sustained period of rising prices (typically 20%+ rally from recent lows), driven by economic expansion, corporate earnings growth, and strong investor sentiment.
- **Bear Market:** A drop of 20% or more from all-time highs, accompanied by negative headlines, pessimism, and recessionary fears.
- **Correction:** A normal 10% to 20% pullback that resets euphoric valuations.

Historically, market corrections happen once every 12 to 18 months. They are features of equity investing, not bugs! Investors who panic sell at the bottom lock in permanent capital losses.`,
            takeaways: [
              'Market volatility is the price of admission for superior long-term inflation-beating returns.',
              'Bear markets are historic wealth-building opportunities for regular accumulators.',
              'Never invest money you need within the next 3 to 5 years into individual stocks.'
            ]
          },
          {
            id: 'les-2-6',
            module_id: 'mod-2-3',
            course_id: 'course-2',
            title: 'The Top 5 Traps That Wipe Out Novice Investors',
            slug: 'top-5-traps-novice-investors',
            duration: '11 min',
            order: 6,
            content: `80% of beginners who lose capital fall into the exact same predictable traps:
1. **Day Trading & Intraday Futures/Options:** Research shows over 90% of retail F&O derivatives traders incur net losses after brokerage and slippage.
2. **Penny Stocks & WhatsApp/Telegram Tips:** Buying low-liquidity microcaps based on pump-and-dump rumors.
3. **Overconcentration:** Putting 60% of net worth into a single speculative stock.
4. **Anchoring & Loss Aversion:** Refusing to sell an objectively ruined business because 'I am down 40% and waiting to break even'.
5. **FOMO (Fear of Missing Out):** Buying speculative assets after they have already rallied 300% in weeks.`,
            takeaways: [
              'Avoid high-leverage derivatives unless you are an institutional risk manager.',
              'Never act on unsolicited social media tips or guaranteed profit claims.',
              'Diversification is the only true free lunch in finance.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    slug: 'how-mutual-funds-and-etfs-work',
    title: 'How Mutual Funds & ETFs Work: The Ultimate Guide',
    tagline: 'Unlock instant diversification, low-cost index investing, and effortless wealth compounding.',
    description: 'Understand active vs passive funds, total expense ratios (TER), tracking error, SIPs vs lump sums, debt vs equity funds, and how to build a hands-off portfolio that beats 85% of active hedge funds.',
    category: 'Mutual Funds',
    level: 'Beginner',
    duration: '3.0 Hours',
    total_lessons: 5,
    rating: 4.92,
    review_count: 1890,
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    badge: 'Essential',
    instructor: {
      name: 'Rohan Mehra',
      role: 'Portfolio Manager & Founder of IndexPulse',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      bio: 'Rohan specializes in low-cost passive indexation and systematic asset allocation strategies.'
    },
    created_at: '2025-01-20T00:00:00Z',
    modules: [
      {
        id: 'mod-3-1',
        course_id: 'course-3',
        title: 'Module 1: Mutual Funds Decoded',
        order: 1,
        lessons: [
          {
            id: 'les-3-1',
            module_id: 'mod-3-1',
            course_id: 'course-3',
            title: 'What is a Mutual Fund & How Does It Pool Capital?',
            slug: 'what-is-a-mutual-fund',
            duration: '10 min',
            order: 1,
            content: `A mutual fund is an investment vehicle that pools money from thousands of retail and institutional investors to purchase a diversified basket of stocks, bonds, or money market instruments.

Instead of buying 50 individual shares of technology, banking, healthcare, and energy companies yourself—which requires substantial capital and constant portfolio rebalancing—you buy **Units** of a mutual fund. 

Each unit represents your proportional ownership of the underlying basket. The price of one unit is called the **Net Asset Value (NAV)**, calculated daily after market closing based on the total valuation of the underlying securities minus operating expenses.`,
            takeaways: [
              'Mutual funds offer instant diversification even with modest monthly contributions.',
              'NAV reflects the per-unit value of the fund’s underlying net assets.',
              'Mutual funds are managed by professional Asset Management Companies (AMCs).'
            ],
            practical_example: {
              title: 'Instant 500-Company Diversification',
              scenario: 'Dev has \$100/mo to invest. Buying one share of 50 blue chips would cost over \$5,000.',
              solution: 'By investing \$100 into an S&P 500 or Nifty 50 index fund, Dev automatically owns fractional shares of the 500 largest profitable companies in the nation.',
              takeaway: 'Mutual funds eliminate single-company ruin risk through automated diversification.'
            }
          },
          {
            id: 'les-3-2',
            module_id: 'mod-3-1',
            course_id: 'course-3',
            title: 'Active Funds vs Passive Index Funds: The Fee War',
            slug: 'active-vs-passive-index-funds',
            duration: '14 min',
            order: 2,
            content: `There is an ongoing philosophical divide in investment management:

### Active Mutual Funds:
- Managed by portfolio managers and teams of research analysts attempting to 'beat the market index'.
- Charge higher Total Expense Ratios (TER), often between 1.0% and 2.5% annually.
- Decades of S&P SPIVA research shows over 85% of active funds fail to beat their benchmark index over a 10-year rolling horizon after accounting for management fees.

### Passive Index Funds & ETFs:
- Do not attempt to guess or beat the market; they simply replicate a major index (like S&P 500, Nifty 50, Total Market).
- Ultra-low expense ratios (often 0.05% to 0.20%).
- Guaranteed to capture 99.9% of the overall economic expansion of the corporate sector.`,
            takeaways: [
              'High management fees eat away massive amounts of your retirement wealth over 30 years.',
              'A 1% annual fee difference can reduce your ultimate portfolio value by 25% due to compounding drag.',
              'Passive low-cost index funds form the bedrock of modern Boglehead investing.'
            ],
            quiz_id: 'quiz-3'
          }
        ]
      },
      {
        id: 'mod-3-2',
        course_id: 'course-3',
        title: 'Module 2: Systematic Investment Plans (SIP)',
        order: 2,
        lessons: [
          {
            id: 'les-3-3',
            module_id: 'mod-3-2',
            course_id: 'course-3',
            title: 'The Magic of SIP & Rupee/Dollar Cost Averaging',
            slug: 'magic-of-sip-dollar-cost-averaging',
            duration: '12 min',
            order: 3,
            content: `A Systematic Investment Plan (SIP) is an automated method of investing a fixed sum of money at predetermined intervals (e.g. \$200 on the 1st of every month) into a chosen mutual fund or ETF.

### Why SIP Crushes Market Timing:
1. **Rupee/Dollar Cost Averaging:** When markets crash, your fixed monthly amount buys **more units** at bargain prices. When markets rally, you buy fewer units at higher prices. Your average purchase cost is mathematically lowered.
2. **Behavioral Discipline:** Eliminates the emotional stress of timing bottoms and tops.
3. **Automation:** You invest before you have the chance to spend surplus cash on impulse luxuries.`,
            takeaways: [
              'Time in the market beats timing the market every single time.',
              'Market corrections during your accumulation phase are your greatest financial ally.',
              'Step-up your SIP by 10% each year as your salary increases to supercharge wealth.'
            ]
          },
          {
            id: 'les-3-4',
            module_id: 'mod-3-2',
            course_id: 'course-3',
            title: 'ETFs vs Mutual Funds: Liquidity and Flexibility',
            slug: 'etfs-vs-mutual-funds',
            duration: '11 min',
            order: 4,
            content: `While both offer pooled diversification, their trading mechanics differ:
- **Exchange Traded Funds (ETFs):** Trade like regular stocks throughout the trading day with real-time changing prices on the stock exchange. You need a brokerage account to buy and sell.
- **Mutual Funds:** Settle once daily after market close at the official end-of-day NAV. You can set up automated direct bank debits without needing a stockbroker.`,
            takeaways: [
              'ETFs offer real-time intraday pricing and limit orders.',
              'Mutual funds offer superior hassle-free automated monthly bank debits for passive hands-off investors.',
              'Check ETF liquidity and trading volume before executing market orders.'
            ]
          },
          {
            id: 'les-3-5',
            module_id: 'mod-3-2',
            course_id: 'course-3',
            title: 'Debt Funds, Hybrid Funds & Asset Allocation',
            slug: 'debt-and-hybrid-funds',
            duration: '10 min',
            order: 5,
            content: `Equity funds are not the only category. 
- **Debt Funds:** Invest in government securities, treasury bills, and high-grade corporate bonds. Lower volatility than equities, making them suitable for 1 to 3 year financial horizons.
- **Hybrid / Balanced Funds:** Blend equities (65%) and fixed income (35%) in a single portfolio with automatic rebalancing. Ideal for conservative investors seeking equity exposure with cushioned drawdowns.`,
            takeaways: [
              'Match fund category to your time horizon: Debt for <3 years, Equity for >5 years.',
              'Asset allocation determines 90% of your portfolio return variance.',
              'Rebalance once per year to maintain your target risk profile.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'course-4',
    slug: 'investing-from-zero',
    title: 'Investing from Zero: Compounding & Long-Term Wealth',
    tagline: 'Start your wealth journey with as little as \$10. Harness the 8th wonder of the world.',
    description: 'Learn the exponential mathematics of compound interest, understand risk vs return tradeoffs, discover asset classes, and build a generational mindset to achieve financial independence.',
    category: 'Investing',
    level: 'Beginner',
    duration: '2.8 Hours',
    total_lessons: 5,
    rating: 4.96,
    review_count: 3100,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    badge: 'Must Watch',
    instructor: {
      name: 'Aditi Sharma, CFA',
      role: 'Head of Financial Literacy & Wealth Advisory',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      bio: 'Aditi has coached over 50,000 young professionals and students on foundational wealth architecture.'
    },
    created_at: '2025-01-22T00:00:00Z',
    modules: [
      {
        id: 'mod-4-1',
        course_id: 'course-4',
        title: 'Module 1: The Exponential Power of Compounding',
        order: 1,
        lessons: [
          {
            id: 'les-4-1',
            module_id: 'mod-4-1',
            course_id: 'course-4',
            title: 'Compound Interest: The Exponential Curve',
            slug: 'compound-interest-exponential-curve',
            duration: '11 min',
            order: 1,
            content: `Albert Einstein famously described compound interest as the eighth wonder of the world: 'He who understands it, earns it; he who doesn’t, pays it.'

Unlike simple interest, which only generates earnings on your initial principal, **compound interest generates interest on your accumulated interest**.

### The Mathematical Formula:
$$A = P \\left(1 + \\frac{r}{n}\\right)^{nt}$$
Where:
- $P$ = Principal amount
- $r$ = Annual interest rate (decimal)
- $n$ = Number of compounding intervals per year
- $t$ = Time in years

In the first 5 years, compounding appears deceptively slow. But between years 15 and 30, the exponential curve bends vertically, producing astronomical returns. Time in the market is your greatest asset.`,
            takeaways: [
              'Starting 10 years earlier is worth more than doubling your monthly savings rate later in life.',
              'Compounding rewards patience, consistency, and low portfolio turnover.',
              'Avoid interrupting the compounding process through needless panic selling.'
            ],
            practical_example: {
              title: 'The 20-Year-Old vs 30-Year-Old Compounding Race',
              scenario: 'Aarav starts investing \$200/mo at age 20 and stops at age 30 (investing \$24,000 total). Kabir starts at age 30 and invests \$200/mo until age 60 (investing \$72,000 total).',
              solution: 'At a 10% annual return, Aarav ends up with approximately \$1.1 Million at age 60, while Kabir ends up with \$455,000 despite investing 3x more money!',
              takeaway: 'Starting young gives your capital the runway it needs to compound exponentially.'
            }
          },
          {
            id: 'les-4-2',
            module_id: 'mod-4-1',
            course_id: 'course-4',
            title: 'Risk vs Return: Navigating the Asset Spectrum',
            slug: 'risk-vs-return-tradeoff',
            duration: '10 min',
            order: 2,
            content: `Every single investment involves an inescapable relationship: **Return is compensation for bearing risk and volatility**.

- **Guaranteed Fixed Deposits / T-Bills:** Low risk, but real returns after taxes and inflation are near 0% to 1%.
- **Corporate Bonds:** Moderate risk, moderate predictable yield.
- **Broad Equities (Index Funds):** Significant short-term price volatility, but historically produces 7% to 12% annualized long-term inflation-beating growth.
- **Early-stage Startups / Cryptocurrencies:** High risk of total capital loss, with asymmetric upside potential.

Anyone promising 'high returns with zero risk' is running a fraudulent scheme. Know your risk tolerance and financial capacity before allocating.`,
            takeaways: [
              'There is no high return without volatility or capital risk.',
              'Inflation is the greatest hidden risk of keeping all money in cash.',
              'Balance growth assets with safety cushions to weather economic storms.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'course-5',
    slug: 'smart-budgeting',
    title: 'Smart Budgeting & Cash Flow Mastery: The Blueprint',
    tagline: 'Transform your cashflow from chaotic survival into an automated wealth-generation machine.',
    description: 'Master zero-based budgeting, automate bill payments, optimize banking setups, handle irregular income, and break the paycheck-to-paycheck cycle for good.',
    category: 'Budgeting',
    level: 'Beginner',
    duration: '2.5 Hours',
    total_lessons: 5,
    rating: 4.88,
    review_count: 980,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    badge: 'Practical',
    instructor: {
      name: 'Maya Varma',
      role: 'Behavioral Finance Specialist & Coach',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      bio: 'Maya combines psychology and practical spreadsheets to help individuals build seamless budgeting systems.'
    },
    created_at: '2025-01-25T00:00:00Z',
    modules: [
      {
        id: 'mod-5-1',
        course_id: 'course-5',
        title: 'Module 1: Creating Your Cashflow Engine',
        order: 1,
        lessons: [
          {
            id: 'les-5-1',
            module_id: 'mod-5-1',
            course_id: 'course-5',
            title: 'The Multi-Account Banking Architecture',
            slug: 'multi-account-banking-architecture',
            duration: '12 min',
            order: 1,
            content: `The greatest mistake people make is managing their entire life out of a single bank checking account. When your paycheck, rent, grocery money, and fun money all sit in one bucket, you have no real visibility into what you can safely spend.

### The 4-Account System:
1. **Primary Inflow / Bills Account:** Paycheck deposits here. Rent, utilities, and EMI loan debits leave automatically.
2. **Emergency Vault (HYSA):** Kept in a separate institution with no debit card in your wallet. 3 to 6 months of living expenses.
3. **Daily Guilt-Free Spending Account:** You transfer your designated weekly 'fun allowance' here on Mondays. When it hits zero, dining out pauses until next week.
4. **Investment Pipeline:** Automated transfer destination for monthly index funds and retirement contributions.`,
            takeaways: [
              'Separate spending money from essential bill money with dedicated accounts.',
              'Automate monthly recurring bills so you never incur late penalties or credit dings.',
              'Guilt-free spending prevents budget burnout and binge shopping.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'course-6',
    slug: 'understanding-taxes',
    title: 'Understanding Income Taxes & Tax-Saving Strategies',
    tagline: 'Keep more of what you earn legally. Master tax deductions, regimes, and capital gains.',
    description: 'Demystify progressive tax brackets, standard deductions, 80C/80D or 401(k)/IRA equivalents, capital gains tax rules (STCG vs LTCG), and tax-loss harvesting.',
    category: 'Taxation',
    level: 'Intermediate',
    duration: '3.8 Hours',
    total_lessons: 5,
    rating: 4.89,
    review_count: 1120,
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
    badge: 'Essential',
    instructor: {
      name: 'Karan Dave, CA',
      role: 'Tax Consultant & Corporate Financial Advisor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      bio: 'Karan has assisted over 300 business founders and high-income earners in legitimate tax optimization.'
    },
    created_at: '2025-01-28T00:00:00Z',
    modules: [
      {
        id: 'mod-6-1',
        course_id: 'course-6',
        title: 'Module 1: Income Tax Mechanics & Brackets',
        order: 1,
        lessons: [
          {
            id: 'les-6-1',
            module_id: 'mod-6-1',
            course_id: 'course-6',
            title: 'How Progressive Tax Brackets Actually Work',
            slug: 'how-progressive-tax-brackets-work',
            duration: '11 min',
            order: 1,
            content: `The most pervasive tax myth is the belief that moving into a higher tax bracket reduces your total take-home pay. This is mathematically false because tax brackets are **marginal, not flat**.

### Marginal Bracket Example:
If the 10% bracket covers \$0 to \$10,000, and the 20% bracket covers \$10,001 to \$40,000:
- Earning \$10,000 results in \$1,000 tax (take-home \$9,000).
- If your salary jumps to \$11,000, only the additional \$1,000 is taxed at 20% (\$200). Your total tax is \$1,200, and your take-home pay increases to \$9,800.

You never earn less money after-tax by receiving a raise!`,
            takeaways: [
              'Taxes are progressive: only income within a specific bracket is taxed at that bracket rate.',
              'Never decline a raise or bonus out of fear of entering a higher bracket.',
              'Understand your effective tax rate vs marginal tax rate.'
            ]
          },
          {
            id: 'les-6-2',
            module_id: 'mod-6-1',
            course_id: 'course-6',
            title: 'Capital Gains Tax: Short-Term vs Long-Term',
            slug: 'capital-gains-tax-stcg-ltcg',
            duration: '13 min',
            order: 2,
            content: `When you sell assets (stocks, mutual funds, real estate, precious metals) for a profit, you trigger a capital gains taxable event:
- **Short-Term Capital Gains (STCG):** Assets held for less than the statutory holding threshold (e.g. 1 year for equities). Usually taxed at higher rates.
- **Long-Term Capital Gains (LTCG):** Assets held past the threshold. Governments incentivize patient long-term investing by granting lower preferential tax rates, often with annual tax-exempt thresholds.`,
            takeaways: [
              'Patience is rewarded in tax codes through lower LTCG rates.',
              'Tax-loss harvesting allows you to offset realized investment gains against realized losses.',
              'Holding securities long-term dramatically improves after-tax compound returns.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'course-7',
    slug: 'build-your-first-investment-portfolio',
    title: 'Build Your First Investment Portfolio: Asset Allocation',
    tagline: 'Construct a resilient, all-weather portfolio aligned with your age, risk profile, and goals.',
    description: 'Discover Harry Markowitz’s Modern Portfolio Theory, core-and-satellite strategy, international diversification, annual rebalancing, and stress-testing your investments against recessions.',
    category: 'Financial Planning',
    level: 'Intermediate',
    duration: '3.2 Hours',
    total_lessons: 5,
    rating: 4.93,
    review_count: 850,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    badge: 'Comprehensive',
    instructor: {
      name: 'Aditi Sharma, CFA',
      role: 'Head of Financial Literacy & Wealth Advisory',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      bio: 'Aditi has coached over 50,000 young professionals and students on foundational wealth architecture.'
    },
    created_at: '2025-02-01T00:00:00Z',
    modules: [
      {
        id: 'mod-7-1',
        course_id: 'course-7',
        title: 'Module 1: The Art of Asset Allocation',
        order: 1,
        lessons: [
          {
            id: 'les-7-1',
            module_id: 'mod-7-1',
            course_id: 'course-7',
            title: 'Asset Allocation: The Foundation of Long-Term Success',
            slug: 'asset-allocation-explained',
            duration: '12 min',
            order: 1,
            content: `Asset allocation is the process of deciding how to distribute your wealth among broad asset classes such as:
1. **Equities (Stocks & Index Funds):** For inflation-beating capital growth.
2. **Fixed Income (Bonds & Debt Funds):** For capital preservation and income stability.
3. **Real Estate / REITs:** For tangible assets, rental yields, and inflation hedge.
4. **Precious Metals (Gold / Sovereign Gold Bonds):** For crisis protection and currency debasement defense.
5. **Cash / Liquid Equivalents:** For immediate obligations and buying market crashes.

Nobel Prize-winning research demonstrates that asset allocation decisions account for over **90% of a portfolio’s performance variance** over multi-decade periods—far more important than picking individual winning stocks!`,
            takeaways: [
              'Asset allocation matters significantly more than individual stock picking.',
              'Correlations matter: combine assets that do not move in lockstep together.',
              'Rebalance your target percentages annually to buy low and sell high automatically.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'course-8',
    slug: 'financial-planning-for-students',
    title: 'Financial Planning for Students & Young Professionals',
    tagline: 'Bridge the school curriculum gap. Graduate with financial literacy, zero bad debt, and high credit scores.',
    description: 'Tailored for 18-to-28 year olds: handling first paychecks, managing student loans, understanding credit scores, negotiating starter compensation, and building financial independence early.',
    category: 'Financial Planning',
    level: 'Beginner',
    duration: '2.9 Hours',
    total_lessons: 5,
    rating: 4.97,
    review_count: 2450,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    badge: 'Top Rated for Students',
    instructor: {
      name: 'Maya Varma',
      role: 'Behavioral Finance Specialist & Coach',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      bio: 'Maya combines psychology and practical spreadsheets to help individuals build seamless budgeting systems.'
    },
    created_at: '2025-02-05T00:00:00Z',
    modules: [
      {
        id: 'mod-8-1',
        course_id: 'course-8',
        title: 'Module 1: Navigating Early Financial Independence',
        order: 1,
        lessons: [
          {
            id: 'les-8-1',
            module_id: 'mod-8-1',
            course_id: 'course-8',
            title: 'Your First Paycheck: The 30-Day Gameplan',
            slug: 'first-paycheck-gameplan',
            duration: '10 min',
            order: 1,
            content: `Receiving your first full-time compensation is intoxicating. But lifestyle inflation quickly takes hold if you do not establish automatic guardrails from Day One.

### The First Paycheck Checklist:
1. **Confirm Net Take-Home:** Check gross salary vs tax deductions, provident fund, health insurance deductions.
2. **Build \$1,000 Starter Buffer:** Before buying expensive electronics or celebrations, lock in a basic emergency buffer.
3. **Activate Employer Retirement Match:** If your company offers matching contributions (e.g. 401k or employer pension), contribute enough to get 100% of the match. That is an instant 100% guaranteed return on your money.
4. **Resist The New Car Trap:** Financing an expensive car with high monthly payments is the #1 killer of young professional wealth accumulation.`,
            takeaways: [
              'Always capture 100% of any employer retirement match—it is free money.',
              'Avoid large recurring financial commitments in your first 12 months on the job.',
              'Celebrate milestones thoughtfully without detonating your baseline savings.'
            ]
          },
          {
            id: 'les-8-2',
            module_id: 'mod-8-1',
            course_id: 'course-8',
            title: 'Credit Scores Decoded: Build an 800+ Score Responsibly',
            slug: 'credit-scores-decoded',
            duration: '12 min',
            order: 2,
            content: `Your credit score (e.g., CIBIL / FICO ranging from 300 to 850) governs your financial reputation. A stellar score saves you hundreds of thousands in loan interest rates on future mortgages.

### The 5 Factors Driving Credit Scores:
1. **Payment History (35%):** Never, ever miss a due date. Set up auto-pay for the **Total Amount Due**, not the minimum due.
2. **Credit Utilization (30%):** Keep your total credit card balance under 30% of your total credit limit. If your limit is \$5,000, never report a balance over \$1,500.
3. **Credit History Length (15%):** Keep your oldest credit card active with occasional small recurring bills.
4. **Credit Mix (10%):** Having both revolving (credit cards) and installment credit (education loans).
5. **New Inquiries (10%):** Avoid applying for 5 credit cards in the same month.`,
            takeaways: [
              'Pay your credit card balance in full every single billing cycle to pay zero interest.',
              'Keep credit card utilization below 30% to maximize your credit rating.',
              'Never cancel your oldest credit card as it anchors your credit history length.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'course-9',
    slug: 'cryptocurrency-and-digital-assets',
    title: 'Cryptocurrency & Digital Assets: Risks & Realities',
    tagline: 'Separate hype from fundamentals. An objective, hype-free guide to Bitcoin, Ethereum, and blockchain.',
    description: 'Learn how decentralized blockchains work, smart contracts, proof of work vs proof of stake, cold storage custody, regulatory risks, and why crypto should never exceed 1-5% of your portfolio.',
    category: 'Cryptocurrency',
    level: 'Intermediate',
    duration: '2.5 Hours',
    total_lessons: 5,
    rating: 4.84,
    review_count: 760,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    badge: 'Cautionary & Objective',
    instructor: {
      name: 'Vikram Sengupta',
      role: 'Former Institutional Equity Analyst & Author',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      bio: 'Vikram managed \$400M in equities across Asia-Pacific markets before founding an investor education lab.'
    },
    created_at: '2025-02-10T00:00:00Z',
    modules: [
      {
        id: 'mod-9-1',
        course_id: 'course-9',
        title: 'Module 1: Blockchain Technology & Crypto Assets',
        order: 1,
        lessons: [
          {
            id: 'les-9-1',
            module_id: 'mod-9-1',
            course_id: 'course-9',
            title: 'How Blockchains Work: Distributed Ledgers & Mining',
            slug: 'how-blockchains-work',
            duration: '12 min',
            order: 1,
            content: `A blockchain is fundamentally a decentralized, immutable, cryptographically secured digital ledger shared across an open network of computers.

- **Bitcoin:** Conceived in 2008 by Satoshi Nakamoto as peer-to-peer electronic cash, it has evolved primarily into a digital store of value with a hardcoded supply cap of 21 Million coins.
- **Ethereum:** A programmable blockchain that enables developers to run autonomous smart contracts and decentralized applications (dApps).
- **Extreme Volatility:** Crypto markets experience frequent 70% to 90% drawdowns. They lack sovereign backing, corporate cash flows, or dividend yields.

If you choose to allocate to digital assets, keep it strictly within a **1% to 5% satellite risk budget** that you are completely comfortable losing.`,
            takeaways: [
              'Crypto is highly speculative and subject to massive cyclical drawdowns.',
              'Never invest emergency funds or borrowed money into cryptocurrencies.',
              'Hardware cold wallets are essential if holding significant digital assets off centralized exchanges.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'course-10',
    slug: 'banking-credit-cards-and-debt-freedom',
    title: 'Banking, Credit Cards & Debt-Free Living',
    tagline: 'Turn credit cards from financial traps into cash-back rewards machines while avoiding interest.',
    description: 'Master the banking system: high-yield accounts, reward point optimization, eliminating overdraft fees, negotiating lower interest rates, and living a completely debt-free lifestyle.',
    category: 'Banking',
    level: 'Beginner',
    duration: '2.6 Hours',
    total_lessons: 5,
    rating: 4.91,
    review_count: 1340,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular',
    instructor: {
      name: 'Rohan Mehra',
      role: 'Portfolio Manager & Founder of IndexPulse',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      bio: 'Rohan specializes in low-cost passive indexation and systematic asset allocation strategies.'
    },
    created_at: '2025-02-14T00:00:00Z',
    modules: [
      {
        id: 'mod-10-1',
        course_id: 'course-10',
        title: 'Module 1: Mastering Everyday Banking & Credit',
        order: 1,
        lessons: [
          {
            id: 'les-10-1',
            module_id: 'mod-10-1',
            course_id: 'course-10',
            title: 'How Credit Card Companies Make Money & How to Beat Them',
            slug: 'how-credit-card-companies-make-money',
            duration: '11 min',
            order: 1,
            content: `Credit card issuers earn revenue through three primary mechanisms:
1. **Interchange Fees:** Charging merchants 1.5% to 3% on every swipe.
2. **Annual Card Fees & Penalties:** Over-limit charges, late fees, foreign transaction fees.
3. **Compound Revolving Interest:** Charging 30% to 42% APR on balances carried past the grace period.

To win the game: Treat your credit card strictly as a **debit card**. Never charge anything you cannot pay off in cash that exact same day. Enjoy the 45-day interest-free float, fraud protection, and 1% to 5% rewards points without ever paying a penny in interest.`,
            takeaways: [
              'Pay your entire statement balance every month before the due date.',
              'Never pay minimum balance—minimum payments are designed to keep you in debt for 20 years.',
              'Leverage credit card fraud protection and travel reward benefits responsibly.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'course-11',
    slug: 'wealth-building-and-financial-independence',
    title: 'Wealth Building: The Path to Financial Independence (FIRE)',
    tagline: 'Design an intentional life where work is a choice, not an economic necessity.',
    description: 'Explore the FIRE (Financial Independence, Retire Early) movement: calculate your FIRE number, master the 4% Safe Withdrawal Rule, optimize sequence-of-returns risk, and build multiple streams of passive cash flow.',
    category: 'Wealth Building',
    level: 'Advanced',
    duration: '4.0 Hours',
    total_lessons: 5,
    rating: 4.98,
    review_count: 1750,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    badge: 'Masterclass',
    instructor: {
      name: 'Aditi Sharma, CFA',
      role: 'Head of Financial Literacy & Wealth Advisory',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      bio: 'Aditi has coached over 50,000 young professionals and students on foundational wealth architecture.'
    },
    created_at: '2025-02-18T00:00:00Z',
    modules: [
      {
        id: 'mod-11-1',
        course_id: 'course-11',
        title: 'Module 1: The Mathematics of Financial Independence',
        order: 1,
        lessons: [
          {
            id: 'les-11-1',
            module_id: 'mod-11-1',
            course_id: 'course-11',
            title: 'Calculating Your FIRE Number & The 4% Rule',
            slug: 'calculating-your-fire-number',
            duration: '14 min',
            order: 1,
            content: `The FIRE movement revolves around a single empowering metric: Your **FIRE Number**.

Based on the landmark Trinity Study of historical market returns over 30-year retirement windows, the **4% Safe Withdrawal Rate** posits that you can safely withdraw 4% of your initial portfolio value in year one (adjusted for inflation thereafter) with a 95%+ probability of never exhausting your principal.

### The Math:
$$\\text{FIRE Number} = \\text{Annual Living Expenses} \\times 25$$

If your household requires \$40,000 per year to live comfortably:
$$\\$40,000 \\times 25 = \\$1,000,000$$

Once your diversified investment portfolio reaches \$1,000,000, your annual 4% withdrawal (\$40,000) funds your existence indefinitely without touching your labor!`,
            takeaways: [
              'Your FIRE number is determined by your living expenses, not your current salary.',
              'Decreasing annual expenses reduces your required nest egg by 25x that amount.',
              'True wealth is the ability to wake up and say: I can do whatever I want today.'
            ]
          }
        ]
      }
    ]
  }
];
