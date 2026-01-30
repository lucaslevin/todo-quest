import { CheckCircleIcon, QuestionIcon } from '@phosphor-icons/react';
import { motion, type Variants } from 'motion/react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const container: Variants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const tooltipContent = {
	styles: 'Choose from a variety of styles to suit your preferences.',
	filters: 'Choose from a variety of filters to enhance your portraits.',
	credits: 'Use these credits to retouch your portraits.',
};

const YEARLY_DISCOUNT = 25;

const plans = [
	{
		name: 'Aspirant',
		price: 0,
		description: 'Get 20 AI-generated portraits with 2 unique styles and filters.',
		features: [
			{ title: '5 hours turnaround time' },
			{ title: '20 AI portraits' },
			{ title: 'Choice of 2 styles', tooltip: tooltipContent.styles },
			{ title: 'Choice of 2 filters', tooltip: tooltipContent.filters },
			{ title: '2 retouch credits', tooltip: tooltipContent.credits },
		],
		buttonText: 'Get 20 portraits in 5 hours',
	},
	{
		name: 'Challenger',
		price: 7.0,
		description: 'Get 50 AI-generated portraits with 5 unique styles and filters.',
		features: [
			{ title: '3 hours turnaround time' },
			{ title: '50 AI portraits' },
			{ title: 'Choice of 5 styles', tooltip: tooltipContent.styles },
			{ title: 'Choice of 5 filters', tooltip: tooltipContent.filters },
			{ title: '5 retouch credits', tooltip: tooltipContent.credits },
		],
		buttonText: 'Get 50 portraits in 3 hours',
		isPopular: true,
	},
	{
		name: 'Conqueror',
		price: 10.0,
		description: 'Get 100 AI-generated portraits with 10 unique styles and filters.',
		features: [
			{ title: '1-hour turnaround time' },
			{ title: '100 AI portraits' },
			{ title: 'Choice of 10 styles', tooltip: tooltipContent.styles },
			{ title: 'Choice of 10 filters', tooltip: tooltipContent.filters },
			{ title: '10 retouch credits', tooltip: tooltipContent.credits },
		],
		buttonText: 'Get 100 portraits in 1 hour',
	},
];

export function PricingPlans() {
	const [selectedBillingPeriod, setSelectedBillingPeriod] = useState('monthly');

	return (
		<section className="flex flex-col items-center justify-center px-6 py-12">
			<h2 className="text-balance text-center tracking-[-0.03em] text-3xl sm:text-4xl lg:text-5xl">Choose Your Path</h2>
			<p className="mx-auto mt-3 max-w-md text-center text-base text-muted-foreground sm:text-lg">Pick a plan and start turning goals into completed quests.</p>

			<Tabs className="mt-8" onValueChange={setSelectedBillingPeriod} value={selectedBillingPeriod}>
				<TabsList className="h-11 rounded-full">
					<TabsTrigger className="rounded-full px-4 data-[state=active]:shadow-none" value="monthly">
						Monthly
					</TabsTrigger>
					<TabsTrigger className="rounded-full px-4 data-[state=active]:shadow-none" value="yearly">
						Yearly (Save {YEARLY_DISCOUNT}%)
					</TabsTrigger>
				</TabsList>
			</Tabs>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: '-80px' }}
				className="mx-auto mt-12 grid max-w-(--breakpoint-lg) grid-cols-1 items-center gap-8 lg:grid-cols-3"
			>
				{plans.map((plan) => (
					<motion.div variants={item} key={plan.name} className={cn('relative rounded-xl border p-6', { 'border-2 border-primary py-10': plan.isPopular })}>
						{plan.isPopular && <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">Most Popular</Badge>}
						<h3 className="font-medium text-lg">{plan.name}</h3>

						<p className="mt-2 font-semibold text-4xl">
							${selectedBillingPeriod === 'monthly' ? plan.price : plan.price * ((100 - YEARLY_DISCOUNT) / 100)}
							<span className="ml-1.5 font-normal text-muted-foreground text-sm">/month</span>
						</p>

						<p className="mt-4 text-muted-foreground text-sm">{plan.description}</p>

						<Button className="mt-6 w-full" size="lg" variant={plan.isPopular ? 'default' : 'outline'}>
							{plan.buttonText}
						</Button>

						<Separator className="my-8" />

						<ul className="mt-6 space-y-3 text-sm">
							{plan.features.map((feature) => (
								<li key={feature.title} className="flex items-start gap-3 text-muted-foreground">
									<CheckCircleIcon weight="duotone" className="mt-0.5 size-5 shrink-0 text-emerald-500" />

									<span className="flex-1 leading-relaxed">{feature.title}</span>

									{feature.tooltip && (
										<Tooltip>
											<TooltipTrigger className="mt-0.5 shrink-0">
												<QuestionIcon weight="duotone" className="size-5 text-muted-foreground/70 hover:text-foreground transition-colors" />
											</TooltipTrigger>

											<TooltipContent side="top">{feature.tooltip}</TooltipContent>
										</Tooltip>
									)}
								</li>
							))}
						</ul>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
