import { useEffect, useState } from 'react';
import './App.css';

import  Axios from "axios";
function App() {
   let [cat,catfact]= useState("");


   const factcat=()=>{
    Axios.get("https://catfact.ninja/fact")
    .then((res) => {
      catfact(res.data.fact); // Logs the data from the response
    })
   }
   useEffect(()=>{
    Axios.get("https://catfact.ninja/fact")
    .then((res) => {
      catfact(res.data.fact); // Logs the data from the response
    })
   },[])
  

  return (
    <div className="App">
      <button onClick={factcat} > Generate Cat Fact</button>
      <p>{cat}</p>
    </div>
  );
}

export default App;
