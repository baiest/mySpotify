/*eslint-disable*/
import React from "react"
import renderer from "react-test-renderer"
import { CardSong } from "."
import { ContextProvider } from "../../Context"
import { contextReducer, initialState } from "../../Context/ContextReducer"
describe("CardSong", () => {
  const tree = renderer
    .create(
      <ContextProvider initialState={initialState} reducer={contextReducer}>
        <CardSong />
      </ContextProvider>
    )
    .toJSON()
  it("renders correctly", () => {
    expect(tree).toMatchSnapshot()
  })
  it("Elements CardSong", () => {
    expect(tree).toMatchSnapshot({
      children: [{ type: "figure" }, { type: "div" }, { type: "button" }],
    })
  })
})
