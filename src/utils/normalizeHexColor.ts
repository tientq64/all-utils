export function normalizeHexColor(
    hexColor: string,
    withoutHash: boolean = false
): string | undefined {
    if (!/^#?(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(hexColor)) return

    hexColor = hexColor.replace('#', '')

    if (hexColor.length === 3) {
        hexColor = hexColor
            .split('')
            .map((char) => char + char)
            .join('')
    }
    const hash: string = withoutHash ? '' : '#'

    return hash + hexColor
}
