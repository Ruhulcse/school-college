import React from 'react';
import './Teacher.css';

function Teacher({ teacherImage, teacherName, subject }) {
	return (
		<div className="teacher">
			<div className="teacherImage">
				<img src={teacherImage} alt="" />
				<div className="teacherName">
					<h1>{teacherName}</h1>
					<p>{subject}</p>
				</div>
			</div>
		</div>
	);
}

export default Teacher;
