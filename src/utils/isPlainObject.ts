export function isPlainObject(value: unknown): boolean {
    return !!value && Object.prototype.toString.call(value) === '[object Object]'
}
