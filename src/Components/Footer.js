import React from 'react';
import './Footer.css';

function Footer(props) {
	return (
		<>
			<div className="upperWave">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#212127"
						fill-opacity="1"
						d="M0,224L48,224C96,224,192,224,288,240C384,256,480,288,576,288C672,288,768,256,864,234.7C960,213,1056,203,1152,197.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
					></path>
				</svg>
			</div>
			<section className="footer">
				<div className="fFirst">
					<div className="logo">
						<h1>R. Academy</h1>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos neque
						repellendus voluptates! Hic, ratione eum.
					</p>
					<a href="tel:+88011111202020">+880 11111 202020</a>

					<a href="mailto:contact@racademy.com">contact@racademy.com</a>
				</div>

				<div className="fMid">
					<div className="title">
						<h1>Opening Hours</h1>
					</div>
					<div className="details">
						<p>
							<span>Sunday-Wednesday:</span> 09:00 Am to 04:00 Pm
						</p>
						<p>
							<span>Thursday:</span> 09:00 Am to 02:00 Pm
						</p>
						<p>
							<span>Friday-Saturday:</span> Closed
						</p>
					</div>
				</div>

				<div className="fLast">
					<div className="title">
						<h1>Latest News</h1>
					</div>
					<div className="details">
						<div className="post">
							<img
								src="https://images.pexels.com/photos/5725589/pexels-photo-5725589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
								className="postImg"
							/>
							<div>
								<h3 className="postTitle">
									Lorem ipsum dolor sit amet consectetur.
								</h3>
								<p>17 Mar 2022</p>
							</div>
						</div>
						<div className="post">
							<img
								src="https://images.pexels.com/photos/5725589/pexels-photo-5725589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
								className="postImg"
							/>
							<div>
								<h3 className="postTitle">Lorem ipsum dolor sit.</h3>
								<p>17 Mar 2022</p>
							</div>
						</div>
						<div className="post">
							<img
								src="https://images.pexels.com/photos/5725589/pexels-photo-5725589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
								className="postImg"
							/>
							<div>
								<h3 className="postTitle">
									Lorem, ipsum dolor sit amet consectetur adipisicing.
								</h3>
								<p>17 Mar 2022</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Footer;
