import React from "react"
import { Input } from "./style"

export const Searcher = ({ handleSearch }) => {
  const inputRef = React.useRef()

  return (
    <Input
      ref={inputRef}
      onChange={() => handleSearch(inputRef.current.value)}
      type="text"
      placeholder="Busca una canción..."
    />
  )
}
