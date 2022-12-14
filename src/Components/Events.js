import React from 'react';
import { Link } from 'react-router-dom';
import admission from '../asset/eventsImage/admission.jpg';
import cultural from '../asset/eventsImage/cultural.jpg';
import picnic from '../asset/eventsImage/picnic.jpg';
import sports from '../asset/eventsImage/sports.jpg';
import Event from './Event';
import './Events.css';

function Events(props) {
	const allEvents = [
		{
			eventid: '1',
			eventImg: admission,
			eventDay: 'Sunday',
			eventDate: 'December 18 2021',
			eventTitle: 'Admission Start',
			eventDescription:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisaperiam aut nulla accusamus impedit.',
		},
		{
			eventid: '2',
			eventImg: picnic,
			eventDay: 'Sunday',
			eventDate: 'December 18 2021',
			eventTitle: 'Anual Picnic',
			eventDescription:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisaperiam aut nulla accusamus impedit.',
		},
		{
			eventid: '3',
			eventImg: cultural,
			eventDay: 'Monday',
			eventDate: 'December 30 2021',
			eventTitle: 'Anual cultural program',
			eventDescription:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisaperiam aut nulla accusamus impedit.',
		},
		{
			eventid: '4',
			eventImg: sports,
			eventDay: 'Sunday',
			eventDate: 'February 12 2021',
			eventTitle: 'Sports day',
			eventDescription:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisaperiam aut nulla accusamus impedit.',
		},
	];

	return (
		<div className="events">
			<h1 className="heading">Event and News</h1>
			<section className="allEvents">
				{allEvents.map((event) => (
					<Link to={`/event/${event.eventid}`} key={event.eventid}>
						<Event
							eventImg={event.eventImg}
							eventDay={event.eventDay}
							eventDate={event.eventDate}
							eventTitle={event.eventTitle}
							eventDescription={event.eventDescription}
						/>
					</Link>
				))}
			</section>
		</div>
	);
}

export default Events;
