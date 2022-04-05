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
  const [state, setState] = React.useState({
    name: "",
    image: "",
  })
  React.useEffect(() => {
    User.getUser().then(setState).catch(console.log)
  }, [])
  return (
    <Head>
      <Container>
        <ToHome title={siteTitle} />
        <div style={{ display: "flex" }}>
          <MenuNavHeader />
          {state.name && <UserContainer {...state} />}
        </div>
      </Container>
    </Head>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
