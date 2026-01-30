import useSWR from 'swr';

const fetcher = (url: string) =>
	fetch(url, {
		headers: { Authorization: `Bearer ${process.env.BUN_PUBLIC_GITHUB_TOKEN}` },
	}).then((r) => r.json());

// Todo: Put in server cache later.
export function useRepoStars(owner: string, repo: string) {
	const { data, isLoading, error } = useSWR(owner && repo && `https://api.github.com/repos/${owner}/${repo}`, fetcher, { revalidateOnFocus: false });

	return {
		stars: data?.stargazers_count as number | undefined,
		isLoading,
		error,
	};
}
