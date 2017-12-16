import getMolecularConsequenceColor from './getMolecularConsequenceColor'


describe('Test Molecular Consequence Color', () => {
  it('frameshift should be red', () => {
    expect(getMolecularConsequenceColor(' frameshift ')).toEqual('red')
  })

  it('stop-gain/stop-loss or start-gain/start-loss should be red', () => {
    expect(getMolecularConsequenceColor(' stop-gained ')).toEqual('red')
    expect(getMolecularConsequenceColor('stop-loss ')).toEqual('red')
    expect(getMolecularConsequenceColor('  start-gain ')).toEqual('red')
    expect(getMolecularConsequenceColor(' start-loss')).toEqual('red')
  })

  it('missense should be orange', () => {
    expect(getMolecularConsequenceColor('missense')).toEqual('orange')
  })

  it('splice should be blue', () => {
    expect(getMolecularConsequenceColor('splice_acceptor')).toEqual('blue')
  })

  it('insertion/deletion should be black', () => {
    expect(getMolecularConsequenceColor('inframe insertion')).toEqual('black')
    expect(getMolecularConsequenceColor('inframe deletion')).toEqual('black')
  })

  it('everything else should be grey', () => {
    expect(getMolecularConsequenceColor('UTR')).toEqual('grey')
  })

})
