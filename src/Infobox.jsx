import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Infobox({info}) {
    let INIT_URL="https://images.unsplash.com/photo-1654156109203-ecc428de882d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGF6ZSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    let COLD_URL="https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D"
    let HOT_URL="https://plus.unsplash.com/premium_photo-1688804790068-4a0978939cd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D"
    let RAIN_URL="https://images.unsplash.com/photo-1718917911088-23f5d4b0bacc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnklMjBXRUFUSEVSfGVufDB8fDB8fHww"
    return(
       <div className="infobox">
            <h2>weather app</h2>
                <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
                 <CardMedia
             sx={{ height: 140 }}
             image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
             title="green iguana"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {info.city}    {
                info.humidity>80?
                <ThunderstormIcon/>
                :info.temp>15
                ?<SunnyIcon/>
                :<AcUnitIcon/>
               }
             </Typography>
             <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
               <p>Temperature ={info.temp}&deg;C</p>
               <p>Humitdity ={info.humidity}</p>
               <p>Min Temp ={info.tempmin}&deg;C</p>
               <p>Max Temp ={info.tempmax}&deg;C</p>
               <p>The weather can be described as <i>{info.weather}</i> and feels like ={info.feelslike}&deg;C</p>
              </Typography>
           </CardContent>
          </Card>
        </div>
       </div>
    )
};