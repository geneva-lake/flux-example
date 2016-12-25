
var ButtonActions = require('./action.js');
var React = require('react');
var DataStore = require('./store.js');

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

  //getInitialState: function(number) {
 //   return getStateFromStores(number);
 // },

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

module.exports = App;
