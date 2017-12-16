import getInterpretationColor from './getInterpretationColor'


describe('Test Interpretation Color', () => {
  it('pathogenic should be red', () => {
    expect(getInterpretationColor(' likely pathogenic ')).toEqual('red')
  })

  it('benign should be green', () => {
    expect(getInterpretationColor(' likely benign ')).toEqual('green')
  })

  it('everything else is black', () => {
    expect(getInterpretationColor(' uncertain significa ')).toEqual('black')
  })
})
