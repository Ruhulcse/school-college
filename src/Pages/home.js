import React from 'react';
import Contact from '../Components/Contact';
import Courses from '../Components/Courses';
import Events from '../Components/Events';
import Hero from '../Components/Hero';
import StudentsReview from '../Components/StudentsReview';
import Teachers from '../Components/Teachers';

function home(props) {
	return (
		<>
			<Hero />
			<Courses />
			<Teachers />
			<StudentsReview />
			<Events />
			<Contact />
		</>
	);
}

export default home;
