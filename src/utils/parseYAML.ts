import { load, LoadOptions } from 'js-yaml'

export function parseYAML(yaml: string, json: boolean): any
export function parseYAML(yaml: string, options: LoadOptions): any

export function parseYAML(yaml: string, json: boolean | LoadOptions): any {
    const options: LoadOptions = typeof json === 'boolean' ? { json } : json
    return load(yaml, options)
}
