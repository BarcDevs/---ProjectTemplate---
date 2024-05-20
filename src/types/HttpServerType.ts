import { Server, IncomingMessage, ServerResponse } from 'http'

export type HttpServerType = Server<
    typeof IncomingMessage,
    typeof ServerResponse
>
