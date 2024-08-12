import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};

const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
	console.log(values);
};

const Contact = () => {
	return (
		<div name="contact" className="w-full h-full bg-[#0a192f] flex flex-col justify-center items-center p-4 font-sans">
			<form action="https://getform.io/f/cba16026-2d63-491a-8ab8-33f0ea8cdcb6" className="flex flex-col max-w-[600px] w-full" method="POST">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-[#C23B22] text-gray-300">Contact</p>
					<p className="text-gray-300 py-4">Sumbit the form to get in touch with me</p>
				</div>
				<input className="bg-gray-300 p-2" type="text" placeholder="Name" name="name" required={true} />
				<input className="my-4 p-2 bg-gray-300" type="email" placeholder="Email" name="email" />
				<textarea className="bg-gray-300 p-2" name="message" placeholder="Your Message" rows="10"></textarea>

				<button className="text-white group border-2 px-4 py-3 my-8 m-auto flex items-center hover:bg-[#C23B22] hover:border-[#C23B22] duration-300 font-sans">
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
						<span>rameez.qazi23@gmail.com</span>
					</div>
				</div>

				<div className="flex flex-col">
					<div className="mb-2">
						<span>followMe@</span>
					</div>

					<div className="flex flex-row px-4 gap-4 items-center justify-center">
						<div>
							<a href="#">
								<FaFacebook />
							</a>
						</div>

						<div className="bg-[#171515]">
							<a className="text-white" href="#">
								<FaGithub />
							</a>
						</div>

						<div>
							<a href="#">
								<FaLinkedin />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-8">
					<div>
						<span>Made with ❤️ by Rameez Qazi 😀</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
