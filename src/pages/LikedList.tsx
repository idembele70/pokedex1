import React, { useEffect, useState } from 'react'
import Card, { CardProps } from '../components/pokedex/Card';
import data from '../components/utils/data';
import { CardContainer } from './Pokedex';
import styled from 'styled-components';
const EmptyContainer = styled.div`
  
`;
const Title = styled.h1`
  font-family:"Roboto";
  font-size:2rem;
  font-weight:600;
  margin:10px 0;
  text-align:center;
`;
const Image = styled.img`
  width:120px;
  height:120px;
  object-fit:contain;
  margin:0 auto;
  display:block;
`;
const Paragraph = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 0.75rem;
line-height: 16px;
`;
const Loader = styled.h1`
  font-family:"Roboto";
  font-size:4rem;
  font-weight:600;
  margin:10px 0;
  text-align:center;
  text-transform: capitalize;
`;
const LikedList = () => {
  const [LikeDB, setLikeDB] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const likedId = localStorage.getItem("pokedex1")
    if(likedId !== null) {
      const likedIdParse = JSON.parse(likedId)
     const liked=  data.filter(
        ({id})=> likedIdParse.includes(id)
      ).map(
        ({id, img,name,type})=>({id, img,name,type})
      )
      setLikeDB(liked)
    }
    setLoading(false)
  }, [])
  const EmptyLink = `${process.env.PUBLIC_URL}/img/Pokeball.png`
  return (
    <CardContainer>
      {
        LikeDB.length > 0 ?
        LikeDB?.map(
          ({id, img,name,type})=><Card key={id} type={type} img={img} name={name} id={id}  />
        ) : 
        loading ? 
        <Loader>
          loading...
        </Loader>
        :
          <EmptyContainer>
            <Image src={EmptyLink}/>
            <Title>OOPS!</Title>
            <Paragraph>There is no pokemon found in your Liked pokemons List.
              Please click below to go to home page.
            </Paragraph>
          </EmptyContainer>
      }
    </CardContainer>
  )
}

export default LikedList