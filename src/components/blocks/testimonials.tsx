import { notionistsNeutral } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import { TwitterLogoIcon } from '@phosphor-icons/react';
import { Link } from 'wouter';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Marquee } from '@/components/ui/marquee';

const testimonials = [
	{
		id: 1,
		displayName: 'Sir Aldric',
		username: 'stillOverdue',
		organization: 'Some Castle',
		quote: 'Finished one quest. Felt suspiciously good. Did three more. Productivity achieved.',
	},
	{
		id: 2,
		displayName: 'Elowen',
		username: 'manyTabsMage',
		organization: 'The Tower',
		quote: 'Turns out my brain will do tasks if you call them quests and show a progress bar.',
	},
	{
		id: 3,
		displayName: 'Grunk',
		username: 'grunkDo',
		organization: 'Outside',
		quote: 'Grunk complete quest. Number go up. System good.',
	},
	{
		id: 4,
		displayName: 'Nyx',
		username: 'shadowstepAfk',
		organization: 'Somewhere Dark',
		quote: 'I do not like productivity apps. This one is annoying in the right way.',
	},
	{
		id: 5,
		displayName: 'Brother Cal',
		username: 'dailyBuffs',
		organization: 'The Temple',
		quote: 'Daily quests work. Missed a day. Felt bad. Came back. System functioning.',
	},
	{
		id: 6,
		displayName: '???',
		username: 'levelOneNoob',
		organization: 'No Guild Yet',
		quote: 'Still level 1. But I log in. Progress is progress.',
	},
	{
		id: 7,
		displayName: 'Thorn',
		username: 'minMaxOrDie',
		organization: 'Spreadsheet Guild',
		quote: 'XP rewards are balanced. No obvious exploits yet. Impressive.',
	},
	{
		id: 8,
		displayName: 'Luna',
		username: 'sideQuestEnergy',
		organization: 'Everywhere',
		quote: 'Opened the app for one task. Accepted five side quests. Mood improved.',
	},
	{
		id: 9,
		displayName: 'Borin',
		username: 'forgeThenFocus',
		organization: 'The Workshop',
		quote: 'Clear quests. Clear rewards. Brain stays on task. Simple.',
	},
	{
		id: 10,
		displayName: 'Mira',
		username: 'loggedInToday',
		organization: 'Home Base',
		quote: 'Makes finishing small things feel like winning. Which is rude but effective.',
	},
];

export function Testimonials() {
	return (
		<div className="flex items-center justify-center py-12">
			<div className="h-full w-full">
				<h2 className="px-6 text-center font-epic text-5xl tracking-[-0.02em]">From the Tavern</h2>
				<p className="mt-3 text-center text-muted-foreground text-xl">Unverified reviews from adventurers like you</p>
				<div className="relative mt-14">
					<div className="absolute inset-y-0 left-0 z-10 w-[15%] bg-linear-to-r from-background to-transparent" />
					<div className="absolute inset-y-0 right-0 z-10 w-[15%] bg-linear-to-l from-background to-transparent" />
					<Marquee className="[--duration:100s]">
						<TestimonialList />
					</Marquee>
					<Marquee className="mt-0 [--duration:100s]" reverse>
						<TestimonialList />
					</Marquee>
				</div>
			</div>
		</div>
	);
}

const TestimonialList = () =>
	testimonials.map((testimonial) => {
		const avatar = createAvatar(notionistsNeutral, { seed: testimonial.displayName }).toDataUri();

		return (
			<div key={testimonial.id} className="min-w-96 max-w-sm rounded-xl bg-accent p-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Avatar className="size-10">
							<AvatarImage src={avatar} />
						</Avatar>

						<div>
							<p className="font-semibold">{testimonial.displayName}</p>
							<p className="text-sm text-muted-foreground">@{testimonial.username}</p>
						</div>
					</div>

					<Button asChild size="icon" variant="ghost">
						<Link href="#" target="_blank">
							<TwitterLogoIcon weight="duotone" className="size-5" />
						</Link>
					</Button>
				</div>

				<p className="mt-5 text-[16px]">{testimonial.quote}</p>
			</div>
		);
	});

export default Testimonials;
