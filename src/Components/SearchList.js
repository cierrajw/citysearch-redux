import React from 'react';
import $ from 'jquery';
import '../style.css'

function SearchList(props){

  return(
    <ul className="suggestions">
    {props.citiesResult.map(place=>{
        return place.map(loc=>{
          console.log(loc.city)
          return (<li>{loc.city}, {loc.state}</li>)
        })
      })}
    </ul>
  )

}

export default SearchList;
