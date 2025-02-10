import { randomHexColor } from '../../src/utils/randomHexColor'

test('randomHexColor', () => {
    expect(randomHexColor()).toMatch(/^#[0-9a-f]{6}$/)
})
