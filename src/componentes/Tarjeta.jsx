import React from 'react';
import { useParams } from 'react-router-dom';
import{useNavigate} from 'react-router-dom'

const imagenes = require.context('../../public/img',true)



export const Tarjeta = () => {
  
  const {img}=   useParams();
  const {name}= useParams();
  const {des}= useParams();
  const {des2}= useParams()
  const {des3}= useParams();
  console.log(img);
  
const navigate= useNavigate()
const regresar =()=>{
navigate(-1)
}

 

  return (

    <div className="row bg-dark "> 
         <div className="col-4"> 
 
        <img src= { imagenes(`./${img}`)} alt="imagen"
         className="img-thumbnail animate_animated animate_fadeinLeft mt-5 mb-3" />
      
        </div>

        <div className="col-8 animate_animated animate_fadeIn text-info mt-5">
        <h1 className="list-grup-item">Consola : {name}</h1>
        <h1 className="list-grup-item">Marca: {des}</h1>
        <h1 className="list-grup-item">Nombre del juego: {des2}</h1>
        <h1 className="list-grup-item">Descripcion del juego:</h1>
        <h1 className="h4">"{des3}"</h1>
       <button  className="btn btn-outline-info mb-4" onClick={regresar}>volver</button>
       </div>
    </div>
  
  )
}
