
import axios from 'axios'
import { useState , useEffect } from 'react'
function WeatherMap()
{

  const API_KEY="bc7e20f4858053636937669cc6dd499a"
  const URL=`https://api.openweathermap.org/data/2.5/weather?lat=26.850000&lon=80.949997&appid=${API_KEY}`
  const[weather , setWeather]=useState()
  const[loading , setLoading]=useState(true)
  useEffect(()=>{
    const fetchWeather=async()=>{
      try{
        const response=await axios.get(URL)
        setWeather(response.data)
        console.log(response.data);
        setLoading(false)
      }
      catch(err){
        console.log(err);
      }
    }// function call
    fetchWeather();
  }, [])

    return (
        <>
        <h1>weather details</h1>

        {/* jsx expresion */}
      {loading?<p>Please wait </p> :
      <div>
      
        <h1> city name is {weather.name}</h1>
        <h2>temperature is {(weather.main.temp-273.15).toFixed(2)}❄️℃</h2>
        <h2>Humidity is {weather.main.humidity}</h2>
        <h2>wind speed {weather.wind.speed *18/5} m/s </h2>

      
      </div>
}
            
        </>
    );
}

export default WeatherMap;