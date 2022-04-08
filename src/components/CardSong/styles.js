import styled, { keyframes } from "styled-components"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { FaPlay } from "react-icons/fa"
import { color } from "../../styles/colors"

const Opaity = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`
export const Card = styled.div`
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
  :hover div {
    opacity: 1;
  }

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

export const ButtonPlayContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.05);
  opacity: 0;
  transition: opacity 0.1s ease-in;
  @media screen and (min-width: 420px) {
    justify-content: center;
    align-items: start;
  }
`

export const ButtonPlay = styled(FaPlay)`
  margin-left: 25px;
  color: rgba(255, 255, 255, 0.5);
  @media screen and (min-width: 420px) {
    margin-left: 0;
    margin-top: 25%;
  }
`

export const Info = styled.div`
  margin-right: 10px;
  font-family; 'Montserrat', sans-serif;
  width: 80%;
  
  @media screen and (min-width: 420px) { 
    position: absolute;
    padding: 10px;
    padding-top: 40px;
    width: 100%;
    height: 50%;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(0, ${color.primaryColor} 70%, transparent 100%);
  }
`

const telepronterAnimation = keyframes`
  30% {
    transform: translateY(0);
  }
  90%,
  100% {
    transform: translateY(-70%);
  }
`

export const TitleInfo = styled.span`
  width: 80%;
  min-height: 40px;
  overflow: hidden;
  & > h3 {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 700;
  }
  @media screen and (min-width: 420px) { 
    & > h3 {
      animation: ${({ animation }) =>
        animation && telepronterAnimation} 5s linear infinite;
    }
  `
const lateralAnimation = keyframes`
  30% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-70%);
  }
`

export const ArtistInfo = styled.div`
  position: relative;
  width: 80%;
  min-height: 25px;
  overflow: hidden;
  & > small {
    position: absolute;
    white-space: nowrap;
    font-size: 0.6rem;
    font-weight: 300;
    font-family: "Montserrat", sans-serif;
    color: ${color.fontColor};
    animation: ${({ animation }) => animation && lateralAnimation} 5s linear
      infinite;
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
  color: ${color.fontColor};
  animation: ${LikeAnimation(true)} 0.3s ease-in-out;
`
export const UnLiked = styled(MdFavoriteBorder)`
  color: #fff;
  animation: ${LikeAnimation(false)} 0.3s ease-in-out;
`
