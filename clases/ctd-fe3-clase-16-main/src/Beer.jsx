import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'


//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    
    const getBeer = async()=>{
        //Deberas completar este fetch con el parametro correspondiente
        const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
        const data = await res.json()
        setBeer(data[0])
    }

    useEffect(()=>{
        getBeer()
    },[])
    
  
  
  return (
    <div className='beer'>
        <h2>Cerveza numero...</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button onClick={()=> navigate(-1)}>Go back</button>
    </div>

  )
}

export default Beer