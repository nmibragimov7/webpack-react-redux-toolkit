import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import {Options} from "./types/config";

export function loaders({isDev}: Options): webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]"
                    }
                }
            },
            "sass-loader",
        ],
    }
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }


    return [ //лоадер для обработки файлов за исключением js файлов
        typescriptLoader,
        cssLoader
    ]
}
