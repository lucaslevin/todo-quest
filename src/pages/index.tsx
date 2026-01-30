import { FAQ } from '@/components/blocks/faq';
import { Features } from '@/components/blocks/features';
import { Hero } from '@/components/blocks/hero';
import Testimonials from '@/components/blocks/testimonials';

export function LandingPage() {
	return (
		<>
			<Hero />
			<Features />
			<Testimonials />
			<FAQ />
		</>
	);
}
