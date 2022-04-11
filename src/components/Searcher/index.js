import React from "react"
import { Input, SectionSearch, Icon } from "./style"
export const Searcher = ({ handleSearch }) => {
  const inputRef = React.useRef()

  return (
    <SectionSearch>
      <Input
        ref={inputRef}
        onChange={() => handleSearch(inputRef.current.value)}
        type="text"
        placeholder="Buscar una canción..."
      />
      <Icon size={30} />
    </SectionSearch>
  )
}
