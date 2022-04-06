import React from "react"
import { ListSongsUI } from "./ListSongsUI"

const initialState = {
  data: [],
  loading: false,
  error: "",
  total: -1,
}

const songsReducer = (state, action) => {
  let newData = []
  if (typeof action.payload === "object") {
    newData = [...state.data, ...action.payload]
  }
  const reducer = {
    LOADING: { ...state, loading: true },
    SET_DATA: { ...state, loading: false, data: newData },
    SET_TOTAL: { ...state, loading: false, total: action.payload },
    ERROR: { ...state, loading: false, error: action.payload },
  }
  try {
    return reducer[action.type]
  } catch (error) {
    return state
  }
}

export const ListSongs = ({ getData, handleIntersection }) => {
  const [state, dispatch] = React.useReducer(songsReducer, initialState)
  React.useEffect(() => {
    dispatch({ type: "LOADING" })
    getData()
      .then(data => {
        dispatch({ type: "SET_DATA", payload: data })
        data[0] && dispatch({ type: "SET_TOTAL", payload: data[0].totalTracks })
        data.error && dispatch({ type: "ERROR", payload: data.error.message })
      })
      .catch(error => dispatch({ type: "ERROR", payload: error.message }))
  }, [getData])

  return (
      <ListSongsUI
        {...state}
        handleIntersection={handleIntersection}
      />
  )
}
