import { ZodiacSign } from '../constants/zodiacSigns'
import { getZodiacSignByDate } from './getZodiacSignByDate'

export function getZodiacSignByMonthDate(month: number, day: number): ZodiacSign {
    const date: Date = new Date(2000, month - 1, day)
    return getZodiacSignByDate(date)
}
