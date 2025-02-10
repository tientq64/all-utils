export function splitToArray(value: any): any[] {
    if (Array.isArray(value)) {
        return value
    }
    if (typeof value === 'string') {
        return [...value]
    }
    return [...String(value)]
}
