import {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import "./Searchbox.css"

export default function Searchbox(){
    
    let [city,setcity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY ="57d75bfb84d58b12415b287c5336f8d6"

    let getweatherinfo= async ()=>{
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonresponse= await response.json();
        console.log(jsonresponse);
        let result={
            city:jasonreponse.main.city,
            temp:jsonresponse.main.temp,
            tempmin:jsonresponse.main.temp_min,
            tempmax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelslike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description
        }
        console.log(result);

    }

    let handlechange=(e)=>{
        setcity(e.target.value)
    }
    let handlesubmit=(e)=>{
        e.preventDefault();
        console.log(city);
        setcity("");
        getweatherinfo();
    }
    return (
        <div className='Searchbox'>
         <h3>Search for the weather</h3>
         <form onSubmit={handlesubmit}>
            <TextField id="City"
             label="City"
              variant="outlined"
               required
               value={city}
               onChange={handlechange} />
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
         </form>
        </div>
    );
};