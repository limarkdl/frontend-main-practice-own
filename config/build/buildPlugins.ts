import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

const miniCssExtractOptions = {
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].chunk.css',
};

// eslint-disable-next-line max-len
export function buildPlugins({ paths, isDevelopment }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.htmlTemplate,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin(miniCssExtractOptions),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDevelopment),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ];
}
