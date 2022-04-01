import React from 'react'
import { CardSong } from '../CardSong'
import { Grid, Item } from './styles'

export const ListSongs = () => {
  return (
    <Grid>
      {['', '', '', '', ''].map((song, key) => (
        <Item
          key={key}
        >
          <CardSong
            title='Hola Cancion'
            artist='Juan'
            image='https://png.pngtree.com/background/20210715/original/pngtree-electronic-music-album-picture-image_1301130.jpg'
          />
        </Item>))}
    </Grid>
  )
}
