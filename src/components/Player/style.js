import styled, { keyframes } from "styled-components"
import { color } from "../../styles/colors"

const slideUp = keyframes`
  0%{
    transform: translateY(80px);
    opacity: .6;
  }
  80%{
    transform: translateY(-20px);
  }
  100%{
    transform: translateY(0px);
    opacity: 1;
  }
`

export const Spotify = styled.div`
  position: sticky;
  background: ${color.backgroud};
  background-opacity: 0.4;
  display: grid;
  place-content: center;
  bottom: 80px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 75%;
  height: 80px;
  border-radius: 12px;
  animation: ${slideUp} 0.4s ease-in-out;
  & > p {
    margin: 0;
  }
  & > iframe {
    position: absolute;
    margin: 0;
    border-radius: 12px;
  }
`
