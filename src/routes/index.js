'use strict'

const Router = require('koa-router')

const { initHandler, getListHandler } = require('../handlers')
const staffService = require('../services/staffService')

const router = new Router()
  .get('/init', initHandler)
  .get('/list', getListHandler)

module.exports = router