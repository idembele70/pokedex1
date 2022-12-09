import React, { useEffect, useState } from 'react'
import Card, { CardProps } from '../components/pokedex/Card';
import data from '../components/utils/data';
import { CardContainer } from './Pokedex';

const LikedList = () => {
  const [LikeDB, setLikeDB] = useState<CardProps[]>([]);
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
  }, [])
  return (
    <CardContainer>
      {
        LikeDB?.map(
          ({id, img,name,type})=><Card key={id} type={type} img={img} name={name} id={id}  />
        )
      }
    </CardContainer>
  )
}

export default LikedList