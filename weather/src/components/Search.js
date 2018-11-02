import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      zip:'',
    }
    //
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    // const newState = {};
    // newState[e.target.name] = e.target.value
    // this.setState(newState);

    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onChange(this.state);
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
