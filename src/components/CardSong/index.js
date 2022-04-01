import React from 'react'
import { Card, Info } from './styles'
export const CardSong = ({ image = '', title = 'Titulo', artist = 'Artista' }) => {
  return (
    <Card>
      <img src={image} alt={`image-${artist}-${title}`} />
      <Info>
        <h3>{title}</h3>
        <small>{artist}</small>
      </Info>
      <span>❤</span>
    </Card>
  )
}
