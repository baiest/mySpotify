import styled, { keyframes } from "styled-components"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { color } from "../../styles/colors"

export const Card = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background: ${color.card};
  color: #fff;
  border-radius: 8px;
  & > img {
    margin: 0;
    margin-right: 10px;
    width: 50px;
    heigth: 100%;
    border-radius: 6px;
  }
`

export const Info = styled.div`
  margin-right: 10px;
  font-family; 'Montserrat', sans-serif;
  &>h3{
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
  }
  &>small{
    font-size: .8rem;
    font-weight: 300;
  }
`

const LikeAnimation = like => keyframes`
  0% {
    transform: scale(1);
  }
  30%, 60% {
    transform: scale(${like ? "1.2" : ".8"});
  }
  100% {
    transform: scale(1);
  }
`
export const Liked = styled(MdFavorite)`
  animation: ${LikeAnimation(true)} 0.3s ease-in-out;
`
export const UnLiked = styled(MdFavoriteBorder)`
  animation: ${LikeAnimation(false)} 0.3s ease-in-out;
`
