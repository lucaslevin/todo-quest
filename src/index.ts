import { onError } from '@orpc/server';
import { RPCHandler } from '@orpc/server/fetch';
import { serve } from 'bun';
import index from '@/index.html';
import { auth } from '@/lib/auth';

export const router = {};

const handler = new RPCHandler(router, { interceptors: [onError(console.log)] });

const server = serve({
	routes: {
		'/*': index, // Serve index.html for all unmatched routes.
		'/health': () => new Response('OK'),
		'/api/auth/*': auth.handler,
		'/rpc/*': async (req) => {
			const { response } = await handler.handle(req, { prefix: '/rpc', context: { headers: req.headers } });
			return response ?? new Response('Not found', { status: 404 });
		},
	},
	development: process.env.NODE_ENV !== 'production' && {
		hmr: true, // Enable browser hot reloading in development
		console: true, // Echo console logs from the browser to the server
	},
});

console.log(`🚀 Server running at ${server.url}`);
