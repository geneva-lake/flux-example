import AppDispatcher from './app-dispatcher';
import EventEmitter from 'events';

var CHANGE_EVENT = 'change';

var base = "/api";

class DataStoreClass extends EventEmitter {

	constructor() {
		super();
		this.currentText = "111";
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
	setCurrentText(number) {
		console.log('The button was clicked number. ', number);
		if (number > 0) {
			this.currentText = "aaa";
		} else {
			this.currentText = "111";
		}
	}
};

var DataStore = new DataStoreClass();

AppDispatcher.register(function (action) {
	switch (action.type) {
	case "RECEIVE_TEXT":
		console.log('The button was clicked store.');
		var number = action.number;
		DataStore.setCurrentText(number);
		DataStore.emitChange();
		break;
	default:
	}
});

export default DataStore;
