import { ListIcon, PlusIcon, StarIcon } from '@phosphor-icons/react';
import React from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useRepoStars } from '@/hooks/use-repo-stars';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

export const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Features', href: '/features' },
	{ name: 'Pricing', href: '/pricing' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Open Source', href: '/open-source' },
];

export function AuthActions({ className }: { className?: string }) {
	return (
		<div className={cn('flex gap-4', className)}>
			<Button>Sign in</Button>

			<Button variant="outline">
				<PlusIcon /> Create account
			</Button>
		</div>
	);
}

export function Nav({ onNavigate, className, buttonSize = 'default' }: { onNavigate?: () => void; className?: string; buttonSize?: 'default' | 'sm' | 'lg' }) {
	return (
		<nav className={cn('flex flex-col gap-2', className)}>
			{navLinks.map((link) => (
				<Link key={link.href} href={link.href} asChild>
					<Button variant="ghost" size={buttonSize} onClick={onNavigate} className="justify-start">
						{link.name}
					</Button>
				</Link>
			))}
		</nav>
	);
}

export function Header() {
	const [open, setOpen] = React.useState(false);
	const [location] = useLocation();

	const { stars } = useRepoStars('lucaslevin', 'todo-quest');

	// biome-ignore lint/correctness/useExhaustiveDependencies: Location change only
	React.useEffect(() => {
		setOpen(false);
	}, [location]);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
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
									<SheetTitle className="text-2xl font-medium">Todo Quest</SheetTitle>
								</SheetHeader>

								<Nav onNavigate={() => setOpen(false)} className="px-3" buttonSize="lg" />

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
						<span className="text-lg font-heading tracking-tight">Todo Quest</span>
					</Link>

					<Badge variant="outline" className="p-3 hidden md:inline-flex">
						{new Intl.NumberFormat([], { notation: 'compact', compactDisplay: 'short' }).format(stars ?? 0)}
						<StarIcon weight="duotone" />
					</Badge>
				</div>

				{/* Right */}
				<div className="hidden justify-end md:flex">
					<AuthActions />
				</div>
			</div>
		</header>
	);
}
