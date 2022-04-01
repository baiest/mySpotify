import React from "react"
import { Card, Info, Liked, UnLiked } from "./styles"
export const CardSong = ({
  image = "",
  title = "Titulo",
  artist = "Artista",
}) => {
  const [isFavorite, setIsFavorite] = React.useState(false)
  const handleFavorite = () => setIsFavorite(!isFavorite)
  return (
    <Card>
      <img src={image} alt={`image-${artist}-${title}`} />
      <Info>
        <h3>{title}</h3>
        <small>{artist}</small>
      </Info>
      {isFavorite && <Liked onClick={handleFavorite} size={30} />}
      {!isFavorite && <UnLiked onClick={handleFavorite} size={30} />}
    </Card>
  )
}
