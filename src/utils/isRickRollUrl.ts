import { rickRollUrl } from './getRickRollUrl'

export function isRickRollUrl(url: string): boolean {
    return url === rickRollUrl
}
