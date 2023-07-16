export type BuildMode = 'development' | 'production';

export type BuildBasenameMode = '' | 'GithubPages' | 'Vesta' | 'Xampp';

export interface BuildPaths {
    entry: string;
    build: string;
    htmlTemplate: string;
    src: string;
    locales: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDevelopment: boolean;
    port: number;
    basenameString?: string;
}
export interface BuildEnv {
    basenameMode: BuildBasenameMode;
    mode: BuildMode;
    port: number;
}
