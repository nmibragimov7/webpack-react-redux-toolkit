import webpack from 'webpack';

import { Options } from './types/config';
import cssLoader from './loaders/cssLoader';
import svgLoader from './loaders/svgLoader';

export function loaders({ isDev }: Options): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [ // лоадер для обработки файлов за исключением js файлов
        fileLoader,
        svgLoader(),
        babelLoader,
        typescriptLoader,
        cssLoader(isDev),
    ];
}
