import { stripeClient } from '@better-auth/stripe/client';
import { adminClient, inferAdditionalFields, lastLoginMethodClient, twoFactorClient, usernameClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';
import type { auth } from './auth';

export const authClient = createAuthClient({
	plugins: [adminClient(), inferAdditionalFields<typeof auth>(), lastLoginMethodClient(), stripeClient({ subscription: true }), twoFactorClient(), usernameClient()],
});
