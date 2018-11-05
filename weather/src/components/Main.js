import React, { Component } from 'react'
import moment from 'moment'
import tz from 'moment-timezone'
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unitIsFahrenheit: true,
    }
    this.kelvinToCelsius = this.kelvinToCelsius.bind(this);
    this.kelvinToFahrenheit = this.kelvinToFahrenheit.bind(this);
    this.dataAvail = this.dataAvail.bind(this);
    this.city = this.city.bind(this);
    this.temp = this.temp.bind(this);
    this.condtion = this.condition.bind(this);
    this.minMax = this.minMax.bind(this);
    this.sunsetSunrise = this.sunsetSunrise.bind(this);
    this.humidity = this.humidity.bind(this);
    this.pressure = this.pressure.bind(this);
    this.precipitation = this.precipitation.bind(this);
    this.windSpeed = this.windSpeed.bind(this);
    this.background = this.background.bind(this);
  }

  dataAvail(){
    return (
      this.props.data.weather.length !== 0
    )
  }

  city(){
    return (
      this.props.data.weather.name
    )
  }



  handleClick = (e) => {
    this.setState({
      unitIsFahrenheit: ! this.state.unitIsFahrenheit
    })
  }

  kelvinToFahrenheit(temp) {
    return (
      (temp - 273.15) * (9/5) + 32
    )
  }

  kelvinToCelsius(temp) {
    return (
      temp - 273.15
    )
  }

  temp (){
    if (this.dataAvail()) {
      if (this.state.unitIsFahrenheit) {
        return (
          <div className="temp">
            <div id="cushion"></div>
            {Math.round(this.kelvinToFahrenheit(this.props.data.weather.main.temp))+"˚"}
          </div>
        )
      } else {
        return (
          <div className="temp">
            <div id="cushion"></div>
            {Math.round(this.kelvinToCelsius(this.props.data.weather.main.temp))+"˚"}
          </div>

        )
      }
    }
  }

  minMax(){
    let min;
    let max;
    if (this.dataAvail()) {
      if (this.state.unitIsFahrenheit) {
        min = Math.round(this.kelvinToFahrenheit(this.props.data.weather.main.temp_min))
        max = Math.round(this.kelvinToFahrenheit(this.props.data.weather.main.temp_max))
      }else {
        min = Math.round(this.kelvinToCelsius(this.props.data.weather.main.temp_min))
        max = Math.round(this.kelvinToCelsius(this.props.data.weather.main.temp_max))
      }
      return (
        <div className= "minMax">
          <div id="max">
            <h6>High</h6>
            <p>{max +"˚"}</p>
          </div>
          <div id="min">
            <h6>Low</h6>
            <p>{min +"˚"}</p>
          </div>
        </div>
      )

    }
  }
  sunsetSunrise(){
    if (this.dataAvail()) {
      const sunsetTzOffset = moment.utc("1970-01-01T00:00:00").add(this.props.data.weather.sys.sunset, 'seconds').format();
      const sunriseTzOffset = moment.utc("1970-01-01T00:00:00").add(this.props.data.weather.sys.sunrise, 'seconds').format();

      const sunset = moment(sunsetTzOffset).format("h:mm a");
      const sunrise = moment(sunriseTzOffset).format("h:mm a");
      return (
        <div className= "sunsetSunrise">
          <div id="sunrise">
            <h6>Sunrise</h6>
            <p>{sunrise}</p>
          </div>
          <div id="sunset">
            <h6>Sunset</h6>
            <p>{sunset}</p>
          </div>
        </div>
      )
    }
  }
  condition () {
    if (this.dataAvail()) {
      const weather = this.props.data.weather.weather;
      const weatherCondition = weather[0];

      return (
        <h5 id="condition">{weatherCondition.description}</h5>
      )
    }
  }

  humidity(){
    if (this.dataAvail()) {

      return(
        <div className= "humidity">
          <div id="max">
            <h6>Humidity</h6>
            <p>{this.props.data.weather.main.humidity +"%"}</p>
          </div>
        </div>

      )
    }
  }

  pressure(){
    if (this.dataAvail()) {
      return(
        <div className= "pressure">
          <div id="max">
            <h6>Pressure</h6>
            <p>{this.props.data.weather.main.pressure}</p>
          </div>
        </div>
      )
    }
  }

  precipitation(){
    if (this.dataAvail()) {
      const rain = this.props.data.weather.rain
      const rate = rain["1h"];
      return(
        <div className= "precipitation">
          <div id="max">
            <h6>Precipiation</h6>
            <p>{(rate*100)+"%"}</p>
          </div>
        </div>
      )
    }
  }

  windSpeed(){
    if (this.dataAvail()) {
      return(
        <div className= "windSpeed">
          <div id="max">
            <h6>Wind Speed</h6>
            <p>{this.props.data.weather.wind.speed +" mph"}</p>
          </div>
        </div>
      )
    }
  }

  background(){
    if (this.dataAvail()) {
      const weather = this.props.data.weather.weather;
      const weatherCondition = weather[0];
      let background;
      switch (weatherCondition.main) {
        case "Clear":
          debugger;
          background = "../images/clear_sky.jpeg"
          break;
        case "Rain":
          background = "../images/rain.jpeg"
          break;
        case "Snow":
          background = "../images/snow.jpeg"
          break;
        }

      return (
        <img src={background} id="background"/>
      )
    }
  }

  render(){
    return(
      <div className="Main">


        {/* {this.background()} */}

        <div className="grid">

          <button id="unitChange" onClick={this.handleClick}>
            {this.state.unitIsFahrenheit? "C˚":"F˚"}
          </button>

          <h4 id="city">{this.city()}</h4>

          {this.temp()}

          {this.condition()}

          {this.minMax()}

          {this.sunsetSunrise()}

          {this.humidity()}

          {this.pressure()}

          {this.precipitation()}

          {this.windSpeed()}

        </div>

      </div>
    );
  }
}


export default Main
