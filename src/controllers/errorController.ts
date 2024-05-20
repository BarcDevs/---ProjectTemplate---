import { NextFunction, Request, Response } from 'express'
import { env } from '../../config'
import { CustomError } from '../errors/CustomError'
import { errorFactory } from '../errors/factory'
import { ResponseType } from '../types/ResponseType'

// eslint-disable-next-line consistent-return
export const catchAsync =
    (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            return await fn(req, res, next)
        } catch (error: CustomError | Error | unknown) {
            if (env !== 'production' && error instanceof Error) {
                console.log(error.stack)
            }

            if (error instanceof CustomError) {
                return next(error)
            }

            return next(errorFactory.internal.generic((error as Error).message))
        }
    }

export const notFound = (req: Request, _res: Response, next: NextFunction) =>
    next(errorFactory.notFound.route(req.originalUrl))

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        const errorType = err.serializeErrors()
        const response: ResponseType<typeof errorType> = {
            message: 'There was an error',
            error: errorType
        }
        return res.status(err.statusCode).json(response)
    }

    const errorType = err.message
    const response: ResponseType<typeof errorType> = {
        message: 'There was an error',
        error: err.message
    }

    res.status(500).json(response)

    return next()
}
