import { Component } from 'react';

export class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = { count: props.startCount || 0 };
	}

	handleButtonClick = () => {
		this.setState({
			count: this.state.count + this.props.addSub || 1,
		});
		//console.log(this.state.count);
	};

	handleButtonClick2 = () => {
		this.setState({
			count: this.state.count - this.props.addSub || 1,
		});
		//console.log(this.state.count);
	};

	render() {
		return (
			<div>
				<div>Count: {this.state.count}</div>
				<button onClick={this.handleButtonClick}>
					+{this.props.addSub || 1}
				</button>
				<button onClick={this.handleButtonClick2}>
					-{this.props.addSub || 1}
				</button>
			</div>
		);
	}
}
