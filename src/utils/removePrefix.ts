export function removePrefix(str: string, prefix: string): string {
    if (str.startsWith(prefix)) {
        return str.replace(prefix, '')
    }
    return str
}
