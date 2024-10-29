import { BrowserRouter,Routes,Route } from "react-router-dom"

import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"

// const imgURL="src/assets/react.svg"
function App(){

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Sobre" element={<Sobre/>}/>
          <Route path="/Contato" element={<Contato/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App