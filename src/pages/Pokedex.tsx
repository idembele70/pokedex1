import { useState } from "react";
import Cards, { CardsProps } from "../components/pokedex/Cards"
import InputContainer from "../components/pokedex/InputContainer";

const Pokedex = () => {
  const [search, setSearch] = useState<{
    name:string,
    value:string
  }>({
      name:"",
      value:""
    });
  return (
    <>
    <InputContainer onSearch={setSearch}/>
    <Cards search={search}/>
    </>
  )
}

export default Pokedex