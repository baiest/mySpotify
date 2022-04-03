import React from "react"
import PropTypes from "prop-types"
import { Head, LinkStyle, Title, MenuList, MenuItem, Container } from "./style"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { MdFavorite, MdLogout } from "react-icons/md"

const ICON_SIZE = 35

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

const Menu = () => (
  <nav>
    <MenuList>
      <MenuItem>
        <Link to="/favoritos">
          <MdFavorite size={ICON_SIZE} /> favoritos
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/login">
          <MdLogout size={ICON_SIZE} /> Salir
        </Link>
      </MenuItem>
    </MenuList>
  </nav>
)
export const Header = ({ siteTitle }) => (
  <Head>
    <Container>
      <ToHome title={siteTitle} />
      <Menu />
    </Container>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}
