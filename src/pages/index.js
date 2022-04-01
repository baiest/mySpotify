import React from 'react'
import { ListSongs } from '../components/ListSongs'
import Seo from '../components/seo'

const IndexPage = () => (
  <>
    <Seo title='Home' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ListSongs />
  </>
)

export default IndexPage
