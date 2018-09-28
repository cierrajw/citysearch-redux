import React, { Component } from 'react';
import SearchList from './SearchList'
import '../style.css'

// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


class CitySearch extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <form class="search-form">
      <input onKeyUp = {(event) => this.props.findMatches(event.target.value, this.props.cities)} type="text" class="search-input" placeholder="City or State"/>

      <SearchList cities={this.props.cities}/>

      </form>
    )
  }

}

export default CitySearch;
