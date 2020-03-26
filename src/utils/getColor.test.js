import { getColor } from './getColor'

describe('Utils - getColor', () => {
  it('pathogenic should be red', () => {
    expect(getColor('likely pathogenic')).toEqual('red')
    expect(getColor('pathogenic')).toEqual('red')
  })

  it('benign should be green', () => {
    expect(getColor('likely benign')).toEqual('green')
    expect(getColor('benign')).toEqual('green')
  })

  it('VUS should be blue', () => {
    expect(getColor('uncertain significance')).toEqual('blue')
    expect(getColor('vus')).toEqual('blue')
    expect(getColor('VOUS')).toEqual('blue')
  })

  it('Tier 1/2 should be red', () => {
    expect(getColor('Tier 1 - A')).toEqual('red')
    expect(getColor('Tier 2')).toEqual('red')
  })

  it('Tier 3 should be blue', () => {
    expect(getColor('Tier 3')).toEqual('blue')
  })

  it('Tier 4 should be green', () => {
    expect(getColor('Tier 4')).toEqual('green')
  })

  it('diagnostic should be red', () => {
    expect(getColor('diagnostic')).toEqual('red')
  })

  it('likely diagnostic should be orange', () => {
    expect(getColor('likely diagnostic')).toEqual('orange')
  })

  it('negative should be green', () => {
    expect(getColor('likely negative')).toEqual('green')
    expect(getColor('negative')).toEqual('green')
  })

  it('inconclusive should be blue', () => {
    expect(getColor('inconclusive')).toEqual('blue')
  })

  it('associated should be green', () => {
    expect(getColor('associated')).toEqual('red')
  })

  it('not associated should be red', () => {
    expect(getColor('not associated')).toEqual('green')
  })

  it('findings should be blue', () => {
    expect(getColor('incidental finding')).toEqual('blue')
    expect(getColor('secondary finding')).toEqual('blue')
  })

  it('uncertain should be orange', () => {
    expect(getColor('uncertain')).toEqual('orange')
  })

  it('candidate should be pink', () => {
    expect(getColor('candidate')).toEqual('pink')
  })

  it('previously reported should be purple', () => {
    expect(getColor('previously reported')).toEqual('purple')
  })

  it('not applicable should be grey', () => {
    expect(getColor('not applicable')).toEqual('grey')
  })

  it('negative should be green', () => {
    expect(getColor('likely negative')).toEqual('green')
    expect(getColor('negative')).toEqual('green')
  })

  it('frameshift should be red', () => {
    expect(getColor(' frameshift ')).toEqual('red')
  })

  it('stop-gain/stop-loss or start-gain/start-loss should be red', () => {
    expect(getColor(' stop-gained ')).toEqual('red')
    expect(getColor('stop-loss ')).toEqual('red')
    expect(getColor('  start-gain ')).toEqual('red')
    expect(getColor(' start-loss')).toEqual('red')
  })

  it('missense should be orange', () => {
    expect(getColor('missense')).toEqual('blue')
  })

  it('splice should be red', () => {
    expect(getColor('splice_acceptor')).toEqual('red')
  })

  it('insertion/deletion should be blue', () => {
    expect(getColor('inframe insertion')).toEqual('blue')
    expect(getColor('inframe deletion')).toEqual('blue')
  })

  it('Truthy values should be green', () => {
    expect(getColor('true')).toEqual('green')
    expect(getColor(true)).toEqual('green')
    expect(getColor('Yes')).toEqual('green')
  })

  it('Falsy values should be red', () => {
    expect(getColor('false')).toEqual('red')
    expect(getColor(false)).toEqual('red')
    expect(getColor('No')).toEqual('red')
  })

  it('stat should be red', () => {
    expect(getColor('STAT')).toEqual('red')
  })

  it('urgent should be orange', () => {
    expect(getColor('urgent')).toEqual('orange')
  })

  it('routine should be black', () => {
    expect(getColor('routine')).toEqual('black')
  })

  it('definitive should be green', () => {
    expect(getColor('definitive')).toEqual('green')
  })

  it('moderate should be orange', () => {
    expect(getColor('moderate')).toEqual('orange')
  })

  it('limited should be red', () => {
    expect(getColor('limited')).toEqual('red')
  })

  it('everything else should be black', () => {
    expect(getColor('UTR')).toEqual('black')
  })
})
