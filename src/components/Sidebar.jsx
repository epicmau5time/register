import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function SideBar() {
	const linkItems = [
		{ name: "Home", to: "/" },
		{ name: "Invoice", to: "/invoice" },
		{ name: "Dashboard", to: "/dashboard" },
		{ name: "Ex", to: "/ex" },
	];

	const sidebarItems = linkItems.map((item) => (
		<Nav.Item>
			<NavLink exact to={item.to} activeClassName="sidebar-active-nav" className="nav-link sidebar-inactive-nav">
				<h3>{item.name}</h3>
			</NavLink>
		</Nav.Item>
	));

	return <Nav className="flex-column">{sidebarItems}</Nav>;
}

export default SideBar;
