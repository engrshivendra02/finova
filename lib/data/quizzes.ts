import { Quiz } from '@/types';

export const INITIAL_QUIZZES: Quiz[] = [
  {
    id: 'quiz-1',
    course_id: 'course-1',
    title: 'Personal Finance Fundamentals & Budgeting Mastery',
    description: 'Test your understanding of cashflow, the 50/30/20 rule, emergency funds, and debt strategies.',
    passing_score: 70,
    questions: [
      {
        id: 'q1-1',
        quiz_id: 'quiz-1',
        question: 'Under the standard 50/30/20 budgeting rule, what percentage of your after-tax income should go toward Needs?',
        options: ['30%', '50%', '20%', '10%'],
        correct_answer: 1,
        explanation: 'The 50/30/20 rule allocates 50% for essential Needs (housing, groceries, utilities), 30% for Wants (entertainment, dining out), and 20% for Savings and debt repayment.'
      },
      {
        id: 'q1-2',
        quiz_id: 'quiz-1',
        question: 'What is the primary purpose of an Emergency Fund?',
        options: [
          'To generate maximum speculative returns in the stock market',
          'To pay for spontaneous weekend vacations',
          'To prevent selling long-term investments or borrowing high-interest debt during sudden shocks',
          'To lock up money for 15 years in tax-saving bonds'
        ],
        correct_answer: 2,
        explanation: 'An emergency fund acts as an insurance policy against unexpected events like sudden medical expenses or job loss, preventing you from liquidating investments at a loss.'
      },
      {
        id: 'q1-3',
        quiz_id: 'quiz-1',
        question: 'How does the Debt Avalanche method prioritize debt payments?',
        options: [
          'It pays off the smallest balance first for psychological motivation',
          'It targets the debt with the highest interest rate first to minimize total interest paid',
          'It splits extra payments equally among all open loans',
          'It pays only loans with collateral first'
        ],
        correct_answer: 1,
        explanation: 'The Debt Avalanche method attacks the debt carrying the highest interest rate first (e.g., credit cards at 36% APR), which mathematically minimizes the total interest you pay over time.'
      },
      {
        id: 'q1-4',
        quiz_id: 'quiz-1',
        question: 'How many months of mandatory living expenses are generally recommended for an emergency fund for salaried workers?',
        options: ['1 to 2 weeks', '3 to 6 months', '3 to 5 years', 'Exactly 1 month'],
        correct_answer: 1,
        explanation: 'For individuals with stable salaried jobs, 3 to 6 months of mandatory living expenses provides adequate safety. Freelancers and entrepreneurs typically aim for 6 to 12 months.'
      },
      {
        id: 'q1-5',
        quiz_id: 'quiz-1',
        question: 'What is the key difference between a "need" and a "want" in personal budgeting?',
        options: [
          'Needs cost less than $50, while wants always cost more than $500',
          'Needs are essential for biological survival and basic livelihood, while wants are lifestyle upgrades',
          'Wants are tax-deductible, while needs are not',
          'There is no functional difference in modern personal finance'
        ],
        correct_answer: 1,
        explanation: 'Needs cover bare essentials required for health and livelihood (nutrition, basic shelter, primary transport, medicine). Wants represent comfort upgrades, prestige goods, and entertainment.'
      },
      {
        id: 'q1-6',
        quiz_id: 'quiz-1',
        question: 'Why is inflation considered a "silent tax" on idle cash sitting in checking accounts?',
        options: [
          'Banks charge a monthly inflation penalty fee',
          'It erodes the purchasing power of your money over time as prices for goods and services rise',
          'The government automatically confiscates 6% of bank balances annually',
          'Inflation causes bank computer servers to slow down'
        ],
        correct_answer: 1,
        explanation: 'Inflation continuously reduces what a unit of currency can purchase. If inflation is 6% per year, $10,000 sitting in a 0% yield account loses about half its real purchasing power in approximately 12 years.'
      }
    ]
  },
  {
    id: 'quiz-2',
    course_id: 'course-2',
    title: 'Stock Market & Equity Analysis Fundamentals',
    description: 'Evaluate your knowledge of shares, P/E ratios, market capitalization, and exchanges.',
    passing_score: 70,
    questions: [
      {
        id: 'q2-1',
        quiz_id: 'quiz-2',
        question: 'What does purchasing a common share of stock legally represent?',
        options: [
          'A short-term loan you have granted to a corporate CEO',
          'Fractional equity ownership of a real business and rights to future residual earnings',
          'A guaranteed contract for fixed quarterly cash interest payments',
          'A legal gambling ticket regulated by state lottery boards'
        ],
        correct_answer: 1,
        explanation: 'Owning common stock makes you a fractional owner (shareholder) of the enterprise, entitling you to voting rights, capital appreciation, and corporate dividend distributions.'
      },
      {
        id: 'q2-2',
        quiz_id: 'quiz-2',
        question: 'If a company has a stock price of $60 and annual Earnings Per Share (EPS) of $3, what is its P/E Ratio?',
        options: ['180', '20', '0.05', '57'],
        correct_answer: 1,
        explanation: 'P/E Ratio = Share Price / EPS. Here, $60 / $3 = 20. This indicates investors are paying $20 for every $1 of trailing annual earnings.'
      },
      {
        id: 'q2-3',
        quiz_id: 'quiz-2',
        question: 'Which entity safely stores dematerialized (electronic) shares in your name?',
        options: ['The stockbroker application', 'A National Depository (e.g. NSDL, CDSL, DTCC)', 'The central bank mint', 'Your local commercial retail bank branch'],
        correct_answer: 1,
        explanation: 'Shares are held in national electronic depositories under your unique Demat / depository account, guaranteeing your ownership even if your stockbroker goes out of business.'
      },
      {
        id: 'q2-4',
        quiz_id: 'quiz-2',
        question: 'What is a "Bear Market" formally defined as in financial markets?',
        options: [
          'Any single day where the stock market closes down by 1%',
          'A prolonged market decline of 20% or more from recent peak highs',
          'A market where only technology stocks decline while banking stocks rise',
          'A market where trading volume is unusually low during winter'
        ],
        correct_answer: 1,
        explanation: 'A bear market is conventionally defined as a 20% or greater decline in a broad stock index from its most recent all-time or 52-week high.'
      },
      {
        id: 'q2-5',
        quiz_id: 'quiz-2',
        question: 'Why is it dangerous to judge whether a stock is "cheap" solely by its per-share dollar price (e.g. $5 vs $500)?',
        options: [
          'Because $5 stocks always go bankrupt',
          'Because share price depends entirely on total shares outstanding; Market Capitalization and valuation multiples dictate true size and value',
          'Because brokers charge higher percentage fees for lower-priced stocks',
          'Because high-priced stocks are illegal for beginner investors'
        ],
        correct_answer: 1,
        explanation: 'A company with 1 billion shares trading at $5 has a $5B market cap, while a company with 1 million shares at $500 has a $500M market cap. Per-share price without share count tells you nothing about valuation.'
      },
      {
        id: 'q2-6',
        quiz_id: 'quiz-2',
        question: 'What does IPO stand for in financial markets?',
        options: [
          'Initial Public Offering',
          'Internal Portfolio Optimization',
          'Institutional Private Ownership',
          'Interest Payment Order'
        ],
        correct_answer: 0,
        explanation: 'IPO stands for Initial Public Offering, the process by which a privately held corporation offers its shares to the general public for the first time to raise expansion capital.'
      }
    ]
  },
  {
    id: 'quiz-3',
    course_id: 'course-3',
    title: 'Mutual Funds, ETFs & Index Investing',
    description: 'Master the mechanics of NAV, expense ratios, rupee/dollar cost averaging, and passive index funds.',
    passing_score: 70,
    questions: [
      {
        id: 'q3-1',
        quiz_id: 'quiz-3',
        question: 'What does "SIP" stand for in mutual fund investing?',
        options: [
          'Systematic Investment Plan',
          'Stock Investment Process',
          'Savings Interest Program',
          'System Investment Portfolio'
        ],
        correct_answer: 0,
        explanation: 'SIP stands for Systematic Investment Plan, an automated mechanism where a fixed sum is invested into a mutual fund scheme on a recurring schedule.'
      },
      {
        id: 'q3-2',
        quiz_id: 'quiz-3',
        question: 'What does Net Asset Value (NAV) represent for a mutual fund?',
        options: [
          'The maximum profit a fund is permitted to distribute annually',
          'The market value per share/unit of the fund, calculated after trading hours by dividing net assets by total units',
          'The salary paid to the fund manager',
          'The total commission paid to distributors'
        ],
        correct_answer: 1,
        explanation: 'NAV (Net Asset Value) equals the total value of the fund\'s assets minus liabilities divided by the number of outstanding units, updated at the end of each business day.'
      },
      {
        id: 'q3-3',
        quiz_id: 'quiz-3',
        question: 'Why do low-cost passive Index Funds frequently outperform active mutual funds over a 15-year horizon?',
        options: [
          'Index funds use artificial intelligence to predict short-term stock spikes',
          'Significantly lower Expense Ratios (management fees) and zero portfolio turnover drag compound heavily in favor of index investors',
          'Governments subsidize index funds with guaranteed bonus returns',
          'Active fund managers are not allowed to buy technology stocks'
        ],
        correct_answer: 1,
        explanation: 'Decades of empirical SPIVA studies show that over 85% of active fund managers underperform broad indices due to high expense ratios (1.5-2.5%), trading costs, and the mathematical difficulty of consistent market timing.'
      },
      {
        id: 'q3-4',
        quiz_id: 'quiz-3',
        question: 'How does Rupee/Dollar Cost Averaging benefit an investor during a stock market decline?',
        options: [
          'It pauses all your investments automatically until prices recover',
          'Your fixed recurring contribution automatically buys more units at cheaper prices, lowering your average cost per unit',
          'It converts all your equity holdings into cash overnight',
          'It guarantees you will never experience paper losses'
        ],
        correct_answer: 1,
        explanation: 'By investing a constant amount each month, you buy more units when the market is depressed and fewer units when it is expensive, resulting in a lower average cost per unit over time.'
      },
      {
        id: 'q3-5',
        quiz_id: 'quiz-3',
        question: 'What key operational difference exists between an ETF and a traditional mutual fund?',
        options: [
          'ETFs are only available to billionaires',
          'ETFs trade continuously on stock exchanges with real-time fluctuating prices, while mutual funds settle once per day at NAV',
          'Mutual funds can never hold government bonds',
          'ETFs have no management fees whatsoever'
        ],
        correct_answer: 1,
        explanation: 'ETFs trade like individual shares on the exchange during market hours with real-time bid/ask prices, whereas mutual fund transactions are processed once per day at the official closing NAV.'
      }
    ]
  },
  {
    id: 'quiz-4',
    course_id: 'course-4',
    title: 'Compound Interest & Wealth Acceleration',
    description: 'Test your grasp of exponential growth curves, the Rule of 72, and time horizon.',
    passing_score: 70,
    questions: [
      {
        id: 'q4-1',
        quiz_id: 'quiz-4',
        question: 'What makes Compound Interest fundamentally different from Simple Interest?',
        options: [
          'Compound interest is only available on bank loans, not investments',
          'Compound interest generates earnings not just on the initial principal, but also on previously accumulated interest',
          'Simple interest grows exponentially, while compound interest is strictly linear',
          'Compound interest requires government approval each year'
        ],
        correct_answer: 1,
        explanation: 'In compound interest, earned interest is reinvested into the principal, so subsequent interest is calculated on a growing base—producing an exponential wealth curve.'
      },
      {
        id: 'q4-2',
        quiz_id: 'quiz-4',
        question: 'According to the mental math "Rule of 72", how many years does it take for an investment earning 12% annually to double?',
        options: ['12 years', '6 years', '7.2 years', '72 years'],
        correct_answer: 1,
        explanation: 'The Rule of 72 states: Years to double ≈ 72 / Interest Rate. Here, 72 / 12 = 6 years.'
      },
      {
        id: 'q4-3',
        quiz_id: 'quiz-4',
        question: 'Which variable has the most dramatic exponential impact on long-term compound wealth?',
        options: [
          'Checking your account balance three times every day',
          'Time (Duration in years that capital remains invested)',
          'Frequently trading in and out of hot stock ideas',
          'The brand name of your smartphone'
        ],
        correct_answer: 1,
        explanation: 'Because time sits in the exponent of the compound interest formula A = P(1 + r/n)^(nt), each additional year at the end of the compounding horizon yields vastly greater dollar returns than the early years.'
      },
      {
        id: 'q4-4',
        quiz_id: 'quiz-4',
        question: 'If you invest $100 and earn 10% compound interest compounded annually, what will your total balance be after 2 years?',
        options: ['$120', '$121', '$110', '$200'],
        correct_answer: 1,
        explanation: 'Year 1: $100 + 10% = $110. Year 2: $110 + 10% of $110 ($11) = $121. The extra $1 is interest earned on previous interest!'
      }
    ]
  },
  {
    id: 'quiz-5',
    course_id: 'course-8',
    title: 'Credit Scores, Banking & Financial Health',
    description: 'Verify your understanding of credit utilization, credit scores, and debt traps.',
    passing_score: 70,
    questions: [
      {
        id: 'q5-1',
        quiz_id: 'quiz-5',
        question: 'What is the recommended maximum Credit Utilization ratio to maintain a healthy credit score?',
        options: ['100%', 'Under 30%', 'Over 75%', 'At least 50%'],
        correct_answer: 1,
        explanation: 'Credit bureaus favor utilization ratios below 30% (and ideally below 10%). For example, if your total credit limit is $10,000, keep your reported balance under $3,000.'
      },
      {
        id: 'q5-2',
        quiz_id: 'quiz-5',
        question: 'What happens when you only pay the "Minimum Amount Due" on your credit card statement each month?',
        options: [
          'The remaining balance is forgiven as a customer loyalty bonus',
          'You accrue high compound interest (often 36%-42% APR) on the unpaid balance, trapping you in multi-year debt',
          'Your credit score automatically reaches 850',
          'You earn double reward points on all transactions'
        ],
        correct_answer: 1,
        explanation: 'The minimum payment covers little more than fees and interest. The remaining principal balance continues compounding at punishing APRs, turning small charges into massive debts.'
      },
      {
        id: 'q5-3',
        quiz_id: 'quiz-5',
        question: 'Which single factor carries the heaviest weight in calculating your credit score (e.g. FICO / CIBIL)?',
        options: ['Payment History (paying all accounts on time)', 'Your social media follower count', 'Your job title', 'The physical color of your credit card'],
        correct_answer: 0,
        explanation: 'Payment history accounts for approximately 35% of your credit score calculation. Even a single 30-day late payment can severely depress your score.'
      },
      {
        id: 'q5-4',
        quiz_id: 'quiz-5',
        question: 'Why should you generally avoid closing your oldest credit card account?',
        options: [
          'Banks fine you $500 for closing cards',
          'It shortens your overall credit history length and reduces your total available credit limit, which can lower your score',
          'You are legally required to keep your first card forever',
          'It disables your passport'
        ],
        correct_answer: 1,
        explanation: 'Credit history length makes up 15% of your score. Keeping your oldest card open (even with occasional small purchases) anchors your credit history and preserves your overall credit limit.'
      }
    ]
  },
  {
    id: 'quiz-6',
    course_id: 'course-11',
    title: 'Financial Independence & The FIRE Movement',
    description: 'Test your understanding of the 4% Rule, FIRE numbers, and retirement withdrawal strategies.',
    passing_score: 70,
    questions: [
      {
        id: 'q6-1',
        quiz_id: 'quiz-6',
        question: 'Under the classic 4% Safe Withdrawal Rule, what multiplier of your annual expenses determines your FIRE Number?',
        options: ['10x', '25x', '50x', '5x'],
        correct_answer: 1,
        explanation: 'Because 1 / 0.04 = 25, your required retirement nest egg is 25 times your annual living expenses. Withdrawing 4% annually historically sustained portfolios through 30+ year retirement horizons.'
      },
      {
        id: 'q6-2',
        quiz_id: 'quiz-6',
        question: 'If your household requires $48,000 per year for living expenses, what is your 25x FIRE nest egg target?',
        options: ['$480,000', '$1,200,000', '$2,400,000', '$800,000'],
        correct_answer: 1,
        explanation: '$48,000 multiplied by 25 equals $1,200,000. At a 4% withdrawal rate, $1.2M provides $48,000 annually without touching the principal base.'
      },
      {
        id: 'q6-3',
        quiz_id: 'quiz-6',
        question: 'What is "Sequence of Returns Risk" in retirement planning?',
        options: [
          'The risk of forgetting which stock ticker was purchased first',
          'The risk of encountering a severe market downturn in the early years immediately following retirement, which disproportionately depletes capital while withdrawing living expenses',
          'The risk of changing bank accounts too quickly',
          'The risk that dividend payments arrive on Fridays instead of Mondays'
        ],
        correct_answer: 1,
        explanation: 'Experiencing large market drops in the first 3 to 5 years of retirement forces you to sell depressed shares to fund expenses, permanently impairing the portfolio\'s ability to recover.'
      }
    ]
  }
];
