import { utils } from 'LibIndex'


describe('Test Interpretation Color', () => {
  it('pathogenic should be red', () => {
    expect(utils.getInterpretationColor(' likely pathogenic ')).toEqual('red')
  })

  it('benign should be green', () => {
    expect(utils.getInterpretationColor(' likely benign ')).toEqual('green')
  })

  it('everything else is black', () => {
    expect(utils.getInterpretationColor(' uncertain significa ')).toEqual('black')
  })
})
