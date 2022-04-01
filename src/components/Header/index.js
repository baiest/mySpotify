import React from 'react'
import PropTypes from 'prop-types'
import { Head, LinkStyle, Title, MenuList, MenuItem } from './style'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const ToHome = ({ title }) => (
  <LinkStyle to='/'>
    <StaticImage
      src='../../images/icon.png'
      width={30}
      style={{
        borderRadius: '50%'
      }}
      layout='fixed'
      alt='Logo de mySpotify'
    />
    <Title>
      {title}
    </Title>
  </LinkStyle>
)

const Menu = () => (
  <nav>
    <MenuList>
      <MenuItem><Link to='/favorites'>Mis favoritos</Link></MenuItem>
      <MenuItem><Link to='/logout'>Salir</Link></MenuItem>
    </MenuList>
  </nav>
)
export const Header = ({ siteTitle }) => (
  <Head>
    <ToHome title={siteTitle} />
    <Menu />
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}
