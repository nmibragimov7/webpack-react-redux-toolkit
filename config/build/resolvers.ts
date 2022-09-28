import webpack from 'webpack';
import { Options } from './types/config';

export function resolvers(options: Options): webpack.ResolveOptions {
    return { // import без расширения
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
