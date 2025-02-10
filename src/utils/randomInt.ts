export function randomInt(): number
export function randomInt(max: number): number
export function randomInt(min: number, max: number): number

export function randomInt(min?: number, max?: number): number {
    if (max === undefined) {
        max = min ?? 1
        min = 0
    } else if (min === undefined) {
        max = 1
        min = 0
    }
    return Math.floor(min + Math.random() * (max - min + 1))
}
