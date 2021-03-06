import React from "react"
import { AppContext } from "../../Context"
import { Loader } from "../Loader"
import { Spotify } from "./style"
// import { closePlayer } from "../../Context/ContextReducer"

export const Player = () => {
  const [state] = React.useContext(AppContext)
  const { currentTrack } = state

  // const handleCloseTrack = () => dispatch(closePlayer())

  if (!currentTrack) return null
  return (
    <Spotify>
      <Loader />
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
