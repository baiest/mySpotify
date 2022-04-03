import React from "react"
import { User } from "../providers/User"
import { navigate } from "gatsby"
const Login = ({ location }) => {
  const code = new URLSearchParams(location.search).get("code")
  const [error, setError] = React.useState("")
  const [logged, setLogged] = React.useState(User.isLogged())
  React.useEffect(() => {
    code &&
      User.getToken(code)
        .then(() => {
          setLogged(User.isLogged())
          navigate("/favoritos")
        })
        .catch(e => {
          console.log(e.message)
          setError(e.message)
          setLogged(false)
        })
  }, [])

  const handleLog = () => {
    if (!logged) {
      window.location.href = User.getAuth()
    } else {
      User.logOut()
      setLogged(false)
    }
  }
  return (
    <div>
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
        {!logged ? "Login Spotify" : "Salir de Spotify"}
      </button>
    </div>
  )
}

export default Login
