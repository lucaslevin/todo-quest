import { DiscordLogoIcon, FacebookLogoIcon, GoogleLogoIcon } from '@phosphor-icons/react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const authProviders = [
	{ name: 'Google', icon: GoogleLogoIcon },
	{ name: 'Discord', icon: DiscordLogoIcon },
	{ name: 'Facebook', icon: FacebookLogoIcon },
];

export function CreateAccountPage() {
	return (
		<div className="flex min-h-svh items-start md:items-center justify-center p-6 md:p-10">
			<div className="flex w-full max-w-md flex-col gap-6">
				<div className="w-full max-w-md">
					<FieldGroup>
						<div>
							<h1 className="text-2xl">Create your account</h1>
							<p className="text-muted-foreground text-sm text-balance">Fill in the form below to create your account</p>
						</div>

						<Field>
							<FieldLabel htmlFor="name">Full Name</FieldLabel>
							<Input id="name" type="text" placeholder="John Doe" required />
						</Field>
						<Field>
							<FieldLabel htmlFor="email">Email</FieldLabel>
							<Input id="email" type="email" placeholder="m@example.com" required />
							<FieldDescription>We&apos;ll use this to contact you. We will not share your email with anyone else.</FieldDescription>
						</Field>
						<Field>
							<FieldLabel htmlFor="password">Password</FieldLabel>
							<Input id="password" type="password" required />
							<FieldDescription>Must be at least 8 characters long.</FieldDescription>
						</Field>
						<Field>
							<FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
							<Input id="confirm-password" type="password" required />
							<FieldDescription>Please confirm your password.</FieldDescription>
						</Field>

						<Field>
							<Button type="submit">Create account</Button>

							<Link to="/sign-in" asChild>
								<Button type="submit" variant="secondary">
									Already have an account?
								</Button>
							</Link>
						</Field>

						<FieldSeparator>OR</FieldSeparator>

						<Field>
							<div className="flex flex-row gap-2">
								{authProviders.map((provider) => (
									<Tooltip key={provider.name}>
										<TooltipTrigger asChild>
											<Button type="button" variant="outline" className="flex flex-1">
												<provider.icon weight="duotone" className="size-5" />
											</Button>
										</TooltipTrigger>

										<TooltipContent side="bottom">Sign up with {provider.name}</TooltipContent>
									</Tooltip>
								))}
							</div>
						</Field>
					</FieldGroup>
				</div>
			</div>
		</div>
	);
}
