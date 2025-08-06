import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";


export default function SearchBox({updateInfo}) {
  const [city, setCity] = useState("");
    const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_key = "59c5d384a21337ba07bd9adc7797abce";

  const getWheatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_key}&units=metric`
      );
     let jsonResponse=await response.json();
      let result = {
        city:city,
        temperature: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
      };

      console.log(result);
      return result;
    } catch(err) {
      throw err;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSumbit = async (evt) => {
    try{
        evt.preventDefault();
        console.log(city);
        setCity("");
    let newinfo=await getWheatherInfo();
    updateInfo(newinfo);
    
    }
   catch(error){
setError(true);
   }
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSumbit}>
        <TextField
          label="City name"
          variant="outlined"
          id="city"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exists! </p>}
      </form>
    </div>
  );
}
