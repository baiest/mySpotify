/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const { Layout } = require("./src/components/Layout")
const { GlobalStyles } = require("./src/styles")
const { ContextProvider } = require("./src/Context")
const { initialState, contextReducer } = require("./src/Context/ContextReducer")

export const wrapPageElement = ({ element }) => (
  <ContextProvider initialState={initialState} reducer={contextReducer}>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </ContextProvider>
)
