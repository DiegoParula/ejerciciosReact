import Home from "./Home"
import Contacto from "./Contacto"
import Beer from "./Beer"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
   <div>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
   </div >
   <div className="navbar">
   <Navbar />
   </div>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='contacto' element={<Contacto/>}/>
    <Route path='/beer/:id' element={<Beer/>}/>

   </Routes>
   </>
   )
}
//<Route path='beer' element={<Beer/>}/>
export default App
