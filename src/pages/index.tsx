import { FAQ } from '@/components/blocks/faq';

import { Hero } from '@/components/blocks/hero';
import Testimonials from '@/components/blocks/testimonials';

export function LandingPage() {
	return (
		<div className="space-y-4">
			<Hero />
			<Testimonials />
			<FAQ />
		</div>
	);
}
