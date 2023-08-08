import React, { useState } from 'react'
import Card from './Card';

const Lista = ({opcion, cant}) => {
 
  
  return (
    <div>
       <h2>{opcion} x {cant}</h2>
    </div>
  )
}

export default Lista