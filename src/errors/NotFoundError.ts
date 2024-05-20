import { CustomError } from './CustomError'
import { HttpStatusCodes } from '../constants/httpStatusCodes'

class NotFoundError extends CustomError {
    statusCode = HttpStatusCodes.NOT_FOUND

    statusType = 'Not Found'

    constructor(
        message: string,
        private property?: string
    ) {
        super(message)

        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serializeErrors() {
        return [
            {
                statusType: this.statusType,
                statusCode: this.statusCode,
                error: this.message,
                property: this.property
            }
        ]
    }
}

export { NotFoundError }
