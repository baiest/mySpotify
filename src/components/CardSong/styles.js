import styled, { keyframes } from "styled-components"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { color } from "../../styles/colors"

const Opaity = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`
export const Card = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  padding: 10px;
  padding-left: 26%;
  background: ${color.card};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 4px ${color.primaryColor}, -2px -2px 4px ${color.shadow};
  animation: ${Opaity} 0.3s ease-in;
`
export const ImgContainer = styled.figure`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  background: #000;
  margin: 0;
  width: 23%;
  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const Info = styled.div`
  margin-right: 10px;
  font-family; 'Montserrat', sans-serif;
  width: 80%;
  &>h3{
    margin: 0;
    font-size: .8rem;
    font-weight: 700;
  }
  &>small{
    font-size: .6rem;
    font-weight: 300;
    color: ${color.fontColor};
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
