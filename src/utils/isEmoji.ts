export function isEmoji(char: string): boolean {
    return /^\p{Emoji}$/u.test(char)
}
