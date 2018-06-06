'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const rootDir = path.resolve(__dirname, '../..')

export default () => {

    const app = express()
    app.use(bodyParser.json())
    //app.use(bodyParser.urlEncoded({extended:true}))
    
    app.set('views',path.resolve(rootDir,'client/views'))
    app.set('view engine', 'ejs')
    app.engine('html', require('ejs').renderFile)
    
    app.use('/', express.static(path.resolve(rootDir, 'client/public')))

    return app;
}