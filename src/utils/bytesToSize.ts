export type SizeUnit = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB'

export const sizeUnits: readonly SizeUnit[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

export function bytesToSize(bytes: number, toUnit: SizeUnit): number {
    let size: number = bytes
    for (const sizeUnit of sizeUnits) {
        if (sizeUnit === toUnit) break
        size /= 1024
    }
    return size
}
