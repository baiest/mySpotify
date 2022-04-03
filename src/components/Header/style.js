import styled from "styled-components"
import { color } from "../../styles/colors"
import { Link } from "gatsby"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 70px;
`

export const Head = styled.header`
  background: ${color.primaryColor};
  color: #fff;
`

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 4px;
  text-decoration: none;
  color: ${color.fontColor};
`

export const Title = styled.h1`
  margin: 0;
  margin-left: 4px;
  font-size: 1.4rem;
`

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
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
