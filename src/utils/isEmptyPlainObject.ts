import { isPlainObject } from './isPlainObject'

export function isEmptyPlainObject(value: any): boolean {
    return isPlainObject(value) && Object.keys(value).length === 0
}
