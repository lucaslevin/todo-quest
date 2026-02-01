import { relations } from 'drizzle-orm';
import { boolean, index, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull().unique(),
	emailVerified: boolean('emailVerified').default(false).notNull(),
	image: text('image'),
	createdAt: timestamp('createdAt').notNull(),
	updatedAt: timestamp('updatedAt')
		.$onUpdate(() => new Date())
		.notNull(),
	role: text('role'),
	banned: boolean('banned').default(false),
	banReason: text('banReason'),
	banExpires: timestamp('banExpires'),
	lastLoginMethod: text('lastLoginMethod'),
	stripeCustomerId: text('stripeCustomerId'),
	twoFactorEnabled: boolean('twoFactorEnabled').default(false),
	username: text('username').unique(),
	displayUsername: text('displayUsername'),
	description: text('description'),
});

export const sessions = pgTable(
	'sessions',
	{
		id: text('id').primaryKey(),
		expiresAt: timestamp('expiresAt').notNull(),
		token: text('token').notNull().unique(),
		createdAt: timestamp('createdAt').notNull(),
		updatedAt: timestamp('updatedAt')
			.$onUpdate(() => new Date())
			.notNull(),
		ipAddress: text('ipAddress'),
		userAgent: text('userAgent'),
		userId: text('userId')
			.notNull()
			.references(() => users.id, { onDelete: 'cascade' }),
		impersonatedBy: text('impersonatedBy'),
	},
	(table) => [index('sessions_userId_idx').on(table.userId)],
);

export const accounts = pgTable(
	'accounts',
	{
		id: text('id').primaryKey(),
		accountId: text('accountId').notNull(),
		providerId: text('providerId').notNull(),
		userId: text('userId')
			.notNull()
			.references(() => users.id, { onDelete: 'cascade' }),
		accessToken: text('accessToken'),
		refreshToken: text('refreshToken'),
		idToken: text('idToken'),
		accessTokenExpiresAt: timestamp('accessTokenExpiresAt'),
		refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'),
		scope: text('scope'),
		password: text('password'),
		createdAt: timestamp('createdAt').notNull(),
		updatedAt: timestamp('updatedAt')
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [index('accounts_userId_idx').on(table.userId)],
);

export const verifications = pgTable(
	'verifications',
	{
		id: text('id').primaryKey(),
		identifier: text('identifier').notNull(),
		value: text('value').notNull(),
		expiresAt: timestamp('expiresAt').notNull(),
		createdAt: timestamp('createdAt').notNull(),
		updatedAt: timestamp('updatedAt')
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [index('verifications_identifier_idx').on(table.identifier)],
);

export const twoFactors = pgTable(
	'twoFactors',
	{
		id: text('id').primaryKey(),
		secret: text('secret').notNull(),
		backupCodes: text('backupCodes').notNull(),
		userId: text('userId')
			.notNull()
			.references(() => users.id, { onDelete: 'cascade' }),
	},
	(table) => [index('twoFactors_secret_idx').on(table.secret), index('twoFactors_userId_idx').on(table.userId)],
);

export const usersRelations = relations(users, ({ many }) => ({
	sessions: many(sessions),
	accounts: many(accounts),
	twoFactors: many(twoFactors),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
	users: one(users, {
		fields: [sessions.userId],
		references: [users.id],
	}),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
	users: one(users, {
		fields: [accounts.userId],
		references: [users.id],
	}),
}));

export const twoFactorsRelations = relations(twoFactors, ({ one }) => ({
	users: one(users, {
		fields: [twoFactors.userId],
		references: [users.id],
	}),
}));
