export type Mode = 'production' | 'development'

export interface Path {
    entry: string
    dist: string
    html: string,
    src: string
}

export interface IEnv {
    mode: Mode
    port: number
}

export interface Options {
    mode: Mode
    paths: Path
    isDev: boolean
    port: number
}
