import './index.css';

import { useHotkeys } from '@mantine/hooks';
import { useTheme } from 'next-themes';
import { Route, Switch } from 'wouter';
import { Layout } from './components/layout';
import { LandingPage } from './pages';

function Content() {
	const { setTheme } = useTheme();

	useHotkeys([['mod + J', () => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))]]);

	return (
		<Switch>
			<Route path="/" component={LandingPage} />
		</Switch>
	);
}

export default function App() {
	return (
		<Layout>
			<Content />
		</Layout>
	);
}
