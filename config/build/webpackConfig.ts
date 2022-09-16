import {Options} from "./types/config";
import webpack from "webpack";

import {plugins} from "./plugins";
import {loaders} from "./loaders";
import {resolvers} from "./resolvers";

export function webpackConfig(options: Options): webpack.Configuration {
    const {paths, mode} = options;

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
            rules: loaders(),
        },
        resolve: resolvers(),
    }
}
