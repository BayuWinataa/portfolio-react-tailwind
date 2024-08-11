import React from 'react';

const ContactSection = () => {
	return (
		<section id="contact" className="py-16 bg-gray-800 text-white text-center">
			<h2 className="text-4xl font-bold mb-4">Contact Me</h2>
			<p className="text-lg mb-4">Feel free to reach out to me for any inquiries or collaborations.</p>
			<form className="max-w-md mx-auto">
				<input type="text" placeholder="Your Name" className="mb-4 p-2 w-full rounded" required />
				<input type="email" placeholder="Your Email" className="mb-4 p-2 w-full rounded" required />
				<textarea placeholder="Your Message" className="mb-4 p-2 w-full rounded" rows="4" required />
				<button type="submit" className="bg-yellow-500 text-gray-800 py-2 px-4 rounded hover:bg-yellow-600 transition">
					Send Message
				</button>
			</form>
		</section>
	);
};

export default ContactSection;
