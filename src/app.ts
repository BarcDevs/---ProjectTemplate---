import 'express-async-errors'
import CreateServer from './classes/CreateServer'

const Server = new CreateServer()

const app = Server.getApp()

export default app
