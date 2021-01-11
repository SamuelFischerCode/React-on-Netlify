import { Component } from 'react';

export class Counter extends Component {
	render() {
		return (
			<div>
				<div>Count: {this.props.count}</div>
				<button onClick={this.props.increment}>+1</button>
				<button onClick={this.props.decrement}>-1</button>
			</div>
		);
	}
}
