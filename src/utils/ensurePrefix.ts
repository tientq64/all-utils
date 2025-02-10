export function ensurePrefix(str: string, prefix: string): string {
    if (str.startsWith(prefix)) {
        return str
    }
    return prefix + str
}
