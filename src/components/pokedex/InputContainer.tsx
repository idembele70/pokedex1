import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { XS } from '../utils/responsive';
const Container = styled.form`
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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
  &[type=number] {
  -moz-appearance: textfield;
}
`;
const TypeInput = styled(Input)`
  width:131px;
  ${XS({
    width:"60%",
    maxWidth:186
  })}
`;
interface InputContainerProps {
  onSearch:Function
}
const InputContainer = ({onSearch}:InputContainerProps) => {
  const nameEl = useRef<HTMLInputElement>(null)
  const numberEl = useRef<HTMLInputElement>(null)
  const typeEl = useRef<HTMLInputElement>(null)
  const handleSearch = (ev:React.ChangeEvent<HTMLInputElement>) => { 
    onSearch({
      name: ev.target.name,
      value: ev.target.value
    })
    switch (ev.target.name) {
          case "name":
            if(numberEl.current !== null && typeEl.current !== null){
              numberEl.current.value = ""
              typeEl.current.value = ""
            }
            break;
          case "number":
            if(nameEl.current !== null && typeEl.current !== null){
              nameEl.current.value = ""
              typeEl.current.value = ""
            }
            break;
            case "type":
            if(numberEl.current !== null && nameEl.current !== null){
              numberEl.current.value = ""
              nameEl.current.value = ""
            }
            break;
          default:
            break;
        }
      }

  return (
    <Container>
    <SearchInput type="text" onChange={handleSearch} name="name" placeholder='Search...' ref={nameEl}/>
    <NumberInput type="number" onChange={handleSearch} name="number" placeholder='Number' ref={numberEl}/>
    <TypeInput type="text" onChange={handleSearch} name="type" placeholder='Type' ref={typeEl}/>
  </Container>
  )
}

export default InputContainer