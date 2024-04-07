import React from "react";

interface BallProps {
  color: string;
}

function Ball({ color }:{color:string}) {


    
  return (
    <div
      className="w-20 h-20 rounded-full bg-gray-500 mr-2 border border-black"
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default Ball;