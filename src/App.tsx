import { motion, useReducedMotion } from 'framer-motion';
import type { MouseEvent } from 'react';
import {
  capabilityCards,
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
}

function resetSpotlight(event: MouseEvent<HTMLElement>) {
  event.currentTarget.style.setProperty('--spot-x', '50%');
  event.currentTarget.style.setProperty('--spot-y', '50%');
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
  const liveHref = project.homepage?.trim() ? project.homepage : '';

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
            <strong>{formatCompactNumber(project.stargazers_count)}</strong>
            <span>stars</span>
          </div>
          <div>
            <strong>{project.language ?? 'mixed'}</strong>
            <span>primary stack</span>
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
          <a href={project.html_url} target="_blank" rel="noreferrer">
            Source
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
  const repoMap = new Map(sourceRepos.map((repo) => [repo.name, repo]));

  const projects = featuredOrder
    .map((name) => {
      const profile = projectProfiles[name];
      const repo = repoMap.get(name);

      if (!profile || !repo) {
        return null;
      }

      return {
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
      } satisfies ProjectCard;
    })
    .filter((project): project is ProjectCard => project !== null);
  const builtProjects = projects.filter((project) => project.ownership === 'Built');
  const contributedProjects = projects.filter((project) => project.ownership === 'Contributed');

  const recentRepos = sourceRepos
    .filter((repo) => !featuredOrder.includes(repo.name))
    .slice(0, 4);

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
    <div className="app-shell">
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

      <main id="top">
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
                <span>Featured builds</span>
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
              <span>Built tools</span>
              <strong>{builtProjects.length.toString().padStart(2, '0')}</strong>
            </div>
            <div>
              <span>Contributions</span>
              <strong>{contributedProjects.length.toString().padStart(2, '0')}</strong>
            </div>
          </div>

          <div className="work-groups">
            <section className="project-section">
              <div className="project-section-head">
                <div>
                  <span className="eyebrow">Built</span>
                  <h3>Original tools</h3>
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
                  <h3>Existing products I improved</h3>
                </div>
                <p>Projects where I stepped into an existing codebase and improved the product without forcing a rewrite.</p>
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
              <span className="eyebrow">Live feed</span>
              <h2>More projects in motion.</h2>
              <p>
                The portfolio spotlights the sharpest cases, but the broader repo activity shows
                how often new tools and experiments are shipping.
              </p>
            </div>

            <div className="activity-list">
              {recentRepos.map((repo) => (
                <a key={repo.name} href={repo.html_url} target="_blank" rel="noreferrer" className="activity-item">
                  <div>
                    <strong>{repo.name}</strong>
                    <p>{repo.description}</p>
                  </div>
                  <div className="activity-meta">
                    <span>{repo.language ?? 'mixed'}</span>
                    <span>{formatDate(repo.updated_at)}</span>
                  </div>
                </a>
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
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
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
