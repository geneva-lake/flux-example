import AppDispatcher from './app-dispatcher';
import EventEmitter from 'events';

var CHANGE_EVENT = 'change';

var base = "/api";

var DataStore = assign({}, EventEmitter.prototype, {


  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  currentText: "",

  getFromServer: function(number) {
	var url = base + "/" + number;
    var text = request.get(url).async(false);
	currentText = text;
  },
  
  getCurentText: function() {
	return this.currentText;
}
});


AppDispatcher.register(function(action) {
  switch(action.type) {
    case "RECEIVE_TEXT":
      var number = action.number;
	  DataStore.getFromServer(number)
      DataStore.emitChange();
      break;
	default:
  }
});

export default DataStore;
