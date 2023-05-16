type Modes = Record<string, boolean | string>

export function classNames(cls: string, mode: Modes = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mode)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}