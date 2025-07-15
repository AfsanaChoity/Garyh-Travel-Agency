import React from 'react';
import '@fontsource/poppins';
import Navbar from './Component/Header/Navbar';
import Home from './Component/Homes/Home';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
};

export default App;