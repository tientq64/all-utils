import { loremIpsum } from 'lorem-ipsum'
import { LoremUnit } from 'lorem-ipsum/types/src/constants/units'

export function randomLoremIpsum(count: number = 1, units: LoremUnit = 'paragraph'): string {
    return loremIpsum({ count, units })
}
