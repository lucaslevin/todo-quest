import { useLayoutEffect } from 'react';
import { useLocation } from 'wouter';

export function ScrollRestoration() {
	const [location] = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: We only want to run this on location change
	useLayoutEffect(() => {
		// Wait for DOM + layout + paint
		requestAnimationFrame(() => {
			window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
		});
	}, [location]);

	return null;
}
