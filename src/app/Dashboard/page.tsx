'use client'
import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import {collection, getDocs, doc} from "firebase/firestore";
import {ref, get, update} from 'firebase/database'
import Linechart from "../components/Linechart";
import { db } from "../components/firebaseConfig";
import Ball from "../components/Ball";
import Alarms from "../components/Alarms"


function Dashboard() {

  
  const [inputValue, setInputValue] = useState<number>(1); // State for user input, initialized with 1
  const [tempInputValue, setTempInputValue] = useState<number | "">(1); // Temporary state for input value
  const { colorX, colorY, colorZ } = Alarms();
  // console.log("colorx" + colorX)
  // console.log("colory" + colorY)
  // console.log("colorz" + colorZ)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim(); // Remove leading and trailing whitespace
    setTempInputValue(value === "" ? "" : Number(value)); // Set empty string if value is empty, otherwise parse to number
  };

  const handleSubmit = () => {
    setInputValue(tempInputValue === "" ? 0 : Number(tempInputValue)); // Convert empty string to 0, otherwise parse to number
  };
  
  return (
      <>
        <Heading text="Dashboard"/>
        <div className="flex justify-center absolute bottom-8 left-0 right-0">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-2 py-1 mr-2 focus:outline-none focus:border-blue-500 "
          value={tempInputValue} // Define the value of the input based on temporary state
          onChange={handleInputChange} // Update the temporary state when the input value changes
        />
        <button
          type="button" // Use type="button" to avoid form submission
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4"
          onClick={handleSubmit} // Call the handleSubmit function when the button is clicked
        >
          Submit
        </button>
  
        </div>
        <div className="absolute top-48 left-16">
          <Ball color= {colorX} />
        </div>
        <div className="absolute top-48" style={{ left: "590px" }}>
          <Ball color={colorY}/>
        </div>
        <div className="absolute top-48" style={{ right: "350px" }}>
          <Ball color={colorZ} />
        </div>
        <div className="absolute top-7 right-10">
            <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</a>
        </div>
        <div className="grid grid-rows-6">
        <div className="row-span-1   grid  grid-cols-3 gap-x-10"/>

          <div className="row-span-1 grid  grid-cols-3 gap-x-10">
            <div className="col-span-1 text-xl flex justify-center items-center bg-green-500 mx-4 mt-3">
              <strong>Eixo X</strong>
            </div>
            <div className="col-span-1 text-xl flex justify-center items-center bg-green-500 mx-4 mt-3">
              <strong>Eixo Y</strong>
            </div>
            <div className="col-span-1 text-xl flex justify-center items-center bg-green-500 mx-4 mt-3">
              <strong>Eixo Z</strong>
            </div>
          </div>
          <div className="row-span-3 grid  grid-cols-3 gap-10">
            <div className="col-span-1 text-xl flex justify-center items-center bg-blue-100 mx-4" >
              <Linechart axis="x" delay={inputValue}/>
              
            </div>
            <div className="col-span-1 text-xl flex justify-center items-center bg-blue-100 mx-4">
              <Linechart axis="y" delay={inputValue}/>
              
            </div>
            <div className="col-span-1 text-xl flex justify-center items-center bg-blue-100 mx-4">
              <Linechart axis="z" delay={inputValue}/>  

            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Dashboard;