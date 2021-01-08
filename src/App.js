import { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { ImageSlider } from './components/ImageSlider';
import { Counter } from './components/Counter';

class App extends Component {
	state = {
		visible: false,
	};

	render() {
		return (
			<div className="App">
				<div
					style={
						this.state.visible
							? {}
							: {
									display: 'none',
							  }
					}
				>
					<img src={logo} className="App-logo" alt="logo" />
					<Counter startCount={1} addSub={1} />
				</div>
				<div
					style={
						!this.state.visible
							? {}
							: {
									display: 'none',
							  }
					}
				>
					<ImageSlider />
				</div>
				<br />
				<button
					onClick={() => {
						this.setState({
							visible: !this.state.visible,
						});
					}}
				>
					{this.state.visible ? 'Hide' : 'Show'}
				</button>
			</div>
		);
	}
}

export default App;
