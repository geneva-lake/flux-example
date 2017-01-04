import React from 'react';
import ButtonActions from './action.js';
import DataStore from './store.js';

function getStateFromStores(number) {
	return {
		text : DataStore.getFromServer(number)
	};
};

function getCurrentStateFromStores() {
	return {
		text : DataStore.getCurentText()
	};
};

class App extends React.Component {

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this)
		this.state = {
			text : DataStore.getCurrentText(),
			number : 1
		};
		this.onClick = this.onClick.bind(this)
	}

	componentDidMount() {
		DataStore.addChangeListener(this.onChange);
	}

	render() {
		return (
			 <div>
				 <button onClick = {this.onClick}>button</button>
			   <div>{this.state.text}</div>
			 </div> );
	}

	onClick() {
		console.log('The button was clicked.');
		this.setState({
			number : this.state.number * -1
		});
		ButtonActions.getText(this.state.number);
	}

	onChange() {
		console.log('The button was clicked component.');
		this.setState({
			text : DataStore.getCurrentText()
		});
		console.log(this.state.text);
	}

}

export default App;
