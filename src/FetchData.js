import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';

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
		};
	}

	getData = () => {
		axios.get("http://vcm-3590.vm.duke.edu:5000/api/heart_rate/me@hello.com").then( (response) => {
			console.log(response);
			console.log(response.status);
			console.log(JSON.stringify(response.data))
			this.setState({"heart_rates": JSON.stringify(response.data)})
		})
	}

	render() {
		return (
			<div>
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
