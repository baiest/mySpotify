import React from "react"
import { MenuItem, MenuList, NavContainer } from "./style"
import { Link } from "gatsby"
import { MdFavorite, MdLogout } from "react-icons/md"

const ICON_SIZE = 30

export const MenuNav = ({ visible = true, className }) => {
  if (!visible) return null
  return (
    <NavContainer className={className}>
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
    </NavContainer>
  )
}
