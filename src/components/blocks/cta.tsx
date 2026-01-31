import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

const HIDDEN_ROUTES = ['/create-account', '/sign-in'];

export function CTA() {
	const [location] = useLocation();

	if (HIDDEN_ROUTES.includes(location)) return null;

	return (
		<div className="mx-auto w-full max-w-7xl px-4">
			<div className="flex flex-col items-center justify-start rounded-xl bg-muted/25 py-8 sm:py-12">
				<h2 className="text-xl sm:text-2xl text-center">Ready to start your first quest?</h2>
				<p className="mb-4 sm:mb-6 text-muted-foreground text-center text-sm sm:text-base max-w-xs sm:max-w-none mx-auto">
					Break down goals, complete quests, and make real progress.
				</p>
				<Button size="lg" className="px-4">
					Get Started
				</Button>
			</div>
		</div>
	);
}
