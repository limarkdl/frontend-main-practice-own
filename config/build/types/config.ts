export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    build: string;
    htmlTemplate: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDevelopment: boolean;
    port: number;

}
export interface BuildEnv {
    mode: BuildMode;
    port: number;
}
