import { ListIcon, SidebarIcon } from '@phosphor-icons/react';
import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Features', href: '/features' },
	{ name: 'Pricing', href: '/pricing' },
	{ name: 'About', href: '/about' },
	{ name: 'Contact', href: '/contact' },
];

export function AuthActions() {
	return (
		<div className="flex gap-4">
			<Button className="rounded-full px-4">Sign in</Button>
			<Button className="rounded-full px-4" variant="outline">
				Create account
			</Button>
		</div>
	);
}

export function Nav({ onNavigate, className }: { onNavigate?: () => void; className?: string }) {
	return (
		<nav className={cn('flex flex-col gap-2', className)}>
			{navLinks.map((link) => (
				<Link key={link.href} href={link.href} asChild>
					<Button variant="ghost" onClick={onNavigate} className="justify-start">
						{link.name}
					</Button>
				</Link>
			))}
		</nav>
	);
}

export function Header() {
	const [open, setOpen] = React.useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
			<div className="flex h-(--header-height) w-full items-center gap-2 px-4">
				{/* Mobile */}
				<div className="md:hidden">
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon-lg">
								<ListIcon weight="duotone" className="size-5" />
							</Button>
						</SheetTrigger>

						<SheetContent side="left" className="w-64">
							<SheetHeader>
								<SheetTitle className="font-medium text-lg">Todo Quest</SheetTitle>
							</SheetHeader>

							<div className="p-2">
								<Nav className="mt-6" onNavigate={() => setOpen(false)} />
							</div>

							<SheetFooter>
								<AuthActions />
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>

				{/* Desktop */}
				<div className="hidden md:grid grid-cols-3 items-center flex-1">
					{/* Left */}
					<div className="flex items-center gap-6">
						<Nav className="flex flex-row gap-4" />
					</div>

					{/* Center */}
					<div className="flex justify-center">
						<span className="text-lg tracking-tight">Todo Quest</span>
					</div>

					{/* Right */}
					<div className="flex justify-end">
						<AuthActions />
					</div>
				</div>
			</div>
		</header>
	);
}
