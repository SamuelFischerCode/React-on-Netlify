import { Component } from 'react';

const defaultState = {
	name: '',
	email: '',
	password: '',
	nameError: '',
	emailError: '',
	passwordError: '',
};

export default class ValiationForm extends Component {
	state = defaultState;

	handleChange = event => {
		const isCheckbox = event.target.type === 'checkbox';
		this.setState({
			[event.target.name]: isCheckbox
				? event.target.checked
				: event.target.value,
		});
	};

	validate = () => {
		let nameError = '';
		let emailError = '';
		let passwordError = '';

		if (!this.state.name) {
			nameError = 'name cannot be blank';
		}

		if (!this.state.email.includes('@')) {
			emailError = 'invalid email';
		}

		if (this.state.password.length < 8) {
			passwordError = 'password must be longer then 8 characters';
		}

		if (emailError || nameError || passwordError) {
			this.setState({ emailError, nameError, passwordError });
			return false;
		}

		return true;
	};

	handleSubmit = event => {
		event.preventDefault();
		const isValid = this.validate();
		if (isValid) {
			console.log(this.state);
			this.setState(defaultState);
		} else {
			this.setState({ nameError: '', emailError: '', passwordError: '' });
			console.log('form not valid');
		}
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<input
						name="name"
						placeholder="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</div>
				<div style={{ fontSize: 12, color: 'red' }}>{this.state.nameError}</div>
				<div>
					<input
						name="email"
						placeholder="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
				</div>
				<div style={{ fontSize: 12, color: 'red' }}>
					{this.state.emailError}
				</div>
				<div>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
				</div>
				<div style={{ fontSize: 12, color: 'red' }}>
					{this.state.passwordError}
				</div>
				<button type="submit">submit</button>
			</form>
		);
	}
}
