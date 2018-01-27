'use strict'

const mongoose = require('mongoose')
const Koa = require('koa')

const router = require('./routes')

const app = new Koa().use(router.routes())

mongoose.connect(process.env.MONGODB_URL)

app.listen(process.env.PORT || 8080)

console.log(`listening to http://localhost:${process.env.PORT}...`)

module.exports = app