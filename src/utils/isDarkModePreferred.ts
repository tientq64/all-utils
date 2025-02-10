export function isDarkModePreferred(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}
