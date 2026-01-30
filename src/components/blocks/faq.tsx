import { PlusIcon } from '@phosphor-icons/react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const faq = [
	{
		question: 'What is Todo Quest?',
		answer: 'Todo Quest turns your goals into quests. Each quest unlocks a chapter of tasks, and completing them earns you XP and levels.',
	},
	{
		question: 'Is it open source?',
		answer: 'Yes. Todo Quest is open source, and the code is available on GitHub for anyone to explore, learn from, or contribute to.',
	},
	{
		question: 'How does the AI help?',
		answer: 'When you create a quest, AI breaks it down into clear, manageable objectives so you can start immediately.',
	},
	{
		question: 'Is this just another to-do list?',
		answer: 'No. Todo Quest focuses on momentum and progression, not endless lists. You always know what to do next.',
	},
	{
		question: 'What happens when I complete quests?',
		answer: 'You earn XP, level up, and see your progress reflected across your quests and leaderboards.',
	},
	{
		question: 'Do I need to use the leaderboard?',
		answer: 'No. Leaderboards are optional. Compete with others, or treat it as a personal progression system.',
	},
];

export function FAQ() {
	return (
		<section className="flex items-center justify-center px-6 py-12">
			<div className="w-full max-w-3xl text-center">
				<h2 className="font-medium text-4xl leading-[1.15]! tracking-[-0.03em]">Adventurer’s Handbook</h2>
				<p className="mt-2 text-muted-foreground text-xl">Everything you need before accepting your first quest.</p>

				<Accordion className="mt-8 space-y-4 sm:mt-10" collapsible defaultValue="question-0" type="single">
					{faq.map(({ question, answer }, index) => (
						<AccordionItem className="rounded-xl border-none bg-accent text-start px-4 py-1" key={question} value={`question-${index}`}>
							<AccordionPrimitive.Trigger
								className={cn(
									'flex w-full items-center justify-between gap-4 py-4',
									'font-medium tracking-tight text-start',
									'transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
								)}
							>
								<span className="flex-1 leading-none">{question}</span>

								<PlusIcon className="size-5 shrink-0 self-center text-muted-foreground transition-transform duration-200" />
							</AccordionPrimitive.Trigger>

							<AccordionContent className="text-base text-muted-foreground h-auto">{answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
