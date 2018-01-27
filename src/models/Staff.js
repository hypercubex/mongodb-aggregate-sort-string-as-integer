'use strict'

const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
  staffNumber: String
}, { versionKey: false })

module.exports = mongoose.model('staff', staffSchema)