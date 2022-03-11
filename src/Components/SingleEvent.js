import React from 'react';
import { useParams } from 'react-router-dom';
import admission from '../asset/eventsImage/admission.jpg';
import cultural from '../asset/eventsImage/cultural.jpg';
import picnic from '../asset/eventsImage/picnic.jpg';
import sports from '../asset/eventsImage/sports.jpg';
import './SingleEvent.css';

function SingleEvent(props) {
	//single event data will come from api based on event id
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

	const { eventid } = useParams();

	return (
		<section className="singleEventSection">
			{allEvents
				.filter((event) => event.eventid === eventid)
				.map((filtered) => (
					<div className="singleEvent">
						<div className="singleEventImg">
							<img src={filtered.eventImg} alt="" />
						</div>

						<div className="singleEventInfo">
							<div className="singleEventDate">
								<span>{filtered.eventDay}</span>
								<span>{filtered.eventDate}</span>
							</div>
							<h1 className="singleEventTitle"> {filtered.eventTitle}</h1>
							<p className="singleEventText">{filtered.eventDescription}</p>
						</div>
					</div>
				))}
		</section>
	);
}

export default SingleEvent;
