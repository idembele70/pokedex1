import styled from 'styled-components';
import Card from '../components/pokedex/Card';
import data from '../components/utils/data';

const Container = styled.div`
  width:100%;
  max-width:985px;
  display:flex;
  flex-wrap:wrap;
  gap: 32px;
  margin:0 auto;
  justify-content: center;
`;
const Pokedex = () => {
  return (
    <Container>
      {data.map(
        ({id, img,name,type})=><Card key={id} type={type} img={img} name={name} id={id}  />
      )}
    </Container>
  )
}

export default Pokedex