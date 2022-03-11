import React from 'react';
import Contact from '../Components/Contact';
import Courses from '../Components/Courses';
import Hero from '../Components/Hero';
import StudentsReview from '../Components/StudentsReview';
import Teachers from '../Components/Teachers';

function home(props) {
	return (
		<>
			{/* <Nav /> */}
			<Hero />
			<Courses />
			<Teachers />
			<StudentsReview />
			<Contact />
			{/* <Footer /> */}
		</>
	);
}

export default home;
