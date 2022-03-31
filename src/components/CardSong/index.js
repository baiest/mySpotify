import React from 'react'

export const CardSong = ({ image='', title='Titulo', artist='Artista' }) => {
  return (
    <section>
      <img src={image} alt={`image-${artist}-${title}`} />
      <h3>{title}</h3>
      <small>{artist}</small>
      <span>Favorite</span>
    </section>
  )
}
