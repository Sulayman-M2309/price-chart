import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Priceoptions from './components/Priceoptions/Priceoptions';
import LineChart from './components/LineChart/LineChart';
import Phones from './components/Phones/Phones';

const App = () => {
  return (
    <div>
  <Navbar></Navbar>
  <Priceoptions></Priceoptions>
  <LineChart></LineChart>
  <Phones></Phones>
    </div>
  );
};

export default App;