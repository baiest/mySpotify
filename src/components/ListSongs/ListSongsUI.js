import React, { useCallback } from "react"

import { CardSong } from "../CardSong"
import { Grid, Item } from "./styles"

export const ListSongsUI = ({
  loading,
  error,
  data,
  handleCurrentSong,
  handleIntersection,
}) => {
  const cardRef = React.useRef(null)
  React.useEffect(() => {
    if (!cardRef.current) return
    const observer = new IntersectionObserver(
      ([entrie]) => {
        if (entrie.isIntersecting) {
          handleIntersection()
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: "1.0",
      }
    )
    if (cardRef.current) observer.observe(cardRef.current)

    return () => {
      cardRef.current && observer.disconnect(cardRef.current)
      cardRef.current = null
    }
  }, [loading])
  return (
    <Grid>
      {error && <p>{error}</p>}
      {data.length === 0 && <p>No hay conciones</p>}
      {data.map((song, key) => (
        <Item key={song.id} ref={cardRef}>
          <CardSong
            id={song.id}
            selected={handleCurrentSong}
            title={song.name}
            artist={song.artists && song.artists[0].name}
            image={song.images && song.images[0].url}
          />
        </Item>
      ))}
      {loading && <p>Cargando...</p>}
    </Grid>
  )
}
