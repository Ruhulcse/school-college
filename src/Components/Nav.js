import React, { useState } from 'react';
import './Nav.css';

function Nav() {
	const [openNav, setOpenNav] = useState(false);

	const navToggle = () => {
		setOpenNav(!openNav);
	};

	console.log(openNav);

	return (
		<div className="navbar">
			<div className="logo">
				<h1>R. Academy</h1>
			</div>

			<ul className={openNav ? 'active' : undefined}>
				<div id="close-navbar" class="fas fa-times" onClick={navToggle}></div>
				<li>Home</li>
				<li>about us</li>
				<li>course</li>
				<li>contact</li>
			</ul>
			<div id="menu-btn" class="fas fa-bars" onClick={navToggle}></div>
		</div>
	);
}

export default Nav;
