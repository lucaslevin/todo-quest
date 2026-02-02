import './index.css';

import { useHotkeys } from '@mantine/hooks';
import { useTheme } from 'next-themes';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { Redirect, Route, Switch } from 'wouter';
import { Spinner } from '@//components/ui/spinner';
import { AuthLayout } from '@/components/layouts/auth-layout';
import { HomeLayout } from '@/components/layouts/home-layout';
import { ScrollRestoration } from '@/components/scroll-restoration';
import { ThemeProvider } from '@/components/theme-provider';
import { DirectionProvider } from '@/components/ui/direction';
import { Toaster } from '@/components/ui/sonner';
import { authClient } from '@/lib/auth-client';
import { LandingPage } from '@/pages';
import { CreateAccountPage } from '@/pages/authentication/create-account';
import { SignInPage } from '@/pages/authentication/sign-in';
import { BlogPage } from '@/pages/blog';
import { HomePage } from '@/pages/dashboard';
import { FeaturesPage } from '@/pages/features';
import { PricingPage } from '@/pages/pricing';

function Content() {
	const { setTheme } = useTheme();

	const { data, isPending } = authClient.useSession();

	useHotkeys([['mod + J', () => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))]]);

	if (isPending) {
		return (
			<div className="flex items-center justify-center h-svh">
				<Spinner className="size-6" />
			</div>
		);
	}

	if (data?.session) {
		return (
			<AuthLayout>
				<Switch>
					<Route path="/" component={HomePage} />
					<Route component={() => <Redirect to="/" />} />
				</Switch>
			</AuthLayout>
		);
	}

	return (
		<HomeLayout>
			<Switch>
				<Route path="/" component={LandingPage} />
				<Route path="/sign-in" component={SignInPage} />
				<Route path="/create-account" component={CreateAccountPage} />
				<Route path="/features" component={FeaturesPage} />
				<Route path="/pricing" component={PricingPage} />
				<Route path="/blog" component={BlogPage} />
			</Switch>
		</HomeLayout>
	);
}

export default function App() {
	return (
		<NuqsAdapter>
			<DirectionProvider dir="ltr">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<Content />
					<Toaster richColors />
					<ScrollRestoration />
				</ThemeProvider>
			</DirectionProvider>
		</NuqsAdapter>
	);
}
