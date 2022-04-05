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
  animation: ${Opaity} 0.3s ease-in;

  @media screen and (min-width: 420px) {
    display: inline-block;
    height: 220px;
    padding: 10px;
    margin: 0;
    box-shadow: 0 4px 8px ${color.shadow};
  }
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

  @media screen and (min-width: 420px) {
    width: 100%;
    overflow: hidden;
    & > img {
      height: auto;
    }
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
  @media screen and (min-width: 420px) { 
    position: absolute;
    padding: 10px;
    width: 100%;
    height: 50%;
    left: 0;
    bottom: 0;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(0, ${color.primaryColor} 70%, transparent 100%);
    &>h3{
      width: 80%;
    }
  }
`

export const Button = styled.button`
  position: absolute;
  botom: 0;
  right: 10px;
  line-height: 0;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  white-space: normal;
  cursor: pointer;
  @media screen and (min-width: 420px) {
    bottom: 10px;
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
