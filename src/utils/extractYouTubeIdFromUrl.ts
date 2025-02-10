import { getParamFromUrl } from './getParamFromUrl'

export function extractYouTubeIdFromUrl(url: string): string | undefined {
    return getParamFromUrl(url, 'v')
}
