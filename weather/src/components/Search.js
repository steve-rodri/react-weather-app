import React, { Component } from 'react';
import getWeather from "../services/data"
class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      zip: '',
      weather: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  async handleSubmit(e){
    e.preventDefault();
    if (this.state.zip.length === 5) {
      const weather = await getWeather(this.state);
      this.setState({
        weather: weather,
      })
      this.props.onChange(this.state);
    } else {
      console.log("enter a valid zip code")
    }
  }

  render(){
    return (
      <form className="Search" onSubmit={this.handleSubmit}>
        <input
          type='text'
          name="zip"
          placeholder="zip"
          value={this.state.zip}
          onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      )
  }
}


export default Search;
