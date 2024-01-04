import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [ctr,setctr]=useState(1);
  console.log('render');
    useEffect(()=>{
      setctr(5);
    },[]);

  return (
    <>
      {ctr}
      <h1>hi there</h1>
      
    </>
  )
}
function Todo(value){
return(
  <div>
            {value.title}
            {value.description}
          </div>
)
}


export default App
