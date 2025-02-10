import { ZodiacSign, ZodiacSignName, zodiacSigns } from '../constants/zodiacSigns'

export function getZodiacSign(signName: ZodiacSignName): ZodiacSign
export function getZodiacSign(signName: string): ZodiacSign | undefined

export function getZodiacSign(signName: ZodiacSignName | string): ZodiacSign | undefined {
    return zodiacSigns.find((zodiacSign) => zodiacSign.name === signName)
}
