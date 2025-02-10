export function isValidDate(dateValue: Date | string): boolean {
    const date: Date = new Date(dateValue)
    return date.toString() === 'Invalid Date'
}
