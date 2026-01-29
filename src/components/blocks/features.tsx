import { ChartPieIcon, ListChecksIcon, MapTrifoldIcon, RobotIcon, SparkleIcon, TrophyIcon } from '@phosphor-icons/react';

import { motion, type Variants } from 'framer-motion';

const features = [
	{
		icon: RobotIcon,
		title: 'Create a Quest',
		description: 'Tell us what you want to achieve. Big goal, small task, side mission—it all starts as a quest.',
	},
	{
		icon: SparkleIcon,
		title: 'AI-Generated Chapters',
		description: 'Each quest unlocks a chapter, broken down into clear steps by AI. No planning paralysis.',
	},
	{
		icon: ListChecksIcon,
		title: 'Complete Objectives',
		description: 'Check off objectives one by one. Progress is visible, satisfying, and impossible to ignore.',
	},
	{
		icon: ChartPieIcon,
		title: 'Earn XP & Level Up',
		description: 'Every completed task earns XP. Levels go up. Motivation follows.',
	},
	{
		icon: TrophyIcon,
		title: 'Leaderboards',
		description: 'See how you stack up. Compete with friends—or just your past self.',
	},
	{
		icon: MapTrifoldIcon,
		title: 'Your Progress Map',
		description: 'Watch your quests form a clear path of completed chapters and victories.',
	},
];

const container: Variants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export function Features() {
	return (
		<div className="flex items-center justify-center py-12">
			<div>
				<h2 className="text-balance text-center font-medium tracking-tight text-3xl sm:text-4xl lg:text-5xl">Your Path to Progress</h2>
				<p className="mx-auto mt-5 max-w-2xl text-center text-base sm:text-lg text-foreground/80 leading-relaxed">
					Break down your goals into actionable steps, track your progress, and stay motivated every day.
				</p>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.25 }}
					className="mx-auto mt-10 grid max-w-(--breakpoint-xl) gap-6 px-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
				>
					{features.map((feature) => (
						<motion.div key={feature.title} variants={item} className="flex flex-col rounded-xl border px-5 py-6">
							<div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
								<feature.icon weight="duotone" className="size-6" />
							</div>

							<span className="font-semibold text-md">{feature.title}</span>

							<p className="mt-1 text-[15px] text-foreground/80">{feature.description}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
