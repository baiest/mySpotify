/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "../Header"
import "./layout.css"
import { Container, MenuNavLayout } from "./style"
import { Player } from "../Player"
export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || "Title"} />
      <Container> {children} </Container>
      <MenuNavLayout />
      <Player />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
