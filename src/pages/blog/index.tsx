import { motion, type Variants } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', delay: i * 0.06 } }),
};

export function BlogPage() {
	return (
		<div className="flex min-h-svh items-center justify-center">
			<div className="w-full max-w-(--breakpoint-xl) px-6 py-12">
				<h2 className="text-pretty text-center tracking-[-0.03em] text-3xl sm:text-4xl lg:text-5xl">The Quest Log</h2>
				<p className="mx-auto mt-3 max-w-md text-center text-base text-muted-foreground sm:text-lg">Guides, and insights to help you complete your real-world quests.</p>

				<div className="flex items-end justify-between mt-8">
					<h2 className="text-3xl tracking-tight">Posts</h2>
					<Select defaultValue="recommended">
						<SelectTrigger className="w-45">
							<SelectValue />
						</SelectTrigger>

						<SelectContent>
							<SelectItem value="recommended">Recommended</SelectItem>
							<SelectItem value="latest">Latest</SelectItem>
							<SelectItem value="popular">Popular</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
					{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
						<motion.div key={i} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
							<Card className="gap-3 py-0 shadow-none">
								<CardHeader className="p-2 pb-0">
									<div className="aspect-video w-full rounded-lg bg-muted" />
								</CardHeader>

								<CardContent className="px-5 pt-0 pb-5">
									<Badge variant="secondary">Technology</Badge>

									<h3 className="mt-4 font-semibold text-[1.4rem] tracking-[-0.015em]">What is the future of web development?</h3>

									<div className="mt-6 flex items-center justify-between">
										<div className="flex items-center gap-2">
											<div className="size-8 rounded-full bg-muted" />
											<span className="font-medium text-muted-foreground">John Doe</span>
										</div>

										<span className="text-muted-foreground text-sm">Nov 30, 2024</span>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
