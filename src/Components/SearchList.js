import React, { Component } from 'react';
import '../style.css'

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


class SearchList extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <ul class="suggestions">
      
        <li>Filter for a city</li>
        <li>or a state</li>
      </ul>

    )
  }

}

export default SearchList;
