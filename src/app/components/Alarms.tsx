import React, { useEffect, useState } from 'react';
import { ref, get, push } from 'firebase/database';
import { db } from "../components/firebaseConfig";

function Alarms() {
  // Defina os estados para colorX, colorY e colorZ
  const [colorX, setColorX] = useState("lightgreen");
  const [colorY, setColorY] = useState("lightgreen");
  const [colorZ, setColorZ] = useState("lightgreen");

  useEffect(() => {
    const fetchData = async () => {


      const dataRefX = ref(db, "/alarmsX");
      const dataRefY = ref(db, "/alarmsY");
      const dataRefZ = ref(db, "/alarmsZ");
      const dataRef = ref(db, "/data");
  
      while (true){
        const snapshotX = await get(dataRefX);
        const snapshotY = await get(dataRefY);
        const snapshotZ = await get(dataRefZ);
        const dataSnapshot = await get(dataRef);
  
        console.log("Data snapshot:", dataSnapshot);
  
        //if (dataSnapshot.exists()) {
          const data = dataSnapshot.val();
          const datax = snapshotX.val();
          const datay = snapshotY.val();
          const dataz = snapshotZ.val();
          const keys = Object.keys(data);
          const keysX = Object.keys(datax);
          const keysY = Object.keys(datay);
          const keysZ = Object.keys(dataz);
          const tamanho = keys.length;
          const tamanhoX = keysX.length;
          const tamanhoY = keysY.length;
          const tamanhoZ = keysZ.length;

          // console.log("Timestamp:", data[keys[tamanho-1]].timestamp);
          // console.log("TimestampX:", datax[keysX[tamanhoX-1]].timestamp);
          
          if(data[keys[tamanho-1]].timestamp==datax[keysX[tamanhoX-1]].timestamp){
            setColorX("red");
          } else setColorX("lightgreen");
          if(data[keys[tamanho-1]].timestamp==datay[keysY[tamanhoY-1]].timestamp){
            setColorY("red");
          } else setColorY("lightgreen");
          if(data[keys[tamanho-1]].timestamp==dataz[keysZ[tamanhoZ-1]].timestamp){
            setColorZ("red");
          } else setColorZ("lightgreen");


            // if (Object.prototype.hasOwnProperty.call(data, keys[1])) {
            //   console.log("Timestamp:", data[keys[1]].timestamp);
            // }
          
        }
      }
    //};
  
    fetchData();
  }, []);
  

  // Retorne os estados colorX, colorY e colorZ
  return { colorX, colorY, colorZ };
}

export default Alarms;
