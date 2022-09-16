import webpack from 'webpack';
import path from "path";

import {webpackConfig} from "./config/build/webpackConfig";
import {Path} from "./config/build/types/config";

const paths: Path = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = webpackConfig({
    mode: 'development',
    paths,
    isDev
})

export default config;
