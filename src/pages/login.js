import React from "react"
import { LoginButton } from "../components/LoginButton"
import Seo from "../components/seo"
const Login = ({ location }) => {
  return (
    <>
      <Seo title="login" />
      <LoginButton location={location} />
    </>
  )
}

export default Login
