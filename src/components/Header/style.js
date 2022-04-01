import styled from 'styled-components'
import { color } from '../../styles/colors'
import { Link } from 'gatsby'

export const Head = styled.header`
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  background: ${color.card};
  color: #fff;
`

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 4px;
  text-decoration: none;
  color: ${color.fontColor}
`

export const Title = styled.h1`
  margin: 0;
  margin-left: 4px;
  font-size: 1.4rem;
`

export const MenuList = styled.ul`
  display: flex;
  height: 100%;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const MenuItem = styled.li`
  display: grid;
  place-content: center;
  padding: 5px;
  margin: 0;
  margin-right: 8px;
  &>a{
    color: #FFF;
    text-decoration: none;
  }
`
