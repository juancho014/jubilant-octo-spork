import React from 'react'
import { Carrucel } from './componentes/carrucel';
import { Footer } from './componentes/footer';
import { Formulario } from './componentes/Formulario';
import { Inicio } from './componentes/inicio';
import {Tarjetas} from './componentes/Tarjetas'

export const Pagina = () => {
  return (
    <div>
      <Inicio/>
      <Tarjetas />
      <Carrucel/>
      <Formulario/>
      <Footer/>
    </div>
  )
}
