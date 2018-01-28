'use strict'

const mongoose = require('mongoose')

const Staff = require('../models/Staff')

exports.init = async staffList => {
  await Staff.remove()
  await Staff.insertMany(staffList)
}

exports.getStaffList = async sortByStaffNumber => {
  const pipeline = Staff.aggregate().match({})
  if (sortByStaffNumber) {
    pipeline.addFields({
      staffNumberSplit: { $split: ['$staffNumber', '-'] }
    })
      .addFields({
        numberLength: { $strLenBytes: { $arrayElemAt: ['$staffNumberSplit', 1] } },
        staffNumber: { $arrayElemAt: ['$staffNumberSplit', 1] }
      })
      .sort({ numberLength: 1, staffNumber: 1 })
  } else {
    pipeline.sort({ staffNumber: 1 })
  }

  const list = await pipeline.project({ _id: 1, staffNumber: 1 })

  return list
}