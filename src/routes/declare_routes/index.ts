import { Express } from 'express'

import { errorHandler, notFound } from '../../controllers/errorController'
import { RequestLocals } from '../../types/RequestLocals'
import { getServerStatus } from '../../controllers/serverController'
import { serverConfig } from '../../../config'
import authRoute from '../AuthRoute'

declare module 'express-serve-static-core' {
    interface Request {
        locals: RequestLocals
    }
}

export const declareRoutes = (app: Express) => {
    app.get('/', getServerStatus)

    app.use(`/api/${serverConfig.apiVersion}/auth`, authRoute)

    app.all('*', notFound)
    app.use(errorHandler)
}
