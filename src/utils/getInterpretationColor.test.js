import { utils } from '../index'

describe('Test Interpretation Color', () => {
  it('diagnostic should be red', () => {
    expect(utils.getInterpretationColor('likely diagnostic')).toEqual('red')
    expect(utils.getInterpretationColor('diagnostic')).toEqual('red')
  })

  it('incidental findings should be blue', () => {
    expect(utils.getInterpretationColor('Incidental Finding')).toEqual('blue')
  })

  it('negative should be greeu', () => {
    expect(utils.getInterpretationColor('likely negative')).toEqual('green')
    expect(utils.getInterpretationColor('negative')).toEqual('green')
  })

  it('everything else is black', () => {
    expect(utils.getInterpretationColor('hello')).toEqual('black')
  })
})
