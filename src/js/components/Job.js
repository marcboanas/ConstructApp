import React from "react";

export default class Job extends React.Component {
	render() {
		const { title } = this.props;

		return (
			<div class="col-md-4">
				<h4>{ title }</h4>
				<p>This is a job description....................</p>
				<a class="btn btn-default" href="#">More Info</a>
			</div>
		);
	}
}