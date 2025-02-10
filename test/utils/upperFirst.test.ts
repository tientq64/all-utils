import { upperFirst } from '../../src/utils/upperFirst'

test('upperFirst', () => {
    expect(upperFirst('black cat')).toBe('Black cat')
    expect(upperFirst('black Cat')).toBe('Black Cat')
    expect(upperFirst('')).toBe('')
})
