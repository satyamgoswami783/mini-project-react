import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";
export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1710240442432-dbbb4d64aba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxIT1QlMjB3ZWF0aGVyJTIwbmF0dXJlfGVufDB8fDB8fHww";
  const COLD_url =
    "https://media.istockphoto.com/id/1254573356/photo/female-hiker-crossing-a-suspension-bridge-over-a-glacier-river-with-snowcapped-mountains-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=iD1hSmeAKeRfsMSAviMFDHbRvhXL98lA5T_TpnW2HAw=";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1523920443222-1e71e5d09943?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHJhaW4lMjB3ZWF0aGVyJTIwbmF0dXJlfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temperature > 15 ? HOT_URL : COLD_url
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
      {info.city}
{info.humidity > 80 ? 
  <ThunderstormIcon />
: info.temperature > 15 ? 
  <SunnyIcon />
: 
  <AcUnitIcon />
}

          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component="div"
          >
            <div>Temperature = {info.temperature}&deg;C</div>
            <div>Humidity = {info.humidity}</div>
            <div>Min Temp = {info.tempMin}&deg;C</div>
            <div>Max Temp = {info.tempMax}&deg;C</div>
            <div>
              The weather can be described as {info.weather} and feels like ={" "}
              {info.feelslike}&deg;C
            </div>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
