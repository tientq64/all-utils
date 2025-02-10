import { floor } from '../../src/utils/floor'

test('floor', () => {
    expect(floor(3.1)).toBe(3)
    expect(floor(3.9)).toBe(3)

    expect(floor(3.14, 1)).toBe(3.1)
    expect(floor(3.19, 1)).toBe(3.1)

    expect(floor(-3.1)).toBe(-4)
    expect(floor(-3.9)).toBe(-4)

    expect(floor(-3.14, 1)).toBe(-3.2)
    expect(floor(-3.19, 1)).toBe(-3.2)

    expect(floor(Infinity)).toBe(Infinity)
    expect(floor(NaN)).toBe(NaN)
})
