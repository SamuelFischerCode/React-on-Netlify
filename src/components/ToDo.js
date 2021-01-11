const ToDo = props => (
	<div style={{ display: 'flex', justifyContent: 'center' }}>
		<div
			style={{
				textDecoration: props.todo.complete ? 'line-through' : '',
			}}
			onClick={props.toggleComplete}
		>
			{props.todo.text}
		</div>
		<button onClick={props.deleteToDo}>🗑️</button>
	</div>
);

export default ToDo;
