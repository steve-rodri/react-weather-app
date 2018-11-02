import axios from 'axios'

async function getCurrentWeather(){
  try {
    const weatherReq = axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=11590&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    const weatherResp = await weatherReq;
    return weatherResp;

  } catch (e) {
    console.log(e);
  }
}

export default getCurrentWeather();
