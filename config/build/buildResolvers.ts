import { BuildOptions } from './types/config';
import { ResolveOptions } from 'webpack';

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [paths.src, 'node_modules'],
	};
}
