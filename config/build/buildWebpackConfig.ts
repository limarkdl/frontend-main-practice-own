import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {
        paths, mode, isDevelopment,
    } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,

        },

        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devtool: isDevelopment ? 'inline-source-map' : undefined,
        devServer: isDevelopment ? buildDevServer(options) : undefined,
        performance: {
            hints: false,
            maxAssetSize: 500000,
            maxEntrypointSize: 500000,
        },
    };
}
