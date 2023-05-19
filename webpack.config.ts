import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";



export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDevelopment = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDevelopment,
        port: PORT,
    });
    return config;
}