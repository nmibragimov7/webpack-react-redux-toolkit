import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    // test: /\.(sc|sa|c)ss$/,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev
                        // ? '[local]'
                        ? '[path][name]__[local]--[hash:base64:5]'
                        : '[hash:base64:8]',
                },
            },
        },
        'sass-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        [
                            'postcss-preset-env',
                        ],
                    ],
                },
            },
        },
    ],
});
