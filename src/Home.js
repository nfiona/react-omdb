import React, { Component } from 'react'
import SearchContainer from './SearchContainer'

class Home extends Component {
  render() {
    return (
      <div>
      <h1> OMDB </h1>
      <SearchContainer />
      </div>
    )
  }
}

export default Home;
