import styled from "styled-components"
import { color } from "../../styles/colors"

export const Input = styled.input`
  width: 100%;
  padding: 5px 8px;
  border-radius: 25px;
  outline: none;
  border: none;
  font-size: 0.9rem;
  font-family: Montserrat, sans-serif;
  &:focus {
    outline-style: solid;
    outline-color: ${color.fontColor};
    outline-offset: 1px;
    outline-width: 1px;
    transition: outline 0.3s;
  }
`
