import React from "react"
import styled from "styled-components"
import { ListSongs } from "../components/ListSongs"
import Seo from "../components/seo"

const Title = styled.h2`
  margin: 12px 0;
  font-size: 1.8rem;
`

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Title>Mis Favoritos</Title>
    <ListSongs />
  </>
)

export default IndexPage
