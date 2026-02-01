import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

const HIDDEN_ROUTES = ['/create-account', '/sign-in'];

export function CTA() {
	const [location] = useLocation();

	if (HIDDEN_ROUTES.includes(location)) return null;

	return (
		<div className="mx-auto w-full max-w-7xl px-4">
			<div className="flex flex-col items-center justify-start py-8 sm:py-12">
				<h2 className="text-2xl sm:text-3xl text-center mb-2">Ready to start your first quest?</h2>
				<p className="mb-6 text-muted-foreground text-center text-base max-w-md mx-auto">Break down goals, complete quests, and make real progress.</p>

				<Link to="/create-account" asChild>
					<Button size="lg" className="px-6">
						Get started now
					</Button>
				</Link>
			</div>
		</div>
	);
}
