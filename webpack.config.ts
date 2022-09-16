import webpack from 'webpack';
import path from "path";

import {webpackConfig} from "./config/build/webpackConfig";
import {IEnv, Path} from "./config/build/types/config";

export default (env: IEnv) => {
    const paths: Path = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    const PORT = env.port || 3000;

    const config: webpack.Configuration = webpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    return config;
}
