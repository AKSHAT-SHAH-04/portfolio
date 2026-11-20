// Single source of truth for portfolio content. Edit this file to update the site.

export const profile = {
  name: "Akshat Shah",
  headline: "Full-stack Web3 Engineer",
  tagline:
    "I design and ship blockchain systems end to end — from Solidity, Rust and Substrate protocols to the wallets and dApps people actually use.",
  location: "Ahmedabad, India",
  email: "akshatshah04@gmail.com",
  github: "https://github.com/AKSHAT-SHAH-04",
  linkedin: "https://www.linkedin.com/in/akshat-shah-94a30a122",
  resume: "/Akshat-Shah-Resume.pdf",
  yearsExperience: "5+",
  languages: ["English", "Hindi", "Gujarati"],
};

export const highlights = [
  { value: "5+", label: "Years building on-chain" },
  { value: "4", label: "Chains & frameworks in production" },
  { value: "Govt", label: "Dubai Customs end-to-end DLT" },
  { value: "Lead", label: "Team lead & PM for blockchain teams" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  link?: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Synkcode",
    role: "Senior Blockchain Developer · Team Lead",
    period: "Mar 2024 — Present",
    location: "Ahmedabad, India",
    points: [
      "Lead engineer on Dubai Customs' end-to-end blockchain solution — permissioned networks, smart contracts and a custom browser wallet extension.",
      "Build and operate networks on GoQuorum, Hyperledger Fabric and Substrate (ink! contracts pallet).",
      "Act as team lead and project manager across multiple blockchain programmes: architecture, delivery and code review.",
    ],
    stack: ["GoQuorum", "Hyperledger Fabric", "Substrate", "ink!", "Solidity", "Node.js", "React"],
  },
  {
    company: "OpenXcell",
    role: "Blockchain Developer · Blockchain Team Lead",
    period: "Sep 2022 — Feb 2024",
    location: "Ahmedabad, India",
    link: "https://www.tryspeed.com",
    points: [
      "Led the blockchain team building centralised and decentralised exchanges and running smart-contract audits.",
      "Core engineer on Speed — a Bitcoin & Lightning payment platform (tryspeed.com): smart contracts, payment-gateway integration and full-stack features.",
    ],
    stack: ["Solidity", "Lightning", "Rust", "Web3.js", "React", "Node.js"],
  },
  {
    company: "SoluLab",
    role: "Blockchain Developer",
    period: "Jun 2021 — Sep 2022",
    location: "Ahmedabad, India",
    points: [
      "Shipped live Ethereum products: DAOs, NFT collections, token vesting and fintech platforms.",
      "Audited numerous smart contracts with rigorous testing against common vulnerability classes.",
      "Contributed to Speed, an end-to-end Bitcoin payment solution.",
    ],
    stack: ["Solidity", "Ethereum", "Hardhat", "NFT", "DAO", "JavaScript"],
  },
  {
    company: "MobileFirst Applications",
    role: "iOS Developer (Intern)",
    period: "Jan 2021 — Jun 2021",
    location: "Ahmedabad, India",
    link: "https://www.pigeonmail.co",
    points: ["Built Pigeon, a live iOS mail app, and represented the product at Apple WWDC."],
    stack: ["Swift", "iOS"],
  },
];

export type Project = {
  title: string;
  summary: string;
  problem: string;
  features: string[];
  stack: string[];
  repo?: string;
  demo?: string;
  status: "Live" | "Building" | "Shipped";
  accent: string; // tailwind gradient classes
};

// Flagship open-source projects
export const flagship: Project[] = [
  {
    title: "Zentra — Spot Crypto Exchange",
    summary:
      "Full-stack spot exchange with an in-house matching engine, pro trading screen, wallets, P2P escrow, KYC, user API keys and an admin console. Live in paper-trading mode against real Binance market data.",
    problem:
      "An exchange can't lose a satoshi: every match, fund lock and settlement must be atomic and consistent, even with many API instances serving real-time feeds.",
    features: [
      "Price-time-priority matching engine: partial fills, self-trade prevention, maker/taker fees",
      "Limit, market, stop-limit, OCO, trailing-stop, post-only and IOC/FOK orders across 29 markets",
      "Each order is dry-run matched, then locked, created & settled in one Postgres transaction",
      "Redis pub/sub WebSocket fan-out for tickers, depth, trades and private user channels",
      "P2P (UPI / IMPS / bank) with escrow, disputes, Convert, Auto-Invest, Earn & sub-accounts",
      "2FA, KYC, HMAC-signed API keys, AES-256-GCM secrets, CSRF & rate limiting, audit logs",
    ],
    stack: ["TypeScript", "Fastify", "Next.js", "PostgreSQL", "Prisma", "Redis", "WebSockets"],
    repo: "https://github.com/AKSHAT-SHAH-04/Crypto-Exchange",
    demo: "https://zentra-exchange.vercel.app/",
    status: "Live",
    accent: "from-sky-400 to-indigo-600",
  },
  {
    title: "Permissioned RWA Tokenization (ERC-3643)",
    summary:
      "Compliant security-token platform for tokenizing real-world assets with on-chain identity, transfer rules and yield distribution.",
    problem:
      "Banks can't use plain ERC-20s for regulated assets — every transfer must be checked against KYC, jurisdiction and investor caps.",
    features: [
      "ERC-3643 token with identity registry & pluggable compliance modules",
      "Country / max-holder / lock-up rules enforced in every transfer",
      "Pull-based dividend distributor (stablecoin yield to holders)",
      "Agent role for forced transfers, freezes & recovery",
      "156 Foundry tests incl. 8 invariants · 100% line coverage of contracts",
    ],
    stack: ["Solidity", "Foundry", "OpenZeppelin", "Next.js", "wagmi/viem"],
    repo: "https://github.com/AKSHAT-SHAH-04/rwa-erc3643",
    status: "Building",
    accent: "from-fuchsia-500 to-violet-600",
  },
  {
    title: "Passkey Smart Wallet (ERC-4337)",
    summary:
      "Account-abstraction wallet with passkey sign-in, sponsored gas, session keys and guardian-based social recovery.",
    problem:
      "Seed phrases and gas are the biggest drop-off points for mainstream users of Web3 apps.",
    features: [
      "ERC-4337 smart account + factory (CREATE2 counterfactual addresses)",
      "WebAuthn / P-256 passkey validation",
      "Verifying paymaster for gasless onboarding",
      "Scoped, time-boxed session keys",
      "Guardian social recovery with timelock",
      "135 tests through the real EntryPoint v0.7, incl. real P-256 passkey signatures",
    ],
    stack: ["Solidity", "ERC-4337", "WebAuthn", "Next.js", "Bundler RPC"],
    repo: "https://github.com/AKSHAT-SHAH-04/passkey-smart-wallet",
    status: "Building",
    accent: "from-cyan-400 to-blue-600",
  },
  {
    title: "Cross-chain Stablecoin Bridge",
    summary:
      "Lock-and-mint / burn-and-release bridge for a stablecoin across EVM chains, built defensively after studying real bridge exploits.",
    problem:
      "Bridges have lost billions to exploits — the design must assume messages and relayers can fail or be malicious.",
    features: [
      "Chainlink CCIP messaging with source/sender allow-lists",
      "Per-window token-bucket rate limits & circuit-breaker pause",
      "Replay protection and idempotent message handling",
      "Invariant tests: supply on dest ≤ locked on source",
      "125 tests incl. 6 invariants · ~99% line coverage",
    ],
    stack: ["Solidity", "Chainlink CCIP", "Foundry", "Next.js", "Node.js"],
    repo: "https://github.com/AKSHAT-SHAH-04/ccip-stablecoin-bridge",
    status: "Building",
    accent: "from-emerald-400 to-teal-600",
  },
  {
    title: "Atomic DEX Arbitrage Engine",
    summary:
      "Off-chain scanner that detects cross-DEX price gaps and an on-chain executor that captures them atomically with flash loans.",
    problem:
      "Arbitrage only works if detection is fast and execution can't lose money — every trade must be all-or-nothing.",
    features: [
      "TypeScript scanner over Uniswap V2/V3-style pools with live quoting",
      "Flash-loan-funded executor that reverts unless profit > threshold",
      "Gas-aware profitability model and simulation before submit",
      "Private transaction submission to reduce front-running",
      "119 tests (Foundry + vitest); fuzzed to match the off-chain model to the wei",
    ],
    stack: ["TypeScript", "Solidity", "Aave flash loans", "viem", "Foundry"],
    repo: "https://github.com/AKSHAT-SHAH-04/atomic-arb-engine",
    status: "Building",
    accent: "from-amber-400 to-orange-600",
  },
];

// Professional / earlier work
export const work: Project[] = [
  {
    title: "Dubai Customs — Enterprise Blockchain",
    summary:
      "End-to-end permissioned blockchain for customs workflows: declarations, payments, inspections and registries on smart contracts, plus a custom wallet browser extension for external users.",
    problem: "",
    features: [],
    stack: ["GoQuorum", "Solidity", "Browser Extension", "Node.js"],
    status: "Live",
    accent: "from-fuchsia-500 to-violet-600",
  },
  {
    title: "Speed — Bitcoin & Lightning Payments",
    summary:
      "Payment platform letting merchants accept Bitcoin and Lightning; worked on smart contracts, gateway integration and full-stack features.",
    problem: "",
    features: [],
    stack: ["Lightning", "Rust", "Solidity", "React", "Node.js"],
    demo: "https://www.tryspeed.com",
    status: "Live",
    accent: "from-amber-400 to-orange-600",
  },
  {
    title: "RWA Art Tokenization",
    summary:
      "Fractional ownership of physical art with an oracle for valuations, OpenZeppelin v5 contracts and a full-stack marketplace.",
    problem: "",
    features: [],
    stack: ["Solidity", "Hardhat", "Oracle", "React"],
    status: "Shipped",
    accent: "from-cyan-400 to-blue-600",
  },
  {
    title: "Substrate Contracts Network",
    summary:
      "Custom Substrate chain with the contracts pallet, ink! smart contracts (incl. an art marketplace) and Grafana monitoring.",
    problem: "",
    features: [],
    stack: ["Rust", "Substrate", "ink!", "Grafana"],
    status: "Shipped",
    accent: "from-emerald-400 to-teal-600",
  },
];

export const skills: Record<string, string[]> = {
  "Smart Contracts": ["Solidity", "Rust / ink!", "Foundry", "Hardhat", "OpenZeppelin", "Auditing"],
  Protocols: ["Ethereum / EVM", "ERC-4337", "ERC-3643", "Chainlink CCIP", "Bitcoin / Lightning", "NFT / DAO"],
  "Enterprise DLT": ["Hyperledger Fabric", "GoQuorum", "Substrate", "Go"],
  "Full-stack": ["TypeScript", "React", "Next.js", "Node.js", "wagmi / viem", "Swift"],
  Infra: ["AWS", "Docker", "Grafana", "CI/CD"],
};

export const education = [
  { degree: "Master of Computer Applications", school: "Nirma University", location: "Ahmedabad" },
  { degree: "Bachelor of Computer Applications", school: "GLS University", location: "Ahmedabad" },
];

export const certifications = [
  "IBM Blockchain Foundation Developer V2",
  "JPMorgan Chase & Co. — Software Engineering Virtual Experience",
];
