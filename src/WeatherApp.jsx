import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import {useState}from "react"

export default function WeatherApp(){
  const [weatherInfo,setWeatherInfo]=useState({
    
    city:"Wonderland",
    feelslike:24.84,
    temperature:25.05,
    tempMin: 25.05,
     tempMax: 29.05,
    humidity:47,
    weather:"haze",
  });
  let updateInfo=(newInfo)=>{
setWeatherInfo(newInfo);
  }
  return(<div>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox  info={weatherInfo}/>
    </div>)
}