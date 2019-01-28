'use strict';

const e = React.createElement;

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: props.page
		};
	}

	render() {
		
		return (
			<div>
				<nav id="navbar-custom" className="col-xl-6 col-lg-7 col-md-9 mx-auto navbar navbar-expand-sm">
				<div className="collapse navbar-collapse" id="collapsibleNavbar">
					<ul className="col-12 d-flex justify-content-center navbar-nav">
					<li className="nav-item text-center"><a className={"pl-2 pr-2 navbar-link " + (this.state.page == "index.html" ? "current-page" : "")} href="index.html">Home</a></li>
					<li className="nav-item text-center"><a className={"pl-2 pr-2 navbar-link " + (this.state.page == "about.html" ? "current-page" : "")} href="about.html">About</a></li>
					<li className="nav-item text-center"><a className={"pl-2 pr-2 navbar-link " + (this.state.page == "events.html" ? "current-page" : "")} href="events.html">Events</a></li>
					<li className="nav-item text-center"><a className={"pl-2 pr-2 navbar-link " + (this.state.page == "hacks.html" ? "current-page" : "")} href="hacks.html">uwEnergyHacks</a></li>
					<li className="nav-item text-center"><a className={"pl-2 pr-2 navbar-link " + (this.state.page == "articles.html" ? "current-page" : "")} href="articles.html">Articles</a></li>
					</ul>
				</div>

				<button className="navbar-toggler col-12 p-0 m-0" data-toggle="collapse" data-target="#collapsibleNavbar">
					<svg width="3vh" height="3vh" className="three-bars" viewBox="0 0 12 16" version="1.1" aria-hidden="true">
					<path d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path>
					</svg>
				</button>
				</nav>
			</div>
		)
	}
}

const domContainer = document.querySelector('#navbar');
ReactDOM.render(e(NavBar, {page: window.location.pathname.split("/").pop()}), domContainer);
