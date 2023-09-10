


import { Footer } from './componentes/footer';
import { Formulario } from './componentes/Formulario';
import { Pagina } from './Pagina';
import { Navegacion } from './componentes/nav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Tarjeta } from './componentes/Tarjeta';
import { NotFoud } from './componentes/NotFoud';
import { Tarjetas } from './componentes/Tarjetas';

function App() {
  return (
    <> 
    <div >
      <Router>
     <Navegacion />
     <Routes>

        <Route path="/" element={<Pagina/>} ></Route>
        <Route path="/juegos" element={<Tarjetas/>}></Route>
        <Route path="/juego/:img/:name/:des/:des2/:des3" element={<Tarjeta />}></Route>
        <Route path="/email" element={<Formulario/>}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="*" element={<NotFoud />}></Route>
        </Routes>
     </Router>
   
    </div></>
   
  );
}

export default App;
