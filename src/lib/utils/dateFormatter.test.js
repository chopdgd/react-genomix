import dateFormatter from './dateFormatter'


describe('Test dateFormatter', () => {
  it('should return date fromatted like 12-18-1987', () => {
    expect(dateFormatter('12-18-1987')).toEqual('1987/12/18')
  })

  it('should return date fromatted like Dec. 18, 1987', () => {
    expect(dateFormatter('Dec. 18, 1987')).toEqual('1987/12/18')
  })

  it('should return date fromatted like Decemeber 18, 1987', () => {
    expect(dateFormatter('Decemeber 18, 1987')).toEqual('1987/12/18')
  })
})
