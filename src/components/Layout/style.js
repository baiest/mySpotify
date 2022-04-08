import styled from "styled-components"
import { color } from "../../styles/colors"
import { MenuNav } from "../MenuNav"

export const Container = styled.main`
  max-width: 1200px;
  min-width: 320px;
  margin: 0 auto;
  padding: 10px 10px 80px 10px;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  positon: relative;
  color: #fff;
`

export const MenuNavLayout = styled(MenuNav)`
  position: fixed;
  padding: 10px;
  background: ${color.primaryColor};
  width: 100%;
  bottom: 0;
  & > ul {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
  @media screen and (min-width: 420px) {
    display: none;
  }
`
