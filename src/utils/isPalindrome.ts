import { splitToArray } from './splitToArray'

export function isPalindrome(value: string | number | any[]): boolean {
    let arr: any[] = splitToArray(value)

    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr.at(-i)) {
            return false
        }
    }
    return true
}
