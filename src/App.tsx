import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Checkout } from './scenes/checkout/Checkout';
import { Confirmation } from './scenes/checkout/Confirmation';
import { Navbar } from './scenes/global/Navbar';
import { Home } from './scenes/home/Home';
import { ItemsDetail } from './scenes/itemsDetails/ItemsDetail';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:itemId' element={<ItemsDetail/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/checkout/success' element={<Confirmation/>}/>
      </Routes>
    </div>
  );
}

export default App;
