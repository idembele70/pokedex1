import { Route, Routes } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Header from "./components/tools/Header";

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Pokedex/>}/>
    <Route path="/liked" element={<></>}/>
    </Routes>
    </>
  );
}

export default App;
