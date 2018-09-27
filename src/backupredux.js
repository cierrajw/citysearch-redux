import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createSelector } from 'reselect';
//connect components in our app to the 'store' using the following:
import { connect } from 'react-redux';
import { updateUser, apiRequest, showError } from './Actions/user-actions';
import { bindActionCreators } from 'redux';
import Input from './Components/CitySearch'

class App extends Component {
  constructor(props){
    super(props);

  }

  onUpdateUser = (event) =>{

    this.props.onUpdateUser(event.target.value);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.props.onApiRequest();
    }, 1500)

  }

  // onUpdateUser = () =>{
  //   this.props.onUpdateUser('Laquonda Jackson');
  // }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">City Search</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.users}
        <br/>
        <input onChange={this.onUpdateUser}/>
        <button onClick={this.onUpdateUser}>Update user</button>
        <br/>
        {this.props.users}

        <Input />

      </div>


    );
  }
}

// const mapStateToProps = state =>({
//   products: state.products,
//   users: state.user
// })

// const mapStateToProps = (state, props) =>{
//   return{
//     products: state.products,
//     users: state.user,
//     userPlusProp: `${state.user} ${props.randoProp}`
//   }
// }

//first two arguments are functions that get passed the state
//last argument receives the results of the first two arguments

// SELECTOR:
// const mapStateToProps = createSelector(
//   state => state.products,
//   state => state.user,
//   (products, user) => ({
//   products,
//   user
//   })
// )

const prouctsSelector = createSelector(
  state => state.products,
  products => products
)

const userSelector = createSelector(
  state => state.user,
  user => user
)


const mapStateToProps = createSelector(
  prouctsSelector,
  userSelector,
  (products, user) => ({
  products,
  user
  })
)
console.log(mapStateToProps)

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest,
  onShowError: showError
}

//using passed in props to customize the action creators we're making
// const mapActionsToProps = (dispatch, props) => {
//
//   return bindActionCreators( {
//     onUpdateUser: updateUser
//   }, dispatch)
//
// }

//propsFromState ====> Whatever is returned from mapStateToProps

//propsFromDispatch ====> Whatever is returned from mapActionsToProps

//ownProps ====> the passed in props to this component

// const mergeProps = (propsFromState, propsFromDispatch, ownProps)=>{
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {}
// }

export default connect(mapStateToProps, mapActionsToProps)(App);

// export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
