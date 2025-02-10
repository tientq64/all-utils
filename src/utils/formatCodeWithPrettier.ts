import { format, Options } from 'prettier'

export function formatCodeWithPrettier(code: string, options: Options): Promise<string> {
    return format(code, options)
}
