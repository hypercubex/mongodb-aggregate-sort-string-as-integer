'use strict'

const staffService = require('../services/staffService')

module.exports = async ctx => {
  const { size = 999 } = ctx.query
  const staffList = Array(size).fill()
    .map((e, idx) => new Staff({ staffNumber: `staff-${idx}` }))
    .sort(() => Math.random() - 0.5)

  await staffService.init(staffList)
}