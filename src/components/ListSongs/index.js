import React from "react"
import { ListSongsUI } from "./ListSongsUI"

const initialState = {
  data: [],
  loading: false,
  error: "",
  total: -1,
}

const songsReducer = (state, action) => {
  let newData = new Set([])
  if (action.payload && typeof action.payload === "object") {
    newData = new Set([...state.data, ...action.payload])
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

export const ListSongs = ({
  getData,
  handleIntersection,
  isSearching = false,
  setIsSearching = () => {},
}) => {
  const [state, dispatch] = React.useReducer(songsReducer, initialState)

  React.useEffect(() => {
    isSearching && dispatch({ type: "SET_DATA", payload: null })
    dispatch({ type: "LOADING" })
    let isAbort = false
    getData()
      .then(data => {
        if (!isAbort) {
          dispatch({ type: "SET_DATA", payload: new Set(data) })
          data[0] &&
            dispatch({ type: "SET_TOTAL", payload: data[0].totalTracks })
          data.error && dispatch({ type: "ERROR", payload: data.error.message })
        }
      })
      .catch(error => dispatch({ type: "ERROR", payload: error.message }))
    return () => {
      isAbort = true
      setIsSearching(false)
    }
  }, [getData])

  return (
    <ListSongsUI
      {...state}
      data={Array.from(state.data)}
      handleIntersection={handleIntersection}
    />
  )
}
