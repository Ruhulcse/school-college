import React from 'react';
import './Notice.css';

function Notice(props) {
	const allNotice = [
		{
			id: 1,
			title: 'Etiam pretium iaculis justo.',
			date: '3/7/2022',
		},
		{
			id: 2,
			title: 'Donec ut mauris eget massa tempor convallis.',
			date: '3/7/2022',
		},
		{
			id: 3,
			title: 'Donec posuere metus vitae ipsum.',
			date: '3/7/2022',
		},
		{
			id: 4,
			title: 'Etiam vel augue.',
			date: '3/6/2022',
		},
		{
			id: 5,
			title: 'Nullam porttitor lacus at turpis.',
			date: '3/5/2022',
		},
		{
			id: 6,
			title: 'Integer ac leo.',
			date: '3/3/2022',
		},
		{
			id: 7,
			title: 'In eleifend quam a odio.',
			date: '3/8/2022',
		},
		{
			id: 8,
			title: 'Praesent blandit.',
			date: '3/6/2022',
		},
		{
			id: 9,
			title: 'Praesent blandit lacinia erat.',
			date: '3/6/2022',
		},
		{
			id: 10,
			title: 'Curabitur at ipsum ac tellus semper interdum.',
			date: '2/28/2022',
		},
		{
			id: 11,
			title: 'Curabitur gravida nisi at nibh.',
			date: '3/2/2022',
		},
		{
			id: 12,
			title: 'Aenean lectus.',
			date: '3/8/2022',
		},
		{
			id: 13,
			title:
				'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
			date: '2/25/2022',
		},
		{
			id: 14,
			title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			date: '3/6/2022',
		},
		{
			id: 15,
			title: 'Mauris sit amet eros.',
			date: '2/28/2022',
		},
	];

	return (
		<section className="notice">
			<h1 className="heading">Recent Notice</h1>
			<table>
				<tr>
					<th>Title</th>
					<th>Date</th>
					<th>Download</th>
				</tr>
				{allNotice.map((notice) => (
					<tr key={notice.id}>
						<td>{notice.title}</td>
						<td>{notice.date}</td>
						<td>
							<i className="fas fa-download" style={{ cursor: 'pointer' }} />
						</td>
					</tr>
				))}
			</table>
		</section>
	);
}

export default Notice;
