import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./Sidebar";
import Header from "./Header";
import { Container } from "react-bootstrap";

function MainContainer(props) {
	const Home = () => (
		<Container className="test-container">
			<h3>Home</h3>
		</Container>
	);
	const Invoices = () => (
		<Container className="test-container">
			<h3>Invoice</h3>
		</Container>
	);
	const Dashboard = () => (
		<Container className="test-container">
			<h3>Dashboard</h3>
		</Container>
	);
	const Ex = () => (
		<Container className="test-container">
			<h3>ex</h3>
		</Container>
	);

	return (
		<Router>
			<div className="main-sidebar">
				<SideBar />
			</div>
			<div className="main-content">
				<Header />
				<div className="container-fluid">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/invoice" component={Invoices} />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/ex" component={Ex} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default MainContainer;
