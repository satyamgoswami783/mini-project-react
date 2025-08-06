import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState } from "react";
export default function SearchBoxp(){
const[city,security]=useState("");

  let handleChange=()=>{
console.log(" i am satyam",city)
  }
  return(
    <>
        <h3>WeatherApp</h3>
        <TextField
          label="City name"
          variant="outlined"
          id="city"
          value={city}
          required  
          onChange={(e)=>setCity(e.target.value)}
        />
  <br></br>      

            <Button variant="contained"onClick={handleChange}>Hello world</Button>;
    </>

    
  )
}