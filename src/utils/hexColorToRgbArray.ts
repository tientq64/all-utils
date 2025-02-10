import { normalizeHexColor } from './normalizeHexColor'

export function hexColorToRgbArray(hexColor: string): [number, number, number] | undefined {
    let normalizedHexColor: string | undefined = normalizeHexColor(hexColor, true)
    if (normalizedHexColor === undefined) return

    return [
        parseInt(normalizedHexColor.slice(0, 2), 16),
        parseInt(normalizedHexColor.slice(2, 4), 16),
        parseInt(normalizedHexColor.slice(4, 6), 16)
    ]
}
