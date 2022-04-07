import React from "react"
import { ListSongs } from "../components/ListSongs"
import { Track } from "../providers/Track"
import Seo from "../components/seo"
const IndexPage = () => {
  const getData = React.useCallback(() => Track.getTracks(), [])
  return (
    <>
      <Seo title="Home" />
      <h2>Vienvenido a MySpotify</h2>
      <ListSongs getData={getData} />
    </>
  )
}

export default IndexPage
