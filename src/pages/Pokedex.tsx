import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/pokedex/Card';
import data from '../components/utils/data';

export const CardContainer = styled.div`
  width:100%;
  max-width:985px;
  display:flex;
  flex-wrap:wrap;
  gap: 32px;
  margin:0 auto;
  justify-content: center;
`;

const Pokedex = () => {
  const [limit, setLimit] = useState<number>(15);
  const loadMore = useCallback( () => { 
    const scrollPosition =
    document.body.scrollTop || document.documentElement.scrollTop

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

    if( scrollPosition + 70 > scrollHeight){
      if(limit < data.length && limit + 15 < data.length)
      setLimit(limit + 15)
      else
      setLimit(limit + data.length - limit)
    }
   },[limit])
  useEffect(() => {
    window.addEventListener("scroll", loadMore)
    return ()=>window.removeEventListener("scroll",loadMore)
  }, [loadMore])
  return (
    <CardContainer>
      {data.slice(0,limit).map(
        ({id, img,name,type})=><Card key={id} type={type} img={img} name={name} id={id}  />
      )}
    </CardContainer>
  )
}

export default Pokedex