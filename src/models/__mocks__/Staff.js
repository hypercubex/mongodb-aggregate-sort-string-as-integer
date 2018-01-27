'use strict'

const mock = jest.fn()

mock.remove = jest.fn()
mock.insertMany = jest.fn()
mock.aggregate = jest.fn().mockReturnThis()
mock.match = jest.fn().mockReturnThis()
mock.addFields = jest.fn().mockReturnThis()
mock.sort = jest.fn().mockReturnThis()
mock.project = jest.fn()

module.exports = mock