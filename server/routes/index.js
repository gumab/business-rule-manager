'use strict'

import express from 'express'

const router = express.Router()

router.get('/', (req,res) => {
    return res.render('index', {title:'eBRM', layout: 'common/_layout'})
})

router.get('/login', (req,res)=>{
    return res.render('login', {title:'eBRM - Login', layout:'common/_emptyLayout'})
})

export default router