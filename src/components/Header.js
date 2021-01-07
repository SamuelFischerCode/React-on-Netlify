import logo from '../logo.svg';
import { Body } from './Body';

export const Header = props => (
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
