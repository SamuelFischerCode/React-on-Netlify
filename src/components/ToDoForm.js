import { Component } from 'react';
import shortid from 'shortid';

export default class ToDoForm extends Component {
	state = {
		text: '',
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		if (event.target.value !== '') {
			let text = this.state.text;
			let complete = false;
			let id = `${shortid.generate()}-${text}-${complete}`;
			this.props.onSubmit({
				id,
				text,
				complete,
			});
			this.setState({
				text: '',
			});
		}
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					name="text"
					value={this.state.text}
					onChange={this.handleChange}
					placeholder="Your ToDo"
				/>
				<button type="submit">Add ToDo</button>
			</form>
		);
	}
}
