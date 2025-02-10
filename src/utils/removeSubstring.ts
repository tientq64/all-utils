export function removeSubstring(str: string, searchValue: string | RegExp): string {
    return str.replace(searchValue, '')
}
