import React, { Component } from 'react';
import './App.css';
import weatherData from './services/data';
import Search from './components/Search'
import Main from './components/Main'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      zip: 0,
      weather: []
    }
  }

async componentDidMount(){
    const weather = await weatherData;
    this.setState({
      weather: weather
    })
    console.log(weather);
  }

  handleChange = (e) =>{
    this.setState({
      zip: e.zip
    })
  }

  render() {
    return (
      <div className="App">
        <Search onChange={this.handleChange}/>
        <Main />
      </div>
    );
  }
}

export default App;
