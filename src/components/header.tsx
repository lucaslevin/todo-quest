import { ListIcon, StarIcon } from '@phosphor-icons/react';
import React from 'react';
import { Link, useLocation } from 'wouter';
import { ThemeToggle } from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useRepoStars } from '@/hooks/use-repo-stars';
import { cn } from '@/lib/utils';

export const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Features', href: '/features' },
	{ name: 'Pricing', href: '/pricing' },
	{ name: 'Blog', href: '/blog' },
];

export function AuthActions({ className }: { className?: string }) {
	return (
		<div className={cn('flex gap-4', className)}>
			<ThemeToggle />

			<div className="flex gap-4">
				<Link href="/create-account" asChild>
					<Button variant="outline">Create account</Button>
				</Link>

				<Link href="/sign-in" asChild>
					<Button>Sign in</Button>
				</Link>
			</div>
		</div>
	);
}

function isActive(path: string, href: string) {
	if (href === '/') return path === '/';
	return path === href || path.startsWith(`${href}/`);
}

export function Nav({ onNavigate, className, buttonSize = 'default' }: { onNavigate?: () => void; className?: string; buttonSize?: 'default' | 'sm' | 'lg' }) {
	const [location] = useLocation();

	return (
		<nav className={cn('flex flex-col gap-2', className)}>
			{navLinks.map((link) => {
				const active = isActive(location, link.href);

				return (
					<Link key={link.href} href={link.href} asChild>
						<Button size={buttonSize} onClick={onNavigate} variant={active ? 'secondary' : 'ghost'} className="justify-start">
							{link.name}
						</Button>
					</Link>
				);
			})}
		</nav>
	);
}

export function Header() {
	const [open, setOpen] = React.useState(false);
	const [location] = useLocation();

	const { stars } = useRepoStars('lucaslevin', 'todo-quest');

	// biome-ignore lint/correctness/useExhaustiveDependencies: We only want to run this on location change.
	React.useEffect(() => {
		setOpen(false);
	}, [location]);

	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-border/75 bg-background/80 backdrop-blur-md">
			<div className="relative grid h-(--header-height) grid-cols-3 items-center px-4">
				{/* Left */}
				<div className="flex items-center">
					{/* Mobile */}
					<div className="xl:hidden">
						<Sheet open={open} onOpenChange={setOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<ListIcon weight="duotone" className="size-5" />
								</Button>
							</SheetTrigger>
							<SheetContent side="left" className="w-72">
								<SheetHeader>
									<SheetTitle className="text-2xl">{process.env.BUN_PUBLIC_APP_NAME}</SheetTitle>
								</SheetHeader>

								<Nav onNavigate={() => setOpen(false)} className="px-2" buttonSize="lg" />

								<SheetFooter>
									<AuthActions className="w-full justify-between" />
								</SheetFooter>
							</SheetContent>
						</Sheet>
					</div>

					{/* Desktop */}
					<Nav className="hidden xl:flex flex-row gap-4" />
				</div>

				<div className="flex justify-center items-center gap-3">
					<Link to="/">
						<span className="text-xl font-heading tracking-tight">{process.env.BUN_PUBLIC_APP_NAME}</span>
					</Link>

					<Tooltip>
						<TooltipTrigger asChild>
							<Badge variant="outline" className="p-3 hidden md:inline-flex" asChild>
								<a href="https://github.com/lucaslevin/todo-quest" target="_blank" rel="noreferrer">
									{new Intl.NumberFormat([], { notation: 'compact', compactDisplay: 'short' }).format(stars ?? 0)}
									<StarIcon weight="duotone" />
								</a>
							</Badge>
						</TooltipTrigger>

						<TooltipContent>Stars on GitHub</TooltipContent>
					</Tooltip>
				</div>

				{/* Right */}
				<div className="hidden justify-end xl:flex">
					<AuthActions />
				</div>
			</div>
		</header>
	);
}
