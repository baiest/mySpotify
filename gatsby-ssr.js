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
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

export const wrapRootElement = ({ element }) => (
  <ContextProvider initialState={initialState} reducer={contextReducer}>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </ContextProvider>
)
