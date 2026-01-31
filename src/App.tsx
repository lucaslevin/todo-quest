import './index.css';

import { useHotkeys } from '@mantine/hooks';
import { useTheme } from 'next-themes';
import { Route, Switch } from 'wouter';
import { Layout } from '@/components/layout';
import { ScrollRestoration } from '@/components/scroll-restoration';
import { ThemeProvider } from '@/components/theme-provider';
import { LandingPage } from '@/pages';
import { CreateAccountPage } from '@/pages/authentication/create-account';
import { SignInPage } from '@/pages/authentication/sign-in';
import { BlogPage } from '@/pages/blog';
import { FeaturesPage } from '@/pages/features';
import { PricingPage } from '@/pages/pricing';

function Content() {
	const { setTheme } = useTheme();

	useHotkeys([['mod + J', () => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))]]);

	return (
		<Layout>
			<Switch>
				<Route path="/" component={LandingPage} />
				<Route path="/sign-in" component={SignInPage} />
				<Route path="/create-account" component={CreateAccountPage} />
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
