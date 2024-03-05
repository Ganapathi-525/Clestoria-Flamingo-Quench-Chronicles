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
      
      <h1>Clestoria Flamingo Quench Chronicles</h1>

   
      

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








    </div>
  );
};

export default App;
