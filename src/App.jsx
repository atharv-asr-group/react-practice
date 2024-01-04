import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

var todos=[{
  title:"go to gym",
  description:"hi",
  id:1
},{
  title:"go to gym fe",
  description:"hi",
  id:1
},{
  title:"go to gymd wd",
  description:"hi",
  id:1
},{
  title:"go to gym hello",
  description:"hi",
  id:1
}]

function App() {
  // const [todo,setTodo]=useState(todos);
  // setInterval(()=>{
  //   setTodo({
  //     title:"go to ",
  //     description:"hi",
  //     id:1
  //   })
    
  // }, 2000);
  return (
    <>
      <h1>hi there</h1>
      {todos.map((value)=>{
        return(
          <Todo title={value.title} description={value.description}/>
        )
      })}
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
