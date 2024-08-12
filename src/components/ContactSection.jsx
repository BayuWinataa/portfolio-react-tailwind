import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Data Submitted:', formData);
		// Reset form fields after submission
		setFormData({
			name: '',
			email: '',
			message: '',
		});
		alert('Terima kasih! Pesan Anda telah dikirim.');
	};

	return (
		<div name="contact" className="w-full h-full bg-[#0a192f] flex flex-col justify-center items-center p-4 font-sans">
			<form onSubmit={handleSubmit} className="flex flex-col max-w-[600px] w-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-[#C23B22] text-gray-300">Contact</p>
					<p className="text-gray-300 py-4">Submit the form to get in touch with me</p>
				</div>
				<input className="bg-gray-300 p-2" type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
				<input className="my-4 p-2 bg-gray-300" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
				<textarea className="bg-gray-300 p-2" name="message" placeholder="Your Message" rows="10" value={formData.message} onChange={handleChange} required></textarea>

				<button type="submit" className="text-white group border-2 px-4 py-3 my-8 m-auto flex items-center hover:bg-[#C23B22] hover:border-[#C23B22] duration-300 font-sans">
					Let's Connect
					<span className="group-hover:ml-4 duration-300">
						<HiArrowNarrowRight className="ml-4" />
					</span>
				</button>
			</form>

			<div className="flex flex-col text-center text-gray-300 my-5 py-5 justify-center items-center">
				<div className="flex flex-row">
					<div>
						<h5 className="text-2xl font-bold py-4">Contact Me</h5>
						<span>bayuwinata94@gmail.com</span>
					</div>
				</div>

				<div className="flex flex-col items-center">
					<div className="mb-4">
						<span className="text-lg font-semibold text-gray-300">Follow Me</span>
					</div>

					<div className="flex flex-row gap-6">
						<a href="https://www.instagram.com/bayuwinata__/" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-3xl hover:text-pink-600 transition-transform transform hover:scale-110">
							<FaInstagram />
						</a>

						<a href="https://www.github.com/bayuwinata" target="_blank" rel="noopener noreferrer" className="text-white text-3xl bg-black p-2 rounded-full hover:bg-gray-800 transition-transform transform hover:scale-110">
							<FaGithub />
						</a>

						<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-3xl hover:text-blue-600 transition-transform transform hover:scale-110">
							<FaLinkedin />
						</a>
					</div>
				</div>

				<div className="mt-8">
					<div>
						<span>Made with ❤️ by Bayu Winata</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
