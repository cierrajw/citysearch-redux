import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//connect components in our app to the 'store' using the following:
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './Actions/user-actions';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props){
    super(props);

  }

  onUpdateUser = (event) =>{

    this.props.onUpdateUser(event.target.value);
  }

  componentDidMount(){
    this.props.onApiRequest();
  }

  // onUpdateUser = () =>{
  //   this.props.onUpdateUser('Laquonda Jackson');
  // }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
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
      </div>
    );
  }
}

// const mapStateToProps = state =>({
//   products: state.products,
//   users: state.user
// })

const mapStateToProps = (state, props) =>{
  return{
    products: state.products,
    users: state.user,
    userPlusProp: `${state.user} ${props.randoProp}`
  }
}

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
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
