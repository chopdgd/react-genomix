import { utils } from '../index'

describe('Test Classification Color', () => {
  it('pathogenic should be red', () => {
    expect(utils.getClassificationColor('likely pathogenic')).toEqual('red')
    expect(utils.getClassificationColor('pathogenic')).toEqual('red')
  })

  it('benign should be green', () => {
    expect(utils.getClassificationColor('likely benign')).toEqual('green')
    expect(utils.getClassificationColor('benign')).toEqual('green')
  })

  it('VUS should be blue', () => {
    expect(utils.getClassificationColor('uncertain significance')).toEqual('blue')
    expect(utils.getClassificationColor('vus')).toEqual('blue')
    expect(utils.getClassificationColor('VOUS')).toEqual('blue')
  })

  it('Tier 1/2 should be red', () => {
    expect(utils.getClassificationColor('Tier 1 - A')).toEqual('red')
    expect(utils.getClassificationColor('Tier 2')).toEqual('red')
  })

  it('Tier 3 should be blue', () => {
    expect(utils.getClassificationColor('Tier 3')).toEqual('blue')
  })

  it('Tier 4 should be green', () => {
    expect(utils.getClassificationColor('Tier 4')).toEqual('green')
  })

  it('everything else is black', () => {
    expect(utils.getClassificationColor('hello')).toEqual('black')
  })
})
