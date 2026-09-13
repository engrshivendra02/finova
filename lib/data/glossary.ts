import { GlossaryTerm } from '@/types';

export const INITIAL_GLOSSARY: GlossaryTerm[] = [
  {
    id: 'term-1',
    term: 'Annual Return',
    letter: 'A',
    category: 'Investing',
    definition: 'The percentage change in the value of an investment over a 12-month period, including capital appreciation and any dividends or interest received.',
    example: 'If an investment of $10,000 grows to $11,200 in one year, its annual return is 12%.',
    related_terms: ['Compound Interest', 'Nominal Return', 'Real Return']
  },
  {
    id: 'term-2',
    term: 'Asset',
    letter: 'A',
    category: 'Personal Finance',
    definition: 'Any economic resource owned by an individual or corporation that has monetary value and can generate cash flow or appreciate over time.',
    example: 'Cash, stocks, bonds, rental properties, and bank deposits are considered financial assets.',
    related_terms: ['Net Worth', 'Liabilities', 'Asset Allocation']
  },
  {
    id: 'term-3',
    term: 'Asset Allocation',
    letter: 'A',
    category: 'Financial Planning',
    definition: 'An investment strategy that aims to balance risk and reward by apportioning a portfolio’s assets across equities, fixed income, real estate, and cash.',
    example: 'A 25-year-old might maintain an asset allocation of 80% equities and 20% debt funds.',
    related_terms: ['Diversification', 'Rebalancing', 'Portfolio']
  },
  {
    id: 'term-4',
    term: 'Amortization',
    letter: 'A',
    category: 'Banking',
    definition: 'The process of spreading out a loan into a series of equal periodic payments over time, where early payments consist mostly of interest and later payments pay down principal.',
    example: 'A 30-year fixed home mortgage uses an amortization schedule to ensure the loan reaches a zero balance at maturity.',
    related_terms: ['EMI', 'Debt', 'Principal']
  },
  {
    id: 'term-5',
    term: 'Bear Market',
    letter: 'B',
    category: 'Stock Market',
    definition: 'A prolonged period of falling asset prices, typically marked by a decline of 20% or more from recent peak highs, accompanied by widespread investor pessimism.',
    example: 'During the 2008 global financial crisis, stock exchanges experienced a severe bear market.',
    related_terms: ['Bull Market', 'Market Correction', 'Volatility']
  },
  {
    id: 'term-6',
    term: 'Blue Chip',
    letter: 'B',
    category: 'Stock Market',
    definition: 'A nationally recognized, well-established, and financially sound publicly traded company with a proven track record of reliable earnings and steady dividends.',
    example: 'Companies like Apple, Microsoft, Reliance, or Johnson & Johnson are quintessential blue-chip stocks.',
    related_terms: ['Market Capitalization', 'Dividend', 'Large Cap']
  },
  {
    id: 'term-7',
    term: 'Bond',
    letter: 'B',
    category: 'Investing',
    definition: 'A fixed-income debt security issued by a government or corporation to raise capital, promising to pay periodic coupon interest and return the face value at maturity.',
    example: 'A 10-year Treasury bond pays a guaranteed 4% annual interest back to the bondholder.',
    related_terms: ['Yield', 'Fixed Income', 'Debt']
  },
  {
    id: 'term-8',
    term: 'Budget',
    letter: 'B',
    category: 'Budgeting',
    definition: 'A formal written estimation of revenue and expenses over a specified future period of time, designed to control spending and allocate surplus toward savings.',
    example: 'Following a 50/30/20 monthly budget guarantees that at least 20% of your paycheck is saved before discretionary spending begins.',
    related_terms: ['Cash Flow', 'Emergency Fund', 'Savings']
  },
  {
    id: 'term-9',
    term: 'Bull Market',
    letter: 'B',
    category: 'Stock Market',
    definition: 'A sustained period of rising financial market prices, typically a 20% or more rally from recent lows, fueled by strong corporate earnings and investor optimism.',
    example: 'The prolonged recovery after 2020 ushered in a strong multi-year bull market.',
    related_terms: ['Bear Market', 'IPO', 'Equities']
  },
  {
    id: 'term-10',
    term: 'Capital Gains',
    letter: 'C',
    category: 'Taxation',
    definition: 'The increase in a capital asset’s value (such as an investment or real estate) that gives it a higher worth than the original purchase price. Realized upon selling.',
    example: 'Buying a stock for $100 and selling it for $160 creates a $60 capital gain.',
    related_terms: ['Taxation', 'Short-Term Capital Gains', 'Long-Term Capital Gains']
  },
  {
    id: 'term-11',
    term: 'Cash Flow',
    letter: 'C',
    category: 'Personal Finance',
    definition: 'The net amount of cash and cash equivalents moving into and out of a household or business during a specific timeframe.',
    example: 'Positive cash flow means your monthly earned income exceeds total living expenses and debt payments.',
    related_terms: ['Budget', 'Operating Cash Flow', 'Income']
  },
  {
    id: 'term-12',
    term: 'Compound Interest',
    letter: 'C',
    category: 'Investing',
    definition: 'Interest calculated on the initial principal and also on the accumulated interest of previous periods of a deposit or loan.',
    example: '$1,000 at 10% compound interest becomes $1,100 in year one, and $1,210 in year two because you earn $10 on the reinvested interest.',
    related_terms: ['Annual Return', 'Rule of 72', 'Time Value of Money']
  },
  {
    id: 'term-13',
    term: 'Credit Score',
    letter: 'C',
    category: 'Banking',
    definition: 'A numerical evaluation of an individual’s creditworthiness ranging from 300 to 850, based on repayment history, credit utilization, and credit age.',
    example: 'Maintaining a 780 credit score qualifies borrowers for the lowest competitive mortgage interest rates.',
    related_terms: ['Credit Utilization', 'Debt', 'Banking']
  },
  {
    id: 'term-14',
    term: 'Credit Utilization Ratio',
    letter: 'C',
    category: 'Banking',
    definition: 'The percentage of your total available revolving credit limits that you are currently using at any given point.',
    example: 'If your credit card limit is $10,000 and your monthly balance is $2,000, your credit utilization ratio is 20%.',
    related_terms: ['Credit Score', 'Banking', 'Debt']
  },
  {
    id: 'term-15',
    term: 'Debt',
    letter: 'D',
    category: 'Personal Finance',
    definition: 'An obligation or sum of money owed by one party (the debtor) to another party (the creditor), usually requiring repayment of principal plus interest.',
    example: 'Credit card balances, student loans, and mortgages represent different tiers of household debt.',
    related_terms: ['Amortization', 'Debt Avalanche', 'Liabilities']
  },
  {
    id: 'term-16',
    term: 'Demat Account',
    letter: 'D',
    category: 'Stock Market',
    definition: 'A dematerialized account used to hold financial securities (shares, bonds, ETFs, government securities) electronically in national depositories.',
    example: 'You must open a Demat account to buy, hold, and sell shares on the stock exchange.',
    related_terms: ['Stock Market', 'Depository', 'Broker']
  },
  {
    id: 'term-17',
    term: 'Diversification',
    letter: 'D',
    category: 'Investing',
    definition: 'A risk-management technique that mixes a wide variety of investments within a portfolio to limit exposure to any single asset or risk factor.',
    example: 'Holding 500 stocks across multiple industries rather than only one technology company protects you if that single firm fails.',
    related_terms: ['Asset Allocation', 'Mutual Fund', 'Portfolio']
  },
  {
    id: 'term-18',
    term: 'Dividend',
    letter: 'D',
    category: 'Stock Market',
    definition: 'A distribution of a portion of a company’s corporate earnings to its shareholders, usually in regular cash payouts per share.',
    example: 'A company with a $2 quarterly dividend pays $200 every quarter to an investor holding 100 shares.',
    related_terms: ['Dividend Yield', 'Equities', 'Passive Income']
  },
  {
    id: 'term-19',
    term: 'Dividend Yield',
    letter: 'D',
    category: 'Stock Market',
    definition: 'A financial ratio showing how much a company pays out in dividends each year relative to its current share price.',
    example: 'If a stock trades at $50 and pays $2.50 in annual dividends, its dividend yield is 5%.',
    related_terms: ['Dividend', 'P/E Ratio', 'Valuation']
  },
  {
    id: 'term-20',
    term: 'Dollar-Cost Averaging (DCA)',
    letter: 'D',
    category: 'Investing',
    definition: 'The practice of systematically investing a fixed dollar amount into a security on regular intervals, regardless of whether the share price is rising or falling.',
    example: 'Investing $300 on the 1st of every month into an index fund executes dollar-cost averaging.',
    related_terms: ['SIP', 'Mutual Funds', 'Volatility']
  },
  {
    id: 'term-21',
    term: 'Earnings Per Share (EPS)',
    letter: 'E',
    category: 'Stock Market',
    definition: 'The portion of a company’s profit allocated to each individual share of common stock, serving as an indicator of profitability.',
    example: 'If a company earns $10 million in net profit and has 2 million shares outstanding, its EPS is $5.00.',
    related_terms: ['P/E Ratio', 'Equities', 'Balance Sheet']
  },
  {
    id: 'term-22',
    term: 'Emergency Fund',
    letter: 'E',
    category: 'Personal Finance',
    definition: 'A dedicated pool of easily accessible, liquid cash set aside specifically to cover unexpected life emergencies such as job loss or medical crises.',
    example: 'Keeping $15,000 in a high-yield savings account to cover 6 months of mandatory living expenses.',
    related_terms: ['HYSA', 'Liquidity', 'Budget']
  },
  {
    id: 'term-23',
    term: 'Equity',
    letter: 'E',
    category: 'Investing',
    definition: 'The value of an ownership interest in property or a business. In corporate finance, it is the residual value after subtracting all liabilities from total assets.',
    example: 'Owning common shares gives you equity in the business.',
    related_terms: ['Stock Market', 'Shares', 'Net Worth']
  },
  {
    id: 'term-24',
    term: 'Exchange Traded Fund (ETF)',
    letter: 'E',
    category: 'Mutual Funds',
    definition: 'An investment fund traded on stock exchanges, much like individual stocks, holding an underlying basket of assets such as equities, commodities, or bonds.',
    example: 'The SPY ETF tracks the S&P 500 index and trades with continuous pricing throughout the day.',
    related_terms: ['Mutual Fund', 'Index Fund', 'Expense Ratio']
  },
  {
    id: 'term-25',
    term: 'Expense Ratio',
    letter: 'E',
    category: 'Mutual Funds',
    definition: 'The annual fee charged by mutual funds and ETFs to cover operating expenses, portfolio management, administrative, and compliance costs.',
    example: 'An expense ratio of 0.10% means the fund charges $10 annually for every $10,000 invested.',
    related_terms: ['Mutual Fund', 'Index Fund', 'NAV']
  },
  {
    id: 'term-26',
    term: 'FIRE (Financial Independence, Retire Early)',
    letter: 'F',
    category: 'Wealth Building',
    definition: 'A lifestyle and financial movement aimed at aggressive saving and investing to retire and achieve complete financial autonomy decades before traditional retirement age.',
    example: 'Accumulating 25 times your annual living expenses in an investment portfolio to fund your life via the 4% safe withdrawal rule.',
    related_terms: ['4% Rule', 'Passive Income', 'Net Worth']
  },
  {
    id: 'term-27',
    term: 'Fixed Deposit (FD)',
    letter: 'F',
    category: 'Banking',
    definition: 'A financial instrument provided by banks which provides investors with a higher rate of interest than a regular savings account until a given maturity date.',
    example: 'Locking $10,000 for 1 year in a bank fixed deposit at a fixed 6.5% interest rate.',
    related_terms: ['Banking', 'Bond', 'Interest Rate']
  },
  {
    id: 'term-28',
    term: 'Fundamental Analysis',
    letter: 'F',
    category: 'Stock Market',
    definition: 'A method of measuring a security’s intrinsic value by examining related economic and financial factors including revenues, profits, management quality, and competitive advantages.',
    example: 'Studying a company’s quarterly 10-Q earnings reports, cash flow statements, and debt levels.',
    related_terms: ['P/E Ratio', 'Balance Sheet', 'Intrinsic Value']
  },
  {
    id: 'term-29',
    term: 'Gross Domestic Product (GDP)',
    letter: 'G',
    category: 'Financial Planning',
    definition: 'The total monetary value of all finished goods and services produced within a country’s borders in a specific time period, indicating economic health.',
    example: 'When national GDP grows at 6% annually, corporate revenues generally expand in tandem.',
    related_terms: ['Inflation', 'Economics', 'Recession']
  },
  {
    id: 'term-30',
    term: 'Growth Stock',
    letter: 'G',
    category: 'Stock Market',
    definition: 'A company anticipated to grow sales and earnings at a significantly faster rate than the average for the market, typically reinvesting all earnings rather than paying dividends.',
    example: 'Fast-scaling technology and cloud software companies are frequently classified as growth stocks.',
    related_terms: ['Value Investing', 'P/E Ratio', 'Equities']
  },
  {
    id: 'term-31',
    term: 'High-Yield Savings Account (HYSA)',
    letter: 'H',
    category: 'Banking',
    definition: 'A federally insured savings account that pays an interest rate substantially higher than the national average traditional bank checking rate.',
    example: 'Parking emergency cash in an HYSA paying 4.5% APY instead of 0.05% at a traditional brick-and-mortar bank.',
    related_terms: ['Emergency Fund', 'Banking', 'Liquidity']
  },
  {
    id: 'term-32',
    term: 'Index Fund',
    letter: 'I',
    category: 'Mutual Funds',
    definition: 'A mutual fund or ETF designed to track the component securities of a benchmark market index, offering broad market exposure at low operating expense.',
    example: 'A Nifty 50 or S&P 500 index fund holds all constituents in exact benchmark weights.',
    related_terms: ['ETF', 'Passive Investing', 'Expense Ratio']
  },
  {
    id: 'term-33',
    term: 'Inflation',
    letter: 'I',
    category: 'Personal Finance',
    definition: 'The general, ongoing increase in prices and fall in the purchasing value of money over time across an entire economy.',
    example: 'If inflation averages 6% annually, a basket of goods costing $100 today will cost approximately $180 in ten years.',
    related_terms: ['Compound Interest', 'Real Return', 'Purchasing Power']
  },
  {
    id: 'term-34',
    term: 'Initial Public Offering (IPO)',
    letter: 'I',
    category: 'Stock Market',
    definition: 'The very first sale of common stock issued by a private company to the public, transforming it into a publicly traded corporation on an exchange.',
    example: 'A fast-growing fintech startup files an IPO on the stock exchange to raise $500 million in public expansion capital.',
    related_terms: ['Stock Market', 'Market Capitalization', 'Shares']
  },
  {
    id: 'term-35',
    term: 'Interest Rate',
    letter: 'I',
    category: 'Banking',
    definition: 'The amount charged by a lender to a borrower for the use of assets, typically expressed as an annual percentage of the principal loan amount.',
    example: 'Central banks raise benchmark interest rates to cool down high economic inflation.',
    related_terms: ['Compound Interest', 'Bond', 'Yield']
  },
  {
    id: 'term-36',
    term: 'Intrinsic Value',
    letter: 'I',
    category: 'Stock Market',
    definition: 'The perceived or calculated true underlying worth of an asset based on all fundamental factors, independent of its current fluctuating market price.',
    example: 'Value investors calculate intrinsic value by discounting projected future free cash flows to the present day.',
    related_terms: ['Fundamental Analysis', 'P/E Ratio', 'Margin of Safety']
  },
  {
    id: 'term-37',
    term: 'Large Cap',
    letter: 'L',
    category: 'Stock Market',
    definition: 'Public companies with large market capitalizations (typically over $10 billion or the top 100 benchmark companies), known for stability and liquidity.',
    example: 'Companies like Microsoft, Apple, and Tata Consultancy Services are large-cap stocks.',
    related_terms: ['Mid Cap', 'Small Cap', 'Market Capitalization']
  },
  {
    id: 'term-38',
    term: 'Leverage',
    letter: 'L',
    category: 'Investing',
    definition: 'Using borrowed capital (debt) to fund investment activity, magnifying both potential gains and potential catastrophic losses.',
    example: 'Buying stocks on 5x broker margin amplifies a 10% gain into a 50% gain, but a 20% decline completely liquidates your equity.',
    related_terms: ['Debt', 'Margin', 'Risk']
  },
  {
    id: 'term-39',
    term: 'Liquidity',
    letter: 'L',
    category: 'Personal Finance',
    definition: 'The ease and speed with which an asset can be converted into ready cash without affecting its market price.',
    example: 'Cash in a checking account is completely liquid; physical commercial real estate is highly illiquid.',
    related_terms: ['Emergency Fund', 'Assets', 'Cash Flow']
  },
  {
    id: 'term-40',
    term: 'Market Capitalization',
    letter: 'M',
    category: 'Stock Market',
    definition: 'The total dollar market value of a company’s outstanding common shares, calculated by multiplying current share price by total shares outstanding.',
    example: 'A company with 10 million shares trading at $50 each has a market capitalization of $500 million.',
    related_terms: ['Large Cap', 'Small Cap', 'Equities']
  },
  {
    id: 'term-41',
    term: 'Mutual Fund',
    letter: 'M',
    category: 'Mutual Funds',
    definition: 'An investment vehicle composed of a pooled collection of funds from many investors to invest in securities like stocks, bonds, and money market instruments.',
    example: 'Investing in an equity mutual fund instantly distributes your money across 60 blue-chip companies.',
    related_terms: ['NAV', 'SIP', 'Expense Ratio']
  },
  {
    id: 'term-42',
    term: 'Net Asset Value (NAV)',
    letter: 'N',
    category: 'Mutual Funds',
    definition: 'The value per unit/share of a mutual fund scheme, calculated by dividing the total net value of assets minus liabilities by the total number of units issued.',
    example: 'If a fund has $100M in net assets and 5M units, its NAV is $20 per unit.',
    related_terms: ['Mutual Fund', 'Expense Ratio', 'SIP']
  },
  {
    id: 'term-43',
    term: 'Net Worth',
    letter: 'N',
    category: 'Wealth Building',
    definition: 'The quantitative measure of an individual’s total financial health: total assets owned minus total liabilities (debts) owed.',
    example: 'If you have $250,000 in assets (cash, investments, home equity) and $50,000 in debts, your net worth is $200,000.',
    related_terms: ['Assets', 'Liabilities', 'Wealth Building']
  },
  {
    id: 'term-44',
    term: 'Nominal Return',
    letter: 'N',
    category: 'Investing',
    definition: 'The rate of return on an investment without adjusting for the eroding effects of inflation and taxation.',
    example: 'If your investment account balance increases by 10% this year, your nominal return is 10%.',
    related_terms: ['Real Return', 'Inflation', 'Annual Return']
  },
  {
    id: 'term-45',
    term: 'Opportunity Cost',
    letter: 'O',
    category: 'Personal Finance',
    definition: 'The potential benefits an individual or business misses out on when choosing one financial alternative over another.',
    example: 'Spending $10,000 on a luxury watch incurs the opportunity cost of that $10,000 compounding to $45,000 over 15 years in index funds.',
    related_terms: ['Budget', 'Compound Interest', 'Investing']
  },
  {
    id: 'term-46',
    term: 'Portfolio',
    letter: 'P',
    category: 'Investing',
    definition: 'The collection of financial investments like stocks, bonds, commodities, mutual funds, real estate, and cash equivalents held by an investor.',
    example: 'An all-weather portfolio might hold 60% equities, 25% bonds, 10% gold, and 5% cash.',
    related_terms: ['Asset Allocation', 'Diversification', 'Rebalancing']
  },
  {
    id: 'term-47',
    term: 'Price-to-Earnings (P/E) Ratio',
    letter: 'P',
    category: 'Stock Market',
    definition: 'A valuation ratio comparing a company’s current share price to its annual per-share earnings (EPS).',
    example: 'A stock trading at $100 with an EPS of $5 has a P/E ratio of 20.',
    related_terms: ['EPS', 'Fundamental Analysis', 'Valuation']
  },
  {
    id: 'term-48',
    term: 'Real Return',
    letter: 'R',
    category: 'Investing',
    definition: 'The actual annual return realized on an investment after adjusting for inflation and purchasing power loss.',
    example: 'If your portfolio earns an 11% nominal return while inflation is 5%, your real return is approximately 6%.',
    related_terms: ['Nominal Return', 'Inflation', 'Purchasing Power']
  },
  {
    id: 'term-49',
    term: 'Risk Tolerance',
    letter: 'R',
    category: 'Financial Planning',
    definition: 'The degree of variability in investment returns that an investor is willing and emotionally able to withstand without panic selling.',
    example: 'An aggressive young investor who does not lose sleep during a 30% temporary market correction has high risk tolerance.',
    related_terms: ['Asset Allocation', 'Volatility', 'Portfolio']
  },
  {
    id: 'term-50',
    term: 'Systematic Investment Plan (SIP)',
    letter: 'S',
    category: 'Mutual Funds',
    definition: 'A structured discipline of investing a predetermined sum of money at regular intervals into a specific mutual fund or investment vehicle.',
    example: 'Scheduling an automatic $250 bank deduction on the 5th of every month into a low-cost index fund.',
    related_terms: ['Dollar-Cost Averaging', 'Mutual Fund', 'Compounding']
  },
  {
    id: 'term-51',
    term: 'Volatility',
    letter: 'V',
    category: 'Stock Market',
    definition: 'A statistical measure of the dispersion of returns for a given security or market index, indicating the frequency and magnitude of price swings.',
    example: 'Equities exhibit higher short-term volatility than government treasury bonds.',
    related_terms: ['Bear Market', 'Risk', 'Equities']
  },
  {
    id: 'term-52',
    term: 'Yield',
    letter: 'Y',
    category: 'Investing',
    definition: 'The income return on an investment, such as the interest or dividends received from holding a particular security, expressed as a percentage of cost or market value.',
    example: 'A government bond paying $50 annually on a $1,000 face value offers a 5% yield.',
    related_terms: ['Dividend Yield', 'Bond', 'Fixed Income']
  }
];
