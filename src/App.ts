import express from 'express'

import routes from './routes'

class App {
    public expressApp: express.Application

    constructor() {
        this.expressApp = express()

        this.midllewares()
        this.routes()
    }

    private midllewares() {
        this.expressApp.use(express.json())
    }

    private routes() {
        this.expressApp.use(routes)
    }
}

export default new App().expressApp