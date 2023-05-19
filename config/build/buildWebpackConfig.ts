import {BuildOptions} from "./types/config";
import path from "path";
import {buildLoader} from "./buildLoader";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import webpack from "webpack";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoader(),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
    }
}