import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
	constructor() {
		super()
		this.state = {
			collapsed: true,
		};
	}

	toggleCollapse() {
		const collapsed = !this.state.collapsed;
		this.setState ({collapsed});
	}

	render() {
		const { location } = this.props;
		const { collapsed } = this.state;
		const homeClass = location.pathname === "/" ? "active" : "";
		const jobsClass = location.pathname.match(/^\/jobs/) ? "active" : "";
		const navClass = collapsed ? "collapse" : "";

		return (
			<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<div class={"navbar-collapse" + navClass}>
						<ul class="nav navbar-nav">
							<li class={homeClass}>
								<IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
							</li>
							<li class={jobsClass}>
								<Link to="jobs" onClick={this.toggleCollapse.bind(this)}>Jobs</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}