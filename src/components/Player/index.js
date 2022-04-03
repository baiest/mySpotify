import React from "react"
import { Spotify } from "./style"

export const Player = ({ idTrack, handleCloseTrack }) => {
  if (!idTrack) return null
  return (
    <Spotify>
      <p>Cargando...</p>
      <iframe
        src={`https://open.spotify.com/embed/track/${idTrack}?utm_source=generator`}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
      <button
        style={{
          position: "absolute",
          background: "red",
          right: "-10px",
          top: "-10px",
          border: "none",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
        }}
        onClick={handleCloseTrack}
      >
        X
      </button>
    </Spotify>
  )
}
