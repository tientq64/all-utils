import { Language, LanguageCode, languages } from '../constants/languages'

export function getLanguage(languageCode: LanguageCode): Language
export function getLanguage(languageCode: string): Language | undefined

export function getLanguage(languageCode: LanguageCode | string): Language | undefined {
    return languages.find((language) => language.code === languageCode)
}
