import React from 'react';
import hero from '../asset/hero.svg';
import './Home.css';

function Home(props) {
	return (
		<section className="hero">
			<div className="lHero">
				<h1>Grow your skills, define your future</h1>
				<p>
					Presenting Academy, the tech school of the future. We teach you the
					right skills to be prepared for tomorrow.
				</p>
				<button className="btn">Explore Courses</button>
			</div>
			<div className="rHero">
				<img src={hero} alt="" />
			</div>
		</section>
	);
}

export default Home;
