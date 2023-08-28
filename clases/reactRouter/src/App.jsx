import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'



function App() {


  return (
    <div className='principal'>
   
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default App
