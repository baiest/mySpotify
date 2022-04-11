import React from "react"
import { ListSongs } from "../components/ListSongs"
import { Track } from "../providers/Track"
import Seo from "../components/seo"
import { Searcher } from "../components/Searcher"
import { usePages } from "../hooks/usePages"
const IndexPage = () => {
  const [search, setSearch] = React.useState("")
  const [isSearching, setIsSearching] = React.useState(false)
  const [isFirstData, setIsFirstData] = React.useState(true)
  const { getData, handleIntersection } = usePages(
    !!search ? Track.query : () => Promise.resolve([]),
    search
  )

  const handleSearch = query => {
    setIsSearching(true)
    setSearch(query)
    setIsFirstData(false)
  }

  const getFirstData = React.useCallback(() => Track.getTracks(), [])
  return (
    <>
      <Seo title="Home" />
      <h2>Bienvenido a MySpotify</h2>
      <Searcher handleSearch={handleSearch} />
      {isFirstData && <ListSongs getData={getFirstData} />}
      {!isFirstData && (
        <ListSongs
          getData={getData}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          handleIntersection={handleIntersection}
        />
      )}
    </>
  )
}

export default IndexPage
