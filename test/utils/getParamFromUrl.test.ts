import { getParamFromUrl } from '../../src/utils/getParamFromUrl'

test('getParamFromUrl', () => {
    expect(getParamFromUrl('https://www.youtube.com/watch?v=vPcKN4HjoiI', 'v')).toBe('vPcKN4HjoiI')
    expect(getParamFromUrl('https://www.youtube.com', 'v')).toBe(undefined)
})
