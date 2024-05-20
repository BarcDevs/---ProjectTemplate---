import { AuthFactory } from './AuthFactory'
import { ValidationFactory } from './ValidationFactory'
import { NotFoundFactory } from './NotFoundFactory'
import { InternalFactory } from './InternalFactory'

class ErrorFactory {
    auth = AuthFactory

    validation = ValidationFactory

    notFound = NotFoundFactory

    internal = InternalFactory

    static genericError(message: string) {
        return new Error(message)
    }
}

export const errorFactory = new ErrorFactory()
