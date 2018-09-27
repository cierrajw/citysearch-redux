// import UPDATE_USER from '../Actions/user-actions';


//thunk middleWare will handle the function instead of this object returned before
//this is an action creator
function UserReducer(state = '', {type, payload}){
  switch (type){
    case 'updateUser':
      return payload.user;
    case 'showError':
      return payload.user
    default:
      return state;
  }
}

export default UserReducer;
