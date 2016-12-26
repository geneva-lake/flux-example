import React from 'react';
import ButtonActions from './action.js';
import DataStore from './store.js';

function getStateFromStores(number) {
  return {
    text: DataStore.getFromServer(number)
  };
};

function getCurrentStateFromStores() {
  return {
    text: DataStore.getCurentText()
  };
};

class App extends React.Component{

  constructor(props) {
          super(props);
            this.number = -1;
          this.state = this.getInitialState()
      }


  getInitialState() {
      return getCurrentStateFromStores();
    }

  componentDidMount() {
    DataStore.addChangeListener(this._onChange);
  }

  render() {
    return (
      <div className="outlineapp">
        <button>button</button>
		<textarea>text</textarea>
      </div>
    );
  }

  onClick() {
	ButtonActions.getText(-1*this.number);
  }

  _onChange() {
    this.setState(getCurrentStateFromStores());
  }

}
//var App = new AppClass();
export default App;
