import { motion, useReducedMotion } from 'framer-motion';
import type { MouseEvent } from 'react';
import {
  builtProjectCatalog,
  capabilityCards,
  closingHighlights,
  fallbackRepos,
  featuredOrder,
  footerLinks,
  heroSignals,
  marqueeItems,
  navigation,
  processSteps,
  projectProfiles,
  type Accent,
  type CardLayout,
  type Ownership,
  type RepoSnapshot,
  type SocialPlatform,
} from './data/portfolio';
import { useGithubRepos } from './hooks/useGithubRepos';

type ProjectCard = RepoSnapshot & {
  label: string;
  domain: string;
  summary: string;
  impact: string;
  stack: string[];
  accent: Accent;
  ownership: Ownership;
  layout: CardLayout;
  metricPrimary?: { value: string; label: string };
  metricSecondary?: { value: string; label: string };
  sourceHref?: string;
  sourceLabel?: string;
  launchHref?: string;
};

function formatCompactNumber(value: number) {
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
}

function formatDate(dateValue: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateValue));
}

function updateSpotlight(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  event.currentTarget.style.setProperty('--spot-opacity', '1');
}

function resetSpotlight(event: MouseEvent<HTMLElement>) {
  event.currentTarget.style.setProperty('--spot-opacity', '0');
}

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.73.08-.72.08-.72 1.2.09 1.83 1.22 1.83 1.22 1.08 1.82 2.82 1.3 3.5.99.11-.76.42-1.3.76-1.6-2.66-.3-5.47-1.31-5.47-5.86 0-1.3.47-2.36 1.24-3.2-.13-.3-.54-1.5.12-3.13 0 0 1.01-.32 3.3 1.22a11.67 11.67 0 0 1 6 0c2.28-1.54 3.29-1.22 3.29-1.22.67 1.63.25 2.83.13 3.13.77.84 1.24 1.9 1.24 3.2 0 4.56-2.81 5.55-5.49 5.85.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z"
        />
      </svg>
    );
  }

  if (platform === 'discord') {
    return (
      <svg viewBox="0 0 64 48" aria-hidden="true">
        <path
          fill="currentColor"
          d="M40.575 0C39.9562 1.09866 39.4006 2.2352 38.8954 3.397C34.0967 2.67719 29.2096 2.67719 24.3982 3.397C23.9057 2.2352 23.3374 1.09866 22.7186 0C18.2104 0.770324 13.8157 2.12155 9.64839 4.02841C1.38951 16.2652 -0.845688 28.1863 0.265599 39.9432C5.10222 43.517 10.5197 46.2447 16.2909 47.9874C17.5916 46.2447 18.7407 44.3883 19.7257 42.4562C17.8568 41.7616 16.0509 40.8903 14.3208 39.88C14.7755 39.5517 15.2175 39.2107 15.6468 38.8824C25.7873 43.6559 37.5316 43.6559 47.6847 38.8824C48.1141 39.236 48.5561 39.577 49.0107 39.88C47.2806 40.9029 45.4748 41.7616 43.5931 42.4688C44.5781 44.4009 45.7273 46.2573 47.028 48C52.7991 46.2573 58.2167 43.5422 63.0533 39.9684C64.3666 26.3299 60.8055 14.5099 53.6452 4.04104C49.4905 2.13418 45.0959 0.782952 40.5876 0.0252565L40.575 0ZM21.1401 32.7072C18.0209 32.7072 15.4321 29.8785 15.4321 26.3804C15.4321 22.8824 17.9199 20.041 21.1275 20.041C24.3351 20.041 26.886 22.895 26.8354 26.3804C26.7849 29.8658 24.3224 32.7072 21.1401 32.7072ZM42.1788 32.7072C39.047 32.7072 36.4834 29.8785 36.4834 26.3804C36.4834 22.8824 38.9712 20.041 42.1788 20.041C45.3864 20.041 47.9246 22.895 47.8741 26.3804C47.8236 29.8658 45.3611 32.7072 42.1788 32.7072Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.5 5.5c0-1.1.9-2 2-2h11.76c1.1 0 2 .9 2 2V14a2 2 0 0 1-2 2H11.7l-3.56 3.2a1 1 0 0 1-1.67-.74V16H5.5a2 2 0 0 1-2-2V5.5Zm12.89 1.73c-.5-.34-1.14-.5-1.93-.5-.92 0-1.77.32-2.56.94l-.4.33-.4-.33a4.04 4.04 0 0 0-2.56-.94c-.79 0-1.43.16-1.93.5-.76.51-1.14 1.3-1.14 2.35 0 .92.33 1.8 1 2.64.58.72 1.3 1.38 2.15 1.98.86.61 1.72 1.12 2.56 1.53.84-.41 1.7-.92 2.56-1.53.86-.6 1.58-1.26 2.15-1.98.67-.84 1-1.72 1-2.64 0-1.05-.38-1.84-1.14-2.35Z"
      />
    </svg>
  );
}

function ProjectPanel({
  project,
  index,
  reducedMotion,
}: {
  project: ProjectCard;
  index: number;
  reducedMotion: boolean;
}) {
  const sourceHref = project.sourceHref?.trim() ? project.sourceHref : project.html_url;
  const sourceLabel = project.sourceLabel?.trim() ? project.sourceLabel : 'Source';
  const liveHref = project.launchHref?.trim()
    ? project.launchHref
    : project.homepage?.trim()
      ? project.homepage
      : '';
  const metricPrimary = project.metricPrimary ?? {
    value: formatCompactNumber(project.stargazers_count),
    label: 'stars',
  };
  const metricSecondary = project.metricSecondary ?? {
    value: project.language ?? 'mixed',
    label: 'primary stack',
  };

  return (
    <motion.article
      layout
      className={`project-panel ${project.layout} accent-${project.accent}`}
      initial={reducedMotion ? false : { opacity: 0, y: 36 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={updateSpotlight}
      onMouseLeave={resetSpotlight}
    >
      <div className="spotlight-layer" aria-hidden="true" />
      <div className="project-topline">
        <span>{project.ownership === 'Built' ? 'Built by me' : 'Contribution'}</span>
        <span>{project.label}</span>
      </div>
      <div className="project-domain">{project.domain}</div>

      <div className="project-head">
        <div>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
        </div>
        <div className="project-stats">
          <div>
            <strong>{metricPrimary.value}</strong>
            <span>{metricPrimary.label}</span>
          </div>
          <div>
            <strong>{metricSecondary.value}</strong>
            <span>{metricSecondary.label}</span>
          </div>
        </div>
      </div>

      <p className="project-impact">{project.impact}</p>

      <div className="project-tags" aria-label={`${project.name} technologies`}>
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="project-footer">
        <div className="project-links">
          <a href={sourceHref} target="_blank" rel="noreferrer">
            {sourceLabel}
          </a>
          {liveHref ? (
            <a href={liveHref} target="_blank" rel="noreferrer">
              Launch
            </a>
          ) : null}
        </div>
        <span className="project-updated">Updated {formatDate(project.updated_at)}</span>
      </div>
    </motion.article>
  );
}

function App() {
  const { repos, loading, error } = useGithubRepos();
  const reducedMotion = useReducedMotion();

  const sourceRepos = repos.length > 0 ? repos : fallbackRepos;
  const repoMap = new Map(fallbackRepos.map((repo) => [repo.name, repo]));
  sourceRepos.forEach((repo) => {
    const fallbackRepo = repoMap.get(repo.name);
    repoMap.set(repo.name, {
      ...fallbackRepo,
      ...repo,
      description: repo.description || fallbackRepo?.description || '',
      homepage: repo.homepage || fallbackRepo?.homepage || '',
    });
  });

  const projects = featuredOrder
    .map((name) => {
      const profile = projectProfiles[name];
      const repo = repoMap.get(name);

      if (!profile || !repo) {
        return null;
      }

      const project: ProjectCard = {
        ...repo,
        description: repo.description ?? profile.summary,
        homepage: repo.homepage ?? '',
        label: profile.label,
        domain: profile.domain,
        summary: profile.summary,
        impact: profile.impact,
        stack: profile.stack,
        accent: profile.accent,
        ownership: profile.ownership,
        layout: profile.layout,
        metricPrimary: profile.metricPrimary,
        metricSecondary: profile.metricSecondary,
        sourceHref: profile.sourceHref,
        sourceLabel: profile.sourceLabel,
        launchHref: profile.launchHref,
      };

      return project;
    })
    .filter((project): project is ProjectCard => project !== null);
  const builtProjects = projects.filter((project) => project.ownership === 'Built');
  const contributedProjects = projects.filter((project) => project.ownership === 'Contributed');
  const builtProjectsTotal = builtProjectCatalog.length;

  const totalStars = sourceRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const activeLanguages = new Set(
    sourceRepos.map((repo) => repo.language).filter((language): language is string => Boolean(language)),
  ).size;
  const recentlyUpdated = sourceRepos.filter((repo) => {
    const updatedAt = new Date(repo.updated_at).getTime();
    const daysSinceUpdate = (Date.now() - updatedAt) / (1000 * 60 * 60 * 24);
    return daysSinceUpdate <= 45;
  }).length;

  return (
    <div className="app-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top">
          center2055
        </a>
        <nav aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero">
          <motion.div
            className="hero-copy"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Interface craft with systems depth</span>
            <h1>
              I build software that looks sharp, moves clean, and stays useful when the
              product gets technical.
            </h1>
            <p className="hero-intro">
              Privacy tools, frontend-heavy apps, desktop utilities, automation surfaces,
              and open-source contributions. The thread through all of it is product clarity.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#work">
                View selected work
              </a>
              <a className="button secondary" href="https://github.com/center2055" target="_blank" rel="noreferrer">
                Open GitHub
              </a>
            </div>

            <div className="hero-metrics" aria-label="Key portfolio metrics">
              <div>
                <span>Selected projects</span>
                <strong>{projects.length.toString().padStart(2, '0')}</strong>
              </div>
              <div>
                <span>Total stars</span>
                <strong>{formatCompactNumber(totalStars)}</strong>
              </div>
              <div>
                <span>Stacks shipped</span>
                <strong>{activeLanguages}+</strong>
              </div>
              <div>
                <span>Recent repo updates</span>
                <strong>{recentlyUpdated}</strong>
              </div>
            </div>

            <div className="status-line">
              <span className={`status-dot ${error ? 'warning' : 'live'}`} />
              <span>
                {loading
                  ? 'Syncing live GitHub project data'
                  : error ?? 'Live GitHub data is feeding the portfolio cards'}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-stage"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: reducedMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={updateSpotlight}
            onMouseLeave={resetSpotlight}
          >
            <div className="spotlight-layer" aria-hidden="true" />
            <div className="signal-grid">
              {heroSignals.map((signal, index) => (
                <motion.article
                  key={signal.title}
                  className={`signal-card accent-${signal.accent}`}
                  initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.5,
                    delay: reducedMotion ? 0 : index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span>{signal.kicker}</span>
                  <h3>{signal.title}</h3>
                  <p>{signal.body}</p>
                </motion.article>
              ))}
            </div>

            <div className="stage-core">
              <div className="stage-kicker">Current operating lanes</div>
              <h2>Frontend direction, desktop execution, contribution-ready workflow.</h2>
              <p>
                The UI is never treated as a skin. I build the interface and the system in
                the same thought loop.
              </p>
              <div className="stage-stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>C#</span>
                <span>Java</span>
                <span>Python</span>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <section id="work" className="section-block">
          <div className="section-heading">
            <span className="eyebrow">Selected work</span>
            <h2>Tools I built and projects I contributed to.</h2>
            <p>
              Clear separation matters here. Some projects are original products, others are
              contributions to existing tools. Both should show how I handle UI, product shape,
              and technical depth.
            </p>
          </div>

          <div className="ownership-summary">
            <div>
              <span>Built repos overall</span>
              <strong>{builtProjectsTotal.toString().padStart(2, '0')}</strong>
            </div>
            <div>
              <span>Merged contributions</span>
              <strong>{contributedProjects.length.toString().padStart(2, '0')}</strong>
            </div>
          </div>

          <div className="work-groups">
            <section className="project-section">
              <div className="project-section-head">
                <div>
                  <span className="eyebrow">Built</span>
                  <h3>Selected projects I built</h3>
                </div>
                <p>Products where the direction, interaction model, and implementation are mine.</p>
              </div>

              <div className="project-grid">
                {builtProjects.map((project, index) => (
                  <ProjectPanel
                    key={project.name}
                    project={project}
                    index={index}
                    reducedMotion={Boolean(reducedMotion)}
                  />
                ))}
              </div>
            </section>

            <section className="project-section">
              <div className="project-section-head">
                <div>
                  <span className="eyebrow">Contributed</span>
                  <h3>Merged contribution</h3>
                </div>
                <p>A real contribution that landed in an existing codebase, not just a fork or an unmerged proposal.</p>
              </div>

              <div className="project-grid">
                {contributedProjects.map((project, index) => (
                  <ProjectPanel
                    key={project.name}
                    project={project}
                    index={index + builtProjects.length}
                    reducedMotion={Boolean(reducedMotion)}
                  />
                ))}
              </div>
            </section>
          </div>
        </section>

        <section id="capabilities" className="section-block split-layout">
          <div className="section-heading narrow">
            <span className="eyebrow">Capabilities</span>
            <h2>I am strongest where design and systems collide.</h2>
            <p>
              The brief can start as frontend polish, but the work usually stretches into
              product structure, deployment flow, data shape, or automation architecture.
            </p>
          </div>

          <div className="capability-grid">
            {capabilityCards.map((card, index) => (
              <motion.article
                key={card.title}
                className={`capability-card accent-${card.accent}`}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <ul>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="process" className="section-block">
          <div className="section-heading">
            <span className="eyebrow">Build process</span>
            <h2>Strong frontend comes from a clear workflow, not extra decoration.</h2>
            <p>
              I work from system boundaries into motion and polish, then close the loop with
              deployment and iteration.
            </p>
          </div>

          <div className="process-track">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.index}
                className="process-card"
                initial={reducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-block closing-grid">
          <article className="activity-panel">
            <div className="section-heading narrow">
              <span className="eyebrow">What this shows</span>
              <h2>Why these projects matter.</h2>
              <p>
                The point is not volume. The point is that the work shows frontend taste,
                product thinking, and the ability to ship or contribute where the interface
                actually matters.
              </p>
            </div>

            <div className="highlight-list">
              {closingHighlights.map((item) => (
                <article key={item.title} className={`highlight-card accent-${item.accent}`}>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </article>

          <article id="contact" className="contact-panel">
            <span className="eyebrow">Contact</span>
            <h2>If the goal is a frontend that feels authored, I can build the rest of the system around it.</h2>
            <p>
              Available for interface-heavy products, desktop utilities, protocol tooling, and
              projects where visual quality has to survive technical complexity.
            </p>

            <div className="contact-links">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-button">
                  <span className="social-icon">
                    <SocialIcon platform={link.icon} />
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;

