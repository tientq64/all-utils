import { getRickRollUrl } from './getRickRollUrl'

export function openRickRollUrl(): void {
    window.open(getRickRollUrl(), '_blank')
}
