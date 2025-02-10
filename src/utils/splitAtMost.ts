export function splitAtMost(
    str: string,
    separator: string | RegExp,
    maxCuts: number = Infinity,
    limit: number = Infinity
): string[] {
    const result: string[] = []
    if (separator === '') {
        const parts: string[] = str.split('')
        result.push(...parts.slice(0, maxCuts))
        const rest: string = parts.slice(maxCuts).join('')
        result.push(rest)
    } else {
        let cutCount: number = 0
        let rest: string = str
        while (cutCount < maxCuts) {
            const matches: RegExpMatchArray | null = rest.match(separator)
            if (matches === null) break
            if (matches.index === undefined) break
            const part: string = rest.slice(0, matches.index)
            result.push(part)
            const end: number = matches.index + matches[0].length
            rest = rest.slice(end)
            cutCount++
        }
        result.push(rest)
    }
    if (result.at(-1) === '') {
        result.pop()
    }
    return result.slice(0, limit)
}
