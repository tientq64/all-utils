const replacers: [RegExp, string][] = [
    [/[àáảãạ]/gi, 'a'],
    [/[ằắẳẵặ]/gi, 'ă'],
    [/[ầấẩẫậ]/gi, 'â'],
    [/[èéẻẽẹ]/gi, 'e'],
    [/[ềếểễệ]/gi, 'ê'],
    [/[ìíỉĩị]/gi, 'i'],
    [/[òóỏõọ]/gi, 'o'],
    [/[ồốổỗộ]/gi, 'ô'],
    [/[òớởõợ]/gi, 'ơ'],
    [/[ùúủũụ]/gi, 'u'],
    [/[ừứửữự]/gi, 'ư'],
    [/[ỳýỷỹỵ]/gi, 'y']
]

export function removeTonalMarks(text: string): string {
    let plainText: string = text

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
