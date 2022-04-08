import React from "react"
import { MenuItem, MenuList, NavContainer } from "./style"
import { Link } from "gatsby"
import { MdFavorite, MdLogout, MdHome } from "react-icons/md"
import { color } from "../../styles/colors"

const ICON_SIZE = 30

const activeStyle = { color: color.fontColor }

export const MenuNav = ({ visible = true, className, isUser = false }) => {
  if (!visible) return null
  return (
    <NavContainer className={className}>
      <MenuList>
        <MenuItem>
          <Link to="/" activeStyle={activeStyle} unselectable="on">
            <MdHome size={ICON_SIZE} /> Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/favoritos" activeStyle={activeStyle}>
            <MdFavorite size={ICON_SIZE} /> Favoritos
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/login" activeStyle={activeStyle}>
            <MdLogout size={ICON_SIZE} /> {isUser ? "LogOut" : "LogIn"}
          </Link>
        </MenuItem>
      </MenuList>
    </NavContainer>
  )
}
