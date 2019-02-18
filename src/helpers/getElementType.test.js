import React from 'react'
import getElementType from './getElementType'

describe('getElementType', () => {
  it('returns defaultProps.as if props.as not defined', () => {
    class TestComponent extends React.Component {}
    TestComponent.defaultProps = { as: 'div' }
    expect(getElementType(TestComponent, {})).toEqual('div')
  })

  it('returns props.as if defined', () => {
    class TestComponent extends React.Component {}
    TestComponent.defaultProps = { as: 'div' }
    expect(getElementType(TestComponent, { as: 'a' })).toEqual('a')
  })

  it('returns anchor if it infers href', () => {
    class TestComponent extends React.Component {}
    expect(getElementType(TestComponent, { href: 'app/' })).toEqual('a')
  })

  it('returns div if all else fails', () => {
    class TestComponent extends React.Component {}
    expect(getElementType(TestComponent, {})).toEqual('div')
  })
})
