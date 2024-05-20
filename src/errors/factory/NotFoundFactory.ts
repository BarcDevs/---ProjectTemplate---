import { NotFoundError } from '../NotFoundError'

export class NotFoundFactory {
    static generic = (message?: string) =>
        new NotFoundError(message ?? 'The requested resource was not found.')

    static route = (route: string) =>
        new NotFoundError(`Unable to find route ${route}.`)

    static resource = (resource?: string) =>
        new NotFoundError(`${resource} not found.`)
}
