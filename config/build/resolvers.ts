import webpack from "webpack";

export function resolvers(): webpack.ResolveOptions {

    return { //import без расширения
        extensions: ['.tsx', '.ts', '.js'],
    }
}
