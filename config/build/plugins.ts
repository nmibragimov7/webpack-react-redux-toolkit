import HTMLWebpackPlugin from "html-webpack-plugin"

import webpack from "webpack";
import {Options} from "./types/config";

export function plugins({paths}: Options): webpack.WebpackPluginInstance[] {

    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]
}
