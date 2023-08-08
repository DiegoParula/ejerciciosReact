import React, { useState } from 'react'
import Card from './Card';

const Lista = ({opcion}) => {
   
  return (
    <div>
        {opcion.map((prod)=>{
       return (<h2 key={index}>{prod.tipo}</h2> ) 
      })}
           
       
    </div>
  )
}

export default Lista