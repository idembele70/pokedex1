import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ThumbUp from '../icons/ThumbUp';
const Container = styled.div`
  width:307px;
  height:168px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  display:flex;
  gap:32px;
  justify-content:center;
  align-items:center;
  position:relative;
`;
const Img = styled.img`
  width:126px;
  height:117px;
  object-fit:contain;
`;
const Info = styled.div`
  
`;
const Title = styled.h5`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
`;
const Top = styled.div`
  display:flex;
  gap:8px;
  margin-bottom:6px;
`;
const Id = styled(Title)`
  color: #9E9E9E;
`;
const Name = styled(Title)`
color: #000000;
text-transform:uppercase;
`;
interface TypeProps {
  bgColor:string;
}
const Type = styled.h6<TypeProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 8px;
  line-height: 9px;
  letter-spacing: 0.04em;
  color: #FFFFFF;
  padding: 4px 6px;
  background-color: #${({ bgColor }) => bgColor};
  text-transform:uppercase;
  border-radius:9.5px;
  margin-bottom:3px;
  text-align:center;
`;
interface ThumbUpContainerProps {
  isLiked:boolean;
}
const ThumbUpContainer = styled.div<ThumbUpContainerProps>`
  position:absolute;
  right:10px;
  bottom:10px;
  cursor:pointer;
  border-radius:50%;
  height:29px;
  width:29px;
  border-color: #CACACA;
  border-style:solid;
  border-width:${({ isLiked }) => isLiked ? 0 : 1}px;
  display:flex;
  justify-content:center;
  align-items:center;
  transition: all 150ms ease-in;
  &:hover{
    box-shadow: 0px 4px 16px -3px rgb(0 0 0 / 15%);
  }
  background:${({ isLiked }) => isLiked ? "linear-gradient(202.48deg, #F2F2F2 7.57%, #CFCFCF 90.41%)" : "none"};
  & path {
    fill: #${({ isLiked }) => isLiked ? "FFFFFF" : "E4E4E4"};
  }
`;
export interface CardProps {
  img:string,
  id:string,
  name:string,
  type: string[],
}

const handleColorByType = (element:string) => { 
  switch (element) {
    case "Normal":
      return "CACACA";
    case "Electric":
      return "FFE175"
    case "Fire":
      return "FF8A8A"
    case "Water":
      return "88D1FB"
    case "Ice":
      return "C6EAFF"
    case "Fighting":
      return "FFB169"
    case "Grass":
      return "B4FE7B"
    case "Poison":
      return "BF8CD1"
    case "Ground":
      return "CA9F5E"
    case "Rock":
      return "898373"
    case "Steel":
      return "E4E4E4"
    case "Psychic":
      return "FFB7FC"
    case "Bug":
      return "D1E16F"
    case "Ghost":
      return "805594"
    case "Flying":
      return "5F9FFF"
    case "Dragon":
      return "C699FF"
    default:
      return "FFFFFF"
  }
}

const Card = ({img,id,name,type}:CardProps) => {

  const handleError = (e:React.SyntheticEvent<HTMLImageElement>)=>{
    e.currentTarget.onerror = null;
    e.currentTarget.src = ErrorImgLink
  }
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const LikedList = localStorage.getItem("pokedex1")
    if(LikedList !== null){
    const LikedListParse = JSON.parse(LikedList) as string[]
    if(LikedListParse.find(LikedId=>LikedId === id))
    setIsLiked(true)
  }
  else 
  localStorage.setItem("pokedex1", JSON.stringify([]))
}, [id])
const {pathname} = useLocation()
const handleLike = (id:string) => { 
  const LikedList = localStorage.getItem("pokedex1")
  if(LikedList !== null){
    const LikedListParse = JSON.parse(LikedList) as string[]
    if(LikedListParse.find(LikedId=>LikedId === id)){
      const newLikedList = LikedListParse.filter(
        LikedId=>LikedId !== id
      )
      localStorage.setItem("pokedex1", JSON.stringify(newLikedList))
      setIsLiked(false)
      if(pathname === "/liked")
      window.location.reload()
    }
    else {
        setIsLiked(true)
        localStorage.setItem("pokedex1", JSON.stringify([...LikedListParse, id]))
      }
  }
   }
  const ErrorImgLink = `${process.env.PUBLIC_URL}/img/Pokeball.png`
  return (
    <Container>
      <Img src={img} onError={handleError}/>
      <Info>
        <Top>
      <Id>{id}</Id>
      <Name>{name}</Name>
        </Top>
        {
          type.map(
            element=><Type bgColor={handleColorByType(element)}>{element}</Type>
          )
        }
      </Info>
      <ThumbUpContainer isLiked={isLiked} onClick={()=>handleLike(id)}>
        <ThumbUp/>
      </ThumbUpContainer>
    </Container>
  )
}

export default Card 
