import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

function Contact(props) {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => alert(JSON.stringify(data));

	return (
		<section className="contact">
			<div className="content">
				<h1>Contact Us</h1>
				<p>Have you any query reach out here or send a message.</p>
			</div>
			<div className="container">
				<div className="contactInfo">
					<div className="box">
						<div className="icon">
							<i class="fas fa-map"></i>
						</div>
						<div className="text">
							<h3>Address</h3>
							<p>
								121 CK Gosh Road
								<br />
								Mymensingh Sadar
								<br />
								Mymensingh
							</p>
						</div>
					</div>
					<div className="box">
						<div className="icon">
							<i class="fas fa-phone"></i>
						</div>
						<div className="text">
							<h3>Phone</h3>
							<p>+880 11111 20022</p>
						</div>
					</div>
					<div className="box">
						<div className="icon">
							<i class="fas fa-envelope"></i>
						</div>
						<div className="text">
							<h3>Email</h3>
							<p>contact@racademy.com</p>
						</div>
					</div>
				</div>

				<div className="contactForm">
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2>Send Message</h2>
						<div className="inputBox">
							<input type="text" required {...register('name')} />
							<span>Full Name</span>
						</div>
						<div className="inputBox">
							<input type="Email" required {...register('email')} />
							<span>Email</span>
						</div>
						<div className="inputBox">
							<textarea required {...register('message')} />
							<span>Your Message</span>
						</div>
						<div className="inputBox">
							<input type="submit" value="Send" />
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
