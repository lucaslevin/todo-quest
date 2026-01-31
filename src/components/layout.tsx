import { CTA } from './blocks/cta';
import { Footer } from './blocks/footer';
import { Header } from './header';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="[--header-height:calc(--spacing(14))]">
			<Header />
			<main className="pt-(--header-height)">{children}</main>
			<CTA />
			<Footer />
		</div>
	);
}
