'use strict'

import express from './configs/express'
import route from './routes/index'

const app = express()
const port = 8080
app.use('/', route)

const server = app.listen(port, '0.0.0.0', () => {
    console.log('Express listening on port ', port)
})