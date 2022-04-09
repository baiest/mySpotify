import React from "react"
import { LoaderContainer, Blob } from "./style"
export const Loader = () => {
  return (
    <LoaderContainer>
      <Blob position={1} />
      <Blob position={2} />
      <Blob position={3} />
    </LoaderContainer>
  )
}
