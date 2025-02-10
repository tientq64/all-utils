export function minifyJSON(json: string): string {
    return JSON.stringify(JSON.parse(json))
}
