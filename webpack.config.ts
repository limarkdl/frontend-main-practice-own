import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    // eslint-disable-next-line no-nested-ternary
    const basenameString = env.basenameMode === 'GithubPages'
        ? '/frontend-main-practice-own/'
        : env.basenameMode === 'Vesta'
            ? '/~ikostin/TestReactDeployment/'
            : env.basenameMode === 'Xampp' ? '/myProjects/UlbiTV/' : '';

    const isDevelopment = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDevelopment,
        port: PORT,
        basenameString,
    });
};
