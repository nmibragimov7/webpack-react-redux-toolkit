type Mods = Record<string, boolean | string>

// пример для типа Record
const obj: Mods = {
    "m-0": true
}

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ].join(" ")
}
