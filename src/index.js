import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
//'provider' gives the app access to the 'store'
import { Provider } from 'react-redux';
import ProductsReducer from './Reducers/ProductsReducer';
import UserReducer from './Reducers/UserReducer';

//
// const cityReducer = (state, action) =>{
//   return state;
// }
//
// const allStoreEnhancers = compose(
//   applyMiddleware(thunk),
//
//   window.devToolsExtension && window.devToolsExtension()
// )
//
// const store = createStore(
//   cityReducer,
//   {
//     cities: []
//   },
//   //third argument for windows devtools:
//
//   allStoreEnhancers
//
// );
//
// const action = {
//   type: 'FilterPlaces',
//   payload:
// }

// console.log(store.getState());

// const updateUserAction = {
//   type: 'updateUser',
//   payload: {
//     name: 'Cierra'
//   }
// }


// store.dispatch(updateUserAction);


ReactDOM.render(<Provider><App randoProp="wtf"/></Provider>, document.getElementById('root'));
registerServiceWorker();
