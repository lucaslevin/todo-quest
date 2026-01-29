import { DribbbleLogoIcon, GithubLogoIcon, HeartIcon, SwordIcon, TwitchLogoIcon, TwitterLogoIcon } from '@phosphor-icons/react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';

const footerLinks = [
	{ title: 'Home', href: '/' },
	{ title: 'Features', href: '/features' },
	{ title: 'Pricing', href: '/pricing' },
	{ title: 'Roadmap', href: '/roadmap' },
	{ title: 'Help', href: '/help' },
	{ title: 'Privacy', href: '/privacy' },
];

export function Footer() {
	return (
		<footer>
			<div className="mx-auto max-w-(--breakpoint-xl)">
				<div className="flex flex-col items-center justify-start py-12">
					<p className="flex items-center gap-2 ">
						<SwordIcon weight="duotone" className="inline size-6" /> Battle-tested and developed in Denmark
					</p>

					<ul className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm">
						{footerLinks.map(({ title, href }) => (
							<li key={title}>
								<Link className="text-muted-foreground hover:text-foreground" href={href}>
									{title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<Separator />

				<div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
					{/* Copyright */}
					<span className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Todo Quest. All rights reserved.</span>

					<div className="flex items-center gap-5 text-muted-foreground">
						<Link href="#" target="_blank">
							<TwitterLogoIcon className="h-5 w-5" />
						</Link>
						<Link href="#" target="_blank">
							<DribbbleLogoIcon className="h-5 w-5" />
						</Link>
						<Link href="#" target="_blank">
							<TwitchLogoIcon className="h-5 w-5" />
						</Link>
						<Link href="#" target="_blank">
							<GithubLogoIcon className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
