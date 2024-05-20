import { CustomError } from './CustomError'
import { HttpStatusCodes } from '../constants/httpStatusCodes'

class InternalError extends CustomError {
    statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR

    statusType = 'Internal Error'

    constructor(
        message: string,
        private property?: string
    ) {
        super(message)

        Object.setPrototypeOf(this, InternalError.prototype)
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

export { InternalError }
