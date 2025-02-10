import { randomInt } from '../../src/utils/randomInt'

test('randomInt', () => {
    let result: number

    result = randomInt()
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(1)

    result = randomInt(21)
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(21)

    result = randomInt(17, 45)
    expect(result).toBeGreaterThanOrEqual(17)
    expect(result).toBeLessThanOrEqual(45)
})
