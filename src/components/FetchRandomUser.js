import { Component } from 'react';

export default class FetchRandomUser extends Component {
	state = {
		loading: true,
		people: [],
	};

	async componentDidMount() {
		const url = 'https://api.randomuser.me/?results=100';
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ loading: false, people: data.results });
	}

	render() {
		if (this.state.loading) return <div>loading...</div>;

		if (!this.state.people.length) return <div>didn't get a person</div>;

		return (
			<div>
				{this.state.people.map(person => (
					<div key={person.login.uuid}>
						<div>
							Name:{' '}
							{person.name.title +
								'. ' +
								person.name.first +
								' ' +
								person.name.last}{' '}
						</div>
						<div>
							<img src={person.picture.large} alt="" />
						</div>
					</div>
				))}
			</div>
		);
	}
}
