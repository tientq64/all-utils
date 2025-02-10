import { Language } from '../constants/languages'
import { getLanguage } from './getLanguage'

export function getCurrentBrowserLanguage(): Language | undefined {
    const languageCode: string = navigator.language
    return getLanguage(languageCode)
}
