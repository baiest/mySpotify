/* eslint-disable no-undef */
import React from 'react'
import rerenderer from 'react-test-renderer'
import { CardSong } from './index'
describe('CardSong', () => {
  const tree = rerenderer
    .create( < CardSong /> )
    .toJSON()
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot()
  })
  it('Elements CardSong', () => {
    expect(tree).toMatchSnapshot({
      children: [
        { type: 'img' },
        { type: 'h3' },
        { type: 'small' },
        { type: 'span' }
      ]
    })
  })
})