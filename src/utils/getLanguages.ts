import { Language, languages } from '../constants/languages'

export function getLanguages(): Language[] {
    return [...languages]
}
