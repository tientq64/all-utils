import { randomInt } from './randomInt'

export function randomHexColor(): string {
    return '#' + randomInt(0xffffff).toString(16).padStart(6, '0')
}
