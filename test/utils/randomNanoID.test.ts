import { randomNanoID } from '../../src/utils/randomNanoID'

test('randomNanoID', () => {
    expect(randomNanoID()).toMatch(/^[a-zA-Z0-9_-]{21}$/)
})
