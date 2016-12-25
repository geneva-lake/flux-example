import AppDispatcher from './app-dispatcher';

var ButtonActions = {

  getText: function(number) {
    AppDispatcher.dispatch({
      actionType:  "RECEIVE_TEXT",
      number: number
    });
  }
}

export default ButtonActions;
