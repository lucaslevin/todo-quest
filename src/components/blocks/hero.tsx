import { ArrowUpRightIcon, GithubLogoIcon, WarningCircleIcon } from '@phosphor-icons/react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function Hero() {
	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-center gap-16 px-6 py-16">
			<div className="max-w-3xl space-y-10 text-center">
				<Badge asChild className="rounded-full border-border p-4" variant="secondary">
					<Link href="#">
						Announcing Season of Future
						<ArrowUpRightIcon className="ml-1 size-5" />
					</Link>
				</Badge>

				<div className="space-y-6">
					<h1 className="font-medium text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-7xl">Turn your goals into Quests</h1>

					<p className="text-foreground/80 md:text-lg">
						Transforms your ambitions into RPG-style quests. Earn experience, level up, and make consistent progress — one quest at a time.
					</p>
				</div>

				<div className="flex justify-center gap-4">
					<Button className="rounded-full px-4 text-base" size="lg">
						<WarningCircleIcon weight="duotone" className="size-5" /> Accept Quest
					</Button>

					<Button variant="outline" className="rounded-full px-4 text-base" size="lg">
						<GithubLogoIcon weight="duotone" className="size-5" /> Open Source
					</Button>
				</div>
			</div>

			<div className="mx-auto aspect-video w-full max-w-(--breakpoint-xl) rounded-xl bg-accent" />
		</div>
	);
}
