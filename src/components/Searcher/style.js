import styled from "styled-components"
import { color } from "../../styles/colors"
import { MdSearch } from "react-icons/md"

export const SectionSearch = styled.section`
  position: relative;
  max-width: 620px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`
export const Input = styled.input`
  width: 100%;
  padding: 5px 8px;
  padding-right: 40px;
  margin: 0 auto;
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

export const Icon = styled(MdSearch)`
  position: absolute;
  right: 5px;
  color: ${color.primaryColor};
`
