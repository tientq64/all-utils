import { CompilerOptions, transpile } from 'typescript'

export function transpileTypeScriptCode(tsCode: string, compilerOptions?: CompilerOptions): string {
    return transpile(tsCode, compilerOptions)
}
