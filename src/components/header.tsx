import { ListIcon } from '@phosphor-icons/react';
import React from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export const navLinks = [
	{ name: 'I. Home', href: '/' },
	{ name: 'II. Features', href: '/features' },
	{ name: 'III. Pricing', href: '/pricing' },
	{ name: 'IV. Blog', href: '/blog' },
	{ name: 'V. Source', href: '/source' },
];

export function AuthActions({ className }: { className?: string }) {
	return (
		<div className={cn('flex gap-4', className)}>
			<Button>Sign in</Button>

			<Button variant="outline">Create account</Button>
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
					<div className="md:hidden">
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
					<Nav className="hidden md:flex flex-row gap-4" />
				</div>

				<div className="flex justify-center">
					<span className="text-lg font-heading tracking-tight">Todo Quest</span>
				</div>

				{/* Right */}
				<div className="hidden justify-end md:flex">
					<AuthActions />
				</div>
			</div>
		</header>
	);
}
