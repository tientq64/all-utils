export function floor(num: number, precision = 0): number {
    const factor: number = 10 ** precision
    return Math.floor(num * factor) / factor
}
