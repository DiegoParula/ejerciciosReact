import React from "react";  
import '../sheetsstyle/Card.css'

function Card({city}){
    

    return(

        <div className="contenedor-pais">
            <h1>Pais: {city.country}</h1>
            <p>Ciudad: {city.city}</p>
            <p>Poblacion: {city.population}</p>
            <div style={{width: 50, height: 50, backgroundColor:`${city.color}`, borderRadius: 50}}  ></div>
            
        </div>

    )
}
 export default Card

