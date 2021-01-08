//import './App.css';
//import { Header } from './components/Header';
import { Counter } from './components/Counter';

const App = () => (
	<div className="App">
		<Counter startCount={0} addSub={1} />
		<Counter startCount={0} addSub={10} />
	</div>
);

export default App;

/*
		<Header
			contents="hi"
			num={2}
			myFunc={(a, b) => a + b}
			myObj={{
				foo: 'I like',
				bar: ' React alot',
			}}
		/>
		*/
