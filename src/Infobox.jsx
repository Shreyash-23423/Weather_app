import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Infobox() {
    let INIT_URL="https://images.unsplash.com/photo-1654156109203-ecc428de882d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGF6ZSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    let info ={
        city:"Delhi",
        feelslike:23.67,
        temp:24.01,
        tempmin:24.01,
        tempmax:24.01,
        humidity:46,
        weather:"haze"
    }
    return(
       <div className="infobox">
            <h2>weather app</h2>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature ={info.temp}&deg;C</p>
          <p>Humitdity ={info.humidity}</p>
          <p>Min Temp ={info.tempmin}&deg;C</p>
          <p>Max Temp ={info.tempmax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like ={info.feelslike}&deg;C</p>
         </Typography>
      </CardContent>
    </Card>
       </div>
    )
};