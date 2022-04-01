/*eslint-disable*/
import React from 'react'
import renderer from 'react-test-renderer'
import { CardSong } from '.'
describe('CardSong', () => {
  const tree = renderer
    .create(<CardSong />)
    .toJSON()
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot()
  })
  it('Elements CardSong', () => {
        expect(tree).toMatchSnapshot({
      children: [
        { type: 'img' },
        { type: 'div' },
        { type: 'span' }
      ]
    })
  })
})
