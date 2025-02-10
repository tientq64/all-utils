import { reverseString } from '../../src/utils/reverseString'

test('reverseString', () => {
    expect(reverseString('live')).toBe('evil')
    expect(reverseString('g😐d')).toBe('d😐g')
})
