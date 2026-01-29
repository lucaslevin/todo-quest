#!/usr/bin/env bun
import { existsSync } from 'node:fs';
import { rm } from 'node:fs/promises';
import path from 'node:path';
import plugin from 'bun-plugin-tailwind';

console.log('\n🚀 Starting build process...\n');

const outdir = path.join(process.cwd(), 'dist');

if (existsSync(outdir)) {
	console.log(`🗑️ Cleaning previous build at ${outdir}`);
	await rm(outdir, { recursive: true, force: true });
}

const start = performance.now();

const entrypoints = [...new Bun.Glob('**.html').scanSync('src')].map((file) => path.resolve('src', file)).filter((p) => !p.includes('node_modules'));

console.log(`📄 Found ${entrypoints.length} HTML ${entrypoints.length === 1 ? 'file' : 'files'} to process\n`);

const result = await Bun.build({
	entrypoints,
	outdir,
	plugins: [plugin],
	target: 'browser',
	minify: true,
	sourcemap: 'linked',
	define: {
		'process.env.NODE_ENV': JSON.stringify('production'),
	},
});

const end = performance.now();

console.table(
	result.outputs.map((output) => ({
		File: path.relative(process.cwd(), output.path),
		Type: output.kind,
		Size: `${(output.size / 1024).toFixed(2)} KB`,
	})),
);

console.log(`\n✅ Build completed in ${(end - start).toFixed(2)}ms\n`);
