import {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import "./Searchbox.css"

export default function Searchbox(){
    let [city,setcity]=useState("");

    let handlechange=(e)=>{
        setcity(e.target.value)
    }
    let handlesubmit=(e)=>{
        e.preventDefault();
        console.log(city);
        setcity("");
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