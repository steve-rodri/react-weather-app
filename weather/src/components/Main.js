import React, { Component } from 'react'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unitIsFahrenheit: true,
    }
    this.KelvinToCelsius = this.KelvinToCelsius.bind(this);
    this.KelvinToFahrenheit = this.KelvinToFahrenheit.bind(this);
    this.dataAvail = this.dataAvail.bind(this);
    this.city = this.city.bind(this);
    this.Temp = this.Temp.bind(this);
    this.checkCondtion = this.checkCondition.bind(this);
    this.minMax = this.minMax.bind(this);
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

  KelvinToFahrenheit(temp) {
    return (
      (temp - 273.15) * (9/5) + 32
    )
  }

  KelvinToCelsius(temp) {
    return (
      temp - 273.15
    )
  }

  Temp (){
    if (this.dataAvail()) {
      if (this.state.unitIsFahrenheit) {
        return (
          Math.round(this.KelvinToFahrenheit(this.props.data.weather.main.temp))
        )
      } else {
        return (
          Math.round(this.KelvinToCelsius(this.props.data.weather.main.temp))
        )
      }
    }
  }

  minMax(){
    if (this.dataAvail()) {
      if (this.state.unitIsFahrenheit) {
        const min = Math.round(this.KelvinToFahrenheit(this.props.data.weather.main.temp_min))
        const max = Math.round(this.KelvinToFahrenheit(this.props.data.weather.main.temp_max))
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

        <h4>{this.city()}</h4>

        <div className="temp">
          {this.Temp()}
        </div>

        <h5>{this.checkCondition()}</h5>

        {this.minMax()}

      </div>
    );
  }
}


export default Main
