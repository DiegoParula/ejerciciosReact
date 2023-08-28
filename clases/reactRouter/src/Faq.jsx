import React from 'react'

import { useParams } from 'react-router-dom'

const preguntas = [
    {
    id:1,
    title: "¿Puedo hacer el curso sin tener experiencia y/o conocimientos previos?",
    descripcion: "Sí. En Digital House puedes aprender desde cero.Según el curso al que te anotaste, vamos a enviarte contenido previo online…"
    },
    {
    id:2,
    title: "¿Las vacantes son limitadas?",
    descripcion: "Sí. Tienen una capacidad máxima de entre 50 y 75 personas, dependiendo el curso."
    },
    {
      id:3,
      title: "¿Hay algun examen previo a entrar?¿En qué consiste?¿Es obligatorio?",
      descripcion: "Sí. Tienen una capacidad máxima de entre 50 y 75 personas, dependiendo el curso."
    },
    {
        id:4,
        title: "¿Necesito tener conocimientos previos?",
        descripcion: "Sí. Tienen una capacidad máxima de entre 50 y 75 personas, dependiendo el curso."
    },
    {
      id:5,
      title: "¿Si ya tengo conocimientos basicos, vale la pena tomar igual el curso?",
      descripcion: "Sí. Tienen una capacidad máxima de entre 50 y 75 personas, dependiendo el curso."
  }  
    
    ]
const Faq = () => {
    const params = useParams()
    //Utilizamos parseInt solamente para pasar el id al tipo number
const pregunta = preguntas.find(pregunta => pregunta.id === parseInt(params.id))
  return (
    <div>
       <h2>FAQ: desde la pregunta específica {params.id}</h2>
            <section>
                <h3>{pregunta?.title}</h3>
                <p>{pregunta?.descripcion}</p>
            </section>
            
    </div>
  )
}


export default Faq
