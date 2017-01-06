import AppDispatcher from './app-dispatcher';

var ButtonActions = {

  getTextFromServer: function(number) {
    AppDispatcher.dispatch({
      type:  "GET_TEXT",
      number: number
    });
  }
}

export default ButtonActions;
