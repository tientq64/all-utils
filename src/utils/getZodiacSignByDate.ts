import { ZodiacSign, ZodiacSignName, zodiacSigns } from '../constants/zodiacSigns'
import { getZodiacSign } from './getZodiacSign'
import { isValidDate } from './isValidDate'

export function getZodiacSignByDate(dateValue: Date | string): ZodiacSign {
    const date: Date = new Date(dateValue)

    if (!isValidDate(date)) {
        throw Error('Date to find zodiac sign is invalid')
    }

    date.setFullYear(2000)

    for (const zodiacSign of zodiacSigns) {
        if (zodiacSign.name === ZodiacSignName.Capricorn) continue

        const minDate: Date = new Date(zodiacSign.minDate)
        const maxDate: Date = new Date(zodiacSign.maxDate)

        if (minDate < date && date < maxDate) {
            return zodiacSign
        }
    }
    return getZodiacSign(ZodiacSignName.Capricorn)
}
