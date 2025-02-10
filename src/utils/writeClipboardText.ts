export function writeClipboardText(text: string): Promise<void> {
    return navigator.clipboard.writeText(text)
}
