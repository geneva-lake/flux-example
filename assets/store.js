import AppDispatcher from './app-dispatcher';
import Action from './action'
import EventEmitter from 'events';
import DataManager from './data-manager';

var CHANGE_EVENT = 'change';

class DataStoreClass extends EventEmitter {
  constructor() {
    super();
    this.currentText = "one";
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  getCurrentText() {
    return this.currentText;
  }
  setCurrentText(text) {
    this.currentText =text;
  }
  getTextFromServer(number) {
    DataManager.get(number);
  }
};

var DataStore = new DataStoreClass();

AppDispatcher.register(function (action) {
  switch (action.type) {
  case "RECEIVE_TEXT":
    console.log('Text received');
    DataStore.setCurrentText(action.text);
    DataStore.emitChange();
  break;
  case "GET_TEXT":
    console.log('The button was clicked store.');
    var number = action.number;
    DataStore.getTextFromServer(number);
  break;
  default:
  }
});

export default DataStore;
