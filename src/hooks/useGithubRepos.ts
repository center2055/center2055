import { useEffect, useState } from 'react';

export type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  fork?: boolean;
};

const GITHUB_REPOS_ENDPOINT =
  'https://api.github.com/users/center2055/repos?per_page=100&sort=updated';

export function useGithubRepos() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        setLoading(true);
        const response = await fetch(GITHUB_REPOS_ENDPOINT, {
          signal: controller.signal,
          headers: {
            Accept: 'application/vnd.github+json',
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API responded with ${response.status}`);
        }

        const data = (await response.json()) as GithubRepo[];
        setRepos(data.filter((repo) => !repo.fork));
        setError(null);
      } catch {
        if (!controller.signal.aborted) {
          setError('Live GitHub data is unavailable right now. Showing the local project snapshot instead.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadRepos();

    return () => controller.abort();
  }, []);

  return { repos, loading, error };
}
