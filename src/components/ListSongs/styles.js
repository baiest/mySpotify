import styled from "styled-components"

export const Grid = styled.ul`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fit, 270px);
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Item = styled.li`
  margin: 0;
  padding: 0;
`
