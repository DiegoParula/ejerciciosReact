import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CardPoke = () => {
    const [poke, setPoke] = useState({})

    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

    useEffect(() =>{
        axios(url)
        .then(res =>{
            console.log(res.data)
            setPoke(res.data)
        })
    },[])


  return (
    <div>
        <img src={poke.sprites?.front_default} alt="" />
        <h1>{poke.name}</h1>
    </div>
  )
}

export default CardPoke