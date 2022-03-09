import React from 'react';
import app from '../asset/courses/app.jpg';
import graphics from '../asset/courses/graphics.jpg';
import criss from '../asset/courses/intractor/criss.jpg';
import david from '../asset/courses/intractor/david.jpg';
import elton from '../asset/courses/intractor/elton.jpg';
import james from '../asset/courses/intractor/james.jpg';
import jonathon from '../asset/courses/intractor/jonathon.jpg';
import mitchel from '../asset/courses/intractor/mitchel.jpg';
import logo from '../asset/courses/logo.jpg';
import ui from '../asset/courses/ui.jpg';
import video from '../asset/courses/video.jpg';
import web from '../asset/courses/web.jpg';
import Course from './Course';
import './Courses.css';

function Courses(props) {
	//All Courses data will come from server
	const allCourse = [
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
		{
			courseImage: graphics,
			courseTitle: 'Graphics Design',
			courseDescription:
				'Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit.',
			CoursePrice: 2520,
			instractorImage: criss,
			instractorName: 'Criss Moris',
			courseDuration: '21hr 35m',
		},
		{
			courseImage: logo,
			courseTitle: 'Logo design with AI & PS',
			courseDescription:
				'Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit.',
			CoursePrice: 2520,
			instractorImage: mitchel,
			instractorName: 'Mitchel Starc',
			courseDuration: '21hr 35m',
		},
		{
			courseImage: video,
			courseTitle: 'Videography',
			courseDescription:
				'Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit.',
			CoursePrice: 9800,
			instractorImage: elton,
			instractorName: 'Elton Cigambura',
			courseDuration: '47hr 09m',
		},
		{
			courseImage: ui,
			courseTitle: 'Ui design with figma',
			courseDescription:
				'Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit.',
			CoursePrice: 5700,
			instractorImage: david,
			instractorName: 'David Warner',
			courseDuration: '27hr 57m',
		},
	];
	console.log(allCourse);
	return (
		<section className="NewCoursesSection AllCources">
			<div className="heading">
				<h1>All Courses</h1>
			</div>
			<div className="NewCourses">
				{allCourse.map((course) => (
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

export default Courses;
