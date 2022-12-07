import { Route, Routes } from "react-router-dom";
import Header from "./components/tools/Header";

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<></>}/>
    <Route path="/liked" element={<></>}/>
    </Routes>
    </>
  );
}

export default App;
