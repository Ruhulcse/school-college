import React from 'react';
import './Review.css';

function Review({ text, image, name }) {
	return (
		<div className="review">
			<p>{text}</p>
			<img src={image} alt="" />
			<h3>{name}</h3>
		</div>
	);
}

export default Review;
