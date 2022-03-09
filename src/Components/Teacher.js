import React from 'react';
import './Teacher.css';

function Teacher({ teacherImage, teacherName }) {
	return (
		<div className="teacher">
			<div className="teacherImage">
				<img src={teacherImage} alt="" />
				<h1 className="teacherName">{teacherName}</h1>
			</div>
		</div>
	);
}

export default Teacher;
