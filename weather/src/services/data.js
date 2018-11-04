import axios from 'axios'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

async function GetCurrentWeather(props){
  try {
    const weatherReq = axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${props.zip}&appid=${API_KEY}`);
    const weatherResp = await weatherReq;
    return ( weatherResp.data )

  } catch (e) {
    console.log(e);
  }
}

export default GetCurrentWeather
