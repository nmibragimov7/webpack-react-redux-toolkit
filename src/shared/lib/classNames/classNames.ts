type Mods = Record<string, boolean | string>

// пример для типа Record
const obj: Mods = {
    'm-0': true,
};

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className, _]) => className),
    ].join(' ');
}
