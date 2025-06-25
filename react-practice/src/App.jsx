import { useState } from 'react'
import './App.css'
import {sculptureList} from './data.js'

function App() {
  const totalPgNo=sculptureList.length
  console.log(totalPgNo)
  const[index,setIndex]=useState(0)
  function handleClick(){
    if (index<totalPgNo-1){
      setIndex(index+1)
    }
    else if (index==totalPgNo-1){
      setIndex(0)
    }
    
  }
  return(
    <>
      <button className="next-btn" onClick={()=>(index<totalPgNo-1) ? setIndex(index+1) : setIndex(0)}>next</button>
      <h1>{sculptureList[index].name}</h1>
      <p>Page {index+1} of {totalPgNo}</p>
      <img alt={sculptureList[index].alt}></img>
      <p>{sculptureList[index].description}</p>
    </>
  )
}

export default App
