import React from 'react'

import data from "../products/products"
import CombinedComponent from '../Mainone/BothinOne'
// console.log(data)

const b=data.filter((val)=>{

    return val.Type==="Beer"
})

// console.log(b)

function Beer() {
  return (
  <>
  {/* <CombinedComponent data={b}/> */}
  <CombinedComponent data={b}/>
  </>
  )
}

export default Beer
