import { removeDiacritics } from '../../src/utils/removeDiacritics'

test('removeDiacritics', () => {
    expect(removeDiacritics('Em đang thử đầm')).toBe('Em dang thu dam')
    expect(removeDiacritics('Ốm mấy tháng nay mệt quá!')).toBe('Om may thang nay met qua!')
})
