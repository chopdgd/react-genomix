import moment from 'moment'

import { utils } from '../index'

describe('getTurnAroundTimeDetails', () => {
  it('given a target of 5 days and a 1 day TAT, it should be green, display -4, and value 5', () => {
    const observed = utils.getTurnAroundTimeDetails(5, '1987-12-18', '1987-12-19')
    const expected = { label: -4, daysPassed: 1, color: 'green', value: 5 }
    expect(observed).toEqual(expected)
  })

  it('given a target of 5 days and signout on same day, it should be green, display -5, and value 5', () => {
    const observed = utils.getTurnAroundTimeDetails(5, '1987-12-18', '1987-12-18')
    const expected = { label: -5, daysPassed: 0, color: 'green', value: 5 }
    expect(observed).toEqual(expected)
  })

  it('given a target of 5 days and signout 2 days late, it should be red, display 2, and value 5', () => {
    const observed = utils.getTurnAroundTimeDetails(5, '1987-12-18', '1987-12-25')
    const expected = { label: 2, daysPassed: 7, color: 'red', value: 5 }
    expect(observed).toEqual(expected)
  })

  it('if it no signout date, but now() = start date with a target of 5 days, it should display -5 and be green', () => {
    const now = moment('1987-12-18')
    Date.now = jest.fn(() => now)
    const observed = utils.getTurnAroundTimeDetails(5, '1987-12-18')
    const expected = { label: -5, daysPassed: 0, color: 'green', value: 0 }
    expect(observed).toEqual(expected)
  })

  it('if it no signout date, but now() = 2 days passed target, it should display 2 and be red', () => {
    const now = moment('1987-12-25')
    Date.now = jest.fn(() => now)
    const observed = utils.getTurnAroundTimeDetails(5, '1987-12-18')
    const expected = { label: 2, daysPassed: 7, color: 'red', value: 7 }
    expect(observed).toEqual(expected)
  })

  it('if it no signout date, but now() = 2 days before target, it should display -2 and be yellow', () => {
    const now = moment('1987-12-21')
    Date.now = jest.fn(() => now)
    const observed = utils.getTurnAroundTimeDetails(5, '1987-12-18')
    const expected = { label: -2, daysPassed: 3, color: 'yellow', value: 3 }
    expect(observed).toEqual(expected)
  })
})
