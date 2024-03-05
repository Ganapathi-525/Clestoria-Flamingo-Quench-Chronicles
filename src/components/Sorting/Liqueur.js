  import React from 'react'

  import data from "../products/products"
import CombinedComponent from '../Mainone/BothinOne'
console.log(data)

const b=data.filter((val)=>{

    return val.Type==="Liqueur"
})
// console.log(b)
  
  function Liqueur() {
    return (
     <>
       <CombinedComponent data={b}/>
     </>
    )
  }
  
  export default Liqueur
  