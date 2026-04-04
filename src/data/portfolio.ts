export type Accent = 'lime' | 'clay' | 'ice';
export type Ownership = 'Built' | 'Contributed';
export type CardLayout = 'wide' | 'tall' | 'standard';

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

export const featuredOrder = [
  'OnionHop',
  'DNS-Hop',
  'vp26',
  'apiark',
  'NetSpeedTray',
  'tormap',
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
  apiark: {
    name: 'apiark',
    label: 'Developer tool',
    domain: 'Local-first API client',
    summary: 'A lightweight Postman alternative aimed at speed, privacy, and keeping the workflow local.',
    impact: 'Combines product thinking, desktop packaging, and developer experience design.',
    stack: ['TypeScript', 'Tauri', 'DX', 'privacy'],
    accent: 'lime',
    ownership: 'Built',
    layout: 'standard',
  },
  NetSpeedTray: {
    name: 'NetSpeedTray',
    label: 'Open-source contribution',
    domain: 'Windows network monitor',
    summary: 'Contributed to a lightweight taskbar network monitor that feels native instead of bolted on.',
    impact: 'Shows I can step into an existing codebase, sharpen the UX, and ship improvements without fighting the product.',
    stack: ['Windows', 'taskbar UI', 'monitoring', 'contribution'],
    accent: 'clay',
    ownership: 'Contributed',
    layout: 'standard',
  },
  tormap: {
    name: 'tormap',
    label: 'Data visualization',
    domain: 'Privacy network map',
    summary: 'Maps the Tor relay landscape with filters, search, and a more exploratory point of view.',
    impact: 'Useful example of information design, mapping, and interactive data presentation.',
    stack: ['data viz', 'mapping', 'search', 'privacy'],
    accent: 'ice',
    ownership: 'Contributed',
    layout: 'standard',
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
    homepage: 'https://github.com/center2055/DNS-Hop/releases/latest',
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
    name: 'apiark',
    description: 'Privacy-first API platform built with Tauri v2. No login, no cloud, ~60 MB RAM. A lightweight Postman alternative.',
    html_url: 'https://github.com/center2055/apiark',
    homepage: '',
    stargazers_count: 0,
    forks_count: 0,
    language: 'TypeScript',
    updated_at: '2026-03-18T06:52:18Z',
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
  {
    name: 'tormap',
    description: 'World map of Tor relays. Travel in time, filter and search.',
    html_url: 'https://github.com/center2055/tormap',
    homepage: 'https://tormap.org',
    stargazers_count: 0,
    forks_count: 0,
    language: null,
    updated_at: '2026-03-18T07:37:13Z',
    topics: [],
  },
];

export const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/center2055' },
  { label: 'Discord', href: 'https://discord.gg/y3MVspPzKQ' },
  { label: 'Ko-fi', href: 'https://ko-fi.com/center2055' },
];
