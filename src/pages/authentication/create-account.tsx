import { zodResolver } from '@hookform/resolvers/zod';
import { DiscordLogoIcon, FacebookLogoIcon, GoogleLogoIcon } from '@phosphor-icons/react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Link } from 'wouter';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSeparator } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { authClient } from '@/lib/auth-client';

const authProviders = [
	{ name: 'Google', icon: GoogleLogoIcon },
	{ name: 'Discord', icon: DiscordLogoIcon },
	{ name: 'Facebook', icon: FacebookLogoIcon },
];

const formSchema = z
	.object({
		name: z.string().min(1, 'Name is required'),
		email: z.email('Invalid email address'),
		username: z.string().min(3, 'Username must be at least 3 characters long'),
		password: z.string().min(8, 'Password must be at least 8 characters long'),
		confirmPassword: z.string().min(8, 'Please confirm your password'),
	})
	.refine((data) => data.password === data.confirmPassword, { message: 'Passwords do not match' });

type FormValues = z.infer<typeof formSchema>;

export function CreateAccountPage() {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: { name: '', email: '', username: '', password: '', confirmPassword: '' },
	});

	async function onSubmit(values: FormValues) {
		const { data, error } = await authClient.signUp.email(values);

		if (data) {
			toast.success('Welcome aboard!', { description: `Ready to begin your quest, ${values.name}?` });
		}

		if (error) {
			toast.error('Failed to create account', { description: error.message || 'An unexpected error occurred. Please try again.' });
		}
	}

	return (
		<div className="flex min-h-svh items-start md:items-center justify-center p-6 md:p-10">
			<div className="flex w-full max-w-md flex-col gap-6">
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FieldGroup>
						<div>
							<h1 className="text-2xl">Begin your journey</h1>
							<p className="text-muted-foreground text-sm text-balance">Create an account to start your first quest.</p>
						</div>

						<Controller
							name="name"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>Name</FieldLabel>
									<Input {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="What should we call you?" autoComplete="off" />
									<FieldDescription>Nickname, alias, or anything you like.</FieldDescription>
									{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						<Controller
							name="email"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>Email address</FieldLabel>
									<Input {...field} id={field.name} type="email" placeholder="Enter your email address" aria-invalid={fieldState.invalid} />
									{fieldState.error && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						<Controller
							name="username"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>Username</FieldLabel>
									<Input {...field} id={field.name} placeholder="Pick a unique username" aria-invalid={fieldState.invalid} />
									<FieldDescription>This is your hero—choose wisely, as it cannot be changed later.</FieldDescription>
									{fieldState.error && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						<Controller
							name="password"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>Password</FieldLabel>
									<Input {...field} id={field.name} type="password" placeholder="Create a password" aria-invalid={fieldState.invalid} />
									<FieldDescription>At least 8 characters.</FieldDescription>
									{fieldState.error && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						<Controller
							name="confirmPassword"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>Confirm password</FieldLabel>
									<Input {...field} id={field.name} type="password" placeholder="Repeat your password" aria-invalid={fieldState.invalid} />
									{fieldState.error && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>

						<Field>
							<Button type="submit">Create account</Button>

							<Link to="/sign-in" asChild>
								<Button type="submit" variant="link">
									Already have an account?
								</Button>
							</Link>
						</Field>

						<FieldSeparator>OR</FieldSeparator>

						<Field>
							<div className="flex flex-row gap-4">
								{authProviders.map((provider) => (
									<Tooltip key={provider.name}>
										<TooltipTrigger asChild>
											<Button
												type="button"
												variant="outline"
												className="flex flex-1"
												onClick={async () => await authClient.signIn.social({ provider: provider.name.toLowerCase(), callbackURL: '/' })}
											>
												<provider.icon weight="duotone" className="size-5" />
											</Button>
										</TooltipTrigger>

										<TooltipContent side="bottom">Sign up with {provider.name}</TooltipContent>
									</Tooltip>
								))}
							</div>
						</Field>

						<FieldDescription className="px-6 text-center">
							By signing up, you agree to our <Link to="/">Terms of Service</Link> and <Link to="/">Privacy Policy</Link>.
						</FieldDescription>
					</FieldGroup>
				</form>
			</div>
		</div>
	);
}
