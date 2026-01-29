import { PlusIcon } from '@phosphor-icons/react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const faq = [
	{
		question: 'What is your return policy?',
		answer: 'You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.',
	},
	{
		question: 'How do I track my order?',
		answer: 'Track your order using the link provided in your confirmation email, or log into your account to view tracking details.',
	},
	{
		question: 'Do you ship internationally?',
		answer: 'Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.',
	},
	{
		question: 'What payment methods do you accept?',
		answer: 'We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.',
	},
	{
		question: 'What if I receive a damaged item?',
		answer: 'Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.',
	},
];

export function FAQ() {
	return (
		<div className="flex items-center justify-center px-6 py-12">
			<div className="w-full max-w-2xl text-center">
				<h2 className="font-medium text-4xl leading-[1.15]! tracking-[-0.03em]">Adventurer’s Handbook</h2>
				<p className="mt-2 text-muted-foreground text-xl">Everything you need before accepting your first quest.</p>

				<Accordion className="mt-8 space-y-4 sm:mt-10" collapsible defaultValue="question-0" type="single">
					{faq.map(({ question, answer }, index) => (
						<AccordionItem className="rounded-xl border-none bg-accent text-start px-4 py-1" key={question} value={`question-${index}`}>
							<AccordionPrimitive.Header className="flex">
								<AccordionPrimitive.Trigger
									className={cn(
										'flex flex-1 items-center justify-between pt-4 pb-3 font-medium tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
										'text-start text-lg',
									)}
								>
									{question}
									<PlusIcon className="size-5 shrink-0 text-muted-foreground transition-transform duration-200" />
								</AccordionPrimitive.Trigger>
							</AccordionPrimitive.Header>
							<AccordionContent className="text-base text-muted-foreground h-auto ">{answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
}
