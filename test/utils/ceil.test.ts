import { ceil } from '../../src/utils/ceil'

test('ceil', () => {
    expect(ceil(3.1)).toBe(4)
    expect(ceil(3.9)).toBe(4)

    expect(ceil(3.14, 1)).toBe(3.2)
    expect(ceil(3.19, 1)).toBe(3.2)

    expect(ceil(-3.1)).toBe(-3)
    expect(ceil(-3.9)).toBe(-3)

    expect(ceil(-3.14, 1)).toBe(-3.1)
    expect(ceil(-3.19, 1)).toBe(-3.1)

    expect(ceil(Infinity)).toBe(Infinity)
    expect(ceil(NaN)).toBe(NaN)
})
