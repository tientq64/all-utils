export const enum ZodiacSignName {
    Aries = 'Aries',
    Taurus = 'Taurus',
    Gemini = 'Gemini',
    Cancer = 'Cancer',
    Leo = 'Leo',
    Virgo = 'Virgo',
    Libra = 'Libra',
    Scorpio = 'Scorpio',
    Sagittarius = 'Sagittarius',
    Capricorn = 'Capricorn',
    Aquarius = 'Aquarius',
    Pisces = 'Pisces'
}

export interface ZodiacSign {
    readonly name: ZodiacSignName
    readonly minDate: string
    readonly maxDate: string
}

export const zodiacSigns: readonly ZodiacSign[] = [
    {
        name: ZodiacSignName.Aries,
        minDate: '2000-03-21',
        maxDate: '2000-04-19'
    },
    {
        name: ZodiacSignName.Taurus,
        minDate: '2000-04-20',
        maxDate: '2000-05-20'
    },
    {
        name: ZodiacSignName.Gemini,
        minDate: '2000-05-21',
        maxDate: '2000-06-21'
    },
    {
        name: ZodiacSignName.Cancer,
        minDate: '2000-06-22',
        maxDate: '2000-07-22'
    },
    {
        name: ZodiacSignName.Leo,
        minDate: '2000-07-23',
        maxDate: '2000-08-22'
    },
    {
        name: ZodiacSignName.Virgo,
        minDate: '2000-08-23',
        maxDate: '2000-09-22'
    },
    {
        name: ZodiacSignName.Libra,
        minDate: '2000-09-23',
        maxDate: '2000-10-22'
    },
    {
        name: ZodiacSignName.Scorpio,
        minDate: '2000-10-23',
        maxDate: '2000-11-22'
    },
    {
        name: ZodiacSignName.Sagittarius,
        minDate: '2000-11-23',
        maxDate: '2000-12-21'
    },
    {
        name: ZodiacSignName.Capricorn,
        minDate: '2000-12-22',
        maxDate: '2000-01-19'
    },
    {
        name: ZodiacSignName.Aquarius,
        minDate: '2000-01-20',
        maxDate: '2000-02-18'
    },
    {
        name: ZodiacSignName.Pisces,
        minDate: '2000-02-19',
        maxDate: '2000-03-20'
    }
]
