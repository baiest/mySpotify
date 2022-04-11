import { useState, useCallback } from "react"

export const usePages = (getDataPages, search = null) => {
  const [pages, setPages] = useState({
    songs: 15,
    page: 0,
  })
  const getData = useCallback(() => {
    if (search !== null) {
      return getDataPages(search, pages.songs, pages.page)
    }
    return getDataPages(pages.songs, pages.page)
  }, [pages, search])
  const handleIntersection = () => {
    setPages({ ...pages, page: pages.songs + pages.page })
  }

  return { getData, handleIntersection }
}
