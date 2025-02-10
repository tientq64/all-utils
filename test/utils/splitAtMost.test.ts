import { splitAtMost } from '../../src/utils/splitAtMost'

test('splitAtMost', () => {
    expect(splitAtMost('The fox jumped over the lazy dog', ' ', 2)).toEqual([
        'The',
        'fox',
        'jumped over the lazy dog'
    ])
    expect(splitAtMost('The fox jumped over the lazy dog', ' ')).toEqual([
        'The',
        'fox',
        'jumped',
        'over',
        'the',
        'lazy',
        'dog'
    ])
    expect(splitAtMost('The fox jumped over the lazy dog', ',', 2)).toEqual([
        'The fox jumped over the lazy dog'
    ])
    expect(splitAtMost('The fox', '')).toEqual(['T', 'h', 'e', ' ', 'f', 'o', 'x'])
    expect(splitAtMost('The fox', '', 3)).toEqual(['T', 'h', 'e', ' fox'])
    expect(splitAtMost('', '', 3)).toEqual([])
})
