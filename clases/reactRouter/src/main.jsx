import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Faqs from './Faqs'
import Faq from './Faq.jsx'
import ErrorComponent from './ErrorComponent.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} > 
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='faqs/:id' element={<Faq/>} />
        <Route path='*' element={<ErrorComponent/>} />
      </Route>
    </Routes>

    
  </BrowserRouter>
  </React.StrictMode>  
)
