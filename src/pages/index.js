import React from "react"
import { ListSongs } from "../components/ListSongs"
import { Track } from "../providers/Track"

const IndexPage = () => {
  const getData = React.useCallback(() => Track.getTracks(), [])
  return (
    <>
      <h2>Vienvenido a MySpotify</h2>
      <ListSongs getData={getData} />
    </>
  )
}

export default IndexPage
