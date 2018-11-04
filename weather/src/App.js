import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import Main from './components/Main'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      zip: '',
      weather: []
    }
  }

  handleChange = (e) =>{
    this.setState({
      zip: e.zip,
      weather: e.weather
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
