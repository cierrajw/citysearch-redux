import $ from 'jquery';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//the 'user' at the beginning here scopes the action type to avoid
//collision with actions in other components

// export default const UPDATE_USER = 'updateUser';

//creating functions thanks to our mapActionsToProps, instead of
//having to type .dispatch() all the time

// export function findMatches(wordToMatch, cities){
//
//   return{
//     type: 'findMatches',
//     payload:
//   }
//   return cities.filter(place => {
//     //figure out if city or state matches what was searched
//     const regex = new RegExp(wordToMatch, 'gi');
//     return place.city.match(regex) || place.state.match(regex);
//   })
// }
//
// export function filterCities(){
//
// }
//
// export function updateUser(newUser){
//   return{
//     type: 'updateUser',
//     payload: {
//       user: newUser
//     }
//   }
// }
//
// //can dispatch additional actions in response to the api request:
//
// export function showError(){
//   return{
//     type: 'showError',
//     payload: {
//       user: 'The ERROR!!!'
//     }
//   }
// }
//
// export function apiRequest(){
//   return dispatch =>{
//     $.ajax({
//       url: 'http://google.com',
//       success(){
//         console.log('success!');
//       },
//       error(){
//         console.log('ERRRRRORRR')
//         dispatch(showError());
//       }
//     })
//   }
// };
//
// export function citySearchFetch(){
//   const prom = fetch(endpoint)
//   .then(theData => theData.json())
//   .then(theData => cities.push(...theData))
// }
