export function ceil(num: number, precision = 0): number {
    const factor: number = 10 ** precision
    return Math.ceil(num * factor) / factor
}
