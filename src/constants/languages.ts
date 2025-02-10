export const enum LanguageCode {
    af = 'af',
    sq = 'sq',
    ar = 'ar',
    hy = 'hy',
    az = 'az',
    eu = 'eu',
    be = 'be',
    bn = 'bn',
    bs = 'bs',
    bg = 'bg',
    ca = 'ca',
    zh = 'zh',
    hr = 'hr',
    cs = 'cs',
    da = 'da',
    nl = 'nl',
    en = 'en',
    eo = 'eo',
    et = 'et',
    fi = 'fi',
    fr = 'fr',
    ka = 'ka',
    de = 'de',
    el = 'el',
    gu = 'gu',
    he = 'he',
    hi = 'hi',
    hu = 'hu',
    is = 'is',
    id = 'id',
    it = 'it',
    ja = 'ja',
    jv = 'jv',
    kn = 'kn',
    kk = 'kk',
    ko = 'ko',
    ky = 'ky',
    lv = 'lv',
    lt = 'lt',
    mk = 'mk',
    ms = 'ms',
    ml = 'ml',
    mn = 'mn',
    ne = 'ne',
    no = 'no',
    fa = 'fa',
    pl = 'pl',
    pt = 'pt',
    pa = 'pa',
    ro = 'ro',
    ru = 'ru',
    sr = 'sr',
    sk = 'sk',
    sl = 'sl',
    es = 'es',
    sw = 'sw',
    sv = 'sv',
    ta = 'ta',
    te = 'te',
    th = 'th',
    tr = 'tr',
    uk = 'uk',
    ur = 'ur',
    uz = 'uz',
    vi = 'vi',
    cy = 'cy',
    xh = 'xh',
    yo = 'yo',
    zu = 'zu'
}

export interface Language {
    readonly code: LanguageCode
    readonly name: string
}

export const languages: readonly Language[] = [
    {
        code: LanguageCode.af,
        name: 'Afrikaans'
    },
    {
        code: LanguageCode.sq,
        name: 'Albanian'
    },
    {
        code: LanguageCode.ar,
        name: 'Arabic'
    },
    {
        code: LanguageCode.hy,
        name: 'Armenian'
    },
    {
        code: LanguageCode.az,
        name: 'Azerbaijani'
    },
    {
        code: LanguageCode.eu,
        name: 'Basque'
    },
    {
        code: LanguageCode.be,
        name: 'Belarusian'
    },
    {
        code: LanguageCode.bn,
        name: 'Bengali'
    },
    {
        code: LanguageCode.bs,
        name: 'Bosnian'
    },
    {
        code: LanguageCode.bg,
        name: 'Bulgarian'
    },
    {
        code: LanguageCode.ca,
        name: 'Catalan'
    },
    {
        code: LanguageCode.zh,
        name: 'Chinese'
    },
    {
        code: LanguageCode.hr,
        name: 'Croatian'
    },
    {
        code: LanguageCode.cs,
        name: 'Czech'
    },
    {
        code: LanguageCode.da,
        name: 'Danish'
    },
    {
        code: LanguageCode.nl,
        name: 'Dutch'
    },
    {
        code: LanguageCode.en,
        name: 'English'
    },
    {
        code: LanguageCode.eo,
        name: 'Esperanto'
    },
    {
        code: LanguageCode.et,
        name: 'Estonian'
    },
    {
        code: LanguageCode.fi,
        name: 'Finnish'
    },
    {
        code: LanguageCode.fr,
        name: 'French'
    },
    {
        code: LanguageCode.ka,
        name: 'Georgian'
    },
    {
        code: LanguageCode.de,
        name: 'German'
    },
    {
        code: LanguageCode.el,
        name: 'Greek'
    },
    {
        code: LanguageCode.gu,
        name: 'Gujarati'
    },
    {
        code: LanguageCode.he,
        name: 'Hebrew'
    },
    {
        code: LanguageCode.hi,
        name: 'Hindi'
    },
    {
        code: LanguageCode.hu,
        name: 'Hungarian'
    },
    {
        code: LanguageCode.is,
        name: 'Icelandic'
    },
    {
        code: LanguageCode.id,
        name: 'Indonesian'
    },
    {
        code: LanguageCode.it,
        name: 'Italian'
    },
    {
        code: LanguageCode.ja,
        name: 'Japanese'
    },
    {
        code: LanguageCode.jv,
        name: 'Javanese'
    },
    {
        code: LanguageCode.kn,
        name: 'Kannada'
    },
    {
        code: LanguageCode.kk,
        name: 'Kazakh'
    },
    {
        code: LanguageCode.ko,
        name: 'Korean'
    },
    {
        code: LanguageCode.ky,
        name: 'Kyrgyz'
    },
    {
        code: LanguageCode.lv,
        name: 'Latvian'
    },
    {
        code: LanguageCode.lt,
        name: 'Lithuanian'
    },
    {
        code: LanguageCode.mk,
        name: 'Macedonian'
    },
    {
        code: LanguageCode.ms,
        name: 'Malay'
    },
    {
        code: LanguageCode.ml,
        name: 'Malayalam'
    },
    {
        code: LanguageCode.mn,
        name: 'Mongolian'
    },
    {
        code: LanguageCode.ne,
        name: 'Nepali'
    },
    {
        code: LanguageCode.no,
        name: 'Norwegian'
    },
    {
        code: LanguageCode.fa,
        name: 'Persian'
    },
    {
        code: LanguageCode.pl,
        name: 'Polish'
    },
    {
        code: LanguageCode.pt,
        name: 'Portuguese'
    },
    {
        code: LanguageCode.pa,
        name: 'Punjabi'
    },
    {
        code: LanguageCode.ro,
        name: 'Romanian'
    },
    {
        code: LanguageCode.ru,
        name: 'Russian'
    },
    {
        code: LanguageCode.sr,
        name: 'Serbian'
    },
    {
        code: LanguageCode.sk,
        name: 'Slovak'
    },
    {
        code: LanguageCode.sl,
        name: 'Slovenian'
    },
    {
        code: LanguageCode.es,
        name: 'Spanish'
    },
    {
        code: LanguageCode.sw,
        name: 'Swahili'
    },
    {
        code: LanguageCode.sv,
        name: 'Swedish'
    },
    {
        code: LanguageCode.ta,
        name: 'Tamil'
    },
    {
        code: LanguageCode.te,
        name: 'Telugu'
    },
    {
        code: LanguageCode.th,
        name: 'Thai'
    },
    {
        code: LanguageCode.tr,
        name: 'Turkish'
    },
    {
        code: LanguageCode.uk,
        name: 'Ukrainian'
    },
    {
        code: LanguageCode.ur,
        name: 'Urdu'
    },
    {
        code: LanguageCode.uz,
        name: 'Uzbek'
    },
    {
        code: LanguageCode.vi,
        name: 'Vietnamese'
    },
    {
        code: LanguageCode.cy,
        name: 'Welsh'
    },
    {
        code: LanguageCode.xh,
        name: 'Xhosa'
    },
    {
        code: LanguageCode.yo,
        name: 'Yoruba'
    },
    {
        code: LanguageCode.zu,
        name: 'Zulu'
    }
]
