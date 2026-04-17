export type Accent = 'lime' | 'clay' | 'ice';
export type Ownership = 'Built' | 'Contributed';
export type CardLayout = 'wide' | 'tall' | 'standard';
export type SocialPlatform = 'github' | 'discord' | 'kofi';
export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectProfile = {
  name: string;
  label: string;
  domain: string;
  summary: string;
  impact: string;
  stack: string[];
  accent: Accent;
  ownership: Ownership;
  layout: CardLayout;
  metricPrimary?: ProjectMetric;
  metricSecondary?: ProjectMetric;
  sourceHref?: string;
  sourceLabel?: string;
  launchHref?: string;
};

export type RepoSnapshot = {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
};

export const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const marqueeItems = [
  'frontend direction',
  'desktop products',
  'interaction design',
  'privacy tooling',
  'open-source contributions',
  'network utilities',
  'windows tooling',
];

export const heroSignals = [
  {
    kicker: 'UI',
    title: 'Frontend with a backbone',
    body: 'Sharp motion, deliberate typography, and real product structure instead of template gloss.',
    accent: 'lime' as const,
  },
  {
    kicker: 'Systems',
    title: 'Desktop and infrastructure',
    body: 'C#, Java, TypeScript, Python, and the glue required to ship software that feels solid.',
    accent: 'ice' as const,
  },
  {
    kicker: 'Automation',
    title: 'Products and contributions',
    body: 'Original tools, UI-heavy builds, and open-source work where I improve an existing product without breaking its voice.',
    accent: 'clay' as const,
  },
];

export const capabilityCards = [
  {
    title: 'Product-facing frontend',
    copy:
      'I build interfaces that read fast, hold visual tension, and still make room for dense, technical workflows.',
    points: ['React and TypeScript', 'Intentional animation', 'Responsive layout systems'],
    accent: 'lime' as const,
  },
  {
    title: 'Utility software',
    copy:
      'Desktop apps, launchers, diagnostics, and network tooling with a clear mental model and low operational friction.',
    points: ['C# and native-feeling UX', 'Privacy and networking focus', 'Performance-minded interaction'],
    accent: 'clay' as const,
  },
  {
    title: 'Automation and protocol work',
    copy:
      'Workflow tooling, MCP integrations, and operator surfaces for products that need more than a marketing layer.',
    points: ['Workflow orchestration', 'Control surfaces', 'Operator-focused tooling'],
    accent: 'ice' as const,
  },
];

export const processSteps = [
  {
    index: '01',
    title: 'Frame the hard part first',
    body: 'I start at the state boundaries, not the paint. If the system logic is weak, the interface will leak it.',
  },
  {
    index: '02',
    title: 'Shape a visual language',
    body: 'Typography, spacing, and rhythm come before decoration. The UI should feel authored, not generated.',
  },
  {
    index: '03',
    title: 'Animate for clarity',
    body: 'Motion is used to guide attention, signal state changes, and give the product a stronger sense of response.',
  },
  {
    index: '04',
    title: 'Ship with a workflow',
    body: 'Deployment, notifications, and public iteration are part of the build. The release path matters as much as the landing page.',
  },
];

export const closingHighlights = [
  {
    title: 'UI that feels authored',
    body: 'Typography, spacing, motion, and hierarchy are treated like product decisions, not post-processing.',
    accent: 'lime' as const,
  },
  {
    title: 'Desktop tools with product discipline',
    body: 'Utilities, privacy apps, and Windows-focused software that feel deliberate instead of merely functional.',
    accent: 'clay' as const,
  },
  {
    title: 'Contribution-ready engineering',
    body: 'I can ship original tools and also improve an existing codebase without flattening its identity.',
    accent: 'ice' as const,
  },
];

export const builtProjectCatalog = [
  'OnionHop',
  'DNS-Hop',
  'vp26',
  'CoinflipXD',
  'MinecraftDeveloperMCP',
  'AdvancedDiscordMCP',
  'UserOverUUID',
  'homebrew-onionhop',
];

export const featuredOrder = [
  'OnionHop',
  'DNS-Hop',
  'vp26',
  'AdvancedDiscordMCP',
  'NetSpeedTray',
  'Launcher',
];

export const projectProfiles: Record<string, ProjectProfile> = {
  OnionHop: {
    name: 'OnionHop',
    label: 'Privacy product',
    domain: 'Desktop privacy app',
    summary: 'Turns Tor routing into a product surface that feels direct instead of obscure.',
    impact: 'Strong example of product framing, desktop UX, and privacy-first positioning.',
    stack: ['C#', 'desktop', 'privacy', 'networking'],
    accent: 'lime',
    ownership: 'Built',
    layout: 'standard',
  },
  'DNS-Hop': {
    name: 'DNS-Hop',
    label: 'Network utility',
    domain: 'Diagnostics and switching',
    summary: 'Makes DNS benchmarking, diagnostics, and one-click switching feel fast and approachable.',
    impact: 'Shows utility-first interface design with practical systems depth underneath.',
    stack: ['C#', 'Avalonia UI', 'Windows', 'DNS'],
    accent: 'ice',
    ownership: 'Built',
    layout: 'standard',
  },
  vp26: {
    name: 'vp26',
    label: 'UI-heavy app',
    domain: 'Schedule interface',
    summary: 'Reworks an old-school timetable surface into a cleaner, modern React experience.',
    impact: 'Pure frontend craft with product polish, motion, and a more current information hierarchy.',
    stack: ['React', 'Tauri', 'FastAPI', 'TypeScript'],
    accent: 'clay',
    ownership: 'Built',
    layout: 'standard',
  },
  AdvancedDiscordMCP: {
    name: 'AdvancedDiscordMCP',
    label: 'Automation tooling',
    domain: 'Discord MCP server',
    summary: 'Builds a deeper Discord control surface with moderation, scheduling, analytics, and automation instead of stopping at basic bot commands.',
    impact: 'Shows protocol design, admin-facing product thinking, and keeping a feature-heavy tool usable once the scope gets real.',
    stack: ['Python', 'Discord', 'MCP', 'automation'],
    accent: 'lime',
    ownership: 'Built',
    layout: 'standard',
  },
  NetSpeedTray: {
    name: 'NetSpeedTray',
    label: 'Merged PR #113',
    domain: 'Per-app network activity',
    summary: 'Merged PR #113 added an on-demand App Usage window for per-application network activity in NetSpeedTray.',
    impact: 'The change introduced a dedicated worker thread, tray menu entrypoint, lifecycle cleanup, locale updates, and focused unit tests.',
    stack: ['worker thread', 'tray menu', 'unit tests', 'i18n'],
    accent: 'clay',
    ownership: 'Contributed',
    layout: 'standard',
    metricPrimary: {
      value: '16 files',
      label: 'files changed',
    },
    metricSecondary: {
      value: '893+',
      label: 'lines added',
    },
    sourceHref: 'https://github.com/erez-c137/NetSpeedTray/pull/113',
    sourceLabel: 'PR',
    launchHref: 'https://github.com/erez-c137/NetSpeedTray',
  },
  Launcher: {
    name: 'Bedrock Cosmos Launcher',
    label: 'Merged PR #4',
    domain: 'German localization + UI polish',
    summary: 'Merged PR #4 centralized launcher strings, added a full German translation, and cleaned up the settings experience across languages.',
    impact: 'The contribution added a localization audit test, improved the language dropdown behavior, and shipped with the maintainer\'s launch-mode simplification for the next update.',
    stack: ['C#', 'localization', 'settings UI', 'audit test'],
    accent: 'ice',
    ownership: 'Contributed',
    layout: 'standard',
    metricPrimary: {
      value: '21 files',
      label: 'files changed',
    },
    metricSecondary: {
      value: '2 commits',
      label: 'merged',
    },
    sourceHref: 'https://github.com/Bedrock-Cosmos/Launcher/pull/4',
    sourceLabel: 'PR',
    launchHref: 'https://bedrock-cosmos.app/',
  },
};

export const fallbackRepos: RepoSnapshot[] = [
  {
    name: 'OnionHop',
    description: 'Privacy-first Desktop app that routes your traffic through Tor - Anonymous browsing made simple',
    html_url: 'https://github.com/center2055/OnionHop',
    homepage: 'https://www.onionhop.de/',
    stargazers_count: 224,
    forks_count: 17,
    language: 'C#',
    updated_at: '2026-04-04T00:17:39Z',
    topics: [],
  },
  {
    name: 'DNS-Hop',
    description: 'Fast Windows DNS benchmarking, diagnostics, and one-click switching without the paywall.',
    html_url: 'https://github.com/center2055/DNS-Hop',
    homepage: 'https://center2055.github.io/DNS-Hop/',
    stargazers_count: 33,
    forks_count: 5,
    language: 'C#',
    updated_at: '2026-04-04T10:04:02Z',
    topics: [
      'avalonia-ui',
      'dns',
      'dns-benchmark',
      'dns-over-https',
      'dns-over-tls',
      'dns-switcher',
      'network-tools',
      'windows',
    ],
  },
  {
    name: 'vp26',
    description: 'Moderne Vertretungsplan-Oberflache fur Indiware / VpMobil24 mit React, Tauri und FastAPI',
    html_url: 'https://github.com/center2055/vp26',
    homepage: 'https://center2055.github.io/vp26/',
    stargazers_count: 0,
    forks_count: 0,
    language: 'TypeScript',
    updated_at: '2026-04-01T20:03:50Z',
    topics: [],
  },
  {
    name: 'Launcher',
    description: 'Launcher for the Bedrock Cosmos local proxy',
    html_url: 'https://github.com/center2055/Launcher',
    homepage: 'https://bedrock-cosmos.app/',
    stargazers_count: 0,
    forks_count: 0,
    language: 'C#',
    updated_at: '2026-03-30T07:20:37Z',
    topics: [],
  },
  {
    name: 'AdvancedDiscordMCP',
    description: 'Advanced Discord MCP Server with permission management, analytics, automation, scheduled tasks, and moderation.',
    html_url: 'https://github.com/center2055/AdvancedDiscordMCP',
    homepage: '',
    stargazers_count: 3,
    forks_count: 1,
    language: 'Python',
    updated_at: '2026-02-22T08:38:58Z',
    topics: [],
  },
  {
    name: 'CoinflipXD',
    description: 'The only Coinflip plugin that actually works. Bug-free, modern, and built for Minecraft 1.21+.',
    html_url: 'https://github.com/center2055/CoinflipXD',
    homepage: '',
    stargazers_count: 1,
    forks_count: 0,
    language: 'Java',
    updated_at: '2026-02-01T09:36:21Z',
    topics: ['minecraft', 'plugin', 'server tooling'],
  },
  {
    name: 'NetSpeedTray',
    description: 'A lightweight, open-source network monitor for Windows that displays live upload/download speeds directly on the taskbar with a native look and feel.',
    html_url: 'https://github.com/center2055/NetSpeedTray',
    homepage: 'https://github.com/erez-c137/NetSpeedTray',
    stargazers_count: 0,
    forks_count: 0,
    language: null,
    updated_at: '2026-03-03T08:08:15Z',
    topics: [],
  },
];

export const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/center2055', icon: 'github' as const },
  { label: 'Discord', href: 'https://discord.gg/y3MVspPzKQ', icon: 'discord' as const },
  { label: 'Ko-fi', href: 'https://ko-fi.com/center2055', icon: 'kofi' as const },
];

