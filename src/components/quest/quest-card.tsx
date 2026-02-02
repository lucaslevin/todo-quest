import { BookOpenIcon, CheckCircleIcon, DotsThreeIcon } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldLabel } from '@/components/ui/field';
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item';
import { Progress } from '@/components/ui/progress';

type QuestCardProps = {
	title: string;
	description: string;
	startedAt: Date;
	progress: number;
	onContinue: () => void;
};

export function QuestCard({ questIndex, ...props }: { questIndex: number } & QuestCardProps) {
	const isFirstQuest = questIndex === 0;

	return (
		<Card>
			<CardHeader className="border-b">
				<CardDescription className="uppercase text-xs shrink-0">
					{new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'short' }).format(props.startedAt)}
				</CardDescription>
				<CardTitle className="min-w-0 truncate">Create your first React App</CardTitle>
				<CardAction>
					<Button variant="ghost" size="icon" aria-label="Quest Actions">
						<DotsThreeIcon className="size-5" />
					</Button>
				</CardAction>
			</CardHeader>

			<CardContent className="flex flex-col gap-6">
				<p className="text-sm text-muted-foreground">Learn the fundamentals of React and ship a small but complete application.</p>

				<div className="grid grid-cols-2 gap-4">
					<Item variant="muted">
						<ItemMedia variant="icon">
							<BookOpenIcon weight="duotone" className="size-5" />
						</ItemMedia>

						<ItemContent>
							<ItemTitle className="text-xs">Chapters</ItemTitle>
							<ItemDescription>2 / 5</ItemDescription>
						</ItemContent>
					</Item>

					<Item variant="muted">
						<ItemMedia variant="icon">
							<CheckCircleIcon weight="duotone" className="size-5" />
						</ItemMedia>

						<ItemContent>
							<ItemTitle>Objectives</ItemTitle>
							<ItemDescription>8 / 12</ItemDescription>
						</ItemContent>
					</Item>
				</div>

				<Field>
					<FieldLabel htmlFor="progress" className="flex items-center">
						<span>Progress</span>
						<span className="ml-auto">66%</span>
					</FieldLabel>

					<Progress value={66} id="progress" />
				</Field>
			</CardContent>

			<CardFooter className="gap-4">
				<Button variant={isFirstQuest ? 'default' : 'outline'} size="lg" className="flex-1">
					{isFirstQuest ? 'Resume' : 'Continue'}
				</Button>
			</CardFooter>
		</Card>
	);
}
