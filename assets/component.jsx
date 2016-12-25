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

var App = React.createClass({

  number : -1,



  componentDidMount: function() {
    DataStore.addChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="outlineapp">
        <button click="this.onClick">button</button>
		<textarea>{this.state.text}</textarea>
      </div>
    );
  },

  onClick: function() { 
	ButtonActions.getText(-1*this.number);
  },

  _onChange: function() {
    this.setState(getCurrentStateFromStores());
  }

});

export default App;
