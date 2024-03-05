import React from 'react'
import data from "../products/products"
import CombinedComponent from '../Mainone/BothinOne'
// console.log(data)

const b=data.filter((val)=>{

    return val.Type==="Gin";
    
})

// console.log(b)

function Gin() {
  return (
    <CombinedComponent data={b}/>
  )
}

export default Gin
