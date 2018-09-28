import React, { Component } from 'react';
import SearchList from './SearchList'
import '../style.css'

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


class CitySearch extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <form class="search-form">
      <input onKeyUp={this.props.onCitySearch}type="text" class="search-input" placeholder="City or State"/>

      <SearchList />

      </form>
    )
  }

}

export default CitySearch;
