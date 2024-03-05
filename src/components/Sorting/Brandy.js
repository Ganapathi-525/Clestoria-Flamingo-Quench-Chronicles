
 

 import data from "../products/products"
 import CombinedComponent from '../Mainone/BothinOne'
 console.log(data)
 
 const b=data.filter((val)=>{
 
     return val.Type==="Brandy"
 })



const Brandy=()=>{


    return (

        <>
        <CombinedComponent data={b}/>
        </>
    )
}


export default Brandy