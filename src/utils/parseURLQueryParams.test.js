import { utils } from '../index'

describe('Test parseURLQueryParams', () => {
  it('Simple query parameters', () => {
    const observed = utils.parseURLQueryParams('?search=Mike&params=10000')
    expect(observed).toEqual({ search: 'Mike', params: '10000' })
  })

  it('List query parameters', () => {
    const observed = utils.parseURLQueryParams('?search=Mike&params=10000&params=2000')
    expect(observed).toEqual({ search: 'Mike', params: ['10000', '2000'] })
  })

  it('String List query parameters', () => {
    const observed = utils.parseURLQueryParams('?search=Mike&params=10000', ['params'])
    expect(observed).toEqual({ search: 'Mike', params: ['10000'] })
  })
})
