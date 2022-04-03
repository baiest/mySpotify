import React from "react"
import { Card, ImgContainer, Info, Liked, UnLiked } from "./styles"
export const CardSong = ({
  id = null,
  image = "https://i.scdn.co/image/ab67616d0000b273942a0c9ac8f1def7c8805044",
  title = "Titulo",
  artist = "Artista",
  selected,
}) => {
  const [isFavorite, setIsFavorite] = React.useState(false)
  const handleFavorite = () => setIsFavorite(!isFavorite)

  return (
    <Card onClick={() => selected(id)}>
      <ImgContainer>
        <img src={image} alt={`${artist}-${title}`} />
      </ImgContainer>
      <Info>
        <h3>{title}</h3>
        <small>{artist}</small>
      </Info>
      {isFavorite && <Liked onClick={handleFavorite} size={30} />}
      {!isFavorite && <UnLiked onClick={handleFavorite} size={30} />}
    </Card>
  )
}
