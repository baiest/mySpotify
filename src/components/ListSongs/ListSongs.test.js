/*eslint-disable*/
import React from "react"
import renderer from "react-test-renderer"
import { ListSongs } from "."
import { ContextProvider } from "../../Context"
import { contextReducer, initialState } from "../../Context/ContextReducer"

describe("List of songs", () => {
  const tree = renderer.create(<ListSongs />).toJSON()
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
})
