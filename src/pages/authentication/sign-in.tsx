import { zodResolver } from '@hookform/resolvers/zod';
import { DiscordLogoIcon, FacebookLogoIcon, GoogleLogoIcon } from '@phosphor-icons/react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Link } from 'wouter';
import * as z from 'zod';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSeparator } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { authClient } from '@/lib/auth-client';

const authProviders = [
	{ name: 'Google', icon: GoogleLogoIcon },
	{ name: 'Discord', icon: DiscordLogoIcon },
	{ name: 'Facebook', icon: FacebookLogoIcon },
];

const formSchema = z.object({
	username: z.string().min(1, 'Please enter your username.'),
	password: z.string().min(1, 'Please enter your password.'),
});

type FormValues = z.infer<typeof formSchema>;

export function SignInPage() {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: { username: '', password: '' },
	});

	async function onSubmit(values: FormValues) {
		const { data, error } = await authClient.signIn.username(values);

		if (data) {
			toast.success('Welcome back, you have signed in successfully!');
		}

		if (error) {
			toast.error(`Failed to sign in`, { description: error.message || 'An unexpected error occurred. Please try again.' });
		}
	}

	return (
		<div className="flex min-h-svh items-start md:items-center justify-center p-6 md:p-10">
			<div className="flex w-full max-w-md flex-col gap-6">
				<div>
					<h2 className="text-xl">Sign in to your account</h2>
					<p className="text-sm text-muted-foreground">Continue with your preferred provider</p>
				</div>

				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FieldGroup>
						<Field>
							{authProviders.map((provider) => {
								const lastMethod = authClient.getLastUsedLoginMethod();

								return (
									<div key={provider.name} className="relative">
										<Button
											type="button"
											variant="outline"
											className="w-full gap-2"
											onClick={async () => await authClient.signIn.social({ provider: provider.name.toLowerCase(), callbackURL: '/' })}
										>
											<provider.icon weight="duotone" />
											Continue with {provider.name}
										</Button>

										{lastMethod === provider.name.toLowerCase() && <Badge className="absolute -top-2 -right-2">Last used</Badge>}
									</div>
								);
							})}
						</Field>

						<FieldSeparator>OR</FieldSeparator>

						{/* Username */}
						<Controller
							name="username"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>Username</FieldLabel>
									<Input {...field} id={field.name} placeholder="Enter your username" aria-invalid={fieldState.invalid} />
									{fieldState.error && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						{/* Password */}
						<Controller
							name="password"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<div className="flex items-center">
										<FieldLabel htmlFor={field.name}>Password</FieldLabel>
										<Link to="/forgot-password" className="ml-auto text-sm underline-offset-4 hover:underline">
											Forgot password?
										</Link>
									</div>

									<Input {...field} id={field.name} type="password" placeholder="Enter your password" aria-invalid={fieldState.invalid} />
									{fieldState.error && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						{/* Actions */}
						<Field>
							<Button type="submit">Continue</Button>

							<Link to="/create-account" asChild>
								<Button type="button" variant="link">
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
