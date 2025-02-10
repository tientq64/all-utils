import { getAllUtilsLibInfo } from '../../src/utils/getAllUtilsLibInfo'

test('getAllUtilsLibInfo', () => {
    expect(getAllUtilsLibInfo()).toHaveProperty('name', 'all-utils')
})
