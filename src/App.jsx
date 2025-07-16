import React from 'react';
import '@fontsource/poppins';
import Navbar from './Component/Header/Navbar';
import Home from './Component/Homes/Home';
import Roadmap from './Component/Roadmaps/Roadmap';
import Works from './Component/Works/Work';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Roadmap></Roadmap>
      <Works></Works>
    </div>
  );
};

export default App;