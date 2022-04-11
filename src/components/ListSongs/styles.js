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
  & > p {
    text-align: center;
    font-family: Montserrat, sans-serif;
  }
  @media screen and (min-width: 420px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    gap: 20px;
  }
`

export const Item = styled.li`
  margin: 0;
  padding: 0;
  height: auto;
  &:active, &:focus border: 5px solid orange
`
