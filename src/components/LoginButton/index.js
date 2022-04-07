import React from "react"
import { User } from "../../providers/User"
import { navigate } from "gatsby"
import { AppContext } from "../../Context"
import { setTrack, setUser } from "../../Context/ContextReducer"

export const LoginButton = ({ location }) => {
  const code = new URLSearchParams(location.search).get("code")
  const [error, setError] = React.useState("")
  const [logged, setLogged] = React.useState(User.isTokenInStorage())
  const [, dispatch] = React.useContext(AppContext)

  React.useEffect(() => {
    dispatch(setTrack(null))
    code &&
      User.setToken(code)
        .then(() => {
          setLogged(User.isTokenInStorage())
          User.getUser()
            .then(user => dispatch(setUser(user)))
            .catch(console.log)
          navigate("/favoritos")
        })
        .catch(e => {
          console.log(e.message)
          setError(e.message)
          setLogged(false)
        })
  }, [code, dispatch])

  const handleLog = () => {
    if (!logged) {
      window.location.href = User.getAuth()
    } else {
      User.logOut()
      setLogged(false)
      dispatch(setUser(null))
    }
  }
  return (
    <>
      {error}
      <button
        style={{
          background: "green",
          // margin: '0 auto',
          height: "45px",
          width: "250px",
          position: "absolute",
          top: "50%",
          bottom: "50%",
          right: "calc(50% - 125px)",
          textAlign: "center",
          outline: "none",
          border: "none",
          borderRadius: "15px",
          padding: "10px 15px",
        }}
        onClick={handleLog}
      >
        {" "}
        {!logged ? "Login Spotify" : "Salir de Spotify"}
      </button>
    </>
  )
  // return <p>Login</p>
}
