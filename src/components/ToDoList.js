import { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

export default class ToDoList extends Component {
	state = {
		todos: [],
		todosToShow: 'all',
		toggleAllComplete: true,
	};

	addTodo = todo => {
		this.setState({
			todos: [todo, ...this.state.todos],
		});
	};

	toggleComplete = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						complete: !todo.complete,
					};
				} else {
					return todo;
				}
			}),
		});
	};

	updateTodoToShow = s => {
		this.setState({
			todosToShow: s,
		});
	};

	handleDelete = id => {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id),
		});
	};

	removeAllTodos = () => {
		this.setState({
			todos: this.state.todos.filter(todo => !todo.complete),
		});
	};

	render() {
		let todos = [];

		if (this.state.todosToShow === 'all') {
			todos = this.state.todos;
		} else if (this.state.todosToShow === 'active') {
			todos = this.state.todos.filter(todo => !todo.complete);
		} else if (this.state.todosToShow === 'complete') {
			todos = this.state.todos.filter(todo => todo.complete);
		}

		return (
			<div>
				<ToDoForm onSubmit={this.addTodo} />
				{todos.map(todo => (
					<div>
						<ToDo
							key={todo.id}
							toggleComplete={() => this.toggleComplete(todo.id)}
							todo={todo}
							deleteToDo={() => this.handleDelete(todo.id)}
						/>
					</div>
				))}
				<div>
					ToDos Left: {this.state.todos.filter(todo => !todo.complete).length}
				</div>
				<div>
					<button onClick={() => this.updateTodoToShow('all')}>All</button>
					<button onClick={() => this.updateTodoToShow('active')}>
						Active
					</button>
					<button onClick={() => this.updateTodoToShow('complete')}>
						Complete
					</button>
				</div>
				{this.state.todos.filter(todo => todo.complete).length ? (
					<div>
						<button onClick={this.removeAllTodos}>
							Remove all complete todos
						</button>
					</div>
				) : null}
				<div>
					<button
						onClick={() =>
							this.setState({
								todos: this.state.todos.map(todo => ({
									...todo,
									complete: this.state.toggleAllComplete,
									toggleAllComplete: !this.state.toggleAllComplete,
								})),
							})
						}
					>
						Toggle all {this.state.toggleAllComplete ? 'on' : 'off'}
					</button>
				</div>
			</div>
		);
	}
}
