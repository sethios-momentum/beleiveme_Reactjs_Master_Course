import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"



const Welcome = ()=>{
  const namer = "Tresor";
  return (

  
    <h2> bienvenue dans Mon app {namer === "sethios"?"Ingenir": "bro"}</h2>
  );
}

createRoot(document.querySelector("#root")!).render(

<Welcome />
);
