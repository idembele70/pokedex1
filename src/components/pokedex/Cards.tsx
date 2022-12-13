import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components';
import data from '../utils/data';
import Card, { CardProps } from './Card';

export const CardContainer = styled.div`
  width:100%;
  max-width:985px;
  display:flex;
  flex-wrap:wrap;
  gap: 32px;
  margin:62px auto 0;
  justify-content: center;
`;

export interface CardsProps {
  search:{
    name:string,
    value:string
  }
}
const Cards = (props:CardsProps) => {
  const [limit, setLimit] = useState<number>(15);
  const [CardData, setCardData] = useState<CardProps[]>([]);
  const loadMore = useCallback( () => { 
    const scrollPosition =
    document.body.scrollTop || document.documentElement.scrollTop

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

    if( scrollPosition + 70 > scrollHeight){
      if(limit < CardData.length && limit + 15 < CardData.length)
      setLimit(limit + 15)
      else
      setLimit(limit + CardData.length - limit)
    }
   },[limit,CardData])
  useEffect(() => {
    window.addEventListener("scroll", loadMore)
    return ()=>window.removeEventListener("scroll",loadMore)
  }, [loadMore])
  const {value:searchValue,name:searchName} = props.search
  useEffect(() => {
    setLimit(15)
    if(searchValue !== ""){
      if(searchName === "name")
      setCardData(
        data.filter(
          el=>el.name.toLowerCase().includes(searchValue)
        )
      )
      else if(searchName === "number")
      setCardData(
        data.filter(
          el=>el.id.toLowerCase().includes(searchValue)
        )
      )
      else if(searchName === "type")
      setCardData(
        data.filter(
          el=>el.type.find(tp=>tp.toLowerCase().includes(searchValue))
        )
      ) 
    }
    else 
    setCardData(data)
    
  }, [searchName, searchValue])
  return (
    
    <CardContainer>
      {CardData.slice(0,limit).map(
        ({id, img,name,type})=><Card key={id} type={type} img={img} name={name} id={id}  />
      )}
    </CardContainer>
  )
}

export default Cards