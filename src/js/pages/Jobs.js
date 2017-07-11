import React from "react";

import Job from "../components/Job";

export default class Jobs extends React.Component {
	render() {
		const { query } = this.props.location;
		const { params } = this.props;
		const { job } = params;
		const { date, filter } = query;

		const Jobs = [
			"Some Job",
			"Some Other Job",
			"Another Job",
			"Job Title",
			"Some Job Title",
			"Some Job",
			"Some Other Job",
			"Another Job",
			"Job Title",
			"Some Job Title",
			"Some Job",
			"Some Other Job",
			"Another Job",
			"Job Title",
			"Some Job Title",
		].map((title, i) => <Job key={i} title={title}/>);

		return (
			<div>
				<h1>Job Postings</h1>
				job: { job }, date: { date }, filter: { filter }
				<div class="row">
					{ Jobs.slice(0,3) }
				</div>
			</div>
		);
	}
}