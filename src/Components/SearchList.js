import React, { Component } from 'react';
import $ from 'jquery';
import '../style.css'

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

class SearchList extends Component{
  constructor(){
    super();
  }

  // displayMatches(){
  //
  //   const suggestions = $('.suggestions');
  //
  //   const matchArray = findMatches(searchInput.val(), cities);
  //   const html = matchArray.map(place=>{
  //
  //     const regex = new RegExp(searchInput.val(), 'gi')
  //     const cityName = place.city.replace(regex, `<span class="highlight">${this.value}</span>`)
  //     const stateName = place.city.replace(regex, `<span class="highlight">${this.value}</span>`)
  //
  //     return `
  //       <li>
  //         <span class="name">${cityName}, ${stateName}</span>
  //       </li>
  //       `;
  //   }).join('');
  //
  //   suggestions.html(html);
  //
  // }

  render(){
    return (
      <li>{this.props.cities}</li>
    )
  }
}

export default SearchList;
