import './index.css';

import { useHotkeys } from '@mantine/hooks';
import { useTheme } from 'next-themes';
import { Route, Switch } from 'wouter';
import { Layout } from '@/components/layout';
import { ThemeProvider } from '@/components/theme-provider';
import { LandingPage } from '@/pages';
import { PricingPage } from '@/pages/pricing';
import { ScrollRestoration } from './components/scroll-restoration';
import { BlogPage } from './pages/blog';
import { FeaturesPage } from './pages/features';

function Content() {
	const { setTheme } = useTheme();

	useHotkeys([['mod + J', () => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))]]);

	return (
		<Layout>
			<Switch>
				<Route path="/" component={LandingPage} />
				<Route path="/features" component={FeaturesPage} />
				<Route path="/pricing" component={PricingPage} />
				<Route path="/blog" component={BlogPage} />
			</Switch>
		</Layout>
	);
}

export default function App() {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<Content />
			<ScrollRestoration />
		</ThemeProvider>
	);
}
