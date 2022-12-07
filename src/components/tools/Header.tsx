import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import { XS } from '../utils/responsive';

const Container = styled.header`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:70px;
margin-bottom:62px;
${XS({
  padding: "0 34px",
  marginTop:37,
  marginBottom:58
})}
`;

const Top = styled.nav`
  display:flex;
  gap:38px;
  margin-bottom:53px;
  flex-wrap:wrap;
  justify-content:center;
  ${XS({
    gap: 25,
    marginBottom:33
  })}
`;
const Button = styled(NavLink)`
  height:34px;
  width:211px;
  background: #FFFFFF;
  border-radius: 18px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.345em;
  color: #000000;
  text-decoration:none;
  text-transform:uppercase;
  display:flex;
  justify-content:center;
  align-items:center;
  &:hover {
  box-shadow: 0px 4px 16px -3px rgba(0, 0, 0, 0.15);
  }
  ${XS({
    width: 166
  })}
`;
const Bottom = styled.form`
  display:flex;
  gap:18px;
  flex-wrap:wrap;
  justify-content:center;
  ${XS({
    justifyContent:"start"
  })}
`;
const Input = styled.input`
  border:none;
  outline:0;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px -3px rgba(0, 0, 0, 0.07);
  border-radius: 18px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: #C4C4C4;
  padding: 11px 0 11px 22px;
  height:36px;
  transition: all 150ms ease-in;
  &:focus, &:hover {
    box-shadow: 0px 4px 16px -3px rgba(0, 0, 0, 0.15);
  }
`;
const SearchInput = styled(Input)`
  width:405px;
  ${XS({
    width:"100%",
    maxWidth:307
  })}
`;
const NumberInput = styled(Input)`
  width:102px;
`;
const TypeInput = styled(Input)`
  width:131px;
  ${XS({
    width:"60%",
    maxWidth:186
  })}
`;
const Header = () => {
  return (
    <Container>
      <Top>
        <Button to="/">pokedex</Button>
        <Button to="/liked">liked</Button>
      </Top>
      <Bottom>
        <SearchInput placeholder='Search...'/>
        <NumberInput placeholder='Number'/>
        <TypeInput placeholder='Type'/>
      </Bottom>
    </Container>
  )
}

export default Header