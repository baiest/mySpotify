import styled from "styled-components"

export const Grid = styled.ul`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fit, minmax(310px, 390px));
  gap: 8px;
  margin: 25px 0;
  padding: 0;
  list-style: none;
  transition: all 0.3s;
`

export const Item = styled.li`
  margin: 0;
  padding: 0;
  height: auto;
`
