import AppDispatcher from './app-dispatcher';
import EventEmitter from 'events';

var CHANGE_EVENT = 'change';

var base = "/api";

class DataStoreClass extends EventEmitter {

  constructor() {
          super();

          this.currentText = "";
      }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }


  getFromServer(number) {
	var url = base + "/" + number;
    var text = request.get(url).async(false);
	currentText = text;
  }

  getCurentText() {
	return this.currentText;
}
};

var DataStore = new DataStoreClass();

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
