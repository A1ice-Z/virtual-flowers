import React from "react";

interface FlowerProps {
    id: string;
    leafs: number;
    lights: number;
    lineLeaves: number;
}

// Flower Component
const Flower: React.FC<FlowerProps> = ({ id, leafs, lights, lineLeaves }) => (
    <div className={`flower ${id}`}>
        <div className={`flower__leafs flower__leafs--${id.split('--')[1]}`}>
            {[...Array(leafs)].map((_, index) => (
                <div key={index} className={`flower__leaf flower__leaf--${index + 1}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {[...Array(lights)].map((_, index) => (
                <div key={index} className={`flowerLight flowerLight--${index + 1}`}></div>
            ))}
        </div>
        <div className="flowerLine">
            {[...Array(lineLeaves)].map((_, index) => (
                <div key={index} className={`flowerLineLeaf flowerLineLeaf--${index + 1}`}></div>
            ))}
        </div>
    </div>
);

export default Flower;