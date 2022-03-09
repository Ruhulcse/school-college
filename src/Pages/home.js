import React from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Nav from '../Components/Nav';
import NewCourses from '../Components/NewCourses';
import StudentsReview from '../Components/StudentsReview';

function home(props) {
	return (
		<>
			<Nav />
			<Hero />
			<NewCourses />
			<StudentsReview />
			<Footer />
		</>
	);
}

export default home;
