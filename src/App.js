import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { updateUser, apiRequest, showError } from './Actions/user-actions';
import { bindActionCreators } from 'redux';
import CitySearch from './Components/CitySearch'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cities: []
    }
  }


  componentDidMount(){
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    const prom = fetch(endpoint)
      .then(theData => theData.json())
      .then(theData => this.state.cities.push(...theData))

      // this.setState({
      //   cities: 'hi'
      // })

      // console.log(this.state.cities)

    // setTimeout(()=>{
    //   this.props.onApiRequest();
    // }, 1500)

  }

  findMatches(wordToMatch, cities){

    let cityFilter = cities.filter(place => {
      //figure out if city or state matches what was searched
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    })

    console.log(cityFilter)
    return cityFilter;
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">City Search</h1>
        </header>

        <CitySearch findMatches={this.findMatches} cities={this.state.cities}/>

      </div>
    );
  }
}


// const citySelector = createSelector(
//   city => state.cities,
//   cities => cities
// )
//
//
// const mapStateToProps = createSelector(
//   userSelector,
//   (user) => ({
//   products,
//   user
//   })
// )
//
// const mapActionsToProps = {
//   onCitySearch: updateUser,
//   onApiFetch: citySearchFetch,
// }

export default App;

// export default connect(mapStateToProps, mapActionsToProps)(App);
