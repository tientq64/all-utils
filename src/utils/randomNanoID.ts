import { nanoid } from 'nanoid'

export function randomNanoID(size?: number): string {
    return nanoid(size)
}
