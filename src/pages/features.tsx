import { MeshGradient } from '@mesh-gradient/react';
import { ArrowCircleUpIcon, RobotIcon, ScrollIcon, TargetIcon } from '@phosphor-icons/react';

const features = [
	{
		icon: ScrollIcon,
		category: 'Planning',
		title: 'Turn goals into clear quests',
		details:
			'Big goals often fail because they feel vague or overwhelming. Todo Quest helps you break them down into structured, actionable quests with clear outcomes, so you always know what to do next.',
		tutorialLink: '#',
	},
	{
		icon: RobotIcon,
		category: 'AI Assistance',
		title: 'Smart task breakdown with AI',
		details:
			'Use AI to instantly generate realistic steps, priorities, and timelines based on your goal. Adjust, refine, or regenerate tasks until the plan feels right — without starting from scratch.',
		tutorialLink: '#',
	},
	{
		icon: ArrowCircleUpIcon,
		category: 'Progress & Motivation',
		title: 'Level up as you make progress',
		details:
			'Every completed quest earns experience, builds streaks, and contributes to long-term progress. Visual feedback turns consistency into motivation and helps you stay committed over time.',
		tutorialLink: '#',
	},
	{
		icon: TargetIcon,
		category: 'Focus',
		title: 'Stay on track, one quest at a time',
		details:
			'Instead of juggling endless to-dos, Todo Quest keeps your attention on what matters right now. Clear priorities and a focused view help reduce mental clutter and prevent burnout.',
		tutorialLink: '#',
	},
];

export function FeaturesPage() {
	return (
		<div className="flex min-h-svh items-center justify-center">
			<div className="w-full max-w-(--breakpoint-xl) px-6 py-12">
				<h2 className="text-pretty text-center tracking-[-0.03em] text-3xl sm:text-4xl lg:text-5xl">Features</h2>
				<p className="mx-auto mt-3 max-w-md text-center text-base text-muted-foreground sm:text-lg">Everything you need to turn goals into clear, achievable quests.</p>

				<div className="mx-auto mt-8 w-full space-y-20 md:mt-16">
					{features.map((feature, featureIndex) => (
						<div className="flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse" key={feature.category}>
							<div className="relative aspect-video w-full basis-1/2 overflow-hidden rounded-2xl border border-border/50 bg-muted">
								<div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
									<feature.icon weight="duotone" size={150} className="text-white/80 drop-shadow-[0_0_12px_hsl(var(--background)/0.35)]" />
								</div>

								<MeshGradient options={{ seed: featureIndex * 0.2 }} className="h-full w-full" />
							</div>

							<div className="shrink-0 basis-1/2">
								<span className="font-medium text-muted-foreground text-sm uppercase">{feature.category}</span>
								<h4 className="my-3 font-semibold text-3xl tracking-[-0.02em]">{feature.title}</h4>
								<p className="text-muted-foreground">{feature.details}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
