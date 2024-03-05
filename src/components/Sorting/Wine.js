 

 import data from "../products/products"
 import CombinedComponent from '../Mainone/BothinOne'
 console.log(data)
 
 const b=data.filter((val)=>{
 
     return val.Type==="Wine"
 })

 const Wine=()=>{


    return (

      <>
      <CombinedComponent data={b}/>
      
      </>
    )
 }

 export default Wine