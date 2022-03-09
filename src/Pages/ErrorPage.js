import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../asset/error404.svg';

function ErrorPage(props) {
	return (
		<>
			<div
				className="image"
				style={{
					width: '55rem',
					height: 'auto',
					overflow: 'hidden',
					margin: 'auto',
				}}
			>
				<img
					src={error404}
					alt=""
					style={{ height: '100%', width: '100%', objectFit: 'cover' }}
				/>
			</div>
			<Link to="/">
				<h1
					style={{
						textAlign: 'center',
						fontSize: '3rem',
						color: '#0eb582',
						textDecoration: 'underline',
					}}
				>
					Back to HOME
				</h1>
			</Link>
		</>
	);
}

export default ErrorPage;
