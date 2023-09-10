import React from 'react';
import '../css/formulario.css';
import { useState } from "react";




export const Formulario = () => {
  
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:9000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),

    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("SU MENSAJE A SIDO ENVIADO EN MINUTOS ");
        } else if (resData.status === "fail") {
          alert("SU MENSAJE A SIDO ENVIADO");
        }
      })


      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };

  return (
    <>  
<div className="datos-1 col-12 bg-black mb-0 ">
     <form className="col"
       style={{
         display: "flex",
         height: "400px",
         justifyContent: "center",
         alignItems: "center",
        }}
        onSubmit={submitEmail}
     >
       <fieldset
         style={{
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           width: "500px",
         }}
       >
         <h1 className= 'subtitulo'>contactate con nosotros </h1>
         <input
           placeholder="Name"
           onChange={handleStateChange}
           name="name"
           value={mailerState.name}
         />
         <input
           placeholder="Email"
           onChange={handleStateChange}
           name="email"
           value={mailerState.email}
         />
         <textarea
           style={{ minHeight: "200px" }}
           placeholder="Message"
           onChange={handleStateChange}
           name="message"
           value={mailerState.message}
         />
         <button style={{ white: "200px"}}>Send Message</button>
       </fieldset>




     </form>

     
   </div>
</>
 
  )
}

