import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
	const [openNav, setOpenNav] = useState(false);

	const navToggle = () => {
		setOpenNav(!openNav);
	};

	console.log(openNav);

	return (
		<div className="navbar">
			<NavLink to={'/'} className="logo">
				<h1>R. Academy</h1>
			</NavLink>

			<ul className={openNav ? 'active' : undefined}>
				<div id="close-navbar" class="fas fa-times" onClick={navToggle}></div>
				<li>
					<NavLink to={'/'}>Home</NavLink>
				</li>
				<li>about us</li>
				<li>
					<NavLink to={'/all-courses'}>course</NavLink>
				</li>
				<li>contact</li>
			</ul>
			<div id="menu-btn" class="fas fa-bars" onClick={navToggle}></div>
		</div>
	);
}

export default Nav;
