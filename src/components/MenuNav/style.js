import styled, { keyframes } from "styled-components"

export const NavContainer = styled.nav``

const Opacity = keyframes`
  0%{ opacity: 0;}
  100%{ opacity: 1;}
`
export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
  animation: ${Opacity} 0.3s ease-in;
`

export const MenuItem = styled.li`
  padding: 5px;
  margin: 0;
  padding: 0;
  margin-right: 8px;
  font-size: 0.7rem;
  & > a {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 4px;
    color: #fff;
    line-height: 0.7rem;
    text-decoration: none;
    height: 100%;
  }
`
