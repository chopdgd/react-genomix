import moment from 'moment'

import getTurnAroundTimeDetails from './getTurnAroundTimeDetails'


describe('getTurnAroundTimeDetails', () => {
  it('given a target of 5 days and a 1 day TAT, it should be green, display -4', () => {
    const observed = getTurnAroundTimeDetails(5, '12-18-1987', '12-19-1987')
    const expected = { label: -4, color: 'green', value: 1 }
    expect(observed).toEqual(expected)
  })

  it('given a target of 5 days and signout on same day, it should be green, display -5', () => {
    const observed = getTurnAroundTimeDetails(5, '12-18-1987', '12-18-1987')
    const expected = { label: -5, color: 'green', value: 0 }
    expect(observed).toEqual(expected)
  })

  it('given a target of 5 days and signout 2 days late, it should be red, display 2', () => {
    const observed = getTurnAroundTimeDetails(5, '12-18-1987', '12-25-1987')
    const expected = { label: 2, color: 'red', value: 7 }
    expect(observed).toEqual(expected)
  })

  it('if it no signout date, but now() = start date with a target of 5 days, it should display -5 and be green', () => {
    const now = moment('12-18-1987')
    Date.now = jest.genMockFunction().mockReturnValue(now)
    const observed = getTurnAroundTimeDetails(5, '12-18-1987')
    const expected = { label: -5, color: 'green', value: 0 }
    expect(observed).toEqual(expected)
  })

  it('if it no signout date, but now() = 2 days passed target, it should display 2 and be red', () => {
    const now = moment('12-25-1987')
    Date.now = jest.genMockFunction().mockReturnValue(now)
    const observed = getTurnAroundTimeDetails(5, '12-18-1987')
    const expected = { label: 2, color: 'red', value: 7 }
    expect(observed).toEqual(expected)
  })

  it('if it no signout date, but now() = 2 days before target, it should display -2 and be yellow', () => {
    const now = moment('12-21-1987')
    Date.now = jest.genMockFunction().mockReturnValue(now)
    const observed = getTurnAroundTimeDetails(5, '12-18-1987')
    const expected = { label: -2, color: 'yellow', value: 3 }
    expect(observed).toEqual(expected)
  })

})
