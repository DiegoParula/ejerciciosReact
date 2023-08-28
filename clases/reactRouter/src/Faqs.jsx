import React from 'react'
import { Link } from 'react-router-dom'

const preguntas = [
  {
  id:1,
  title: "¿Puedo hacer el curso sin tener experiencia y/o conocimientos previos?",
  descripción: "Sí. En Digital House puedes aprender desde cero.Según el curso al que te anotaste, vamos a enviarte contenido previo online…"
  },
  {
  id:2,
  title: "¿Las vacantes son limitadas?",
  descripción: "Sí. Tienen una capacidad máxima de entre 50 y 75 personas, dependiendo el curso."
  },
  {
    id:3,
    title: "¿Hay algun examen previo a entrar?¿En qué consiste?¿Es obligatorio?",
    descripción: "Sí. Tienen una capacidad máxima de entre 50 y 75 personas, dependiendo el curso."
  },
  {
      id:4,
      title: "¿Necesito tener conocimientos previos?",
      descripción: "Sí. Tienen una capacidad máxima de entre 50 y 75 personas, dependiendo el curso."
  },
  {
    id:5,
    title: "¿Si ya tengo conocimientos basicos, vale la pena tomar igual el curso?",
    descripción: "Sí. Tienen una capacidad máxima de entre 50 y 75 personas, dependiendo el curso."
}  
  
  ]

function Faqs() {
  return (
    <div>
      <h1>Faqs</h1>
      <ol>
        {preguntas.map(pregunta => ( 
        <Link key={pregunta.id} to={`${pregunta.id}`} style={{paddingLeft: 13, textDecoration: 'none', color:'white'
        }}> 
         <li>{pregunta.title}</li>
        </Link>))}
      </ol>
    </div>
  )
}

export default Faqs