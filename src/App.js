import logo from './logo.jpg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { useState } from 'react';
import Card from "../src/UI/Card/Card";
import RectangularBar from "./RectangularBar/RectangularBar"
import Sidebar from "./SideBar/SideBar"
import Backdrop from "./UI/Backdrop/Backdrop"
import {useEffect} from "react"
import axios from "axios"
import Dashboard from './Dashboard';
import Logs from './Logs';

function App() {






  const [sidebaron,setSidebaron] = useState(false);
  const [current,setCurrent] = useState(0.5);
  const [voltage,setVoltage] = useState(400);
  const [currentPage,setCurrentPage] = useState(<Dashboard></Dashboard>);












  const switchPages = (event)=>{

    setCurrentPage(event.target.innerHTML)
    if(event.target.innerHTML==='Dashboard')
    {
    setCurrentPage(<Dashboard></Dashboard>)
    }
    else{
      setCurrentPage(<Logs></Logs>)
    }
  }
  const offSideBar = ()=>{
    setSidebaron(false)
  }
  const turnOnSideBar = ()=>{
    setSidebaron(true)
  }








  return (
    <div className="App">
      <Navbar
       off = {offSideBar}
       active = {"Dashboard"}
       first = {"Smart"}
       last = "Metering"
       header = "Smart Grid"
       expand = {turnOnSideBar}
       changePage = {switchPages}
      list = {
        
        
        [
          "Dashboard", "Logs"
        ]
      }></Navbar>
      <Sidebar
      off = {offSideBar}
      active = {"Dashboard"}
      first = {"Smart"}
      last = "Metering"
      header = "Smart Grid"
      disabled = {!sidebaron}
      expand = {turnOnSideBar}
      changePage = {switchPages}
     list = {
       
       
       [
         "Dashboard", "Logs"
       ]}
      
      
      >


      </Sidebar>
      <Backdrop
        off = {offSideBar}
        on = {sidebaron}
      ></Backdrop>
     {currentPage}

    </div>
  );
}

export default App;
