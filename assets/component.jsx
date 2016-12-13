var React = require('react');
var ButtonActions = require('./action.js');
var DataStore = require('./store.js');

function getStateFromStores() {
  return {
    text: DataStore.getFromServer(),
  };
}

var App = React.createClass({

  number : -1,

  getInitialState: function() {
    return getStateFromStores();
  },

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
  }

  onClick: function() { 
	ButtonActions.getText(-1*number);
  },

});

module.exports = App;