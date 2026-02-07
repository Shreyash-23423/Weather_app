import Searchbox from "./Searchbox.jsx"
import Infobox from "./Infobox"
import { useState } from "react"

export default function Weatherapp(){
    const [weatherinfo,setweatherinfo]=useState({
        city:"Delhi",
        feelslike:23.67,
        temp:24.01,
        tempmin:24.01,
        tempmax:24.01,
        humidity:46,
        weather:"haze"
    })
    let updateinfo=(newinfo)=>{
        setweatherinfo(newinfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Me</h2>
            <Searchbox updateinfo={updateinfo}/>
            <Infobox info={weatherinfo}/>
        </div>
    )
}