import { isPrime } from '../../src/utils/isPrime'

test('isPrime', () => {
    expect(isPrime(2)).toBe(true)
    expect(isPrime(7)).toBe(true)

    expect(isPrime(-2)).toBe(false)
    expect(isPrime(0)).toBe(false)
    expect(isPrime(7.5)).toBe(false)
    expect(isPrime(15)).toBe(false)
})
