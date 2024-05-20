import 'express-async-errors'
import express, { Express } from 'express'
import dotenv from 'dotenv'
import { appConfig, serverConfig } from '../../config'
import { declareMiddlewares } from '../middlewares'
import { declareRoutes } from '../routes/declare_routes'
import { HttpServerType } from '../types/HttpServerType'

class CreateServer {
    private readonly app: Express

    private readonly httpServer: HttpServerType

    constructor() {
        dotenv.config()

        const { port, host, protocol, url } = serverConfig
        const { start } = appConfig

        this.app = express()

        declareMiddlewares(this.app)

        declareRoutes(this.app)

        this.httpServer = this.app.listen(port, host, () => {
            const serverUrl = url
                .replace(/\{protocol}/g, protocol)
                .replace(/\{host}/g, host)
                .replace(/\{port}/g, port.toString())

            const message = `${start.replace(/\{0}/g, serverUrl)}`

            console.log(message)
        })
    }

    public getApp(): Express {
        return this.app
    }

    public getHttpServer() {
        return this.httpServer
    }
}

export default CreateServer
