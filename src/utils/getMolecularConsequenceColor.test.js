import { utils } from '../index'

describe('Test Molecular Consequence Color', () => {
  it('frameshift should be red', () => {
    expect(utils.getMolecularConsequenceColor(' frameshift ')).toEqual('red')
  })

  it('stop-gain/stop-loss or start-gain/start-loss should be red', () => {
    expect(utils.getMolecularConsequenceColor(' stop-gained ')).toEqual('red')
    expect(utils.getMolecularConsequenceColor('stop-loss ')).toEqual('red')
    expect(utils.getMolecularConsequenceColor('  start-gain ')).toEqual('red')
    expect(utils.getMolecularConsequenceColor(' start-loss')).toEqual('red')
  })

  it('missense should be orange', () => {
    expect(utils.getMolecularConsequenceColor('missense')).toEqual('orange')
  })

  it('splice should be blue', () => {
    expect(utils.getMolecularConsequenceColor('splice_acceptor')).toEqual('blue')
  })

  it('insertion/deletion should be black', () => {
    expect(utils.getMolecularConsequenceColor('inframe insertion')).toEqual('black')
    expect(utils.getMolecularConsequenceColor('inframe deletion')).toEqual('black')
  })

  it('everything else should be grey', () => {
    expect(utils.getMolecularConsequenceColor('UTR')).toEqual('grey')
  })
})
