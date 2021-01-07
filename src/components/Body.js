export const Body = props => (
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
