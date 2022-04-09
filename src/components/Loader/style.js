import styled, { keyframes } from "styled-components"
import { color } from "../../styles/colors"

const LoadingBlob = keyframes`
  0% { 
    height: 10px; 
    width: 10px; 
  }
  25%, 50% { 
    height: 25px; 
    width: 25px; 
  }
  100% { 
    height: 10px; 
    width: 10px; 
  }
`

export const LoaderContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Blob = styled.span`
  display: block;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background: ${color.fontColor};
  :nth-child(${({ position }) => position}) {
    animation: ${LoadingBlob} 1.5s ease-in-out infinite
      ${({ position }) => position}00ms;
  }
`
