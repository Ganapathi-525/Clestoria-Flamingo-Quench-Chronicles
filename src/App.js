import React from 'react';


import './App.css'

import LoginForm from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Allwine from './components/Sorting/All wines';
import Beer from './components/Sorting/Beer';
import Brandy from './components/Sorting/Brandy';
import Gin from './components/Sorting/Gin';
import Liqueur from './components/Sorting/Liqueur';
import Whisky from './components/Sorting/Whisky';
import Wine from './components/Sorting/Wine';





// console.log(data)

const App = () => {
  return (
    <div className='containr'>
      
      {/* <h1>Clestoria Flamingo Quench Chronicles</h1> */}
      <h1 id='header'>▁ ▂ ▄ ▅ ▆ ▇ █ Clestoria Flamingo Quench Chronicles █ ▇ ▆ ▅ ▄ ▂ ▁ </h1>

   
      

   { <BrowserRouter>

  <Routes>
    { <Route path='/' Component={LoginForm} />  }
    <Route path="/Navbar" Component={Navbar}/>
    <Route path="/Allwine" Component={Allwine}/>
    <Route path="/Beer" Component={Beer}/>
    <Route path="/Brandy" Component={Brandy}/>
    <Route path="/Gin" Component={Gin}/>
    <Route path="/Liqueur" Component={Liqueur}/>
    <Route path="/Whiskey" Component={Whisky}/>
    <Route path="/Wine" Component={Wine}/>



  
  </Routes>
   
   
   </BrowserRouter>}



   {/* <button class="Btn">
  SKIP THIS
  <svg viewBox="0 0 320 512" class="svg">
    <path
      d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"
    ></path>
  </svg>
</button> */}



 
    </div>
  );
};

export default App;
