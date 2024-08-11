import React from 'react';
import profileImg from '../assets/profile.png';

const HeroSection = () => {
	return (
		<section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-900 text-white text-center overflow-hidden mt-16">
			{/* Background Image */}
			<img
				src="https://images.unsplash.com/photo-1506748686214e9df14f2d3e2e0c8c52a23b57249a35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJhY2tncm91bmR8ZW58MHx8fDE2NjAwMDM1MzI&ixlib=rb-1.2.1&q=80&w=1080"
				alt="Background"
				className="absolute inset-0 object-cover w-full h-full blur-md"
			/>

			{/* Overlay */}
			<div className="absolute inset-0  bg-black opacity-40"></div>

			{/* Content */}
			<div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-2 w-full h-full max-w-6xl mx-auto">
				{/* Left Side (Text) */}
				<div className="flex-1 text-center md:text-left mb-8 md:mb-0  mt-6">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
						Hi, I'm <span className="text-yellow-400">Bayu Winata</span>
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-8">
						A dedicated <span className="italic"> Front-End Web Developer</span> with a passion for crafting intuitive and engaging user experiences. 
					</p>
					<a href="#projects" className="inline-block bg-yellow-500 text-gray-800 py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-transform transform hover:scale-105 hover:translate-y-1">
						See My Work
					</a>
				</div>

				{/* Right Side (Image) */}
				<div className="flex-1 flex justify-center items-center relative">
					<div className="relative overflow-hidden rounded-full w-72 h-72">
						<img src={profileImg} alt="Profile" className="absolute inset-0 object-cover w-full h-full shadow-lg transition-transform transform hover:scale-110" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
