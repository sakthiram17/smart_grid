import "./parkingslot.css"
import ParkingSlot from "./ParkingSlot";
import {useEffect} from "react"
import axios from "axios"
import { useState } from "react";
import Card from "./Card";
import Image from "./Image";
const ParkingSlots = (props)=>{
    const [parkingSlots,UpdateParkingSlots] = useState([])
    const [free,setFree ] = useState(0)
    useEffect(()=>{
        
        const Interval = setInterval( ()=>{const getData = async()=>{
            let resp;
            try{
                resp = await axios.get("https://parkingslot-690a3-default-rtdb.firebaseio.com/ParkingSlots.json",
                {headers: {
                    'Access-Control-Allow-Origin': true,
                  }},
                
                )
            }
            catch(err)
            {
                console.log(err)
            }
            return resp
        }
        const setData = async  ()=>{
            const resp = await getData();
          
            let tempList = []
            let data = resp.data;
            let i;
            let count = 0
    
            for(let i = 0;i<data.length;i++)
            {
                if(data[i]=='open')
                {
                    count = count +1;
                }
                tempList.push(data[i])
            }
        
           
            setFree(count)
            UpdateParkingSlots(tempList)
        }
       setData();
    },60)
    },[])

    return(
        <div className = "parking-slot-page">
           
              
           <div className ='parking-slots-grid'>
           <Card
           n = {parkingSlots.length}
           free = {free}
           filled = {parkingSlots.length - free}
           >

           </Card>
           <div className = 'anti-flow'>
           {parkingSlots.map((ele, index)=>{
            return <ParkingSlot no = {index+1} 
            free = {ele==='open'?true:false}
            key = {index}
            >

            </ParkingSlot>
           })
           }
           
          </div>
          </div>
        </div>
        )


}
export default ParkingSlots;