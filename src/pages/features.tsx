import { MeshGradient } from '@mesh-gradient/react';
import { ArrowCircleUpIcon, RobotIcon, ScrollIcon, TargetIcon, TrophyIcon } from '@phosphor-icons/react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const features = [
	{
		icon: ScrollIcon,
		category: 'Planning',
		title: 'Structure goals into actionable quests',
		details:
			'Big goals often fail because they feel vague or overwhelming. Todo Quest helps you break them down into structured, actionable quests with clear outcomes, so you always know what to do next.',
		colors: ['#C7D2FE', '#818CF8', '#4F46E5', '#3730A3'],
	},
	{
		icon: RobotIcon,
		category: 'AI Assistance',
		title: 'Let AI design your action plan',
		details:
			'Use AI to instantly generate realistic steps, priorities, and timelines based on your goal. Adjust, refine, or regenerate tasks until the plan feels right — without starting from scratch.',
		colors: ['#A5F3FC', '#22D3EE', '#0891B2', '#155E75'],
	},
	{
		icon: ArrowCircleUpIcon,
		category: 'Progress & Motivation',
		title: 'Progress that actually feels rewarding',
		details: 'Every completed quest earns experience, builds streaks, and contributes to long-term progress.',
		colors: ['#BBF7D0', '#4ADE80', '#16A34A', '#166534'],
	},
	{
		icon: TargetIcon,
		category: 'Focus',
		title: 'Focus on the quest that matters now',
		details: 'Clear priorities and a focused view help reduce mental clutter and prevent burnout.',
		colors: ['#FED7AA', '#FB923C', '#EA580C', '#9A3412'],
	},
	{
		icon: TrophyIcon,
		category: 'Rewards & Mastery',
		title: 'Build mastery through consistency',
		details:
			'Completing quests unlocks achievements, milestones, and mastery levels. Over time, you can see what you’ve truly invested in and where you’re growing — turning consistency into visible progress.',
		colors: ['#FDE68A', '#FACC15', '#CA8A04', '#854D0E'],
	},
];

function FeatureCard({ feature, featureIndex }: { feature: (typeof features)[number]; featureIndex: number }) {
	const ref = useRef<HTMLDivElement>(null);

	const inView = useInView(ref, {
		margin: '-40% 0px -40% 0px',
		once: false,
	});

	return (
		<div ref={ref} className="flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse">
			<div className="relative aspect-video w-full basis-1/2 overflow-hidden rounded-2xl border border-border/50 bg-muted">
				<div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
					<feature.icon weight="duotone" size={100} className="text-white/80" />
				</div>

				<motion.div className="absolute inset-0" animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
					<MeshGradient options={{ seed: featureIndex * 100, colors: feature.colors as [string, string, string, string] }} className="h-full w-full" />
				</motion.div>
			</div>

			<div className="shrink-0 basis-1/2">
				<span className="text-sm font-medium uppercase text-muted-foreground">{feature.category}</span>
				<h4 className="my-3 text-3xl tracking-[-0.02em]">{feature.title}</h4>
				<p className="text-muted-foreground">{feature.details}</p>
			</div>
		</div>
	);
}

export function FeaturesPage() {
	return (
		<div className="flex min-h-svh items-center justify-center">
			<div className="w-full max-w-(--breakpoint-lg) px-6 py-12">
				<h2 className="text-center text-3xl tracking-[-0.03em] sm:text-4xl lg:text-5xl">Features</h2>
				<p className="mx-auto mt-3 max-w-md text-center text-muted-foreground sm:text-lg">Everything you need to turn goals into clear, achievable quests.</p>

				<div className="mx-auto mt-8 space-y-20 md:mt-16">
					{features.map((feature, index) => (
						<FeatureCard key={feature.category} feature={feature} featureIndex={index} />
					))}
				</div>
			</div>
		</div>
	);
}
