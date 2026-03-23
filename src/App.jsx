import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home";
import Presentazione from "./pages/presentazione";
import Products from "./pages/products";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/presentazione" element={<Presentazione/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
