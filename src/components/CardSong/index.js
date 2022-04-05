import React from "react"
import { Card, ImgContainer, Info, Button, Liked, UnLiked } from "./styles"
export const CardSong = ({
  id = null,
  image = "https://i.scdn.co/image/ab67616d0000b273942a0c9ac8f1def7c8805044",
  title = "Titulo",
  artist = "Artista",
  selected,
}) => {
  const [isFavorite, setIsFavorite] = React.useState(false)
  const handleFavorite = () => setIsFavorite(!isFavorite)
  const handleOnClick = () => selected(id)
  return (
    <Card>
      <ImgContainer onClick={handleOnClick}>
        <img src={image} alt={`${artist}-${title}`} />
      </ImgContainer>
      <Info onClick={() => selected(id)}>
        <h3>{title}</h3>
        <small>{artist}</small>
      </Info>
      <Button onClick={handleFavorite}>
        {isFavorite && <Liked size={30} />}
        {!isFavorite && <UnLiked size={30} />}
      </Button>
    </Card>
  )
}
