import { CTA } from '@/components/blocks/cta';
import { Footer } from '@/components/blocks/footer';
import { Header } from '@/components/header';

export function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="[--header-height:calc(--spacing(14))]">
			<Header />
			<main className="pt-(--header-height)">{children}</main>
			<CTA />
			<Footer />
		</div>
	);
}
