import { Component } from 'react';

export default class MyForm extends Component {
	state = {
		name: 'Samuel',
		description: 'Cool react dev',
		important: false,
		title: 'Mr.',
	};

	handleChangeName = event => {
		this.setState({ name: event.target.value });
	};
	handleChangeDescription = event => {
		this.setState({ description: event.target.value });
	};
	handleChangeCheckbox = event => {
		this.setState({ important: event.target.checked });
	};
	handleChangeSelectField = event => {
		this.setState({ title: event.target.value });
	};
	submit = () => {
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<input value={this.state.name} onChange={this.handleChangeName} />
				<textarea
					value={this.state.description}
					onChange={this.handleChangeDescription}
				/>
				<input
					type="checkbox"
					checked={this.state.important}
					onChange={this.handleChangeCheckbox}
				/>
				<div>
					<select
						value={this.state.title}
						onChange={this.handleChangeSelectField}
					>
						<option>Mr.</option>
						<option>Miss.</option>
						<option>Ms.</option>
						<option>Mrs.</option>
					</select>
				</div>
				<button onClick={this.submit}>submit</button>
				<p>
					Name: {this.state.title} {this.state.name} <br />
					Description: {this.state.description} <br />
					Important: {this.state.important ? 'Yes' : 'No'}
				</p>
			</div>
		);
	}
}
