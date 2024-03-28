import React from 'react';
import './FlowerStyling.css';
import Flower from './components/Flower';

const flowersData = [
  {
    id: 'flower--1',
    leafs: 4,
    lights: 8,
    lineLeaves: 6,
  },
  {
    id: 'flower--2',
    leafs: 4,
    lights: 8,
    lineLeaves: 4,
  },
  {
    id: 'flower--3',
    leafs: 4,
    lights: 8,
    lineLeaves: 4,
  },
];

function Flowers() {
  return (
    <div className="App">
      <div className="night"></div>
      <div className="flowers">
        {flowersData.map((flower, index) => (
          <Flower key={index} {...flower} />
        ))}
      </div>
      <div className="banner">
        <p>Sending virtual flowers your way</p>
      </div>
    </div>
  );
}

export default Flowers;
