import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
	const [openNav, setOpenNav] = useState(false);

	const navToggle = () => {
		setOpenNav(!openNav);
	};

	return (
		<div className="navbar">
			<NavLink to={'/'} className="logo">
				<h1>R. Academy</h1>
			</NavLink>

			<ul className={openNav ? 'active' : undefined}>
				<div
					id="close-navbar"
					className="fas fa-times"
					onClick={navToggle}
				></div>
				<li>
					<NavLink to={'/'} onClick={navToggle}>
						Home
					</NavLink>
				</li>
				<li>about us</li>
				<li>
					<NavLink to={'/all-courses'} onClick={navToggle}>
						course
					</NavLink>
				</li>
				<li>
					<NavLink to={'/contact'} onClick={navToggle}>
						contact
					</NavLink>
				</li>
			</ul>
			<div id="menu-btn" className="fas fa-bars" onClick={navToggle}></div>
		</div>
	);
}

export default Nav;
