import React from 'react';
import { Link } from 'react-router-dom';
import app from '../asset/courses/app.jpg';
import james from '../asset/courses/intractor/james.jpg';
import jonathon from '../asset/courses/intractor/jonathon.jpg';
import web from '../asset/courses/web.jpg';
import '../Components/NewCourses.css';
import Course from './Course';

function NewCourses(props) {
	//New Courses data will come from server
	const newCourse = [
		{
			courseImage: web,
			courseTitle: 'Complete web development',
			courseDescription:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, odit.',
			CoursePrice: 4200,
			instractorImage: james,
			instractorName: 'James Santner',
			courseDuration: '26hr 18m',
		},
		{
			courseImage: app,
			courseTitle: 'Cross platform app development',
			courseDescription:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			CoursePrice: 5450,
			instractorImage: jonathon,
			instractorName: 'jonathon Monro',
			courseDuration: '19hr 43m',
		},
	];

	return (
		<section className="NewCoursesSection">
			<div className="heading">
				<h1>New Courses</h1>
				<Link to="/all-courses">
					<button className="btn">Explore More</button>
				</Link>
			</div>
			<div className="NewCourses">
				{newCourse.map((course) => (
					<Course
						courseImage={course.courseImage}
						courseTitle={course.courseTitle}
						courseDescription={course.courseDescription}
						CoursePrice={course.CoursePrice}
						instractorImage={course.instractorImage}
						instractorName={course.instractorName}
						courseDuration={course.courseDuration}
					/>
				))}
			</div>
		</section>
	);
}

export default NewCourses;
