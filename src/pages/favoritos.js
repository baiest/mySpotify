import React from "react"
import styled from "styled-components"
import { ListSongs } from "../components/ListSongs"
import Seo from "../components/seo"
import { AppContext } from "../Context"
import { usePages } from "../hooks/usePages"
import { User } from "../providers/User"

const Title = styled.h2`
  margin: 12px 0;
  font-size: 1.8rem;
`

const Favoritos = () => {
  const { getData, handleIntersection } = usePages(User.getFavoritesSongs, null)
  const [state] = React.useContext(AppContext)
  const { user } = state
  return (
    <>
      <Seo title="Favoritos" />
      <Title>Mis Favoritos</Title>
      {user && (
        <ListSongs getData={getData} handleIntersection={handleIntersection} />
      )}
      {!user && <p>No hay un usuario logueado</p>}
    </>
  )
}

export default Favoritos
