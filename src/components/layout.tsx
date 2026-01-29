import { ThemeProvider } from '@/components/theme-provider';
import { Header } from './header';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<Header />
			{children}
		</ThemeProvider>
	);
}
