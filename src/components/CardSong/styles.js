import styled from 'styled-components'
import { color } from '../../styles/colors'
export const Card = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background: ${color.card};
  color: #fff;
  border-radius: 8px;
  &>img{
    margin: 0;
    margin-right: 10px;
    width: 50px;
    heigth: 100%;
  }
`

export const Info = styled.div`
  margin-right: 10px;
  &>h3{
    margin: 0;
    font-size: 1rem;
  }
`
