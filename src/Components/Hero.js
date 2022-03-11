import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../asset/hero.svg';
import './Hero.css';

function Hero(props) {
	return (
		<section className="hero">
			<div className="lHero">
				<h1>Grow your skills, define your future</h1>
				<p>
					Presenting Academy, the tech school of the future. We teach you the
					right skills to be prepared for tomorrow.
				</p>
				<Link to="/contact">
					<button className="btn">Contact us</button>
				</Link>
			</div>
			<div className="rHero">
				<img src={hero} alt="" />
			</div>
		</section>
	);
}

export default Hero;
