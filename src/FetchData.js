import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

var styles = {
	"dataStyle": {
		"marginTop": "20px",
		"marginBottom": "20px",
		"color": "blue",
	}
}

class FetchData extends React.Component {
	constructor() {
		super();
		this.state = {
			"heart_rates": ["Nothing yet"],
			"nameTextField": "",
		};
	}

	onNameTextFieldChange = (event) => {
		// Update the nameTextField state whenever the text field is changed or perturbed in any way:
		this.setState({"nameTextField": event.target.value});
	}

	onButtonClick = (event) => {
		console.log(this.state.nameTextField); // log the current nameTextField content
	}

	getData = () => {
		var firsthalf = "http://vcm-3590.vm.duke.edu:5000/api/heart_rate/"
		var email = this.state.nameTextField
		console.log(email)
		console.log(firsthalf)
		var combined = firsthalf+email
		console.log(combined)
		axios.get(combined).then( (response) => {
			console.log(response);
			console.log(response.status);
			console.log(JSON.stringify(response.data))
			this.setState({"heart_rates": JSON.stringify(response.data)})
		})
	}

	render() {
		return (
			<div>

				<TextField
					value={this.state.nameTextField}
					onChange={this.onNameTextFieldChange}/>
				<Button onClick={this.onButtonClick}>
					Store this email for API get call (click this button)
				</Button>
				
				<Button variant="raised" onClick={this.getData}>
					Get Data
				</Button>

				<div style={styles.dataStyle}>
					{this.state.heart_rates}
				</div>
			</div>

		)
	}
}

export default FetchData;
