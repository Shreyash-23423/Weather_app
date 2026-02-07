import {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import "./Searchbox.css"

export default function Searchbox({updateinfo}){
    
    let [city,setcity]=useState("");
    let [error,seterror]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY ="57d75bfb84d58b12415b287c5336f8d6"

    let getweatherinfo= async ()=>{
      try{
         let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonresponse= await response.json();
        console.log(jsonresponse);
        let result={
            city:city,
            temp:jsonresponse.main.temp,
            tempmin:jsonresponse.main.temp_min,
            tempmax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelslike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description
        }
        console.log(result);
        return result;
      }catch (error){
        throw error
      }

    }

    let handlechange=(e)=>{
        setcity(e.target.value)
    }
    let handlesubmit=async(e)=>{
       try{
         e.preventDefault();
        console.log(city);
        setcity("");
       let newinfo=await  getweatherinfo();
       updateinfo(newinfo);
       }catch{
        seterror(true)
       }
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
            {error && <p style={{color:"red"}}>no such place exists!</p>}
         </form>
        </div>
    );
};