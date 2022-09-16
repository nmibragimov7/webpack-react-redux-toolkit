import webpack from "webpack";

export function loaders(): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [ //лоадер для обработки файлов за исключением js файлов
        typescriptLoader
    ]
}
