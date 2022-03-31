import React from 'react'
import { CardSong } from '../components/CardSong'
import Seo from '../components/seo'

const IndexPage = () => (
  <>
    <Seo title='Home' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <CardSong title='Hola Cancion' artist='Juan' image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pngtree.com%2Ffreebackground%2Felectronic-music-album_1301130.html&psig=AOvVaw19PmQEzZ-riv9PeP66Ztpd&ust=1648850301098000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDh65qs8fYCFQAAAAAdAAAAABAD'/>
  </>
)

export default IndexPage
