import { splitToArray } from './splitToArray'

export function isAnagram(valueA: string, valueB: string): boolean {
    const arrA: any[] = splitToArray(valueA)
    const arrB: any[] = [...splitToArray(valueB)]

    if (arrA.length !== arrB.length) {
        return false
    }

    for (const itemA of arrA) {
        const index: number = arrB.indexOf(itemA)
        if (index === -1) return false

        arrB.splice(index, 1)
    }
    return true
}
