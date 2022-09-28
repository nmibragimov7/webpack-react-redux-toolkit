import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { Options } from './types/config';

export function server(options: Options): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
