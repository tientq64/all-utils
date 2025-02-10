import { name, version, description, keywords, author, license } from '../../package.json'

export interface AllUtilsLibInfo {
    name: string
    version: string
    description: string
    keywords: string[]
    author: {
        name: string
        email: string
        url: string
    }
    license: string
}

export function getAllUtilsLibInfo(): AllUtilsLibInfo {
    return {
        name,
        version,
        description,
        keywords,
        author,
        license
    }
}
