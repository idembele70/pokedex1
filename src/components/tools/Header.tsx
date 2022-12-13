import { useObservableCallback, useSubscription } from 'observable-hooks';
import React, { FormEvent, useRef, useState } from 'react';
import {NavLink} from 'react-router-dom'
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs';
import styled from 'styled-components';
import { searchTerm$ } from '../../rxjs/rxjs';
import { XS } from '../utils/responsive';

const Container = styled.header`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:70px;
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

const Header = () => {

  return (
    <Container>
      <Top>
        <Button to="/">pokedex</Button>
        <Button to="/liked">liked</Button>
      </Top>
    
    </Container>
  )
}

export default Header