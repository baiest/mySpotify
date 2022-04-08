import React from "react"
import { AppContext } from "../../Context"
import { setTrack } from "../../Context/ContextReducer"
import { Track } from "../../providers/Track"
import {
  Card,
  ImgContainer,
  Info,
  TitleInfo,
  ArtistInfo,
  Button,
  Liked,
  UnLiked,
} from "./styles"
export const CardSong = ({
  id = null,
  image = "https://i.scdn.co/image/ab67616d0000b273942a0c9ac8f1def7c8805044",
  title = "Titulo",
  artists = "Artista",
  liked = false,
}) => {
  const [isFavorite, setIsFavorite] = React.useState(liked)
  const [, dispatch] = React.useContext(AppContext)
  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
    Track.setLike(id, isFavorite)
  }
  const handleOnClick = () => dispatch(setTrack(id))
  const isAnimateTitle = title.length > 40
  const completeArtists = React.useCallback(() => artists.join(", "), [artists])
  const isAnimateArtist = completeArtists().length > 20
  return (
    <Card>
      <ImgContainer onClick={handleOnClick}>
        <img src={image} alt={`${completeArtists}-${title}`} />
      </ImgContainer>
      <Info onClick={handleOnClick}>
        <TitleInfo animation={isAnimateTitle}>
          <h3>{title}</h3>
        </TitleInfo>
        <ArtistInfo animation={isAnimateArtist}>
          <small>{completeArtists()}</small>
        </ArtistInfo>
      </Info>
      <Button onClick={handleFavorite}>
        {isFavorite && <Liked size={30} />}
        {!isFavorite && <UnLiked size={30} />}
      </Button>
    </Card>
  )
}
