import React from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import criss from '../asset/courses/intractor/criss.jpg';
import david from '../asset/courses/intractor/david.jpg';
import elton from '../asset/courses/intractor/elton.jpg';
import james from '../asset/courses/intractor/james.jpg';
import jonathon from '../asset/courses/intractor/jonathon.jpg';
import mitchel from '../asset/courses/intractor/mitchel.jpg';
import Teacher from './Teacher';
import './Teachers.css';

function Teachers(props) {
	//All instractor data will come from serve
	const allTeachers = [
		{
			id: 1,
			instractorImage: james,
			instractorName: 'James Santner',
			subject: 'Physics',
		},
		{
			id: 2,
			instractorImage: jonathon,
			instractorName: 'jonathon Monro',
			subject: 'Chemestry',
		},
		{
			id: 3,
			instractorImage: criss,
			instractorName: 'Criss Moris',
			subject: 'Geography',
		},
		{
			id: 4,
			instractorImage: mitchel,
			instractorName: 'Mitchel Starc',
			subject: 'Social Science',
		},
		{
			id: 5,
			instractorImage: elton,
			instractorName: 'Elton Cigambura',
			subject: 'Accounting',
		},
		{
			id: 6,
			instractorImage: david,
			instractorName: 'David Warner',
			subject: 'Finance',
		},
	];

	return (
		<section>
			<h1 className="sectionTitle">Our Teachers</h1>

			<Swiper
				grabCursor={true}
				loop={true}
				// autoplay={{
				// 	delay: 1700,
				// 	disableOnInteraction: false,
				// }}
				// modules={[Autoplay]}
				navigation={true}
				modules={[Navigation]}
				breakpoints={{
					991: { spaceBetween: 50, slidesPerView: 3 },
					768: { spaceBetween: 40, slidesPerView: 2 },
					0: { spaceBetween: 30, slidesPerView: 1 },
				}}
			>
				{allTeachers.map((teacher) => (
					<SwiperSlide key={teacher.id}>
						<Teacher
							teacherName={teacher.instractorName}
							teacherImage={teacher.instractorImage}
							subject={teacher.subject}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default Teachers;
