import React from 'react';
import './Course.css';

function Course({
	courseImage,
	courseTitle,
	courseDescription,
	CoursePrice,
	instractorImage,
	instractorName,
	courseDuration,
}) {
	return (
		<div class="course">
			<div class="courseImage">
				<img src={courseImage} alt="" />
			</div>
			<div class="courseContent">
				<h3 className="courseTitle" style={{ textAlign: 'center' }}>
					{courseTitle}
				</h3>
				{/* <p>{courseDescription}</p> 
				 <div className="courseInstractorAndTime">
					<div className="courseInstractor">
						<img src={instractorImage} alt="" className="instractorImage" />
						<h3 className="instractorName">{instractorName}</h3>
					</div>
					<h3>
						<i className="fas fa-clock" style={{ paddingRight: `1rem` }}></i>
						{courseDuration}
					</h3>
				</div> */}
			</div>
		</div>
	);
}

export default Course;
