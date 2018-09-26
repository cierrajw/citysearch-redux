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


//combine reducers:
const allReducers = combineReducers({
  products: ProductsReducer,
  user: UserReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),

  window.devToolsExtension && window.devToolsExtension()

)
// to pre-populate store, pass in the 'initial state' as the second argument of the createStore method
const store = createStore(
  allReducers,
  {
    products: [{name: 'iPhone'}],
    user: 'Lequisha'
  },
  //third argument for windows devtools:

  allStoreEnhancers

);


// console.log(store.getState());

// const updateUserAction = {
//   type: 'updateUser',
//   payload: {
//     name: 'Cierra'
//   }
// }


// store.dispatch(updateUserAction);


ReactDOM.render(<Provider store={store}><App randoProp="wtf"/></Provider>, document.getElementById('root'));
registerServiceWorker();
