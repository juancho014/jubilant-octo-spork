import React from 'react';
import '../css/tarjetas.css';
import Axios from "axios";
import {Link} from "react-router-dom"
import {useEffect,useState} from 'react';



export const Tarjetas = () => {




  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "http://localhost:3001/tarjetas"
    })
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [setList]);

// const [valor, setValor]=useState(0)

// const sumar =()=>{
//   setValor(valor+1);
// }

  return (
 
  <> 
      
      <div className="container1 mt-0 bg-black">
        {list.map(item => (
         <div  className="container2 ">
          <div className="tcard bg-dark " key={item._id}>
            <img className="card-img-top" src={`../img/${item.img}`} alt="img" />
            <h4 className="card-title text-info text-center mt-2">{item.name}</h4>
            <h4 className="card-title text-info text-center ">{item.description}</h4>
            <h4 className="card-title text-info text-center mb-2 ">{item.description2}</h4>
            
            <button  className="btn btn-link-info">    
            <Link className="text-decoration-none text-info" to={`/juego/${item.img}/${item.name}/${item.description}/${item.description2}/${item.description3}`} >
            MAS INFORMACION... 
            </Link></button>
          {/* <button className="btn btn-black text-info" onClick={sumar} ><i className="bi bi-heart-fill text-danger text-center"></i>
          <p>{valor}</p>
          </button> */}
          
          </div>
        </div>
        ))}
    </div>
    
    </>



  )
}

