import styled from "styled-components"
import { color } from "../../styles/colors"
import { Link } from "gatsby"
import { MenuNav } from "../MenuNav"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 50px;
`

export const Head = styled.header`
  background: ${color.primaryColor};
  color: #fff;
  padding: 8px;
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
  font-size: 1.2rem;
`

export const MenuNavHeader = styled(MenuNav)`
  @media screen and (max-width: 650px) {
    display: none;
  }
`

export const UserSection = styled.section`
  display: flex;
  align-items: center;
  width: auto;
  & > h4 {
    margin: 0;
    font-wight: 300;
    font-size: 0.8rem;
    padding: 0 10px;
  }
  & > img {
    margin: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    font-size: 0.7rem;
    object-fit: cover;
  }
`
