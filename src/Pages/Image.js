import "./parkingslot.css"
import q from "../IMG_1668777017808-min.jpg" 
import i from "../IMG_20221119_131104.jpg"
import j from "../IMG_20221119_131106.jpg"
import z from "../IMG_20221119_131104.jpg"
import p from "../IMG_20221119_131107.jpg"
import React, { useState ,useEffect} from "react"
const Image = (props)=>{
    let myinterval;
    useEffect(() =>{
        myinterval = setInterval(()=>{
            updateState()
        },4000)
    return ()=> {
    clearInterval(myinterval)
    }
    },[])

    const [imageList ,setImageList ] = useState([
        <div className="card">
    <img src= {i} alt="security-image" ></img>

        <div className="container">
            <h4><b>captured by</b></h4>
            <p>ESP32 CAM</p>
        </div>
    </div>,
    <div className="card">
    <img src= {j} alt="security-image" ></img>

        <div className="container">
            <h4><b>captured by</b></h4>
            <p>ESP32 CAM</p>
        </div>
    </div>,
    <div className="card">
    <img src= {p} alt="security-image" ></img>

        <div className="container">
            <h4><b>captured by</b></h4>
            <p>ESP32 CAM</p>
        </div>
    </div>,
    <div className = 'card'>
    <img src= {z} alt="security-image" ></img>

        <div className="container">
            <h4><b>captured by</b></h4>
            <p>ESP32 CAM</p>
        </div>
    </div>,
    <div className="card">
    <img src= {i} alt="security-image" ></img>

        <div className="container">
            <h4><b>captured by</b></h4>
            <p>ESP32 CAM</p>
        </div>
    </div>,
    <div className="card">
    <img src= {j} alt="security-image" ></img>

        <div className="container">
            <h4><b>captured by</b></h4>
            <p>ESP32 CAM</p>
        </div>
    </div>,
    <div className="card">
    <img src= {p} alt="security-image" ></img>

        <div className="container">
            <h4><b>captured by</b></h4>
            <p>ESP32 CAM</p>
        </div>
    </div>,
    <div className = 'card'>
    <img src= {z} alt="security-image" ></img>

        <div className="container">
            <h4><b>captured by</b></h4>
            <p>ESP32 CAM</p>
        </div>
    </div>
    ])
    const updateState = () =>{
        setImageList(prev=>{
            console.log(prev)
            let temp = [...prev]
            temp.push(
                <div className = 'card entry'>
            <img src= {z} alt="security-image"  ></img>

                <div className="container">
                    <h4><b>captured by</b></h4>
                    <p>ESP32 CAM</p>
                </div>
            </div>
            )
            return temp
        })
    }


    return(
    <React.Fragment>
    {imageList}
    </React.Fragment>
    )


}
export default Image;