import logo from './logo.svg';
import './App.css';

const Body = props => (
	<div>
		<p>
			{props.contents}
			{props.num}
		</p>
		<p>
			{props.myObj.foo}
			{props.myObj.bar}
			<br></br>
			{props.myFunc(props.num, 2)}
			{props.lol}
		</p>
		<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		>
			Learn React
		</a>
	</div>
);

const Header = props => (
	<div className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<Body
			contents={props.contents}
			num={props.num}
			myObj={props.myObj}
			myFunc={props.myFunc}
		/>
	</div>
);

const App = () => (
	<div className="App">
		<Header
			contents="hi"
			num={2}
			myFunc={(a, b) => a + b}
			myObj={{
				foo: 'I like',
				bar: ' React alot',
			}}
		/>
		<Header
			contents="hi"
			num={3}
			myFunc={(a, b) => a + b}
			myObj={{
				foo: 'I like',
				bar: ' React alot',
			}}
		/>
	</div>
);

export default App;
