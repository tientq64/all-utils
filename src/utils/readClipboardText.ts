export function readClipboardText(): Promise<string> {
    return navigator.clipboard.readText()
}
