import React from 'react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../asset/students/pic1.png';
import pic2 from '../asset/students/pic2.png';
import pic3 from '../asset/students/pic3.png';
import pic4 from '../asset/students/pic4.png';
import pic5 from '../asset/students/pic5.png';
import pic6 from '../asset/students/pic6.png';
import Review from './Review';
import './StudentsReview.css';

function StudentsReview(props) {
	let reviews = [
		{
			id: 1,
			name: 'Sara Williams',
			image: pic1,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, minus.',
		},
		{
			id: 2,
			name: 'Jane Doee',
			image: pic2,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, minus.',
		},
		{
			id: 3,
			name: 'Paski Desojan',
			image: pic3,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, minus.',
		},
		{
			id: 4,
			name: 'Hashim Amla',
			image: pic4,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, minus.',
		},
		{
			id: 5,
			name: 'Reshma Sharma',
			image: pic5,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, minus.',
		},
		{
			id: 6,
			name: 'Rashid Al Hasan',
			image: pic6,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, minus.',
		},
	];

	return (
		<section>
			<h1 className="sectionTitle">Students Review</h1>

			<Swiper
				// spaceBetween={50}
				// slidesPerView={3}
				grabCursor={true}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				breakpoints={{
					991: { spaceBetween: 50, slidesPerView: 3 },
					768: { spaceBetween: 40, slidesPerView: 2 },
					0: { spaceBetween: 30, slidesPerView: 1 },
				}}
			>
				{reviews.map((review) => (
					<SwiperSlide key={review.id}>
						<Review
							text={review.text}
							image={review.image}
							name={review.name}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default StudentsReview;
