import axios from "axios"
import {useState,useEffect} from "react"
import Card from "./UI/Card/Card";
import RectangularBar from "./RectangularBar/RectangularBar";
const Dashboard = ()=>{
    const [current,setCurrent] = useState(0.5);
    const [voltage,setVoltage] = useState(400);
    useEffect(()=>{
        
        const Interval = setInterval( ()=>{const getData = async()=>{
            let resp;
            try{
                resp = await axios.get("https://parkingslot-690a3-default-rtdb.firebaseio.com/smart_metering.json",
                {headers: {
                    'Access-Control-Allow-Origin': true,
                  }},
                
                )
            }
            catch(err)
            {
               
            }
            return resp
        }
        const setData = async  ()=>{
            const resp = await getData();
           
            let tempList = []
            let data = resp.data;
            setCurrent(data.current)
            setVoltage(data.voltage)
        }
       setData();
      },1000)
      },[])
      return(
        <div>
             <Card header = 'DC-Bus Voltage'>
    
    {(voltage > 420  || voltage < 380 )? <div className='warning'>
    <div class="alert danger-alert">
      <h3>    DC Bus voltage exceeding Limits</h3>
 
  
    </div>
  
    </div> : null}

    <div className="gauge"
    style = {{width : "250px" }}
    >
    <div className="percentage"
     style = {{rotate :'' + parseInt((voltage/600) * (180)-180)+'deg' }}></div>
    <div className="mask"></div>
    
    <span className="value">{voltage}</span>
    </div>
    <h4>
   
      
      DC bus Voltage : 400V
      <br></br>
      Range of Gauge : 0V to 600V 
    </h4>
    </Card>
    <Card header = 'DC Load Current'>
    {current > 0.375 ? <div className='warning'>
   
   <div class="alert danger-alert">
     <h3>Over Current Limit</h3>

    
   </div>
     
   </div> : null}
    <RectangularBar
    height = "250px"
    width = "80px"
    c1 = "#fca311"
    c2 = "whitesmoke"
    direction = "top"
    level = {(current/0.5)  *100}
    text = "Completion"
    ></RectangularBar>
    <br></br>
    <h4>Current in DC Bus  :  {current} Amps </h4>

    </Card>
    <Card header = 'Power Consumed'>
    {current > 0.375 ? <div className='warning'>
   
   <div class="alert danger-alert">
     <h3> Power Limit exceeded</h3>

    
   </div>
     
   </div> : null}

      <div className="gauge"
      style = {{width : "250px" , backgroundColor : "#FF0Dac"}}
      >
      <div className="percentage"
      style = {{rotate :'' + parseInt((voltage*current/175) * (180)-180)+'deg' }}></div>
      <div className="mask"></div>

      <span className="value">{current*voltage}</span>
      </div>
      <h4>
        Current Power : {current*voltage} W
        <br></br>
        Rated Power : 150W
        <br></br>
        Range of Gauge : 0 to 175W
      </h4>
            
      </Card>

        </div>
      )
      



}
export default Dashboard;