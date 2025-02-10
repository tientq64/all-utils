import { removeTonalMarks } from './removeTonalMarks'

const replacers: [RegExp, string][] = [
    [/[ăâäå]/gi, 'a'],
    [/[çć]/gi, 'c'],
    [/[đ]/gi, 'd'],
    [/[êë]/gi, 'e'],
    [/[ğ]/gi, 'g'],
    [/[ïî]/gi, 'i'],
    [/[ñń]/gi, 'n'],
    [/[ôơöő]/gi, 'o'],
    [/[šśş]/gi, 's'],
    [/[ưüűû]/gi, 'u'],
    [/[ÿ]/gi, 'y'],
    [/[žź]/gi, 'z']
]

export function removeDiacritics(text: string): string {
    let plainText: string = (text = removeTonalMarks(text))

    for (const replacer of replacers) {
        plainText = plainText.replace(replacer[0], (char) => {
            if (char.toUpperCase() === char) {
                return replacer[1].toUpperCase()
            }
            return replacer[1]
        })
    }
    return plainText
}
