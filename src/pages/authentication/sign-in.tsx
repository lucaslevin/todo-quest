import { DiscordLogoIcon, FacebookLogoIcon, GoogleLogoIcon } from '@phosphor-icons/react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

const authProviders = [
	{ name: 'Google', icon: GoogleLogoIcon },
	{ name: 'Discord', icon: DiscordLogoIcon },
	{ name: 'Facebook', icon: FacebookLogoIcon },
];

export function SignInPage() {
	return (
		<div className="flex min-h-svh items-start md:items-center justify-center p-6 md:p-10">
			<div className="flex w-full max-w-md flex-col gap-6">
				<div>
					<h2 className="text-xl">Sign in to your account</h2>
					<p className="text-sm text-muted-foreground">Continue with your preferred provider</p>
				</div>

				<form>
					<FieldGroup>
						<Field>
							{authProviders.map((provider) => (
								<div key={provider.name} className="relative">
									<Button type="button" variant="outline" className="w-full">
										<provider.icon weight="duotone" />
										Continue with {provider.name}
									</Button>

									<Badge className="absolute -top-1.5 -right-1.5">Last used</Badge>
								</div>
							))}
						</Field>

						<FieldSeparator>OR</FieldSeparator>

						<Field>
							<FieldLabel htmlFor="username">Username</FieldLabel>
							<Input id="username" placeholder="Enter your username" />
						</Field>

						<Field>
							<div className="flex items-center">
								<FieldLabel htmlFor="password">Password</FieldLabel>
								<Link href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
									Forgot password?
								</Link>
							</div>
							<Input id="password" type="password" placeholder="Enter your password" />
						</Field>

						<Field>
							<Button type="submit">Continue</Button>

							<Link to="/create-account" asChild>
								<Button type="button" variant="secondary">
									Create an account
								</Button>
							</Link>
						</Field>

						<FieldDescription className="px-6 text-center">
							By clicking continue, you agree to our <Link to="/">Terms of Service</Link> and <Link to="/">Privacy Policy</Link>.
						</FieldDescription>
					</FieldGroup>
				</form>
			</div>
		</div>
	);
}
