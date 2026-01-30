import { ArrowRightIcon, ArrowUpRightIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { motion, type Variants } from 'motion/react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item: Variants = {
	hidden: { opacity: 0, y: 12 },
	show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export function Hero() {
	return (
		<motion.div variants={container} initial="hidden" animate="show" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 px-6 py-16">
			<motion.div variants={item} className="max-w-3xl space-y-10 text-center">
				<motion.div variants={item}>
					<Badge asChild className="rounded-full border-border p-3" variant="secondary">
						<Link href="#">
							Announcing Beta
							<ArrowUpRightIcon className="ml-1 size-5" />
						</Link>
					</Badge>
				</motion.div>

				<div className="space-y-6">
					<motion.h1 variants={item} className="text-5xl font-medium tracking-tight md:text-6xl md:leading-tight">
						Turn your Goals into Epic Quests
					</motion.h1>

					<motion.p variants={item} className="md:text-lg text-foreground/80">
						Transforms your ambitions into RPG-style quests. Earn experience, level up, and make consistent progress — one quest at a time.
					</motion.p>
				</div>

				<motion.div variants={item} className="flex flex-col gap-4 sm:flex-row sm:justify-center">
					<Button className="w-full rounded-full px-4 sm:w-auto" size="lg">
						Start Questing
						<ArrowRightIcon className="size-6" />
					</Button>

					<Button variant="outline" className="w-full rounded-full px-4 sm:w-auto" size="lg">
						<GithubLogoIcon weight="duotone" className="size-6" />
						Open Source
					</Button>
				</motion.div>
			</motion.div>

			<motion.div variants={item} className="mx-auto w-full max-w-(--breakpoint-xl)">
				<div className="aspect-video rounded-xl bg-accent overflow-hidden">
					<img src="https://images.pexels.com/photos/346108/pexels-photo-346108.jpeg" alt="Desert" className="h-full w-full object-cover" />
				</div>

				<p className="mt-4 text-center text-sm text-muted-foreground italic">Every task is a quest — some just give better experience.</p>
			</motion.div>
		</motion.div>
	);
}
