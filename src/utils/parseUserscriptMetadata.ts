export interface Userscript {
    name: string
    version: string
    match: string[]
    license?: string
}

export function parseUserscriptMetadata(metadata: string): Userscript {
    const lines: string[] = metadata.split('\n')
    const userscript: Userscript = {
        name: '',
        version: '',
        match: []
    }
    for (const line of lines) {
        const matches: RegExpExecArray | null = /^\/\/\s*@([\w\-:]+)\s+(.+)$/.exec(line)
        if (matches === null) continue

        const key = matches[1] as keyof Userscript
        const value: any = matches[2]

        if (Array.isArray(userscript[key])) {
            userscript[key].push(value)
        } else {
            userscript[key] = value
        }
    }
    return userscript
}
