import './App.css';
import { Header } from './components/Header';

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
