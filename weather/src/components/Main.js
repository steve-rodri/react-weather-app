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
    this.checkCondtion = this.checkCondition.bind(this);
    this.minMax = this.minMax.bind(this);
    this.sunsetSunrise = this.sunsetSunrise.bind(this);
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
    // if (this.state.unitIsFahrenheit) {
    //   e.innerText = "F"
    // } else {
    //   e.innerText = "C"
    // }
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
          Math.round(this.kelvinToFahrenheit(this.props.data.weather.main.temp))
        )
      } else {
        return (
          Math.round(this.kelvinToCelsius(this.props.data.weather.main.temp))
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
          <div id="min">
            <h6>Min</h6>
            <p>{min}</p>
          </div>
          <div id="max">
            <h6>Max</h6>
            <p>{max}</p>
          </div>
        </div>
      )

    }
  }

  sunsetSunrise(){
    if (this.dataAvail()) {
      const dateTimeSet = moment(this.props.data.weather.sys.sunset).format()
      const dateTimeRise = moment(this.props.data.weather.sys.sunrise).format()
      console.log(dateTimeSet)
      const sunset = moment(dateTimeSet).format('LT')
      const sunrise = moment(dateTimeRise).format('LT')
      return (
        <div className= "sunsetSunrise">
          <div id="sunset">
            <h6>Sunset</h6>
            <p>{sunset}</p>
          </div>
          <div id="sunrise">
            <h6>Sunrise</h6>
            <p>{sunrise}</p>
          </div>
        </div>
      )
    }
  }
  checkCondition () {
    if (this.dataAvail()) {
      const weather = this.props.data.weather.weather;
      const weatherCondition = weather[0];
      return (
        weatherCondition.description
      )
    }
  }


  render(){
    return(
      <div className="Main">

        <button id="unitChange" onClick={this.handleClick}>
          {this.state.unitIsFahrenheit? "C":"F"}
        </button>

        <h4>{this.city()}</h4>

        <div className="temp">
          {this.temp()}
        </div>

        <h5>{this.checkCondition()}</h5>

        {this.minMax()}

        {this.sunsetSunrise()}

      </div>
    );
  }
}


export default Main
