import React from "react";
import TareaFormulario from "./TareaFormulario";
import '../sheetsstyle/ListaDeTareas.css'
import { useState } from "react";
import Tarea from './Tarea'

function ListaDeTareas(){

    const[tareas, setTarea] = useState([])
    const agegarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            //lo hacemos asi xq queremos agregar la tarea
            //al principio del arreglo por eso
            //tarea, ...tareas
            const tareasActualizadas = [tarea, ...tareas]
            setTarea(tareasActualizadas)
        }
    }
    
     
    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTarea(tareasActualizadas)
    };  
    
    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tarea =>{
            if (tarea.id === id){
                tarea.completada = !tarea.completada //va agarrar el valor q tiene y hacer lo opuesto y lo almacena con esa propiedad

            }
            return tarea
        })
        setTarea(tareasActualizadas)
    };
    return(
        <>
            <TareaFormulario onSubmit={agegarTarea}/>
            <div className='tareas-lista-contenedor'>
                
                 {
                    tareas.map((tarea)=>
                        <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        eliminarTarea={eliminarTarea}
                        completarTarea={completarTarea}
                        />

                    )
                 }
            </div>
        </>
    )

}
export default ListaDeTareas