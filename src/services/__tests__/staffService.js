'use strict'

const Staff = require('../../models/Staff')
const staffService = require('../staffService')

jest.mock('../../models/Staff')

describe('staffService', () => {
  it('should init random ordered stafflsit', async () => {
    const staffList = []

    await staffService.init(staffList)

    expect(Staff.remove).toHaveBeenCalledTimes(1)
    expect(Staff.insertMany).toHaveBeenCalledTimes(1)
    expect(Staff.insertMany).toHaveBeenCalledWith(staffList)
  })

  it('shoudl get list without sorting', async () => {
    const mockedList = []
    Staff.project.mockReturnValue(mockedList)
 
    const list = await staffService.getStaffList()
 
    expect(Staff.aggregate).toHaveBeenCalled()
    expect(Staff.match).toHaveBeenCalled()
    expect(Staff.sort).not.toHaveBeenCalled()
    expect(Staff.project).toHaveBeenCalled()
    expect(list).toBe(mockedList)
  })

  it('shoudl get list with sorting', async () => {
    const mockedList = []
    Staff.project.mockReturnValue(mockedList)

    const list = await staffService.getStaffList(true)

    expect(Staff.aggregate).toHaveBeenCalled()
    expect(Staff.match).toHaveBeenCalled()
    expect(Staff.addFields).toHaveBeenCalledTimes(2)
    expect(Staff.sort).toHaveBeenCalled()
    expect(Staff.project).toHaveBeenCalled()
    expect(list).toBe(mockedList)
  })
})