import React from "react"

import { CardSong } from "../CardSong"
import { Loader } from "../Loader"
import { Grid, Item } from "./styles"

export const ListSongsUI = ({
  loading,
  error,
  data,
  handleIntersection = () => {},
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
  }, [loading, handleIntersection])
  return (
    <Grid>
      {error && <p>{error}</p>}
      {data.length === 0 && !loading && <p>No hay conciones</p>}
      {data.map(song => (
        <Item key={song.id} ref={cardRef}>
          <CardSong {...song} title={song.name} image={song.images} />
        </Item>
      ))}
      {loading && <Loader />}
    </Grid>
  )
}
