import AppDispatcher from './app-dispatcher';

var ButtonActions = {

  getText: function(number) {
    console.log('The button was clicked action.');
    AppDispatcher.dispatch({
      type:  "RECEIVE_TEXT",
      number: number
    });
  }
}

export default ButtonActions;
