import { readFileSync } from 'fs'
import { parseUserscriptMetadata } from '../../src/utils/parseUserscriptMetadata'

test('parseUserscriptMetadata', () => {
    const metadata: string = readFileSync('./test/samples/userscript.meta.js', 'utf8')

    expect(parseUserscriptMetadata(metadata)).toEqual({
        'name': 'Download TikTok video',
        'name:zh-CN': '下载TikTok视频',
        'version': '2.0.4',
        'match': ['https://tiktok.com/*', 'https://douyin.com/*'],
        'license': 'MIT'
    })
})
