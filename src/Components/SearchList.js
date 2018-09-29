import React from 'react';
import $ from 'jquery';
import '../style.css'

function SearchList(props){

  return(
    <ul>
    {props.citiesResult.map(place=>{
          return <li>{place}</li>
        })}
    </ul>
  )
  //
  // return(
  //   <ul>
  //     {props.citiesResult.map(place=>{
  //       return <li>{...place}</li>
  //     })}
  //   </ul>
  //   )
}

export default SearchList;
