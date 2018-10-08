import { utils } from '../index'


describe('Test Interpretation Color', () => {
  it('pathogenic should be red', () => {
    expect(utils.getInterpretationColor('likely pathogenic')).toEqual('red')
    expect(utils.getInterpretationColor('pathogenic')).toEqual('red')
  })

  it('benign should be green', () => {
    expect(utils.getInterpretationColor('likely benign')).toEqual('green')
    expect(utils.getInterpretationColor('benign')).toEqual('green')
  })

  it('VUS should be blue', () => {
    expect(utils.getInterpretationColor('uncertain significance')).toEqual('blue')
    expect(utils.getInterpretationColor('vus')).toEqual('blue')
  })

  it('Tier 1/2 should be red', () => {
    expect(utils.getInterpretationColor('Tier 1 - A')).toEqual('red')
    expect(utils.getInterpretationColor('Tier 2')).toEqual('red')
  })


  it('Tier 3 should be blue', () => {
    expect(utils.getInterpretationColor('Tier 3')).toEqual('blue')
  })

  it('Tier 4 should be green', () => {
    expect(utils.getInterpretationColor('Tier 4')).toEqual('green')
  })

  it('everything else is black', () => {
    expect(utils.getInterpretationColor('hello')).toEqual('black')
  })
})
