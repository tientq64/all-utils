import { isAnagram } from '../../src/utils/isAnagram'

test('isAnagram', () => {
    expect(isAnagram('listen', 'silent')).toBe(true)
    expect(isAnagram('', '')).toBe(true)

    expect(isAnagram('listen', '')).toBe(false)
    expect(isAnagram('', 'silent')).toBe(false)
})
