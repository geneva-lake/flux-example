var AppDispatcher = require('./app-dispatcher');

var ButtonActions = {

  getText: function(number) {
    AppDispatcher.dispatch({
      actionType:  "RECEIVE_TEXT",
      number: number
    });
  }
}

module.exports = ButtonActions;