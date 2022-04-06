/*eslint-disable*/
import React from "react"
import renderer from "react-test-renderer"
import { ContextProvider } from "../../Context"
import { contextReducer, initialState } from "../../Context/ContextReducer"
import { Header } from "./index"
describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ContextProvider initialState={initialState} reducer={contextReducer}>
          <Header siteTitle="MySpotify" />
        </ContextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
