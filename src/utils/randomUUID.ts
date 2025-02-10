type UUID = `${string}-${string}-${string}-${string}-${string}`

export function randomUUID(): UUID {
    return crypto.randomUUID()
}
