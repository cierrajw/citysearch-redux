import $ from 'jquery';

//the 'user' at the beginning here scopes the action type to avoid
//collision with actions in other components

// export default const UPDATE_USER = 'updateUser';

//creating functions thanks to our mapActionsToProps, instead of
//having to type .dispatch() all the time
export function updateUser(newUser){
  return{
    type: 'updateUser',
    payload: {
      user: newUser
    }
  }
}

export function apiRequest(){
  return dispatch =>{
    $.ajax({
      url: 'http://google.com',
      success(){
        console.log('success!');
      },
      error(){
        console.log('ERRRRRORRR')
      }
    })
  }
};
