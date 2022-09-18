import {Options} from "./types/config";
import webpack from "webpack";

import {plugins} from "./plugins";
import {loaders} from "./loaders";
import {resolvers} from "./resolvers";
import {server} from "./server";

export function webpackConfig(options: Options): webpack.Configuration {
    const {paths, mode, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: plugins(options),
        module: {
            rules: loaders(options),
        },
        resolve: resolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? server(options) : undefined
    }
}
