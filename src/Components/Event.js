import React from 'react';
import './Event.css';

function Event({
	eventImg,
	eventDay,
	eventDate,
	eventTitle,
	eventDescription,
}) {
	return (
		<div className="event">
			<div className="eventImg">
				<img src={eventImg} alt="" />
			</div>

			<div className="eventInfo">
				<div className="eventDate">
					<span>{eventDay}</span>
					<span>{eventDate}</span>
				</div>
				<h1 className="eventTitle"> {eventTitle}</h1>
				<p className="eventText">{eventDescription}</p>
			</div>
		</div>
	);
}

export default Event;
