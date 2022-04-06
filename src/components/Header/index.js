import React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { User } from "../../providers/User"
import {
  Head,
  LinkStyle,
  Title,
  MenuNavHeader,
  Container,
  UserSection,
} from "./style"
import { AppContext } from "../../Context"
import { setUser } from "../../Context/ContextReducer"

const ToHome = ({ title }) => (
  <LinkStyle to="/">
    <StaticImage
      src="../../images/icon.png"
      width={30}
      style={{
        borderRadius: "50%",
      }}
      layout="fixed"
      alt="Logo de mySpotify"
    />
    <Title>{title}</Title>
  </LinkStyle>
)

const UserContainer = ({ name, image }) => (
  <UserSection>
    <h4>{name}</h4>
    <img src={image} alt="usuario profile" />
  </UserSection>
)
export const Header = ({ siteTitle }) => {
  const [state, dispatch] = React.useContext(AppContext)
  const { user } = state
  
  React.useEffect(() => !user && User.isTokenInStorage() && User.getUser()
    .then(user => dispatch(setUser(user)))
    .catch(console.error), [])
  return (
    <Head>
      <Container>
        <ToHome title={siteTitle} />
        <div style={{ display: "flex" }}>
          <MenuNavHeader />
          {user && <UserContainer {...user} />}
        </div>
      </Container>
    </Head>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
