import { removeTonalMarks } from '../../src/utils/removeTonalMarks'

test('removeTonalMarks', () => {
    expect(removeTonalMarks('Em đang thử đầm')).toBe('Em đang thư đâm')
    expect(removeTonalMarks('Ốm mấy tháng nay mệt quá!')).toBe('Ôm mây thang nay mêt qua!')
})
