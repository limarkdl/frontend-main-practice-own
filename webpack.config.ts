import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";


export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDevelopment = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDevelopment,
        port: PORT,
    });
}