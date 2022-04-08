import React from "react"
import { AppContext } from "../../Context"
import { closePlayer } from "../../Context/ContextReducer"
import { Spotify } from "./style"

export const Player = () => {
  const [state, dispatch] = React.useContext(AppContext)
  const { currentTrack } = state

  const handleCloseTrack = () => dispatch(closePlayer())
  if (!currentTrack) return null
  return (
    <Spotify>
      <p
        style={{
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Cargando...
      </p>
      <iframe
        title={currentTrack}
        src={`https://open.spotify.com/embed/track/${currentTrack}?utm_source=generator`}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
      {/* <button
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
      </button> */}
    </Spotify>
  )
}
