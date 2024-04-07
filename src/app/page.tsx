'use client';
import React from "react";
import Heading from "./components/Heading";

function Home() {
  return (
    <>
    <div style={{
  backgroundImage: 'url("https://raw.githubusercontent.com/MiguelFranco6/Test/main/2024-03-3022-04-25-ezgif.com-video-to-gif-converter.gif")',
  backgroundSize: '100% 100%',
  height: '95vh',
  backgroundPosition: 'center'
}}>

      <Heading text="Integração de Sistemas Ciber-Físicos" />
      <div className="absolute top-7 right-10">
            <a href="/Login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Login</a>
        </div>
      <div className="absolute top-7 right-32">
        <a href="/Dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Dashboard</a>
      </div>
      
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Criadores: João Cardoso, Miguel Franco e Sara Ablú</a>
      </div>
      </div>
    </>
  );
}

export default Home;



