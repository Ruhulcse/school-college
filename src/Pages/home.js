import React from 'react';
import Hero from '../Components/Hero';
import NewCourses from '../Components/NewCourses';
import StudentsReview from '../Components/StudentsReview';
import Teachers from '../Components/Teachers';

function home(props) {
	return (
		<>
			{/* <Nav /> */}
			<Hero />
			<NewCourses />
			<Teachers />
			<StudentsReview />
			{/* <Footer /> */}
		</>
	);
}

export default home;
