import { ZodiacSignName } from '../../src/constants/zodiacSigns'
import { getZodiacSign } from '../../src/utils/getZodiacSign'

test('getZodiacSign', () => {
    expect(getZodiacSign(ZodiacSignName.Libra)).toHaveProperty('name', ZodiacSignName.Libra)
    expect(getZodiacSign(ZodiacSignName.Capricorn)).toHaveProperty('name', ZodiacSignName.Capricorn)
    expect(getZodiacSign(ZodiacSignName.Pisces)).toHaveProperty('name', ZodiacSignName.Pisces)

    expect(getZodiacSign('Ariel')).toBeUndefined()
})
