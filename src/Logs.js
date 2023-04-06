import Log from "./Log";
import react from "react"
import {useState,useEffect} from "react"
import axios from "axios"
const Logs = ()=>{
    const [logs,setLogs] = useState([{voltage : 400,current : 0.35}])

    useEffect(()=>{
        
        const getData = async()=>{
            let resp;
            try{
                resp = await axios.get("https://parkingslot-690a3-default-rtdb.firebaseio.com/logs.json",
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
            console.log(resp)
            let tempList = []
            let data = resp.data;
            let i;
            let count = 0
            for(let i = 0;i<data.length;i++)
            {
                if(data[i])
                {
                    count = count +1;
                }
                tempList.push(data[i])
            }
            console.log(tempList[0].voltage)
            console.log(data)
            
            setLogs(tempList)
        }
       setData();
   
    },[])

    return(
      <div className = "logs">
      <table class="styled-table">
         <thead>
          <tr>
              <th>Voltage</th>
              <th>Current</th>
              <th>Power</th>
          </tr>
      </thead>
      <tbody>
      {logs.map((ele)=>{
        return (
        <Log
        voltage = {ele.voltage}
        current = {ele.current}
        key = {Math.random().toString(36).substring(2,7)}
        >

        </Log>)
      })}
      </tbody>
      </table>
      </div>
      
    )
  
  
  }
  export default Logs;