import React from 'react';
import arts from '../asset/courses/arts.jpg';
import commerce from '../asset/courses/commerce.jpg';
import science from '../asset/courses/science.jpg';
import Course from './Course';
import './Courses.css';

function Courses(props) {
	//All Courses data will come from server
	const allCourse = [
		{
			courseImage: science,
			courseTitle: 'Department of Science',
			courseDescription:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, odit.',
		},
		{
			courseImage: commerce,
			courseTitle: 'Department of Commerce',
			courseDescription:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			courseImage: arts,
			courseTitle: 'Department of Arts',
			courseDescription:
				'Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit.',
		},
	];

	return (
		<section className="NewCoursesSection AllCources">
			<div className="heading">
				<h1>Our Department</h1>
			</div>
			<div className="NewCourses">
				{allCourse.map((course) => (
					<Course
						courseImage={course.courseImage}
						courseTitle={course.courseTitle}
					/>
				))}
			</div>
		</section>
	);
}

export default Courses;
