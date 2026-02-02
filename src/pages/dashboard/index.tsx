import { BarbellIcon, BrainIcon, BriefcaseIcon, CalendarCheckIcon, CodeIcon, HeartIcon, type Icon, LightningIcon, MagicWandIcon, TargetIcon } from '@phosphor-icons/react';
import { useMemo } from 'react';
import { QuestCard } from '@/components/quest/quest-card';
import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

type QuestSuggestion = {
	id: number;
	icon: Icon;
	title: string;
	description: string;
	tooltip: string;
};

const questSuggestions: QuestSuggestion[] = [
	{
		id: 1,
		icon: CodeIcon,
		title: 'Learn a new skill',
		description: 'Turn a skill you want to learn into a structured quest.',
		tooltip: 'Programming, design, writing, or languages.',
	},
	{
		id: 2,
		icon: BarbellIcon,
		title: 'Improve your fitness',
		description: 'Create a quest around movement, strength, or consistency.',
		tooltip: 'Workouts, running, mobility, or daily activity.',
	},
	{
		id: 3,
		icon: TargetIcon,
		title: 'Improve focus & productivity',
		description: 'Work on staying focused and finishing important tasks.',
		tooltip: 'Deep work, task prioritization, reducing distractions.',
	},
	{
		id: 4,
		icon: CalendarCheckIcon,
		title: 'Plan & organize',
		description: 'Bring clarity to tasks, projects, or upcoming weeks.',
		tooltip: 'Weekly planning, project breakdowns, cleanup.',
	},
	{
		id: 5,
		icon: BrainIcon,
		title: 'Build a better habit',
		description: 'Turn consistency into a repeatable daily quest.',
		tooltip: 'Sleep, reading, journaling, or health habits.',
	},
	{
		id: 6,
		icon: BriefcaseIcon,
		title: 'Advance your career',
		description: 'Create a quest that moves your professional goals forward.',
		tooltip: 'Interview prep, skill development, leadership.',
	},
	{
		id: 7,
		icon: LightningIcon,
		title: 'Overcome procrastination',
		description: 'Break a stuck task into small, doable objectives.',
		tooltip: 'Avoided tasks, fear-based delays, momentum.',
	},
	{
		id: 8,
		icon: HeartIcon,
		title: 'Personal well-being',
		description: 'Focus on energy, balance, and mental clarity.',
		tooltip: 'Stress management, mindfulness, emotional health.',
	},
	{
		id: 9,
		icon: TargetIcon,
		title: 'Achieve a meaningful goal',
		description: 'Turn a big goal into clear, actionable steps.',
		tooltip: 'Side projects, fitness milestones, life goals.',
	},
	{
		id: 10,
		icon: BriefcaseIcon,
		title: 'Start a side project',
		description: 'Explore an idea and define the first real action.',
		tooltip: 'Apps, content, products, experiments.',
	},
];

const ICON_COLORS = ['text-blue-500', 'text-emerald-500', 'text-violet-500', 'text-amber-500', 'text-rose-500', 'text-cyan-500'];

function pickRandom<T>(items: T[], count: number): T[] {
	const shuffled = [...items].sort(() => Math.random() - 0.5);
	return shuffled.slice(0, count);
}

export function HomePage() {
	const suggestedQuests = useMemo(() => pickRandom(questSuggestions, 5), []);

	return (
		<div className="flex min-h-svh justify-center">
			<main className="w-full max-w-(--breakpoint-xl) px-6 py-12 space-y-18">
				<section className="space-y-6">
					<header>
						<h1 className="text-3xl tracking-tight">Ready to embark on a new journey?</h1>
						<p className="text-muted-foreground">Pick up a quest or continue where you left off.</p>
					</header>

					<div className="flex flex-wrap gap-4">
						{suggestedQuests.map((quest, index) => (
							<Tooltip key={quest.id}>
								<TooltipTrigger asChild>
									<Button variant="outline" size="sm">
										<quest.icon className={`mr-1 ${ICON_COLORS[index % ICON_COLORS.length]}`} />
										{quest.title}
									</Button>
								</TooltipTrigger>

								<TooltipContent>{quest.tooltip}</TooltipContent>
							</Tooltip>
						))}
					</div>

					<InputGroup>
						<InputGroupInput placeholder="What do you want to achieve today?" />
						<InputGroupAddon align="inline-end">
							<InputGroupButton variant="outline" size="icon-xs" aria-label="Generate quest">
								<MagicWandIcon />
							</InputGroupButton>
						</InputGroupAddon>
					</InputGroup>
				</section>

				<Separator />

				<section className="space-y-6">
					<h2 className="text-2xl tracking-tight">Recent Quests</h2>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 [&>*:first-child]:md:col-span-2">
						{Array.from({ length: 11 }).map((quest, questIndex) => (
							<QuestCard key={questIndex.toString()} questIndex={questIndex} />
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
