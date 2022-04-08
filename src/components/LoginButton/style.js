import styled from "styled-components"
import { color } from "../../styles/colors"

export const ButtonLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  width: 250px;
  position: absolute;
  bottom: 50%;
  right: calc(50% - 125px);
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  color: #fff;
  transition: all 0.3s ease-in;
  cursor: pointer;
  background: ${({ logged }) => (logged ? color.fontColor : "green")};
  & > svg {
    margin-right: 10px;
  }
`
