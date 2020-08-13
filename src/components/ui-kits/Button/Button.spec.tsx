import React from 'react'
import renderer from 'react-test-renderer';
import Button from './Button'

test('AppTitle', () => {
  const component = renderer.create(<Button>hihi</Button>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})