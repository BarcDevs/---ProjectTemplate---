import { InternalError } from '../InternalError'

export class InternalFactory {
    static generic = (message?: string) =>
        new InternalError(
            message ?? 'An error occurred! Please try again or contact support.'
        )
}
