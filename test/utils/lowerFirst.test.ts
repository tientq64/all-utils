import { lowerFirst } from '../../src/utils/lowerFirst'

test('lowerFirst', () => {
    expect(lowerFirst('Black cat')).toBe('black cat')
    expect(lowerFirst('Black Cat')).toBe('black Cat')
    expect(lowerFirst('')).toBe('')
})
