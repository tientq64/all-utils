export function uniqueArray<T>(arr: T[]): T[] {
    const set = new Set<T>(arr)
    return [...set]
}
