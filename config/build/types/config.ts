export type Mode = 'production' | 'development'

export interface Path {
    entry: string
    build: string
    html: string
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
