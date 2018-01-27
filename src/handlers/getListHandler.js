'use strict'

const staffService = require('../services/staffService')

module.exports = async ctx => {
  const { sortByStaffNumber } = ctx.query
  ctx.body = await staffService.getStaffList(sortByStaffNumber)
}