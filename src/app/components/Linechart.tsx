'use client'
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { ref, onValue, off, get, update, } from 'firebase/database';
import { useEffect, useState } from 'react';
import { db } from "../components/firebaseConfig";

type Axis = 'x' | 'y' | 'z'; // Define um tipo para axis

function Linechart({ axis, delay }: { axis: Axis, delay: number }) {
  const [dataListTs, setDataListTs] = useState<string[]>([]);
  const [dataList, setDataList] = useState<number[]>([]);
  // console.log("delay -"+ delay)
  const time = ref(db,"/Delay");
  update(time, {time:delay} );

  useEffect(() => {
    
    const fetchData = async () => {
      const dataRef = ref(db, "/data");
      

      // console.log("delay -"+ delay)
  
      
      const snapshot = await get(dataRef);
      const data = snapshot.val();
  
      if (!!data) {
        const newDataListTs: string[] = [];
        const newDataList: number[] = [];
        // let indexCounter = 0;
        
        for (const key in data) {
          // console.log("KEY - " + key)
          // console.log("DATA - " + data)
          

          if (Object.prototype.hasOwnProperty.call(data, key)) {
            
              if (axis === "x") {
                newDataList.push(parseFloat(data[key].x));
              } else if (axis === "y") {
                newDataList.push(parseFloat(data[key].y));
              } else if (axis === "z") {
                newDataList.push(parseFloat(data[key].z));
              }
              newDataListTs.push(data[key].timestamp);
          }
            
        }
  
        setDataList(newDataList.slice(-15)); 
        setDataListTs(newDataListTs.slice(-15));
      } else {
        console.log("Data not found");
      }
    };
  
    const intervalId = setInterval(fetchData,1000); // Fetch data every 'delay' seconds
  
    fetchData(); // Call fetchData once immediately
  
    return () => {
      
    };
  }, [axis, delay]);


  return (
    <LineChart
      xAxis={[{ scaleType:'point',data: dataListTs }]}
      series={[
        {
          data: dataList,
          showMark: true,
          curve: "linear", 
        },
      ]}
      height={300}
      margin={{ left: 50, right: 20, top: 20, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}

export default Linechart;
