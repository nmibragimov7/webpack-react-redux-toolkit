export type Mode = 'production' | 'development'

export interface Path {
    entry: string
    build: string
    html: string
}



export interface Options {
    mode: Mode
    paths: Path
    isDev: boolean
}
