import { stripe } from '@better-auth/stripe';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { admin, haveIBeenPwned, lastLoginMethod, oAuthProxy, openAPI, twoFactor, username } from 'better-auth/plugins';
import { nanoid } from 'nanoid';
import Stripe from 'stripe';
import { db } from '@/db';
import * as schema from '@/db/schema';

const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2026-01-28.clover' });

export const auth = betterAuth({
	advanced: { database: { generateId: () => nanoid() } },
	appName: 'Todo Quest',
	database: drizzleAdapter(db, { provider: 'pg', camelCase: true, schema, usePlural: true }),
	emailAndPassword: { enabled: true },
	experimental: { joins: true },
	plugins: [
		admin(),
		haveIBeenPwned(),
		lastLoginMethod({ storeInDatabase: true }),
		oAuthProxy(),
		openAPI(),
		stripe({
			stripeClient,
			stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET as string,
			createCustomerOnSignUp: true,
		}),
		twoFactor(),
		username(),
	],
	socialProviders: {
		discord: {
			clientId: process.env.DISCORD_CLIENT_ID as string,
			clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
		},
		facebook: {
			clientId: process.env.FACEBOOK_CLIENT_ID as string,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
		},
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	telemetry: { enabled: false },
	user: { additionalFields: { description: { type: 'string', required: false } } },
});
