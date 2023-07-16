import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BuildOptions } from './types/config';

const miniCssExtractOptions = {
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].chunk.css',
};

// eslint-disable-next-line max-len
export function buildPlugins({ paths, isDevelopment, basenameString }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.htmlTemplate,
            minify: true,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin(miniCssExtractOptions),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDevelopment),
            __BASENAME__: JSON.stringify(basenameString),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: '', globOptions: { ignore: ['**/index.html'] } },
            ],
        }),
    ];
}
