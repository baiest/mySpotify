import {
  CLOSE_PLAYER,
  SET_CURRENT_TRACK,
  SET_USER
} from './ActionTypes'

export const initialState = {
  user: null,
  currentTrack: null
}


const reducerOptions = (state, payload) => ({
  [SET_USER]: {...state, user: payload },
  [SET_CURRENT_TRACK]: {...state, currentTrack: payload },
  [CLOSE_PLAYER]: {...state, currentTrack: null }
})

export const contextReducer = (state, action) => {
  try {
    const options = reducerOptions(state, action.payload)
    return options[action.type]
  } catch (error) {
    console.error('Accion no encontrada: ', action.type, 'Error: ', error)
    return state
  }
}

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

export const setTrack = (idTrack) => ({
  type: SET_CURRENT_TRACK,
  payload: idTrack
})

export const closePlayer = () => ({ type: CLOSE_PLAYER })