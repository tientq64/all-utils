export function factorial(n: number): number {
    if (n < 0) {
        throw Error('n must be non-negative')
    }
    let result: number = 1

    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}
